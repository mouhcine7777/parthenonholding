'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Lightbulb, Compass, Cog } from 'lucide-react';

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
  const expertises: Expertise[] = [
    {
      id: "conseil-strategie",
      title: "Conseil & stratégie",
      description: "Nous construisons avec vous une stratégie puissante et personnalisée, et nous vous accompagnons à chaque étape de votre projet, pour concrétiser vos idées avec succès.",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80",
      icon: Lightbulb
    },
    {
      id: "conception-planification",
      title: "Conception & planification",
      description: "Que ce soit pour la communication, l'événementiel ou le marketing, nos équipes imaginent des concepts originaux et performants, toujours en phase avec vos objectifs.",
      image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=800&q=80",
      icon: Compass
    },
    {
      id: "production-logistique",
      title: "Production & logistique",
      description: "Nous vous garantissons un accompagnement de A à Z. De la production à la logistique en passant par l'exécution, chaque étape est coordonnée, optimisée et maîtrisée grâce à notre approche intégrée.",
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=80",
      icon: Cog
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="py-20 md:py-32 relative overflow-hidden" style={{ backgroundColor: LIGHT }}>
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div 
          className="absolute top-0 left-0 w-full h-full" 
          style={{
            backgroundImage: `radial-gradient(circle at 30% 40%, ${GOLD} 1px, transparent 1px), 
                              radial-gradient(circle at 70% 60%, ${GOLD} 1px, transparent 1px)`,
            backgroundSize: '80px 80px'
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">

        {/* Expertises List */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="space-y-16 md:space-y-24"
        >
          {expertises.map((expertise, index) => {
            const Icon = expertise.icon;
            const isEven = index % 2 === 0;

            return (
              <motion.div
                key={expertise.id}
                variants={cardVariants}
                className="group"
              >
                <div className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 lg:gap-16 items-center`}>
                  {/* Image Side */}
                  <div className="w-full lg:w-1/2 relative">
                    <motion.div 
                      className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/3]"
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.3 }}
                    >
                      {/* Decorative frame */}
                      <div 
                        className="absolute inset-0 z-10 pointer-events-none"
                        style={{
                          border: `3px solid ${GOLD}40`,
                          borderRadius: '1rem'
                        }}
                      />
                      
                      <img
                        src={expertise.image}
                        alt={expertise.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      
                      {/* Gradient overlay */}
                      <div className="absolute inset-0 bg-gradient-to-br from-black/40 via-transparent to-black/20" />
                      
                      {/* Icon badge */}
                      <motion.div
                        className="absolute top-6 right-6 w-16 h-16 rounded-full flex items-center justify-center backdrop-blur-md shadow-xl"
                        style={{ backgroundColor: `${GOLD}F2` }}
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.6 }}
                      >
                        <Icon size={28} className="text-white" />
                      </motion.div>

                      {/* Number badge */}
                      <div
                        className="absolute bottom-6 left-6 w-12 h-12 rounded-lg flex items-center justify-center font-bold text-2xl backdrop-blur-sm"
                        style={{ 
                          backgroundColor: `${DARK}E6`,
                          color: GOLD
                        }}
                      >
                        {index + 1}
                      </div>
                    </motion.div>
                  </div>

                  {/* Content Side */}
                  <div className="w-full lg:w-1/2 space-y-6">
                    {/* Title */}
                    <motion.div
                      initial={{ opacity: 0, x: isEven ? -30 : 30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.1 }}
                    >
                      <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold" style={{ color: DARK }}>
                        {expertise.title}
                      </h3>
                      <motion.div 
                        className="w-20 h-1.5 mt-5 rounded-full"
                        style={{ backgroundColor: GOLD }}
                        initial={{ width: 0 }}
                        whileInView={{ width: 80 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                      />
                    </motion.div>

                    {/* Description */}
                    <motion.p 
                      className="text-lg md:text-xl leading-relaxed"
                      style={{ color: `${DARK}E6` }}
                      initial={{ opacity: 0, x: isEven ? -30 : 30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                    >
                      {expertise.description}
                    </motion.p>

                    {/* Decorative quote mark */}
                    <motion.div
                      className="pt-4"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.3 }}
                    >
                      <div 
                        className="inline-block text-6xl font-serif leading-none opacity-20"
                        style={{ color: GOLD }}
                      >
                        "
                      </div>
                    </motion.div>
                  </div>
                </div>

                {/* Separator line (except for last item) */}
                {index < expertises.length - 1 && (
                  <motion.div
                    className="mt-16 md:mt-24 h-px mx-auto"
                    style={{ 
                      background: `linear-gradient(to right, transparent, ${GOLD}40, transparent)`,
                      maxWidth: '70%'
                    }}
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                  />
                )}
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}