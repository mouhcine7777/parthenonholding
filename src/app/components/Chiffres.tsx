'use client';
import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { CalendarDays, Grid3X3, Users, Building } from 'lucide-react';

// Define brand colors as constants
const GOLD = "#A98142";
const LIGHT = "#E6E6E6";
const DARK = "#1C1C1B";

// Define types for the figures data
interface Figure {
  icon: React.ReactNode;
  value: number;
  label: string;
  description: string;
  prefix?: string;
  suffix?: string;
}

export default function ModernQuelquesChiffres() {
  // Create ref for the section
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 });
  
  // For better mobile performance, reduce animations on small screens
  const [isMobile, setIsMobile] = useState(false);
  
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 640);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);
  
  // Parallax scroll effect
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });
  
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", isMobile ? "20%" : "30%"]);
  
  // Counter animation for numbers
  interface CounterProps {
    end: number;
    prefix?: string;
    suffix?: string;
  }
  
  const Counter = ({ end, prefix = '', suffix = '' }: CounterProps) => {
    const [count, setCount] = useState(0);
    const nodeRef = useRef<HTMLDivElement>(null);
    const isNodeInView = useInView(nodeRef, { once: true, amount: 0.8 });
    
    useEffect(() => {
      if (!isNodeInView) return;
      
      let startTimestamp: number | null = null;
      const duration = 2000;
      
      const step = (timestamp: number) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        const currentCount = Math.floor(progress * end);
        
        setCount(currentCount);
        
        if (progress < 1) {
          requestAnimationFrame(step);
        } else {
          setCount(end);
        }
      };
      
      const animationId = requestAnimationFrame(step);
      return () => cancelAnimationFrame(animationId);
    }, [isNodeInView, end]);
    
    return (
      <div ref={nodeRef} className="font-bold">
        <span className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl" style={{ color: GOLD }}>
          {prefix}{count}{suffix}
        </span>
      </div>
    );
  };
  
  // Key figures data
  const figures: Figure[] = [
    { 
      icon: <CalendarDays strokeWidth={1.5} />,
      value: 2002,
      label: "ANNÉE DE CRÉATION",
      description: "Deux décennies d'innovation continue"
    },
    { 
      icon: <Grid3X3 strokeWidth={1.5} />,
      value: 3,
      label: "PÔLES",
      suffix: '',
      description: "Live, Loisirs & Hospitalité, Services"
    },
    { 
      icon: <Building strokeWidth={1.5} />,
      value: 12,
      label: "FILIALES",
      description: "Expertise complémentaire et spécialisée"
    },
    { 
      icon: <Users strokeWidth={1.5} />,
      value: 200,
      label: "CLIENTS",
      prefix: '+',
      description: "Nous font confiance, tant au Maroc qu'à l'international"
    }
  ];
  
  // Staggered animation variants
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: isMobile ? 0.08 : 0.15
      }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: isMobile ? 20 : 40 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: isMobile ? 0.6 : 0.8,
        ease: [0.25, 1, 0.5, 1]
      }
    }
  };

  return (
    <section 
      ref={sectionRef}
      className="py-16 sm:py-20 md:py-24 lg:py-32 relative overflow-hidden"
      style={{ backgroundColor: DARK }}
    >
      {/* Abstract background patterns */}
      <motion.div 
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{ y: backgroundY }}
      >
        {/* Mesh gradient background */}
        <div className="absolute inset-0 opacity-30"
          style={{
            background: `radial-gradient(circle at 30% 20%, ${GOLD}40 0%, transparent 50%),
                         radial-gradient(circle at 70% 65%, ${GOLD}30 0%, transparent 40%)`
          }}
        />
        
        {/* Minimal grid lines */}
        <div className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(to right, ${LIGHT}05 1px, transparent 1px),
              linear-gradient(to bottom, ${LIGHT}05 1px, transparent 1px)
            `,
            backgroundSize: '80px 80px'
          }}
        />
        
        {/* Floating elements - fewer on mobile for better performance */}
        {Array.from({ length: isMobile ? 6 : 12 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              backgroundColor: i % 2 === 0 ? `${GOLD}20` : `${LIGHT}10`,
              width: `${Math.random() * (isMobile ? 60 : 100) + 40}px`,
              height: `${Math.random() * (isMobile ? 60 : 100) + 40}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              filter: `blur(${isMobile ? '30px' : '40px'})`
            }}
            animate={{
              y: [0, Math.random() * (isMobile ? 20 : 30) - (isMobile ? 10 : 15)],
              x: [0, Math.random() * (isMobile ? 20 : 30) - (isMobile ? 10 : 15)],
              scale: [1, Math.random() * 0.3 + 0.8]
            }}
            transition={{
              repeat: Infinity,
              repeatType: 'reverse',
              duration: Math.random() * 4 + (isMobile ? 4 : 6)
            }}
          />
        ))}
      </motion.div>
      
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Section header */}
        <motion.div
          className="max-w-4xl mx-auto mb-14 sm:mb-16 md:mb-20 lg:mb-24 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          {/* Section title with creative elements */}
          <div className="flex flex-col items-center">
            <motion.div 
              className="flex items-center mb-3 opacity-90"
              initial={{ width: 0 }}
              animate={isInView ? { width: 'auto' } : { width: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="h-px w-8 mr-4" style={{ backgroundColor: GOLD }}></div>
              <span className="text-sm uppercase tracking-widest" style={{ color: GOLD }}>
                Parthenon en
              </span>
              <div className="h-px w-8 ml-4" style={{ backgroundColor: GOLD }}></div>
            </motion.div>
            
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold relative" style={{ color: LIGHT }}>
              <motion.span
                className="inline-block relative z-10"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                Quelques Chiffres
                <motion.div 
                  className="absolute -bottom-3 left-0 h-1 rounded-full"
                  style={{ backgroundColor: GOLD }}
                  initial={{ width: 0 }}
                  animate={isInView ? { width: '100%' } : { width: 0 }}
                  transition={{ duration: 1.2, delay: 0.8 }}
                />
              </motion.span>
            </h2>
          </div>
        </motion.div>
        
        {/* Modern figure cards layout */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 md:gap-4"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {figures.map((figure, index) => (
            <motion.div
              key={index}
              className="relative"
              variants={itemVariants}
            >
              {/* Modern glass card with hover effects */}
              <motion.div 
                className="h-full p-5 sm:p-6 md:p-8 rounded-2xl backdrop-blur-sm flex flex-col relative overflow-hidden"
                style={{ 
                  backgroundColor: `${LIGHT}06`,
                  border: `1px solid ${GOLD}15`,
                  boxShadow: `0 8px 32px -8px ${DARK}90`
                }}
                whileHover={{ 
                  y: -5,
                  backgroundColor: `${LIGHT}09`,
                  boxShadow: `0 14px 40px -12px ${DARK}95, 0 0 20px -2px ${GOLD}20`,
                  borderColor: `${GOLD}30`,
                  transition: { duration: 0.3, ease: "easeOut" }
                }}
              >
                {/* Glowing highlight accent */}
                <motion.div 
                  className="absolute -top-10 -right-10" 
                  initial={{ opacity: 0.1 }}
                  whileHover={{ opacity: 0.4 }}
                >
                  <div 
                    className="w-20 h-20 rounded-full" 
                    style={{ 
                      background: `radial-gradient(circle, ${GOLD} 0%, transparent 70%)`,
                      filter: 'blur(15px)'
                    }}
                  />
                </motion.div>
                
                {/* Icon with animated circle */}
                <div className="mb-4 sm:mb-6 relative">
                  <motion.div 
                    className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 flex items-center justify-center relative"
                    whileHover={{ scale: 1.05 }}
                  >
                    <motion.div 
                      className="absolute inset-0 rounded-full"
                      style={{ backgroundColor: `${GOLD}15` }}
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ delay: 0.2 + index * 0.1, duration: 0.8 }}
                    />
                    <motion.div
                      className="absolute inset-0 rounded-full z-0"
                      style={{ border: `1px solid ${GOLD}40` }}
                      animate={{ 
                        scale: [1, 1.2, 1],
                        opacity: [0.7, 0, 0.7]
                      }}
                      transition={{ 
                        duration: 3,
                        repeat: Infinity,
                        delay: index * 0.5
                      }}
                    />
                    <div className="text-xl sm:text-2xl relative z-10" style={{ color: GOLD }}>
                      {figure.icon}
                    </div>
                  </motion.div>
                </div>
                
                {/* Counter and labels */}
                <div className="mb-4 flex flex-col">
                  <Counter end={figure.value} prefix={figure.prefix || ''} suffix={figure.suffix || ''} />
                </div>
                
                <div className="mb-2 text-xs sm:text-sm font-semibold tracking-wider" style={{ color: GOLD }}>
                  {figure.label}  
                </div>
                
                <div className="text-xs sm:text-sm opacity-80 font-light" style={{ color: LIGHT }}>
                  {figure.description}
                </div>
                
                {/* Subtle animated accent line */}
                <motion.div 
                  className="absolute bottom-0 left-0 h-1 rounded-full"
                  style={{ backgroundColor: GOLD }}
                  initial={{ width: 0 }}
                  whileHover={{ width: '100%' }}
                  transition={{ duration: 0.6 }}
                />
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}