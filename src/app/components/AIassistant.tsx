'use client';
import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  MessageSquare, 
  X, 
  Send, 
  Bot, 
  User, 
  ChevronDown,
  Sparkles,
  Loader
} from 'lucide-react';

// Define brand colors as constants (from your original code)
const GOLD = "#A98142";
const LIGHT = "#E6E6E6";
const DARK = "#1C1C1B";

// Define TypeScript interfaces
interface Message {
  role: 'user' | 'assistant';
  content: string;
}

export default function AIAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { 
      role: 'assistant', 
      content: 'Bonjour! Je suis votre assistant virtuel. Comment puis-je vous aider aujourd\'hui?'
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const chatContainerRef = useRef<HTMLDivElement>(null);

  // Scroll to bottom of messages on update
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages]);

  // Handle chat submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!inputValue.trim()) return;
    
    // Add user message to chat
    const userMessage: Message = { role: 'user', content: inputValue };
    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsLoading(true);
    
    try {
      // This is where you would integrate with Hugging Face API
      // For demo purposes, we'll simulate a response
      setTimeout(() => {
        // Using Hugging Face API (in real implementation)
        // const response = await fetch("https://api-inference.huggingface.co/models/your-model-id", {
        //   method: "POST",
        //   headers: {
        //     "Authorization": "Bearer YOUR_API_KEY",
        //     "Content-Type": "application/json"
        //   },
        //   body: JSON.stringify({ inputs: inputValue }),
        // });
        // const result = await response.json();
        
        // Simulate response for demo
        const assistantMessage: Message = { 
          role: 'assistant', 
          content: `Merci pour votre message. Je suis là pour vous aider avec tout ce qui concerne Parthenon Holding. N'hésitez pas à me poser d'autres questions.`
        };
        
        setMessages(prev => [...prev, assistantMessage]);
        setIsLoading(false);
      }, 1500);
      
    } catch (error) {
      console.error("Error with AI response:", error);
      const errorMessage: Message = { 
        role: 'assistant', 
        content: 'Désolé, j\'ai rencontré une erreur. Veuillez réessayer plus tard.'
      };
      setMessages(prev => [...prev, errorMessage]);
      setIsLoading(false);
    }
  };

  // Handle keypress (Enter to submit)
  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSubmit(e as unknown as React.FormEvent);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Chat button with expandable panel */}
      <div className="relative">
        {/* Main button */}
        <motion.button
          onClick={() => setIsOpen(!isOpen)}
          className="w-16 h-16 rounded-full flex items-center justify-center z-10"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          style={{ 
            background: `linear-gradient(135deg, ${GOLD}, ${GOLD}80)`,
            boxShadow: `0 8px 32px -8px ${GOLD}60, 0 4px 8px rgba(0,0,0,0.1)`
          }}
        >
          {isOpen ? (
            <X size={24} color={DARK} />
          ) : (
            <>
              <MessageSquare size={24} color={DARK} />
              <motion.div
                className="absolute w-4 h-4 rounded-full right-0 top-0"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ repeat: Infinity, duration: 2 }}
                style={{ backgroundColor: LIGHT }}
              />
            </>
          )}
        </motion.button>

        {/* Expandable chat panel */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              className="absolute bottom-20 right-0 w-80 flex flex-col overflow-hidden rounded-xl"
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              style={{ 
                backgroundColor: LIGHT,
                border: `1px solid ${GOLD}40`,
                boxShadow: `0 20px 60px -15px ${DARK}40`,
                height: "400px",
                transformOrigin: "bottom right"
              }}
            >
              {/* Header */}
              <div 
                className="flex items-center justify-between p-3 border-b"
                style={{ 
                  borderColor: `${GOLD}30`,
                  background: `linear-gradient(to right, ${DARK}, ${DARK}95)`
                }}
              >
                <div className="flex items-center gap-2">
                  <div 
                    className="w-8 h-8 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: GOLD }}
                  >
                    <Sparkles size={16} color={DARK} />
                  </div>
                  <div>
                    <h3 className="font-bold text-sm" style={{ color: LIGHT }}>Assistant Parthenon</h3>
                    <p className="text-xs" style={{ color: `${LIGHT}80` }}>Disponible 24/7</p>
                  </div>
                </div>
              </div>
              
              {/* Chat messages */}
              <div 
                ref={chatContainerRef}
                className="flex-1 overflow-y-auto p-3 space-y-3"
                style={{ 
                  backgroundColor: `${LIGHT}`,
                  backgroundImage: `radial-gradient(${GOLD}10 1px, transparent 1px)`,
                  backgroundSize: '30px 30px',
                  backgroundPosition: '-15px -15px'
                }}
              >
                {messages.map((message, index) => (
                  <motion.div
                    key={index}
                    className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div 
                      className={`max-w-[85%] rounded-2xl p-2 ${message.role === 'user' ? 'rounded-tr-sm' : 'rounded-tl-sm'}`}
                      style={{ 
                        backgroundColor: message.role === 'user' 
                          ? DARK 
                          : GOLD,
                        color: message.role === 'user' 
                          ? LIGHT 
                          : DARK,
                        boxShadow: '0 4px 15px rgba(0,0,0,0.1)'
                      }}
                    >
                      <div className="flex items-center gap-2 mb-1">
                        <div 
                          className="w-5 h-5 rounded-full flex items-center justify-center shrink-0"
                          style={{ 
                            backgroundColor: message.role === 'user' 
                              ? `${LIGHT}20` 
                              : `${DARK}20`
                          }}
                        >
                          {message.role === 'user' 
                            ? <User size={12} /> 
                            : <Bot size={12} />}
                        </div>
                        <p className="text-xs font-medium">
                          {message.role === 'user' ? 'Vous' : 'Assistant'}
                        </p>
                      </div>
                      <p className="text-sm">{message.content}</p>
                    </div>
                  </motion.div>
                ))}
                
                {/* Loading indicator */}
                {isLoading && (
                  <motion.div
                    className="flex justify-start"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                    <div 
                      className="max-w-[85%] rounded-2xl p-2 rounded-tl-sm"
                      style={{ 
                        backgroundColor: GOLD,
                        color: DARK,
                        boxShadow: '0 4px 15px rgba(0,0,0,0.1)'
                      }}
                    >
                      <div className="flex items-center gap-2 mb-1">
                        <div 
                          className="w-5 h-5 rounded-full flex items-center justify-center shrink-0"
                          style={{ backgroundColor: `${DARK}20` }}
                        >
                          <Bot size={12} />
                        </div>
                        <p className="text-xs font-medium">Assistant</p>
                      </div>
                      <div className="flex items-center gap-1">
                        <motion.div
                          className="w-2 h-2 rounded-full"
                          animate={{ scale: [1, 1.3, 1] }}
                          transition={{ repeat: Infinity, duration: 1.5, delay: 0 }}
                          style={{ backgroundColor: DARK }}
                        />
                        <motion.div
                          className="w-2 h-2 rounded-full"
                          animate={{ scale: [1, 1.3, 1] }}
                          transition={{ repeat: Infinity, duration: 1.5, delay: 0.2 }}
                          style={{ backgroundColor: DARK }}
                        />
                        <motion.div
                          className="w-2 h-2 rounded-full"
                          animate={{ scale: [1, 1.3, 1] }}
                          transition={{ repeat: Infinity, duration: 1.5, delay: 0.4 }}
                          style={{ backgroundColor: DARK }}
                        />
                      </div>
                    </div>
                  </motion.div>
                )}
                
                {/* For automatic scroll */}
                <div ref={messagesEndRef} />
              </div>
              
              {/* Input area */}
              <form 
                onSubmit={handleSubmit}
                className="p-3 border-t"
                style={{ borderColor: `${GOLD}30` }}
              >
                <div 
                  className="flex items-center gap-2 rounded-xl p-1"
                  style={{ 
                    backgroundColor: `${DARK}10`,
                    border: `1px solid ${GOLD}30`
                  }}
                >
                  <input
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyDown={handleKeyPress}
                    placeholder="Votre message..."
                    className="flex-1 bg-transparent outline-none p-2 text-sm"
                    style={{ color: DARK }}
                    disabled={isLoading}
                  />
                  <button
                    type="submit"
                    className="p-2 rounded-lg flex items-center justify-center transition-all duration-300"
                    style={{ 
                      backgroundColor: isLoading ? `${DARK}40` : DARK,
                      color: LIGHT
                    }}
                    disabled={isLoading}
                  >
                    {isLoading ? <Loader size={16} className="animate-spin" /> : <Send size={16} />}
                  </button>
                </div>
              </form>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}