'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Tv, Calendar, Palette, Building2, Home, Coffee, Sparkles } from 'lucide-react';

const GOLD = "#A98142";
const LIGHT = "#E6E6E6";
const DARK = "#1C1C1B";

interface Filiale {
  id: string;
  name: string;
  description: string;
  expertise: string;
  image: string;
  icon: any;
}

interface Pole {
  id: string;
  name: string;
  title: string;
  color: string;
  filiales: Filiale[];
}

export default function NosFilialesGrid() {
  const poles: Pole[] = [
    {
      id: "live",
      name: "Pôle Live",
      title: "",
      color: "#A98142",
      filiales: [
        {
          id: "public-events",
          name: "Public Events",
          description: "Spécialiste de l'événementiel sur mesure, Public Events transforme les ambitions de grandes institutions (ONMT, OCP, EACCE, UM6P Rabat, ADA, FAIRPLATZ, Akwa Groupe, Ministère de l'Agriculture, NARSA, Sidi Ali, Danone, Coca Cola) en espaces immersifs et modulables, conçus pour des salons internationaux ou des pavillons étatiques.",
          expertise: "Scénographie, décoration, agencement de stands, logistique globale, gestion B2B.",
          image: "/filiales/publicevents.jpg",
          icon: Calendar
        },
        {
          id: "public-production",
          name: "Public Production",
          description: "Pionnière dans la conception d'émissions prime time, Public Production s'impose comme la référence pour la création de formats originaux et l'adaptation réussie de concepts internationaux. Elle a son actif des succès tels que Lalla Laâroussa, Jmaatna Zina ou encore Ahssan Pâtissier (adaptation de Bake Off). Synonyme de créativité sans faille et de capacité à captiver les audiences, elle reflète l'esprit innovant et culturel de Parthenon.",
          expertise: "Création de contenus TV, adaptation de formats internationaux, direction artistique.",
          image: "/filiales/PEP.jpg",
          icon: Tv
        }
      ]
    },
    {
      id: "loisirs",
      name: "Pôle Loisirs",
      title: "",
      color: "#A98142",
      filiales: [
        {
          id: "palooza-park",
          name: "Palooza Park Marrakech",
          description: "Le pôle loisirs se distincte par une réalisation inédite et audacieuse : Palooza Park Marrakech : le premier parc à thème du Royaume consacré aux dinosaures. Sur une superficie de pas moins de 24 000 m², il rassemble manèges, animatronics, musée interactif et animations éducatives.",
          expertise: "Design ludique, storytelling pédagogique, orchestration d'attractions et exploitation événementielle.",
          image: "/filiales/Palooza.jpg",
          icon: Sparkles
        }
      ]
    },
    {
      id: "services",
      name: "Pôle Services",
      title: "",
      color: "#A98142",
      filiales: [
        {
          id: "pbs",
          name: "PBS",
          description: "Spécialisée dans les travaux publics, PBS s'affirme comme un acteur majeur de la construction et de l'aménagement. En synergie avec Public Events et Public Prod, elle assure des réalisations complètes, du gros œuvre aux finitions intérieures et à l'ameublement.",
          expertise: "Gros-œuvre, intérieur, design, intégration.",
          image: "/filiales/pbs.jpg",
          icon: Building2
        },
        {
          id: "integral-solutions",
          name: "Integral Solutions",
          description: "Integral Solutions est la spécialiste de la location de mobilier et de matériel événementiel. Elle met à votre disposition un vaste catalogue de références couvrant tous les besoins, des équipements techniques aux solutions de décoration. Avec une offre diversifiée et évolutive, elle accompagne vos projets en alliant fiabilité, flexibilité et professionnalisme.",
          expertise: "Location de mobilier, matériel événementiel, solutions techniques.",
          image: "/filiales/Integral.jpg",
          icon: Home
        }
      ]
    },
    {
      id: "hospitality",
      name: "Pôle Restauration",
      title: "",
      color: "#A98142",
      filiales: [
        {
          id: "garden-concept",
          name: "Garden Concept",
          description: "Le concept Garden a la particularité de réunir trois expériences uniques et complémentaires au sein d'un même univers : Garden Brunch, Garden Bakes et Garden Room.",
          expertise: "Restauration haut de gamme, pâtisserie artisanale, espaces événementiels.",
          image: "/filiales/Gardenbrunch.jpg",
          icon: Coffee
        },
        {
          id: "oxygen-village",
          name: "Oxygen Village",
          description: "Avec l'innovant projet OXYGEN VILLAGE, notre pôle Hospitality a imaginé un hébergement modulaire alliant confort, design et ingéniosité. Cette réalisation traduit l'ambition de Parthenon Holding de créer des expériences d'accueil modernes et fonctionnelles, et de redéfinir les standards de l'hébergement.",
          expertise: "Hébergement modulaire, design innovant, expériences d'accueil modernes.",
          image: "/filiales/oxygen.jpg",
          icon: Home
        }
      ]
    }
  ];

  const [activeTab, setActiveTab] = useState("live");
  const activePole = poles.find(p => p.id === activeTab) || poles[0];

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
        {/* Tabs Navigation */}
        <div className="mb-12">
          <div className="flex flex-wrap gap-3 justify-center px-4">
            {poles.map((pole) => (
              <motion.button
                key={pole.id}
                onClick={() => setActiveTab(pole.id)}
                className="relative px-6 md:px-8 py-3 md:py-4 rounded-full font-semibold text-xs sm:text-sm md:text-base transition-all duration-300"
                style={{
                  backgroundColor: activeTab === pole.id ? GOLD : `${GOLD}15`,
                  color: activeTab === pole.id ? 'white' : GOLD,
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="relative z-10">{pole.name}</span>
                {activeTab === pole.id && (
                  <motion.div
                    className="absolute inset-0 rounded-full"
                    style={{ backgroundColor: GOLD }}
                    layoutId="activeTab"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </motion.button>
            ))}
          </div>
        </div>

        {/* Tab Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            {/* Filiales Grid */}
            <div className="space-y-16">
              {activePole.filiales.map((filiale, index) => {
                const Icon = filiale.icon;
                const isEven = index % 2 === 0;

                return (
                  <motion.div
                    key={filiale.id}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 * index, duration: 0.5 }}
                    className="group"
                  >
                    <div className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 lg:gap-12 items-center`}>
                      {/* Image Side */}
                      <div className="w-full lg:w-5/12 relative">
                        <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[340/470] max-w-md mx-auto lg:mx-0 group-hover:shadow-3xl transition-shadow duration-300">
                          {/* Decorative corner */}
                          <div 
                            className="absolute top-0 right-0 w-32 h-32 z-10"
                            style={{
                              background: `linear-gradient(135deg, transparent 50%, ${GOLD}40 50%)`
                            }}
                          />
                          
                          <motion.img
                            src={filiale.image}
                            alt={filiale.name}
                            className="w-full h-full object-cover"
                            whileHover={{ scale: 1.05 }}
                            transition={{ duration: 0.3 }}
                          />
                          
                          {/* Gradient overlay */}
                          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                          
                          {/* Icon badge */}
                          <motion.div
                            className="absolute bottom-6 left-6 w-16 h-16 rounded-full flex items-center justify-center backdrop-blur-md shadow-lg"
                            style={{ backgroundColor: `${GOLD}F0` }}
                            whileHover={{ scale: 1.1, rotate: 5 }}
                            transition={{ type: "spring", stiffness: 300 }}
                          >
                            <Icon size={28} className="text-white" />
                          </motion.div>
                        </div>
                      </div>

                      {/* Content Side */}
                      <div className="w-full lg:w-7/12 space-y-6">
                        {/* Title */}
                        <div>
                          <h4 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: DARK }}>
                            {filiale.name}
                          </h4>
                          <motion.div 
                            className="w-20 h-1"
                            style={{ backgroundColor: GOLD }}
                            initial={{ width: 0 }}
                            animate={{ width: 80 }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                          />
                        </div>

                        {/* Description */}
                        <p 
                          className="text-base md:text-lg leading-relaxed"
                          style={{ color: `${DARK}DD` }}
                        >
                          {filiale.description}
                        </p>

                        {/* Expertise Box */}
                        <motion.div
                          className="p-6 rounded-xl border-l-4"
                          style={{ 
                            backgroundColor: `${GOLD}08`,
                            borderColor: GOLD
                          }}
                          whileHover={{ x: 5 }}
                          transition={{ type: "spring", stiffness: 300 }}
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

                    {/* Separator line (except for last item in each pole) */}
                    {index < activePole.filiales.length - 1 && (
                      <motion.div
                        className="mt-16 h-px mx-auto"
                        style={{ 
                          background: `linear-gradient(to right, transparent, ${GOLD}30, transparent)`,
                          maxWidth: '80%'
                        }}
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                      />
                    )}
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}