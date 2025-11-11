'use client';
import { useState, useEffect, useRef } from 'react';
import { motion, useTransform, useMotionValue, useSpring } from 'framer-motion';
import { ArrowUpRight, Globe, Sparkles, Award, Clock } from 'lucide-react';

const GOLD = "#A98142";
const LIGHT = "#E6E6E6";
const DARK = "#1C1C1B";

export default function ParthenonHero() {
  // State
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });
  const [isMounted, setIsMounted] = useState(false);
  const [yearsCount, setYearsCount] = useState(0);

  // Refs
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);

  // Motion
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-100, 100], [10, -10]);
  const rotateY = useTransform(x, [-100, 100], [-10, 10]);
  const springConfig = { stiffness: 100, damping: 30 };
  const springX = useSpring(x, springConfig);
  const springY = useSpring(y, springConfig);

  // Constants
  const companyName = "PARTHENON";
  const holdingText = "HOLDING";
  const targetYears = 21;

  // Effects
  useEffect(() => {
    setIsMounted(true);
    const updateWindowSize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };
    updateWindowSize();
    window.addEventListener('resize', updateWindowSize);
    return () => window.removeEventListener('resize', updateWindowSize);
  }, []);

  useEffect(() => {
    if (!isMounted) return;
    
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      
      const mouseX = e.clientX - centerX;
      const mouseY = e.clientY - centerY;
      
      setMousePosition({ x: mouseX, y: mouseY });
      x.set(mouseX / 10);
      y.set(mouseY / 10);
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [isMounted, x, y]);

  useEffect(() => {
    const interval = setInterval(() => {
      setYearsCount(prev => prev >= targetYears ? targetYears : prev + 1);
    }, 100);
    return () => clearInterval(interval);
  }, []);

  return (
    <div 
      ref={containerRef}
      className="relative h-screen overflow-hidden" 
      style={{ backgroundColor: DARK }}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      {/* Main Content - properly positioned down */}
      <div style={{ 
        opacity: isMounted ? 1 : 0,
        transition: 'opacity 0.3s ease',
        pointerEvents: isMounted ? 'auto' : 'none',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center' // This centers content vertically
      }}>
        {/* Background */}
        <div className="absolute inset-0 z-0">
          <motion.div 
            style={{ 
              x: useTransform(springX, x => -x / 15),
              y: useTransform(springY, y => -y / 15),
            }}
            className="w-full h-full"
          >
            <img 
              src="/bg.jpg" 
              alt="Parthenon Holding" 
              className="w-full h-full object-cover opacity-50"
            />
          </motion.div>
          
          <div className="absolute inset-0" style={{ 
            background: `radial-gradient(circle at ${mousePosition.x + windowSize.width/2}px ${mousePosition.y + windowSize.height/2}px, ${DARK}00, ${DARK}CC, ${DARK}EE)`,
            transition: "background 0.3s ease-out"
          }}></div>
          
          <div className="absolute inset-0 opacity-10" style={{
            backgroundImage: `linear-gradient(${GOLD}50 1px, transparent 1px), linear-gradient(90deg, ${GOLD}50 1px, transparent 1px)`,
            backgroundSize: '60px 60px',
            backgroundPosition: `${mousePosition.x / 50}px ${mousePosition.y / 50}px`
          }}></div>
        </div>
        
        {/* Content Container - now properly positioned down */}
        <div className="container mx-auto flex-grow flex items-center">
          <div className="w-full px-4 md:px-6 py-20"> {/* Added py-20 for top padding */}
            <div className="flex flex-col lg:flex-row">
              
              {/* Left Side - Adjusted positioning */}
              <motion.div 
                className="w-full lg:w-3/5 relative"
                style={{
                  rotateX: rotateX,
                  rotateY: rotateY,
                  transformPerspective: 1000,
                }}
              >
                {/* Years Counter - Position adjusted */}
                <motion.div 
                  className="absolute -top-16 md:-top-20 left-0 flex items-center space-x-3"
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1, duration: 0.8 }}
                >
                  <Clock className="h-4 md:h-5 w-4 md:w-5" style={{ color: GOLD }} />
                  <div className="text-xl md:text-3xl font-bold flex items-baseline" style={{ color: LIGHT }}>
                    <motion.span>{yearsCount}</motion.span>
                    <span className="text-xs md:text-sm ml-1" style={{ color: `${LIGHT}80` }}>ans d'excellence</span>
                  </div>
                </motion.div>
                
