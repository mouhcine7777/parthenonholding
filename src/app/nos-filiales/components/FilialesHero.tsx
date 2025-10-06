'use client';
import { useState, useEffect, useRef } from 'react';
import { motion, useTransform, useMotionValue, useSpring } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

// Define brand colors as constants (matching the main hero)
const GOLD = "#A98142";
const LIGHT = "#E6E6E6";
const DARK = "#1C1C1B";

export default function ParthenonAboutHero() {
  const [mousePosition, setMousePosition] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const [isBrowser, setIsBrowser] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-100, 100], [5, -5]);
  const rotateY = useTransform(x, [-100, 100], [-5, 5]);
  
  const springConfig = { stiffness: 100, damping: 30 };
  const springX = useSpring(x, springConfig);
  const springY = useSpring(y, springConfig);
  
  // Check if we're in the browser
  useEffect(() => {
    setIsBrowser(true);
  }, []);
  
  // Handle mouse movement for the 3D effect
  useEffect(() => {
    if (!isBrowser) return;
    
    const handleMouseMove = (event: MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      
      const mouseX = event.clientX - centerX;
      const mouseY = event.clientY - centerY;
      
      setMousePosition({ x: mouseX, y: mouseY });
      x.set(mouseX / 10);
      y.set(mouseY / 10);
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [isBrowser, x, y]);

  // Animation variants for staggered text reveals
  const titleVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.1 * i,
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1]
      }
    })
  };

  // Calculate gradient center with fallback values
  const gradientCenterX = isBrowser ? mousePosition.x + (window.innerWidth / 2) : 800;
  const gradientCenterY = isBrowser ? mousePosition.y + (window.innerHeight / 2) : 400;
  
  return (
    <div 
      ref={containerRef}
      className="relative overflow-hidden" 
      style={{ backgroundColor: DARK, height: "70vh" }}
    >
      {/* Background with creative elements */}
      <div className="absolute inset-0 z-0">
        <motion.div 
          style={{ 
            x: useTransform(springX, x => -x / 20),
            y: useTransform(springY, y => -y / 20),
          }}
          className="w-full h-full"
        >
          {/* Floating greek columns silhouettes */}
          <div className="absolute inset-0 overflow-hidden opacity-30">
            {[...Array(5)].map((_, i: number) => (
              <motion.div
                key={i}
                className="absolute bottom-0 rounded-t-lg"
                style={{
                  backgroundColor: `${GOLD}10`,
                  width: `${80 + Math.random() * 40}px`,
                  height: `${400 + Math.random() * 300}px`,
                  left: `${(i * 20) + Math.random() * 5}%`,
                  y: useTransform(springY, y => y / (5 - i) * -1),
                }}
              >
                {/* Column capital */}
                <div 
                  className="absolute top-0 left-0 right-0 h-10 rounded-t-lg"
                  style={{ backgroundColor: `${GOLD}20` }}
                />
              </motion.div>
            ))}
          </div>
          
          {/* Decorative circles */}
          {[...Array(8)].map((_, i: number) => (
            <motion.div
              key={i}
              className="absolute rounded-full"
              style={{
                width: `${20 + Math.random() * 80}px`,
                height: `${20 + Math.random() * 80}px`,
                backgroundColor: `${GOLD}${10 + Math.floor(Math.random() * 10)}`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                x: useTransform(springX, x => x / (i + 5) * -1),
                y: useTransform(springY, y => y / (i + 5) * -1),
              }}
            />
          ))}
        </motion.div>
        
        {/* Gradient overlay */}
        <div className="absolute inset-0" style={{ 
          background: `radial-gradient(circle at ${gradientCenterX}px ${gradientCenterY}px, ${DARK}90, ${DARK}D0, ${DARK}F8)`,
        }}></div>
        
        {/* Subtle grid */}
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: `linear-gradient(${GOLD}50 1px, transparent 1px), linear-gradient(90deg, ${GOLD}50 1px, transparent 1px)`,
          backgroundSize: '80px 80px',
          backgroundPosition: `${mousePosition.x / 50}px ${mousePosition.y / 50}px`
        }}></div>
      </div>
      
      {/* Content container */}
      <div className="container mx-auto relative z-10 h-full flex items-center justify-center px-4 md:px-6">
        <motion.div 
          className="max-w-4xl mx-auto text-center"
          style={{
            rotateX,
            rotateY,
            transformPerspective: 1000,
          }}
        >
          {/* Subtitle with line effect */}
          <motion.div 
            className="flex items-center justify-center mb-6"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <motion.div 
              className="h-px w-12 md:w-24 mr-4"
              initial={{ scaleX: 0, originX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 0.3, duration: 0.7 }}
              style={{ backgroundColor: GOLD }}
            />
            <span className="uppercase tracking-widest text-sm md:text-base" style={{ color: GOLD }}>
              Parthenon Holding
            </span>
            <motion.div 
              className="h-px w-12 md:w-24 ml-4"
              initial={{ scaleX: 0, originX: 1 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 0.3, duration: 0.7 }}
              style={{ backgroundColor: GOLD }}
            />
          </motion.div>
        
          {/* Main title with character-by-character animation */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight overflow-hidden">
            {Array.from("Nos Filiales").map((char, index: number) => (
              <motion.span
                key={index}
                className="inline-block"
                custom={index}
                variants={titleVariants}
                initial="hidden"
                animate="visible"
              >
                {char === ' ' ? '\u00A0' : char}
              </motion.span>
            ))}
          </h1>
          
          {/* Descriptive text with creative reveal */}
          <motion.div 
            className="mb-4"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.7 }}
          >
            <p className="text-lg md:text-xl max-w-2xl mx-auto" style={{ color: `${LIGHT}CC` }}>
            De la production audiovisuelle aux parcs de loisirs, de l'événementiel à la restauration, découvrez l'écosystème complet de Parthenon Holding.
            </p>
          </motion.div>
        </motion.div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ delay: 2, duration: 1.5, repeat: Infinity }}
      >
        <ChevronDown className="w-6 h-6" style={{ color: GOLD }} />
      </motion.div>
    </div>
  );
}