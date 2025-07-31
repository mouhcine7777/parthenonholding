import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

// Define brand colors as constants with light theme
const GOLD = "#A98142";
const LIGHT = "#FFFFFF";
const DARK = "#333333";
const BG_LIGHT = "#F8F8F8";

export default function ParthenonAboutSection() {
  const containerRef = useRef(null);
  
  // Animation variants
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

  const expertiseVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.3 + (0.2 * i),
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1]
      }
    })
  };
  
  return (
    <div 
      ref={containerRef}
      className="relative overflow-hidden" 
      style={{ backgroundColor: BG_LIGHT, minHeight: "100vh" }}
    >
      {/* Simple clean background */}
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-white to-gray-100"></div>
      
      {/* About Section */}
      <div className="container mx-auto relative z-10 pt-24 pb-16 px-4 md:px-6">
        <div className="max-w-4xl mx-auto text-center">
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
        
          {/* Main title with single color */}
          <motion.h1 
            className="text-4xl md:text-6xl font-bold mb-8 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            style={{ color: GOLD }}
          >
            LES PILLIERS DE LA PERFORMANCE
          </motion.h1>
          
          {/* Main description */}
          <motion.div 
            className="mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.7 }}
          >
            <p className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto">
              Depuis 2002, Parthenon Holding tend à s'illustrer comme un guichet unique, capable de satisfaire au mieux 
              les attentes d'un public varié, que ce soit sur le plan événementiel, audiovisuel ou encore des loisirs. 
              Comptant pas moins de 8 filiales regroupées en pôles d'expertise, -Live, Services et Loisirs-, Parthenon 
              met au service des institutions, des PME et des grands groupes leaders sur le marché, une synergie de 
              compétences guidée par la rigueur, l'excellence et l'innovation.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto mt-4">
              Sensible depuis sa création aux questions environnementales, l'entreprise relève chaque jour le défi 
              de réaliser les projets les plus ambitieux en s'inscrivant dans une démarche durable, notamment à travers 
              le recyclage des matières premières et l'équipement de ses ateliers pour la production d'énergie renouvelable.
            </p>
          </motion.div>
        </div>
        
        {/* Expertise Section */}
        <div className="mt-24">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.7 }}
            style={{ color: GOLD }}
          >
            3 EXPERTISES
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-16">
            {[
              {
                title: "CONSEIL & STRATEGIE",
                icon: (
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12Z" stroke={GOLD} strokeWidth="1.5"/>
                    <path d="M13 2.05C13 2.05 16 5 16 12C16 19 13 21.95 13 21.95" stroke={GOLD} strokeWidth="1.5"/>
                    <path d="M11 21.95C11 21.95 8 19 8 12C8 5 11 2.05 11 2.05" stroke={GOLD} strokeWidth="1.5"/>
                    <path d="M2.63 15.5H21.37" stroke={GOLD} strokeWidth="1.5"/>
                    <path d="M2.63 8.5H21.37" stroke={GOLD} strokeWidth="1.5"/>
                  </svg>
                ),
                description: "Notre équipe veille à définir avec chaque client une stratégie ajustée et percutante, découlant naturellement de sa vision. Au côté de notre client, nous nous posons comme un véritable partenaire de réussite.",
                number: "01"
              },
              {
                title: "CONCEPTION & PLANIFICATION",
                icon: (
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M21 9V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19V9" stroke={GOLD} strokeWidth="1.5"/>
                    <path d="M3 9L12 2L21 9" stroke={GOLD} strokeWidth="1.5"/>
                    <path d="M9 21V17C9 15.8954 9.89543 15 11 15H13C14.1046 15 15 15.8954 15 17V21" stroke={GOLD} strokeWidth="1.5"/>
                    <path d="M8 10H8.01" stroke={GOLD} strokeWidth="2" strokeLinecap="round"/>
                    <path d="M16 10H16.01" stroke={GOLD} strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                ),
                description: "Qu'il s'agisse de communication, d'événementiel ou de marketing, l'ensemble du Pôle Live projette dans le temps des concepts personnalisés, novateurs et impactants.",
                number: "02"
              },
              {
                title: "PRODUCTION & LOGISTIQUE",
                icon: (
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8 19C9.10457 19 10 18.1046 10 17C10 15.8954 9.10457 15 8 15C6.89543 15 6 15.8954 6 17C6 18.1046 6.89543 19 8 19Z" stroke={GOLD} strokeWidth="1.5"/>
                    <path d="M16 19C17.1046 19 18 18.1046 18 17C18 15.8954 17.1046 15 16 15C14.8954 15 14 15.8954 14 17C14 18.1046 14.8954 19 16 19Z" stroke={GOLD} strokeWidth="1.5"/>
                    <path d="M10.05 17H14V6.75C14 6.33579 13.6642 6 13.25 6H3.5" stroke={GOLD} strokeWidth="1.5"/>
                    <path d="M18 17H21.5V12.75C21.5 12.3358 21.1642 12 20.75 12H14" stroke={GOLD} strokeWidth="1.5"/>
                    <path d="M2 9H6" stroke={GOLD} strokeWidth="1.5"/>
                  </svg>
                ),
                description: "Visant une approche intégrée de l'ensemble de nos projets d'accompagnement, nous avons fait de nos métiers supports, que sont la logistique et la production, une vraie force d'action.",
                number: "03"
              }
            ].map((expertise, index) => (
              <motion.div
                key={index}
                className="relative group"
                custom={index}
                variants={expertiseVariants}
                initial="hidden"
                animate="visible"
              >
                {/* Numbered background */}
                <div 
                  className="absolute -right-4 -top-10 text-8xl font-bold opacity-5 z-0 transition-all duration-500 group-hover:opacity-10"
                  style={{ color: GOLD }}
                >
                  {expertise.number}
                </div>
                
                {/* Main card */}
                <motion.div 
                  className="bg-white p-8 rounded-lg shadow-xl relative overflow-hidden z-10 h-full border-t-4 transition-all duration-500 group-hover:shadow-2xl"
                  style={{ borderColor: GOLD }}
                  whileHover={{ 
                    y: -5,
                    transition: { duration: 0.3 }
                  }}
                >
                  {/* Icon container with animated border */}
                  <div className="relative mb-6">
                    <motion.div 
                      className="absolute -left-2 -top-2 w-16 h-16 rounded-full opacity-10"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 1.0 + (0.2 * index), duration: 0.5 }}
                      style={{ backgroundColor: GOLD }}
                    />
                    <div className="relative">
                      {expertise.icon}
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="relative">
                    {/* Animated underline */}
                    <motion.div
                      className="h-px w-16 mb-4"
                      initial={{ scaleX: 0, originX: 0 }}
                      animate={{ scaleX: 1 }}
                      transition={{ delay: 0.8 + (0.2 * index), duration: 0.7 }}
                      style={{ backgroundColor: GOLD }}
                    />
                    
                    <h3 className="text-xl font-bold mb-4 tracking-wide" style={{ color: DARK }}>
                      {expertise.title}
                    </h3>
                    
                    <p className="text-gray-700 leading-relaxed">
                      {expertise.description}
                    </p>
                    
                    {/* Hover indicator */}
                    <motion.div 
                      className="absolute bottom-0 left-0 h-px w-0 group-hover:w-full transition-all duration-500"
                      style={{ backgroundColor: GOLD }}
                    />
                  </div>
                
                  {/* Greek pattern overlay */}
                  <div className="absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2 opacity-5">
                    <svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M0,0 L120,0 L120,120 L0,120 Z M30,30 L90,30 M30,30 L30,90 M30,90 L90,90 M90,30 L90,90 M30,60 L90,60 M60,30 L60,90"
                        stroke={GOLD}
                        strokeWidth="3"
                      />
                    </svg>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}