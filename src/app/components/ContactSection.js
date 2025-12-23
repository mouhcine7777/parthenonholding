'use client';
import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Send, 
  MessageSquare, 
  CheckCircle
} from 'lucide-react';

// Define brand colors as constants
const GOLD = "#A98142";
const LIGHT = "#E6E6E6";
const DARK = "#1C1C1B";

export default function ContactSection() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });
  
  // Form state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    subject: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Handle form submission with EmailJS
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Initialize EmailJS with your public key
      emailjs.init('tLmc6Z1JdpB5JBayT');
      
      // Send email using EmailJS
      const result = await emailjs.send(
        'service_vm1ccc9',      // Your Service ID
        'template_luce2lc',     // Replace this with your Template ID from EmailJS
        {
          from_name: formData.name,
          from_email: formData.email,
          company: formData.company || 'Non spécifié',
          phone: formData.phone || 'Non spécifié',
          subject: formData.subject,
          message: formData.message,
          to_email: 'contact@parthenon.ma'
        }
      );

      console.log('Email sent successfully:', result.text);
      setIsSubmitting(false);
      setIsSubmitted(true);
      
      // Reset form after 3 seconds
      setTimeout(() => {
        setFormData({
          name: '',
          email: '',
          company: '',
          phone: '',
          subject: '',
          message: ''
        });
        setIsSubmitted(false);
      }, 3000);
    } catch (error) {
      console.error('Error sending email:', error);
      setIsSubmitting(false);
      alert('Une erreur est survenue. Veuillez réessayer.');
    }
  };

  // Contact information items
  const contactInfo = [
    {
      icon: <Phone size={24} />,
      title: "Téléphone",
      content: "+2125224-59150",
      action: "Appelez-nous"
    },
    {
      icon: <Mail size={24} />,
      title: "Email",
      content: "contact@parthenon.ma",
      action: "Écrivez-nous"
    },
    {
      icon: <MapPin size={24} />,
      title: "Adresse",
      content: "Porte 4, 106 Rue Abderrahman Sahraoui, Casablanca",
      action: "Directions"
    },
    {
      icon: <Clock size={24} />,
      title: "Heures d'ouverture",
      content: "Lun-Ven: 9h-18h",
      action: "Plus d'info"
    }
  ];

  return (
    <section 
      ref={sectionRef}
      className="py-20 md:py-32 relative overflow-hidden"
      style={{ backgroundColor: LIGHT }}
    >
      {/* Creative background elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Floating circles */}
        <motion.div 
          className="absolute top-20 left-10 w-64 h-64 opacity-10 rounded-full" 
          style={{ background: `radial-gradient(circle, ${GOLD} 0%, transparent 70%)` }}
          animate={{ 
            x: [0, 10, 0], 
            y: [0, -15, 0],
          }}
          transition={{ 
            repeat: Infinity, 
            duration: 8,
            ease: "easeInOut" 
          }}
        />
        <motion.div 
          className="absolute bottom-40 right-20 w-96 h-96 opacity-8 rounded-full" 
          style={{ background: `radial-gradient(circle, ${GOLD} 0%, transparent 70%)` }}
          animate={{ 
            x: [0, -15, 0], 
            y: [0, 10, 0],
          }}
          transition={{ 
            repeat: Infinity, 
            duration: 10,
            ease: "easeInOut" 
          }}
        />
        
        {/* Diagonal grid pattern */}
        <div className="absolute top-0 left-0 w-full h-full opacity-3"
          style={{
            backgroundImage: `linear-gradient(45deg, ${DARK} 0.5%, transparent 0.5%)`,
            backgroundSize: '40px 40px'
          }}
        />
        
        {/* Accent lines */}
        <motion.div 
          className="absolute left-0 w-1 h-40 top-1/4" 
          style={{ backgroundColor: GOLD }}
          initial={{ height: 0 }}
          animate={isInView ? { height: 160 } : { height: 0 }}
          transition={{ duration: 1.2, delay: 0.3 }}
        />
        <motion.div 
          className="absolute right-0 w-1 h-40 bottom-1/4" 
          style={{ backgroundColor: GOLD }}
          initial={{ height: 0 }}
          animate={isInView ? { height: 160 } : { height: 0 }}
          transition={{ duration: 1.2, delay: 0.6 }}
        />
      </div>
      
      {/* Content container */}
      <div className="container mx-auto px-6 relative z-10">
        {/* Section header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          <div className="inline-block">
            <div className="flex items-center justify-center gap-3">
              <MessageSquare size={24} style={{ color: GOLD }} />
              <span className="text-sm uppercase tracking-widest font-medium" style={{ color: GOLD }}>
                Contactez-nous
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mt-2" style={{ color: DARK }}>
            Collaborons ensemble
            </h2>
            <motion.div 
              className="h-1 mt-4"
              style={{ backgroundColor: GOLD }}
              initial={{ width: 0 }}
              animate={isInView ? { width: '100%' } : { width: 0 }}
              transition={{ duration: 1, delay: 0.6 }}
            />
          </div>
          
          <motion.p 
            className="max-w-2xl mx-auto mt-6 text-lg"
            style={{ color: `${DARK}CC` }}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
Nos équipes vous accompagnent de la conception à la réussite de vos projets, avec écoute, expertise et exigence.
</motion.p>
        </motion.div>
        
        {/* Animated contact info bar */}
        <motion.div 
          className="flex flex-wrap justify-center gap-8 items-center mb-16 py-6 px-4 rounded-xl"
          style={{ 
            backgroundColor: `${DARK}05`,
            border: `1px solid ${GOLD}30`,
            boxShadow: `0 10px 30px -10px ${DARK}15`
          }}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {contactInfo.map((item, index) => (
            <motion.div
              key={`contact-inline-${index}`}
              className="flex items-center gap-3"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ delay: 0.5 + (index * 0.15) }}
            >
              <div 
                className="w-10 h-10 rounded-full flex items-center justify-center shrink-0"
                style={{ 
                  background: `linear-gradient(135deg, ${GOLD}, ${GOLD}80)`,
                  boxShadow: `0 4px 10px -2px ${GOLD}40`
                }}
              >
                <span style={{ color: LIGHT }}>{item.icon}</span>
              </div>
              <div>
                <p className="font-medium text-sm" style={{ color: DARK }}>
                  {item.content}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        {/* Main contact content with creative layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-16">
          {/* Google Maps iframe */}
          <motion.div 
            className="lg:col-span-7 rounded-xl overflow-hidden h-full min-h-[450px] relative"
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -40 }}
            transition={{ duration: 0.9, delay: 0.5 }}
          >
            <div 
              className="w-full h-full rounded-xl relative"
              style={{ 
                border: `1px solid ${GOLD}20`,
                boxShadow: `0 20px 40px -15px ${DARK}20`,
                overflow: 'hidden'
              }}
            >
              {/* Google Maps iframe with custom marker */}
              <div className="w-full h-full relative">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3323.4993903992327!2d-7.620810799999998!3d33.5923449!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzPCsDM1JzMyLjQiTiA3wrAzNycxNC45Ilc!5e0!3m2!1sfr!2sma!4v1746787105805!5m2!1sfr!2sma" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  className="absolute inset-0"
                />
                
                {/* Custom marker overlay for Parthenon Holding */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-full pointer-events-none z-20">
                  <div className="relative">
                    {/* Pin */}
                    <div 
                      className="w-12 h-12 rounded-full flex items-center justify-center shadow-lg"
                      style={{ 
                        backgroundColor: GOLD,
                        boxShadow: `0 4px 12px ${GOLD}60`
                      }}
                    >
                      <MapPin size={24} style={{ color: DARK }} />
                    </div>
                    {/* Label */}
                    <div 
                      className="absolute top-full mt-2 left-1/2 transform -translate-x-1/2 whitespace-nowrap px-4 py-2 rounded-lg shadow-lg"
                      style={{ 
                        backgroundColor: DARK,
                        border: `2px solid ${GOLD}`
                      }}
                    >
                      <p className="font-bold text-sm" style={{ color: GOLD }}>
                        Parthenon Holding
                      </p>
                      <p className="text-xs mt-1" style={{ color: LIGHT }}>
                        106 Rue Abderrahman Sahraoui
                      </p>
                    </div>
                  </div>
                </div>
                
                {/* Overlay gradient for better integration */}
                <div 
                  className="absolute inset-0 pointer-events-none"
                  style={{ 
                    background: `linear-gradient(to top, ${DARK}08, transparent 50%)`,
                    borderRadius: 'inherit'
                  }}
                />
                
                {/* Gold accent border */}
                <div 
                  className="absolute inset-0 pointer-events-none"
                  style={{ 
                    border: `2px solid ${GOLD}40`,
                    borderRadius: 'inherit'
                  }}
                />
              </div>
            </div>
          </motion.div>
          
          {/* Contact Form */}
          <motion.div 
            className="lg:col-span-5"
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 40 }}
            transition={{ duration: 0.9, delay: 0.7 }}
          >
            <div 
              className="rounded-xl h-full relative overflow-hidden"
              style={{ 
                backgroundColor: DARK,
                border: `1px solid ${GOLD}40`,
                boxShadow: `0 20px 40px -15px ${DARK}40`
              }}
            >
              {/* Background pattern */}
              <div 
                className="absolute inset-0 opacity-5"
                style={{
                  backgroundImage: `radial-gradient(${LIGHT} 1px, transparent 1px)`,
                  backgroundSize: '20px 20px'
                }}
              />
              
              {/* Form Content */}
              <div className="p-8 md:p-10 relative z-10">
                
                {/* Success Message */}
                {isSubmitted && (
                  <motion.div 
                    className="mb-6 p-4 rounded-lg flex items-center gap-3"
                    style={{ 
                      backgroundColor: `${GOLD}20`,
                      border: `1px solid ${GOLD}60`
                    }}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                    <CheckCircle size={20} style={{ color: GOLD }} />
                    <span style={{ color: LIGHT }}>Message envoyé avec succès!</span>
                  </motion.div>
                )}
                
                {/* Contact Form */}
                <div className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* Name Field */}
                    <div>
                      <label className="block text-sm font-medium mb-2" style={{ color: GOLD }}>
                        Nom complet
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 rounded-lg transition-all duration-300 focus:outline-none"
                        style={{ 
                          backgroundColor: `${LIGHT}10`,
                          border: `1px solid ${GOLD}30`,
                          color: LIGHT
                        }}
                        placeholder="Nom & prénom"
                      />
                    </div>
                    
                    {/* Email Field */}
                    <div>
                      <label className="block text-sm font-medium mb-2" style={{ color: GOLD }}>
                        Email
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 rounded-lg transition-all duration-300 focus:outline-none"
                        style={{ 
                          backgroundColor: `${LIGHT}10`,
                          border: `1px solid ${GOLD}30`,
                          color: LIGHT
                        }}
                        placeholder="mail@exemple.com"
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* Company Field */}
                    <div>
                      <label className="block text-sm font-medium mb-2" style={{ color: GOLD }}>
                        Entreprise
                      </label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-lg transition-all duration-300 focus:outline-none"
                        style={{ 
                          backgroundColor: `${LIGHT}10`,
                          border: `1px solid ${GOLD}30`,
                          color: LIGHT
                        }}
                        placeholder="Nom de l'entreprise"
                      />
                    </div>
                    
                    {/* Phone Field */}
                    <div>
                      <label className="block text-sm font-medium mb-2" style={{ color: GOLD }}>
                        Téléphone
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-lg transition-all duration-300 focus:outline-none"
                        style={{ 
                          backgroundColor: `${LIGHT}10`,
                          border: `1px solid ${GOLD}30`,
                          color: LIGHT
                        }}
                        placeholder="+212 6XX XXX XXX"
                      />
                    </div>
                  </div>

                  {/* Subject Field */}
                  <div>
                    <label className="block text-sm font-medium mb-2" style={{ color: GOLD }}>
                      Objet
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 rounded-lg transition-all duration-300 focus:outline-none"
                      style={{ 
                        backgroundColor: `${LIGHT}10`,
                        border: `1px solid ${GOLD}30`,
                        color: LIGHT
                      }}
                      placeholder="Objet de votre message"
                    />
                  </div>
                  
                  {/* Message Field */}
                  <div>
                    <label className="block text-sm font-medium mb-2" style={{ color: GOLD }}>
                      Message
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={4}
                      className="w-full px-4 py-3 rounded-lg transition-all duration-300 focus:outline-none resize-none"
                      style={{ 
                        backgroundColor: `${LIGHT}10`,
                        border: `1px solid ${GOLD}30`,
                        color: LIGHT
                      }}
                      placeholder="Décrivez votre demande ou votre besoin..."
                    />
                  </div>
                  
                  {/* Submit Button */}
                  <button
                    onClick={handleSubmit}
                    disabled={isSubmitting}
                    className="w-full py-4 px-6 rounded-lg font-medium transition-all duration-300 hover:transform hover:translate-y-[-2px] disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3"
                    style={{ 
                      background: isSubmitting ? `${GOLD}60` : `linear-gradient(135deg, ${GOLD}, ${GOLD}90)`,
                      boxShadow: `0 8px 16px -4px ${GOLD}40`,
                      color: DARK
                    }}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-t-transparent rounded-full animate-spin" 
                          style={{ borderColor: DARK }} 
                        />
                        <span>Envoi en cours...</span>
                      </>
                    ) : (
                      <>
                        <Send size={20} />
                        <span>Envoyer la demande</span>
                      </>
                    )}
                  </button>
                </div>
              </div>  
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}