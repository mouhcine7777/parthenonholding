'use client';
import { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Film, Hotel, Layers, Building2 } from 'lucide-react';

const GOLD = "#A98142";
const LIGHT = "#E6E6E6";
const DARK = "#1C1C1B";

interface Vertical {
  id: string;
  title: string;
  description: string;
  image: string;
  icon: any;
  color: string;
}

export default function VerticalsSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const verticals: Vertical[] = [
    {
      id: "audiovisuel",
      title: "Création audiovisuelles & événements",
      description: "De la captation vidéo à la diffusion en direct, nous créons des contenus audiovisuels immersifs et produisons des événements mémorables qui captivent et engagent votre audience.",
      image: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=800&q=80",
      icon: Film,
      color: "#8B7355"
    },
    {
      id: "loisirs",
      title: "Loisirs & Hospitalité",
      description: "Nous concevons et gérons des espaces de loisirs et d'accueil qui allient confort, esthétique et expérience client exceptionnelle pour créer des moments inoubliables.",
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&q=80",
      icon: Hotel,
      color: "#A98142"
    },
    {
      id: "scenographie",
      title: "Scénographie & Aménagement",
      description: "Notre expertise en scénographie transforme les espaces en véritables œuvres d'art fonctionnelles, où chaque détail est pensé pour sublimer l'expérience et marquer les esprits.",
      image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80",
      icon: Layers,
      color: "#C4A55A"
    },
    {
      id: "batiments",
      title: "Bâtiments Tout Corps D'état",
      description: "Nous maîtrisons l'ensemble des corps de métier du bâtiment pour livrer des projets complets et cohérents, de la structure aux finitions les plus sophistiquées.",
      image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=800&q=80",
      icon: Building2,
      color: "#8B6F47"
    }
  ];

  return (
    <section className="relative overflow-hidden" style={{ backgroundColor: DARK }}>
      {/* Header */}
      <div className="container mx-auto px-6 lg:px-12 pt-16 sm:pt-20 lg:pt-32 pb-12 sm:pb-16 lg:pb-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <motion.div 
            className="flex items-center mb-4 sm:mb-6"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <div className="w-12 sm:w-16 lg:w-20 h-px mr-4 sm:mr-6" style={{ backgroundColor: GOLD }} />
            <span className="uppercase tracking-[0.2em] sm:tracking-[0.3em] text-xs sm:text-sm font-semibold" style={{ color: GOLD }}>
              Nos Verticaux
            </span>
          </motion.div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold mb-4 sm:mb-6 leading-tight text-white">
            Nos domaines d'excellence
          </h2>
          <p className="text-base sm:text-lg lg:text-xl leading-relaxed" style={{ color: LIGHT }}>
            Quatre secteurs d'activité complémentaires qui incarnent notre savoir-faire et notre engagement envers l'innovation.
          </p>
        </motion.div>
      </div>

      {/* Stacked Cards Container */}
      <div ref={containerRef} className="relative pb-20">
        <div className="sticky-cards-container">
          {verticals.map((vertical, index) => (
            <StackedCard 
              key={vertical.id}
              vertical={vertical}
              index={index}
              total={verticals.length}
              isMobile={isMobile}
            />
          ))}
        </div>
      </div>

      {/* Decorative Background */}
      <div className="absolute top-1/4 left-0 w-64 h-64 sm:w-96 sm:h-96 rounded-full opacity-5 pointer-events-none" style={{ backgroundColor: GOLD, filter: 'blur(120px)' }} />
      <div className="absolute bottom-1/4 right-0 w-64 h-64 sm:w-96 sm:h-96 rounded-full opacity-5 pointer-events-none" style={{ backgroundColor: GOLD, filter: 'blur(120px)' }} />
    </section>
  );
}