{/* Main Title */}
                <motion.div className="mb-4 md:mb-8 relative">
                  <div className="relative">
                    <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold tracking-tighter flex flex-nowrap overflow-hidden whitespace-nowrap">
                      {Array.from(companyName).map((char, index) => (
                        <motion.span
                          key={index}
                          className="inline-block relative overflow-hidden"
                          initial={{ opacity: 0, y: 50 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{
                            duration: 0.5,
                            delay: 0.03 * index,
                            ease: [0.22, 1, 0.36, 1]
                          }}
                          style={{ color: GOLD }}
                        >
                          {char}
                          <motion.span
                            className="absolute bottom-0 left-0 w-full"
                            initial={{ height: "100%" }}
                            animate={{ height: "0%" }}
                            transition={{
                              duration: 0.6,
                              delay: 0.08 * index,
                              ease: [0.22, 1, 0.36, 1]
                            }}
                            style={{ backgroundColor: DARK }}
                          />
                        </motion.span>
                      ))}
                    </h2>
                    
                    {/* Subtitle */}
                    <div className="relative ml-12 sm:ml-20 md:ml-32 -mt-2 md:-mt-4">
                      <h3 className="text-2xl sm:text-3xl md:text-5xl font-light tracking-widest flex overflow-hidden">
                        {Array.from(holdingText).map((char, index) => (
                          <motion.span
                            key={index}
                            className="inline-block"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{
                              duration: 0.4,
                              delay: 0.8 + 0.05 * index,
                              ease: [0.22, 1, 0.36, 1]
                            }}
                            style={{ color: LIGHT }}
                          >
                            {char}
                          </motion.span>
                        ))}
                      </h3>
                      
                      <motion.div 
                        className="h-px w-full mt-2"
                        initial={{ scaleX: 0, originX: 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{ delay: 1.4, duration: 0.8 }}
                        style={{ backgroundColor: GOLD }}
                      />
                    </div>
                  </div>
                </motion.div>
                
                {/* Description */}
                <motion.p 
                  ref={textRef}
                  className="text-base md:text-lg max-w-2xl relative overflow-hidden pl-4 md:pl-8 border-l-2"
                  style={{ color: `${LIGHT}CC`, borderColor: `${GOLD}70` }}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.6, duration: 0.7 }}
                >
                  Un guichet unique d’expertise regroupant 12 filiales spécialisées en projets audiovisuels, événementiels, de loisirs, d’hébergement et de construction, guidées par l’excellence et l’innovation durable.
                </motion.p>
              </motion.div>
              
              {/* Right Side */}
              <div className="w-full lg:w-2/5 relative h-40 md:h-60 lg:h-full mt-8 lg:mt-0">
                {/* Floating Circles */}
                <div className="absolute inset-0">
                  {[...Array(5)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute rounded-full"
                      style={{
                        width: `${10 + i * 10}px`,
                        height: `${10 + i * 10}px`,
                        backgroundColor: `${GOLD}${30 - i * 5}`,
                        left: `${10 + i * 15}%`,
                        top: `${20 + i * 12}%`,
                        x: useTransform(springX, x => x / (i + 2) * -1),
                        y: useTransform(springY, y => y / (i + 2) * -1),
                      }}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 2 + i * 0.1, duration: 0.8 }}
                    />
                  ))}
                </div>
                
                {/* Diagonal Line */}
                <motion.div
                  className="absolute top-1/4 left-0 right-0 h-px transform rotate-45 origin-left"
                  style={{ backgroundColor: GOLD }}
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ delay: 2.2, duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
                />
                
                {/* Year Indicator */}
                <motion.div
                  className="absolute top-0 md:top-12 lg:top-36 right-4 md:right-12 flex flex-col items-end"
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 2, duration: 0.8 }}
                >
                  <div className="text-xs md:text-sm" style={{ color: `${LIGHT}80` }}>Depuis</div>
                  <div className="text-2xl md:text-4xl font-bold" style={{ color: GOLD }}>2002</div>
                  <motion.div 
                    className="h-px w-8 md:w-16 mt-1"
                    initial={{ scaleX: 0, originX: 1 }}
                    animate={{ scaleX: 1 }}
                    transition={{ delay: 2.2, duration: 0.5 }}
                    style={{ backgroundColor: GOLD }}
                  />
                </motion.div>
              </div>
            </div>
          </div>
        </div>

        {/* Mouse Follower */}
        {isHovering && (
          <motion.div
            className="hidden lg:block fixed w-12 h-12 rounded-full pointer-events-none mix-blend-difference"
            style={{
              x: mousePosition.x + windowSize.width/2 - 24,
              y: mousePosition.y + windowSize.height/2 - 24,
              backgroundColor: LIGHT,
              opacity: 0.15,
            }}
            initial={{ scale: 0 }}
            animate={{ scale: [0, 1.2, 1] }}
            transition={{ duration: 0.4 }}
          />
        )}
      </div>

      {/* Loading Overlay */}
      {!isMounted && (
        <div className="absolute inset-0 z-50 flex items-center justify-center"> {/* Centered loading content */}
          <div className="w-full h-full">
            <img 
              src="/bg.jpg" 
              alt="Parthenon Holding" 
              className="w-full h-full object-cover opacity-50"
            />
            <div className="absolute inset-0" style={{ backgroundColor: `${DARK}CC` }}></div>
            <div className="container mx-auto h-full flex items-center">
              <div className="w-full px-4 md:px-6">
                <div className="flex flex-col lg:flex-row">
                  <div className="w-full lg:w-3/5 relative">
                    <h2 className="text-5xl sm:text-7xl md:text-9xl font-bold tracking-tighter" style={{ color: GOLD }}>
                      {companyName}
                    </h2>
                    <h3 className="text-2xl sm:text-3xl md:text-5xl font-light tracking-widest ml-12 sm:ml-20 md:ml-32 -mt-2 md:-mt-4" style={{ color: LIGHT }}>
                      {holdingText}
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}