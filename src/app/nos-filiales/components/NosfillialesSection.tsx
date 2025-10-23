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
          description: "Spécialiste de l’événementiel sur mesure, Public Events conçoit des expériences immersives et modulables pour les grandes institutions, du design à la logistique globale.",
          expertise: "Scénographie, agencement, logistique, gestion B2B.",
          image: "/filiales/publicevents.jpg",
          icon: Calendar
        },
        {
          id: "public-production",
          name: "Public Évènement Productions",
          description: "Référence de la production audiovisuelle marocaine, Public Production crée et adapte des formats originaux pour la télévision et le digital, alliant créativité et exigence artistique.",
          expertise: "Création de contenus TV, adaptation de formats internationaux, direction artistique.",
          image: "/filiales/PEP.jpg",
          icon: Tv
        }
      ]
    },
    {
      id: "loisirs",
      name: "Pôle Loisirs & Hospitality",
      title: "",
      color: "#A98142",
      filiales: [
        {
          id: "palooza-park",
          name: "Palooza Park Marrakech",
          description: "Premier parc à thème du Royaume dédié aux dinosaures, Palooza Park Marrakech allie divertissement, pédagogie et expérience familiale immersive.",
          expertise: "Design ludique, storytelling pédagogique, exploitation événementielle.",
          image: "/filiales/Palooza.jpg",
          icon: Sparkles
        },
        {
          id: "sky-jump",
          name: "Skyjump Casablanca",
          description: "Espace de loisirs indoor dédié au trampoline et à l’amusement pour tous les âges, Skyjump combine sport, énergie et divertissement dans une ambiance urbaine et familiale.",
          expertise: "Gestion de parcs indoor, animation ludique, expérience client dynamique.",
          image: "/filiales/Skyjump.jpg",
          icon: Sparkles
        },
        {
          id: "garden-brunch",
          name: "Garden Brunch",
          description: "Concept de brunch savoureux proposant diverses formules dans un cadre élégant et convivial, où la gastronomie rencontre l'art de vivre.",
          expertise: "Restauration haut de gamme, brunch gastronomique, expérience culinaire.",
          image: "/filiales/Gardenbrunch.jpg",
          icon: Coffee
        },
        {
          id: "garden-bakes",
          name: "Garden Bake's",
          description: "Boulangerie artisanale où la tradition du pain et de la viennoiserie rencontre l'élégance d'un espace chaleureux et contemporain.",
          expertise: "Boulangerie artisanale, viennoiserie premium, pâtisserie française.",
          image: "/filiales/Gardenbakes.jpg",
          icon: Coffee
        },
        {
          id: "garden-room",
          name: "Garden Room",
          description: "Concept gourmand autour de brioches salées et sucrées, servies tout au long de la journée dans une ambiance douce et contemporaine.",
          expertise: "Brioches artisanales, restauration rapide premium, ambiance cosy.",
          image: "/filiales/gardenroom.jpg",
          icon: Coffee
        },
        {
          id: "oxygen-village",
          name: "Oxygen Village",
          description: "Projet d'hébergement modulaire éco-conçu, Oxygen Village combine confort, design et durabilité pour redéfinir les standards modernes de l'accueil.",
          expertise: "Hébergement modulaire, design innovant, expériences d'accueil modernes.",
          image: "/filiales/oxygen.jpg",
          icon: Home
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
          description: "Spécialisée dans la construction et l’aménagement, PBS associe expertise technique et design intégré pour réaliser des projets complets, du gros œuvre aux finitions.",
          expertise: "Construction, aménagement, intégration technique, design intérieur.",
          image: "/filiales/pbs.jpg",
          icon: Building2
        },
        {
          id: "integral-solutions",
          name: "Integral Solutions",
          description: "pécialiste de la location de mobilier et de matériel événementiel, Integral Solutions accompagne les projets d’aménagement avec flexibilité, réactivité et sens du détail.",
          expertise: "Location de mobilier, solutions techniques et logistiques événementielles.",
          image: "/filiales/Integral.jpg",
          icon: Home
        },
        {
          id: "ateliers-dko",
          name: "Les Ateliers DKO",
          description: "Espace de conception et de fabrication de mobilier sur mesure, Les Ateliers DKO allient savoir-faire artisanal et technologies modernes pour créer des aménagements uniques et durables, adaptés aux besoins des professionnels comme des particuliers.",
          expertise: "Fabrication de mobilier sur mesure, agencement d’espaces, menuiserie haut de gamme.",
          image: "/filiales/ateliersdko.jpg",
          icon: Home
        },
        {
          id: "pbs",
          name: "Aquila Sécurité",
          description: "Entreprise spécialisée dans la sécurité privée, Aquila propose des solutions complètes de protection pour les sites professionnels, les événements et les résidences. Son équipe de vigiles qualifiés veille à la sûreté des biens et des personnes, avec rigueur et professionnalisme.",
          expertise: "Sécurité privée, gardiennage, protection d’événements et surveillance de sites sensibles.",
          image: "/filiales/aquila.jpg",
          icon: Building2
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