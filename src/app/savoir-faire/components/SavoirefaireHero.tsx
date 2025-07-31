import { useState, useEffect, useRef } from 'react';
import { motion, useTransform, useMotionValue, useSpring } from 'framer-motion';
import { ChevronDown, ArrowRight } from 'lucide-react';

// Define brand colors as constants (matching the main hero)
const GOLD = "#A98142";
const LIGHT = "#E6E6E6";
const DARK = "#1C1C1B";

// Define business verticals
const VERTICALS = [
  {
    id: 1,
    name: "Événementiel",
    description: "Organisation d'événements d'exception, conférences et salons professionnels",
    icon: "M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" // Path data for event icon
  },
  {
    id: 2,
    name: "Audiovisuel",
    description: "Production audiovisuelle, studios et équipements professionnels",
    icon: "M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" // Path data for media icon
  },
  {
    id: 3,
    name: "Loisirs",
    description: "Espaces de divertissement, activités culturelles et récréatives",
    icon: "M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" // Path data for leisure icon
  }
];

export default function ParthenonVerticauxHero() {
  const [mousePosition, setMousePosition] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const [activeVertical, setActiveVertical] = useState<number>(0);
  const containerRef = useRef<HTMLDivElement>(null);
  
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-100, 100], [3, -3]);
  const rotateY = useTransform(x, [-100, 100], [-3, 3]);
  
  const springConfig = { stiffness: 100, damping: 30 };
  const springX = useSpring(x, springConfig);
  const springY = useSpring(y, springConfig);
  
  // Handle mouse movement for the 3D effect
  useEffect(() => {
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
  }, []);

  // Auto-rotate through verticals
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveVertical((prev) => (prev + 1) % VERTICALS.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);

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

  // Variants for vertical items
  const verticalVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    exit: { opacity: 0, y: -20, transition: { duration: 0.3 } }
  };
  
  return (
    <div 
      ref={containerRef}
      className="relative overflow-hidden" 
      style={{ backgroundColor: DARK, height: "75vh" }}
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
          {/* Greek-themed background elements */}
          <div className="absolute inset-0 overflow-hidden opacity-20">
            {/* Greek columns */}
            {[...Array(7)].map((_, i: number) => (
              <motion.div
                key={i}
                className="absolute bottom-0 rounded-t-lg"
                style={{
                  backgroundColor: `${GOLD}15`,
                  width: `${70 + Math.random() * 50}px`,
                  height: `${350 + Math.random() * 350}px`,
                  left: `${(i * 15) + Math.random() * 5}%`,
                  y: useTransform(springY, y => y / (6 - i) * -1),
                }}
              >
                {/* Column capital */}
                <div 
                  className="absolute top-0 left-0 right-0 h-12 rounded-t-lg"
                  style={{ backgroundColor: `${GOLD}25` }}
                />
              </motion.div>
            ))}
          </div>
          
          {/* Decorative elements representing business verticals */}
          {VERTICALS.map((vertical, i: number) => (
            <motion.div
              key={`shape-${vertical.id}`}
              className="absolute rounded-lg"
              style={{
                width: `${100 + (i * 50)}px`,
                height: `${100 + (i * 50)}px`,
                border: `1px solid ${GOLD}${30 - (i * 10)}`,
                opacity: activeVertical === i ? 0.3 : 0.1,
                left: `${25 + (i * 20)}%`,
                top: `${20 + (i * 15)}%`,
                x: useTransform(springX, x => x / (i + 3) * -1),
                y: useTransform(springY, y => y / (i + 3) * -1),
                rotate: i * 15,
              }}
              animate={{
                scale: activeVertical === i ? [1, 1.05, 1] : 1,
                transition: { duration: 2, repeat: Infinity }
              }}
            />
          ))}
          
          {/* Abstract decorative circles */}
          {[...Array(10)].map((_, i: number) => (
            <motion.div
              key={`circle-${i}`}
              className="absolute rounded-full"
              style={{
                width: `${10 + Math.random() * 60}px`,
                height: `${10 + Math.random() * 60}px`,
                backgroundColor: `${GOLD}${5 + Math.floor(Math.random() * 10)}`,
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
          background: `radial-gradient(circle at ${mousePosition.x + window.innerWidth/2}px ${mousePosition.y + window.innerHeight/2}px, ${DARK}80, ${DARK}C0, ${DARK}F0)`,
        }}></div>
        
        {/* Subtle grid */}
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: `linear-gradient(${GOLD}50 1px, transparent 1px), linear-gradient(90deg, ${GOLD}50 1px, transparent 1px)`,
          backgroundSize: '100px 100px',
          backgroundPosition: `${mousePosition.x / 50}px ${mousePosition.y / 50}px`
        }}></div>
      </div>
      
      {/* Content container */}
      <div className="container mx-auto relative z-10 h-full flex items-center justify-center px-4 md:px-6">
        <motion.div 
          className="max-w-5xl mx-auto text-center"
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
          <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight overflow-hidden">
            {Array.from("Nos Verticaux").map((char, index: number) => (
              <motion.span
                key={index}
                className="inline-block"
                custom={index}
                variants={titleVariants}
                initial="hidden"
                animate="visible"
                style={{ color: index < 3 ? GOLD : LIGHT }}
              >
                {char === ' ' ? '\u00A0' : char}
              </motion.span>
            ))}
          </h1>
          
          {/* Descriptive text with creative reveal */}
          <motion.div 
            className="mb-12"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.7 }}
          >
            <p className="text-lg md:text-xl max-w-2xl mx-auto" style={{ color: `${LIGHT}CC` }}>
              Découvrez nos domaines d'expertise où excellence et innovation se rencontrent 
              pour créer des expériences exceptionnelles.
            </p>
          </motion.div>
          
          {/* Business verticals showcase */}
          <div className="relative h-48 md:h-40 mb-8">
            {VERTICALS.map((vertical, index) => (
              <motion.div
                key={vertical.id}
                className="absolute inset-0 flex flex-col items-center justify-center"
                initial="hidden"
                animate={index === activeVertical ? "visible" : "hidden"}
                variants={verticalVariants}
                style={{ 
                  opacity: index === activeVertical ? 1 : 0,
                  pointerEvents: index === activeVertical ? 'auto' : 'none' 
                }}
              >
                <div className="flex items-center justify-center mb-4">
                  <motion.div
                    className="flex items-center justify-center w-16 h-16 rounded-full mb-4"
                    style={{ backgroundColor: `${GOLD}20`, border: `1px solid ${GOLD}` }}
                    animate={{ 
                      scale: [1, 1.05, 1],
                      rotate: [0, 5, 0, -5, 0]
                    }}
                    transition={{ duration: 5, repeat: Infinity }}
                  >
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      width="28" 
                      height="28" 
                      viewBox="0 0 24 24" 
                      fill="none" 
                      stroke={GOLD}
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d={vertical.icon} />
                    </svg>
                  </motion.div>
                </div>
                
                <h3 className="text-2xl md:text-3xl font-semibold mb-2" style={{ color: LIGHT }}>
                  {vertical.name}
                </h3>
                <p className="text-base md:text-lg max-w-lg mx-auto" style={{ color: `${LIGHT}CC` }}>
                  {vertical.description}
                </p>
              </motion.div>
            ))}
          </div>
          
          {/* Vertical selector dots */}
          <div className="flex justify-center space-x-3 mb-10">
            {VERTICALS.map((vertical, index) => (
              <motion.button
                key={`dot-${vertical.id}`}
                className="w-3 h-3 rounded-full focus:outline-none"
                style={{ 
                  backgroundColor: index === activeVertical ? GOLD : `${GOLD}50`,
                  border: `1px solid ${index === activeVertical ? GOLD : `${GOLD}80`}`
                }}
                whileHover={{ scale: 1.2 }}
                onClick={() => setActiveVertical(index)}
                animate={{ 
                  scale: index === activeVertical ? [1, 1.2, 1] : 1,
                  transition: { duration: 1.5, repeat: index === activeVertical ? Infinity : 0 }
                }}
              />
            ))}
          </div>
          
          
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