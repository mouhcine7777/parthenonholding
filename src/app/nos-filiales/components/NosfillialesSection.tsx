'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Tv, Calendar, Palette, Building2, Home, Coffee, Sparkles } from 'lucide-react';

const GOLD = "#A98142";
const LIGHT = "#E6E6E6";
const DARK = "#1C1C1B";

interface Filiale {
  id: string;
  pole: string;
  name: string;
  description: string;
  expertise: string;
  image: string;
  icon: any;
}

export default function NosFilialesGrid() {
  const filiales: Filiale[] = [
    {
      id: "public-production",
      pole: "Pôle Live – production audiovisuelle",
      name: "Public Production",
      description: "Pionnière dans la conception d'émissions prime time, Public Production s'impose comme la référence pour la création de formats originaux et l'adaptation réussie de concepts internationaux. Elle a son actif des succès tels que Lalla Laâroussa, Jmaatna Zina ou encore Ahssan Pâtissier (adaptation de Bake Off). Synonyme de créativité sans faille et de capacité à captiver les audiences, elle reflète l'esprit innovant et culturel de Parthenon.",
      expertise: "Création de contenus TV, adaptation de formats internationaux, direction artistique.",
      image: "/filiales/PEP.jpg",
      icon: Tv
    },
    {
      id: "public-events",
      pole: "Pôle Live – production audiovisuelle",
      name: "Public Events",
      description: "Spécialiste de l'événementiel sur mesure, Public Events transforme les ambitions de grandes institutions (ONMT, OCP, EACCE, UM6P Rabat, ADA, FAIRPLATZ, Akwa Groupe, Ministère de l'Agriculture, NARSA, Sidi Ali, Danone, Coca Cola) en espaces immersifs et modulables, conçus pour des salons internationaux ou des pavillons étatiques.",
      expertise: "Scénographie, décoration, agencement de stands, logistique globale, gestion B2B.",
      image: "/filiales/publicevents.jpg",
      icon: Calendar
    },
    {
      id: "palooza-park",
      pole: "Pôle Loisirs",
      name: "Palooza Park Marrakech",
      description: "Le pôle loisirs se distincte par une réalisation inédite et audacieuse : Palooza Park Marrakech : le premier parc à thème du Royaume consacré aux dinosaures. Sur une superficie de pas moins de 24 000 m², il rassemble manèges, animatronics, musée interactif et animations éducatives.",
      expertise: "Design ludique, storytelling pédagogique, orchestration d'attractions et exploitation événementielle.",
      image: "/filiales/Palooza.jpg",
      icon: Sparkles
    },
    {
      id: "pbs",
      pole: "Pôle Services",
      name: "PBS",
      description: "Spécialisée dans les travaux publics, PBS s'affirme comme un acteur majeur de la construction et de l'aménagement. En synergie avec Public Events et Public Prod, elle assure des réalisations complètes, du gros œuvre aux finitions intérieures et à l'ameublement.",
      expertise: "Gros-œuvre, intérieur, design, intégration.",
      image: "/filiales/pbs.jpg",
      icon: Building2
    },
    {
      id: "integral-solutions",
      pole: "Pôle Services – scénographie & muséographie",
      name: "Integral Solutions",
      description: "Integral Solutions est la spécialiste de la location de mobilier et de matériel événementiel. Elle met à votre disposition un vaste catalogue de références couvrant tous les besoins, des équipements techniques aux solutions de décoration. Avec une offre diversifiée et évolutive, elle accompagne vos projets en alliant fiabilité, flexibilité et professionnalisme.",
      expertise: "Location de mobilier, matériel événementiel, solutions techniques.",
      image: "/filiales/Integral.jpg",
      icon: Home
    },
    {
      id: "garden-concept",
      pole: "Pôle Restauration/Hospitality",
      name: "Garden Concept",
      description: "Le concept Garden a la particularité de réunir trois expériences uniques et complémentaires au sein d'un même univers : Garden Brunch, Garden Bakes et Garden Room.",
      expertise: "Restauration haut de gamme, pâtisserie artisanale, espaces événementiels.",
      image: "/filiales/Gardenbrunch.jpg",
      icon: Coffee
    },
    {
      id: "oxygen-village",
      pole: "Pôle Restauration/Hospitality",
      name: "Oxygen Village",
      description: "Avec l'innovant projet OXYGEN VILLAGE, notre pôle Hospitality a imaginé un hébergement modulaire alliant confort, design et ingéniosité. Cette réalisation traduit l'ambition de Parthenon Holding de créer des expériences d'accueil modernes et fonctionnelles, et de redéfinir les standards de l'hébergement.",
      expertise: "Hébergement modulaire, design innovant, expériences d'accueil modernes.",
      image: "/filiales/oxygen.jpg",
      icon: Home
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="py-20 md:py-32 relative overflow-hidden bg-white">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div 
          className="absolute top-0 left-0 w-full h-full" 
          style={{
            backgroundImage: `radial-gradient(circle at 20% 20%, ${GOLD} 1px, transparent 1px), 
                              radial-gradient(circle at 80% 80%, ${GOLD} 1px, transparent 1px)`,
            backgroundSize: '60px 60px'
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Filiales List */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="space-y-16"
        >
          {filiales.map((filiale, index) => {
            const Icon = filiale.icon;
            const isEven = index % 2 === 0;

            return (
              <motion.div
                key={filiale.id}
                variants={cardVariants}
                className="group"
              >
                <div className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 lg:gap-12 items-center`}>
                  {/* Image Side */}
                  <div className="w-full lg:w-5/12 relative">
                    <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[340/470] max-w-md mx-auto lg:mx-0">
                      {/* Decorative corner */}
                      <div 
                        className="absolute top-0 right-0 w-32 h-32 z-10"
                        style={{
                          background: `linear-gradient(135deg, transparent 50%, ${GOLD}40 50%)`
                        }}
                      />
                      
                      <img
                        src={filiale.image}
                        alt={filiale.name}
                        className="w-full h-full object-cover"
                      />
                      
                      {/* Gradient overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                      
                      {/* Icon badge */}
                      <div
                        className="absolute bottom-6 left-6 w-16 h-16 rounded-full flex items-center justify-center backdrop-blur-md shadow-lg"
                        style={{ backgroundColor: `${GOLD}E6` }}
                      >
                        <Icon size={28} className="text-white" />
                      </div>
                    </div>
                  </div>

                  {/* Content Side */}
                  <div className="w-full lg:w-7/12 space-y-6">
                    {/* Pole Badge */}
                    <motion.span 
                      className="inline-block px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider"
                      style={{ 
                        backgroundColor: `${GOLD}15`,
                        color: GOLD
                      }}
                      initial={{ opacity: 0, x: isEven ? -20 : 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: 0.1 }}
                    >
                      {filiale.pole}
                    </motion.span>

                    {/* Title */}
                    <motion.div
                      initial={{ opacity: 0, x: isEven ? -20 : 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: 0.15 }}
                    >
                      <h3 className="text-3xl md:text-4xl font-bold" style={{ color: DARK }}>
                        {filiale.name}
                      </h3>
                      <motion.div 
                        className="w-20 h-1 mt-4"
                        style={{ backgroundColor: GOLD }}
                        initial={{ width: 0 }}
                        whileInView={{ width: 80 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                      />
                    </motion.div>

                    {/* Description */}
                    <motion.p 
                      className="text-base md:text-lg leading-relaxed"
                      style={{ color: `${DARK}DD` }}
                      initial={{ opacity: 0, x: isEven ? -20 : 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: 0.2 }}
                    >
                      {filiale.description}
                    </motion.p>

                    {/* Expertise Box */}
                    <motion.div
                      className="p-6 rounded-xl border-l-4"
                      style={{ 
                        backgroundColor: `${GOLD}08`,
                        borderColor: GOLD
                      }}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: 0.25 }}
                    >
                      <p className="text-xs uppercase tracking-widest font-semibold mb-2" style={{ color: GOLD }}>
                        Expertise
                      </p>
                      <p className="text-sm md:text-base" style={{ color: DARK }}>
                        {filiale.expertise}
                      </p>
                    </motion.div>
                  </div>
                </div>

                {/* Separator line (except for last item) */}
                {index < filiales.length - 1 && (
                  <motion.div
                    className="mt-16 h-px mx-auto"
                    style={{ 
                      background: `linear-gradient(to right, transparent, ${GOLD}30, transparent)`,
                      maxWidth: '80%'
                    }}
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
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