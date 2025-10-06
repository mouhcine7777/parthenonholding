'use client';
import { useState, useEffect, useRef } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { Target, Users, Zap, Leaf, Circle } from 'lucide-react';

const GOLD = "#A98142";
const DARK = "#333333";
const LIGHT_GOLD = "#D4C4A8";
const BG_LIGHT = "#FAFAFA";

export default function ParthenonAboutSection() {
  const containerRef = useRef(null);
  const missionRef = useRef(null);
  const valuesRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: containerRef });
  
  const missionInView = useInView(missionRef, { once: true, margin: "-100px" });
  const valuesInView = useInView(valuesRef, { once: true, margin: "-100px" });

  // Parallax effects for background elements
  const y1 = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const y2 = useTransform(scrollYProgress, [0, 1], ["0%", "-20%"]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 45]);

  return (
    <div 
      ref={containerRef}
      className="relative overflow-hidden"
      style={{ backgroundColor: BG_LIGHT, minHeight: "100vh" }}
    >
      {/* Artistic Background Elements */}
      <div className="absolute inset-0">
        {/* Large geometric shapes */}
        <motion.div 
          className="absolute -top-40 -right-40 w-80 h-80 rounded-full opacity-5"
          style={{ 
            backgroundColor: GOLD,
            y: y1,
            rotate: rotate
          }}
        />
        <motion.div 
          className="absolute top-1/3 -left-32 w-64 h-64 rounded-full opacity-3"
          style={{ 
            backgroundColor: GOLD,
            y: y2
          }}
        />
        
        {/* Flowing lines */}
        <svg className="absolute inset-0 w-full h-full" style={{ zIndex: 0 }}>
          <defs>
            <linearGradient id="flowGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style={{ stopColor: GOLD, stopOpacity: 0.1 }} />
              <stop offset="100%" style={{ stopColor: GOLD, stopOpacity: 0.03 }} />
            </linearGradient>
          </defs>
          <path 
            d="M-100,100 Q400,200 800,150 Q1200,100 1600,300"
            stroke="url(#flowGradient)"
            strokeWidth="2"
            fill="none"
          />
          <path 
            d="M-100,300 Q600,400 1200,350 Q1600,300 2000,500"
            stroke="url(#flowGradient)"
            strokeWidth="1"
            fill="none"
          />
        </svg>

      </div>

      <div className="container mx-auto px-6 py-24 relative z-10">
        
        {/* Mission & DNA Section */}
        <motion.div 
          ref={missionRef}
          className="max-w-7xl mx-auto mb-32"
        >
          {/* Section Header */}
          <div className="grid lg:grid-cols-2 gap-16 items-start mb-20">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={missionInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <motion.div 
                className="flex items-center mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={missionInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.1 }}
              >
                <motion.div 
                  className="w-16 h-px mr-6"
                  style={{ backgroundColor: GOLD }}
                  initial={{ scaleX: 0 }}
                  animate={missionInView ? { scaleX: 1 } : {}}
                  transition={{ delay: 0.5, duration: 0.8 }}
                />
                <span 
                  className="uppercase tracking-[0.2em] text-sm font-medium"
                  style={{ color: GOLD }}
                >
                  À propos
                </span>
              </motion.div>
              
              <h2 className="text-5xl lg:text-6xl font-bold mb-8 leading-tight" style={{ color: DARK }}>
                Parthenon Holding
              </h2>
            </motion.div>

            <motion.div
              className="lg:pt-16"
              initial={{ opacity: 0, x: 50 }}
              animate={missionInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div className="text-lg leading-relaxed space-y-6" style={{ color: DARK }}>
                <p>
                Depuis plus de vingt ans, nos valeurs guident notre façon de créer, de collaborer et d’imaginer l’avenir.
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Values Section - Flowing Layout */}
        <motion.div 
          ref={valuesRef}
          className="max-w-7xl mx-auto"
        >
          <motion.div 
            className="mb-20"
            initial={{ opacity: 0, y: 30 }}
            animate={valuesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <div className="text-center max-w-4xl mx-auto">
              <h3 className="text-4xl lg:text-5xl font-bold mb-6" style={{ color: DARK }}>
                Nos Valeurs
                <span className="block text-3xl lg:text-4xl font-light italic mt-2" style={{ color: GOLD }}>
                  Fondamentales
                </span>
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                Quatre piliers qui définissent notre identité et guident chacune de nos actions
              </p>
            </div>
          </motion.div>

          {/* Values Grid - Asymmetric Layout */}
          <div className="grid lg:grid-cols-2 gap-x-20 gap-y-16">
            {[
              {
                icon: <Target className="w-12 h-12" />,
                title: "AUDACE & AMBITION",
                description: "Oser l'inhabituel pour offrir des expériences mémorables qui marquent les esprits et transforment les événements en souvenirs inoubliables.",
                position: "left",
                delay: 0.2
              },
              {
                icon: <Users className="w-12 h-12" />,
                title: "ESPRIT D'ÉQUIPE & PERFORMANCE",
                description: "La force du collectif pour des projets créatifs et maîtrisés, où chaque talent contribue à l'excellence du résultat final.",
                position: "right",
                delay: 0.4
              },
              {
                icon: <Zap className="w-12 h-12" />,
                title: "INNOVATION CONTINUE",
                description: "Anticiper les tendances pour proposer des solutions modernes et impactantes, toujours à la pointe de la technologie et de la créativité.",
                position: "left",
                delay: 0.6
              },
              {
                icon: <Leaf className="w-12 h-12" />,
                title: "RESPONSABILITÉ & DURABILITÉ",
                description: "Bâtir des projets pérennes et respectueux grâce à notre vision P.A.C, en harmonie avec l'environnement et les générations futures.",
                position: "right",
                delay: 0.8
              }
            ].map((value, index) => (
              <motion.div
                key={index}
                className={`relative ${value.position === 'right' ? 'lg:mt-16' : ''}`}
                initial={{ opacity: 0, x: value.position === 'left' ? -50 : 50 }}
                animate={valuesInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: value.delay, duration: 0.8 }}
              >
                <div className="flex items-start space-x-6 group">
                  {/* Icon */}
                  <motion.div 
                    className="flex-shrink-0 p-4 rounded-full transition-all duration-300 group-hover:scale-110"
                    style={{ backgroundColor: `${GOLD}15` }}
                    whileHover={{ 
                      backgroundColor: `${GOLD}25`,
                      rotate: 10
                    }}
                  >
                    <div style={{ color: GOLD }}>
                      {value.icon}
                    </div>
                  </motion.div>

                  {/* Content */}
                  <div className="flex-1">
                    <h4 
                      className="text-xl font-bold mb-4 uppercase tracking-wide group-hover:text-gold transition-colors"
                      style={{ color: DARK }}
                    >
                      {value.title}
                    </h4>
                    <p className="text-gray-600 leading-relaxed mb-4">
                      {value.description}
                    </p>
                    
                    {/* Decorative line */}
                    <motion.div 
                      className="h-px w-0 group-hover:w-16 transition-all duration-500"
                      style={{ backgroundColor: GOLD }}
                    />
                  </div>
                </div>

                {/* Background number */}
                <div 
                  className="absolute -top-4 right-8 text-8xl font-bold opacity-5 pointer-events-none"
                  style={{ color: GOLD }}
                >
                  {String(index + 1).padStart(2, '0')}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}