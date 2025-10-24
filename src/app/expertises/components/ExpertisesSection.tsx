'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Lightbulb, Compass, Cog, ArrowRight } from 'lucide-react';

const GOLD = "#A98142";
const LIGHT = "#E6E6E6";
const DARK = "#1C1C1B";

interface Expertise {
  id: string;
  title: string;
  description: string;
  image: string;
  icon: any;
}

export default function ExpertisesSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const expertises: Expertise[] = [
    {
      id: "conseil-strategie",
      title: "Conseil & stratégie",
      description: "Nous concevons avec nos partenaires des stratégies sur mesure, fondées sur la compréhension des enjeux, la créativité et la performance. De la définition de la vision à la planification opérationnelle, nous accompagnons chaque projet avec exigence et précision.",
      image: "/conseil-strategie.png",
      icon: Lightbulb
    },
    {
      id: "conception-planification",
      title: "Conception & planification",
      description: "Nos équipes d’experts imaginent et orchestrent des concepts créatifs alliant esthétisme et efficacité. Chaque idée devient un plan concret, pensé dans les moindres détails pour garantir la cohérence, la fluidité et la réussite de l’exécution.",
      image: "/conception-planification.jpg",
      icon: Compass
    },
    {
      id: "production-logistique",
      title: "Production & logistique",
      description: "Nous assurons une production complète et maîtrisée, de la conception à la mise en œuvre sur le terrain. Grâce à nos équipes techniques et nos infrastructures intégrées, chaque projet est exécuté avec rigueur, qualité et réactivité.",
      image: "/production-logistique.jpg",
      icon: Cog
    }
  ];

  const getFlexValue = (index: number) => {
    if (hoveredIndex === null) return 1;
    if (hoveredIndex === index) return 2.5;
    return 0.5;
  };

  return (
    <section className="relative overflow-hidden" style={{ backgroundColor: DARK }}>
      <div className="flex flex-col lg:flex-row h-auto lg:h-screen min-h-[600px]">
        {expertises.map((expertise, index) => {
          const Icon = expertise.icon;
          const isHovered = hoveredIndex === index;
          const isOtherHovered = hoveredIndex !== null && hoveredIndex !== index;
          const isMobile = typeof window !== 'undefined' && window.innerWidth < 1024;

          return (
            <motion.div
              key={expertise.id}
              className="relative cursor-pointer overflow-hidden min-h-[500px] lg:min-h-0"
              style={{
                flex: getFlexValue(index),
              }}
              animate={{
                flex: getFlexValue(index),
              }}
              transition={{
                duration: 0.6,
                ease: [0.4, 0, 0.2, 1],
              }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Background Image */}
              <div className="absolute inset-0">
                <motion.img
                  src={expertise.image}
                  alt={expertise.title}
                  className="w-full h-full object-cover"
                  animate={{
                    scale: isHovered ? 1.1 : 1,
                  }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                />
                {/* Overlay */}
                <motion.div
                  className="absolute inset-0"
                  animate={{
                    background: isHovered
                      ? `linear-gradient(135deg, ${DARK}95 0%, ${DARK}75 100%)`
                      : isOtherHovered
                      ? `${DARK}E6`
                      : `${DARK}B3`,
                  }}
                  transition={{ duration: 0.4 }}
                />
              </div>

              {/* Content */}
              <div className="relative h-full flex flex-col justify-between p-8 lg:p-12">
                {/* Top Section */}
                <div>
                  <motion.div
                    animate={{
                      scale: isHovered ? 1 : 0.9,
                      opacity: isOtherHovered ? 0.3 : 1,
                    }}
                    transition={{ duration: 0.4 }}
                  >
                    {/* Icon */}
                    <motion.div
                      className="inline-flex items-center justify-center w-16 h-16 lg:w-20 lg:h-20 rounded-2xl mb-6 lg:mb-8"
                      style={{ backgroundColor: `${GOLD}20`, border: `2px solid ${GOLD}` }}
                      animate={{
                        backgroundColor: isHovered ? GOLD : `${GOLD}20`,
                        rotate: isHovered ? 360 : 0,
                      }}
                      transition={{ duration: 0.6 }}
                    >
                      <Icon 
                        size={isHovered ? 36 : 32} 
                        style={{ color: isHovered ? DARK : GOLD }}
                      />
                    </motion.div>

                    {/* Number Badge */}
                    <motion.div
                      className="inline-block px-4 py-2 rounded-full text-sm font-bold tracking-wider mb-4"
                      style={{ 
                        backgroundColor: `${GOLD}20`,
                        color: GOLD,
                        border: `1px solid ${GOLD}40`
                      }}
                    >
                      0{index + 1}
                    </motion.div>
                  </motion.div>
                </div>

                {/* Middle Section - Title */}
                <div className="flex-1 flex items-center">
                  <motion.h3
                    className="font-bold text-white"
                    style={{
                      writingMode: (isHovered || isMobile) ? 'horizontal-tb' : 'vertical-rl',
                      transform: (isHovered || isMobile) ? 'none' : 'rotate(180deg)',
                    }}
                    animate={{
                      fontSize: isHovered ? 'clamp(2rem, 5vw, 4rem)' : 'clamp(1.5rem, 3vw, 2.5rem)',
                      opacity: isOtherHovered ? 0.3 : 1,
                      letterSpacing: isHovered ? '-0.02em' : '0em',
                    }}
                    transition={{ 
                      duration: 0.4,
                      writingMode: { duration: 0 },
                    }}
                  >
                    {expertise.title}
                  </motion.h3>
                </div>

                {/* Bottom Section - Description & CTA */}
                <AnimatePresence>
                  {isHovered && (
                    <motion.div
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 20 }}
                      transition={{ duration: 0.4, delay: 0.1 }}
                      className="space-y-6"
                    >
                      {/* Decorative Line */}
                      <motion.div
                        className="h-1 rounded-full"
                        style={{ backgroundColor: GOLD }}
                        initial={{ width: 0 }}
                        animate={{ width: '80px' }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                      />

                      {/* Description */}
                      <p className="text-lg lg:text-xl leading-relaxed" style={{ color: LIGHT }}>
                        {expertise.description}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Vertical Divider */}
              {index < expertises.length - 1 && (
                <div 
                  className="lg:hidden h-px w-full"
                  style={{ backgroundColor: `${GOLD}30` }}
                />
              )}
              {index < expertises.length - 1 && (
                <div 
                  className="hidden lg:block absolute right-0 top-0 w-px h-full"
                  style={{ backgroundColor: `${GOLD}30` }}
                />
              )}
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}