'use client';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

// Define brand colors as constants
const GOLD = "#A98142";
const LIGHT = "#E6E6E6";
const DARK = "#1C1C1B";

export default function ParthenonContactHero() {
  return (
    <div 
      className="relative overflow-hidden" 
      style={{ backgroundColor: DARK, height: "70vh" }}
    >
      
      {/* Content container */}
      <div className="container mx-auto relative z-10 h-full flex items-center justify-center px-4 md:px-6">
        <div className="max-w-4xl mx-auto text-center">
          {/* Subtitle with line effect */}
          <motion.div 
            className="flex items-center justify-center mb-6"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="h-px w-12 md:w-24 mr-4" style={{ backgroundColor: GOLD }} />
            <span className="uppercase tracking-widest text-sm md:text-base" style={{ color: GOLD }}>
              Parthenon Holding
            </span>
            <div className="h-px w-12 md:w-24 ml-4" style={{ backgroundColor: GOLD }} />
          </motion.div>
        
          {/* Main title */}
          <motion.h1 
            className="text-3xl md:text-4xl font-bold mb-6 leading-tight"
            style={{ color: LIGHT }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.7 }}
          >
            Laissez-nous transformer vos idées en expériences
          </motion.h1>
          
          {/* Descriptive text */}
          <motion.p 
            className="text-sm md:text-base max-w-2xl mx-auto leading-relaxed"
            style={{ color: LIGHT, opacity: 0.85 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.7 }}
          >
            Notre équipe est à votre disposition pour répondre à toutes vos questions et vous accompagner dans la réalisation de vos projets. Que ce soit pour un projet d'événement, une production audiovisuelle ou une collaboration créative, nos équipes sont à votre écoute.
          </motion.p>
          
          <motion.p 
            className="text-xs md:text-sm max-w-2xl mx-auto mt-3"
            style={{ color: GOLD, opacity: 0.9 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.7 }}
          >
            Écrivez-nous, nous reviendrons vers vous rapidement pour en discuter ensemble.
          </motion.p>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ delay: 1, duration: 1.5, repeat: Infinity }}
      >
        <ChevronDown className="w-6 h-6" style={{ color: GOLD }} />
      </motion.div>
    </div>
  );
}