function StackedCard({ vertical, index, total, isMobile }: { vertical: any; index: number; total: number; isMobile: boolean }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const Icon = vertical.icon;

  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "start start"]
  });

  // Calculate scale and rotation based on scroll
  const scale = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [0.8, 0.95, 1]
  );

  const y = useTransform(
    scrollYProgress,
    [0, 1],
    [100, 0]
  );

  const opacity = useTransform(
    scrollYProgress,
    [0, 0.3, 1],
    [0, 0.5, 1]
  );

  const rotate = useTransform(
    scrollYProgress,
    [0, 1],
    [isMobile ? 0 : -5 + (index * 2), 0]
  );

  // Calculate sticky position with stacking effect
  const topOffset = isMobile ? index * 80 : index * 60;
  const zIndex = total - index;

  return (
    <motion.div
      ref={cardRef}
      style={{
        scale: isMobile ? 1 : scale,
        y: isMobile ? 0 : y,
        opacity,
        rotate: isMobile ? 0 : rotate,
        top: `${topOffset}px`,
        zIndex,
      }}
      className="sticky mx-4 sm:mx-6 lg:mx-auto max-w-6xl mb-8 sm:mb-12"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.div
        className="relative rounded-2xl sm:rounded-3xl overflow-hidden backdrop-blur-sm"
        style={{
          backgroundColor: `${DARK}E6`,
          border: `2px solid ${vertical.color}40`,
        }}
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.4 }}
      >
        <div className="grid md:grid-cols-2 gap-0">
          {/* Image Side */}
          <div className="relative h-64 sm:h-80 md:h-[500px] lg:h-[600px] overflow-hidden">
            <motion.img
              src={vertical.image}
              alt={vertical.title}
              className="w-full h-full object-cover"
              animate={{
                scale: isHovered ? 1.1 : 1,
              }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            />
            {/* Gradient Overlay */}
            <div 
              className="absolute inset-0"
              style={{
                background: `linear-gradient(135deg, ${DARK}95 0%, ${DARK}40 50%, ${vertical.color}30 100%)`
              }}
            />
            
            {/* Floating Icon */}
            <motion.div
              className="absolute top-6 left-6 sm:top-8 sm:left-8"
              animate={{
                y: isHovered ? -10 : 0,
                rotate: isHovered ? 360 : 0,
              }}
              transition={{ duration: 0.6 }}
            >
              <div 
                className="w-14 h-14 sm:w-16 sm:h-16 lg:w-20 lg:h-20 rounded-xl sm:rounded-2xl flex items-center justify-center backdrop-blur-md"
                style={{
                  backgroundColor: isHovered ? vertical.color : `${vertical.color}40`,
                  border: `2px solid ${vertical.color}`,
                }}
              >
                <Icon 
                  className="w-6 h-6 sm:w-7 sm:h-7 lg:w-9 lg:h-9"
                  style={{ color: isHovered ? DARK : 'white' }}
                />
              </div>
            </motion.div>

            {/* Number Badge */}
            <motion.div
              className="absolute top-6 right-6 sm:top-8 sm:right-8 text-6xl sm:text-7xl lg:text-9xl font-bold opacity-20"
              style={{ color: vertical.color }}
              animate={{
                opacity: isHovered ? 0.4 : 0.2,
                scale: isHovered ? 1.1 : 1,
              }}
            >
              {String(index + 1).padStart(2, '0')}
            </motion.div>
          </div>

          {/* Content Side */}
          <div className="relative p-6 sm:p-8 lg:p-12 flex flex-col justify-center">
            {/* Decorative Corner */}
            <motion.div
              className="absolute top-0 right-0 w-24 sm:w-32 h-24 sm:h-32 opacity-10"
              style={{
                background: `radial-gradient(circle at top right, ${vertical.color} 0%, transparent 70%)`,
              }}
              animate={{
                scale: isHovered ? 1.2 : 1,
              }}
              transition={{ duration: 0.6 }}
            />

            <div className="relative z-10">
              {/* Category Badge */}
              <motion.div
                className="inline-block px-4 py-2 rounded-full text-xs sm:text-sm font-bold tracking-wider mb-4 sm:mb-6"
                style={{ 
                  backgroundColor: `${vertical.color}20`,
                  color: vertical.color,
                  border: `1px solid ${vertical.color}40`
                }}
                animate={{
                  x: isHovered ? 5 : 0,
                }}
              >
                VERTICAL {String(index + 1).padStart(2, '0')}
              </motion.div>

              {/* Title */}
              <motion.h3
                className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4 sm:mb-6 leading-tight"
                animate={{
                  x: isHovered ? 5 : 0,
                }}
                transition={{ duration: 0.4, delay: 0.05 }}
              >
                {vertical.title}
              </motion.h3>

              {/* Decorative Line */}
              <motion.div
                className="h-1 rounded-full mb-4 sm:mb-6"
                style={{ backgroundColor: vertical.color }}
                initial={{ width: '60px' }}
                animate={{
                  width: isHovered ? '120px' : '60px',
                }}
                transition={{ duration: 0.5 }}
              />

              {/* Description */}
              <motion.p
                className="text-base sm:text-lg lg:text-xl leading-relaxed mb-6 sm:mb-8"
                style={{ color: LIGHT }}
                animate={{
                  x: isHovered ? 5 : 0,
                }}
                transition={{ duration: 0.4, delay: 0.1 }}
              >
                {vertical.description}
              </motion.p>

              {/* CTA Arrow */}
              <motion.div
                className="flex items-center gap-3 text-sm sm:text-base font-semibold"
                style={{ color: vertical.color }}
                animate={{
                  x: isHovered ? 10 : 0,
                }}
                transition={{ duration: 0.4, delay: 0.15 }}
              >
                <span className="tracking-wider">DÉCOUVRIR</span>
                <motion.div
                  animate={{
                    x: isHovered ? 5 : 0,
                  }}
                  transition={{ duration: 0.3, repeat: isHovered ? Infinity : 0, repeatType: "reverse" }}
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke={vertical.color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </motion.div>
              </motion.div>
            </div>

            {/* Geometric Pattern */}
            <div className="absolute bottom-0 right-0 w-32 sm:w-48 h-32 sm:h-48 opacity-5 pointer-events-none">
              <svg viewBox="0 0 200 200" fill="none">
                <circle cx="100" cy="100" r="80" stroke={vertical.color} strokeWidth="2"/>
                <circle cx="100" cy="100" r="60" stroke={vertical.color} strokeWidth="1.5"/>
                <circle cx="100" cy="100" r="40" stroke={vertical.color} strokeWidth="1"/>
                <line x1="100" y1="20" x2="100" y2="180" stroke={vertical.color} strokeWidth="1"/>
                <line x1="20" y1="100" x2="180" y2="100" stroke={vertical.color} strokeWidth="1"/>
              </svg>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}