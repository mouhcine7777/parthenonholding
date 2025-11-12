'use client';
import { useState, useEffect, useRef } from 'react';
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
          description: "Spécialiste de l'événementiel sur mesure, Public Events conçoit des expériences immersives et modulables pour des projets d'envergure, du design à la logistique globale.",
          expertise: "Création de concepts, scénographie, agencement et logistique.",
          image: "/filiales/publicevents.jpg",
          icon: Calendar
        },
        {
          id: "public-production",
          name: "Public Prod",
          description: "Référence de la production audiovisuelle marocaine, Public Prod crée et adapte des formats originaux pour la télévision et le digital, alliant créativité et exigence artistique.",
          expertise: "Création de concepts, adaptation de formats internationaux, direction artistique.",
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
          id: "sunset-hospitality",
          name: "Sunset Hospitality Company",
          description: "Division de Parthenon Holding dédiée aux expériences de loisirs et d'hébergement, Sunset Hospitality regroupe des destinations emblématiques telles que Palooza Park, Skyjump et Oxygen Village. L'entité incarne une vision globale du divertissement et de l'hospitalité, mêlant plaisir, innovation et durabilité.",
          expertise: "Gestion de parcs de loisirs, hôtellerie éco-responsable, expérience client et exploitation opérationnelle.",
          image: "/filiales/sunset.jpg",
          icon: Sparkles
        },
        {
          id: "garden-corner",
          name: "Garden Corner",
          description: "Ensemble de concepts culinaires réunissant Garden Home, Garden Bake's, Garden Eat'aly et Garden Brunch, Garden Corner célèbre l'art de vivre à la casablancaise à travers des lieux chaleureux où gastronomie, convivialité et élégance se rencontrent.",
          expertise: " Boulangerie Artisanale, Restaurant Brunch, Restaurant italien, Décoration d'intérieur",
          image: "/filiales/gardencorner.jpg",
          icon: Coffee
        },
        {
          id: "go-velodrome",
          name: "GoVélodrome",
          description: "Plateforme de communication et promotion des événements se déroulant au Vélodrome de Casablanca, Go Velodrome connecte organisateurs, partenaires et publics pour maximiser la visibilité et l'impact de chaque manifestation.",
          expertise: "Promotion et communication des événements au Vélodrome, Gestion des relations avec partenaires et sponsors, Valorisation des événements pour les entreprises et institutions (B2B), Coordination digitale et médiatique",
          image: "/filiales/Govelodrome.jpg",
          icon: Coffee
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
          description: "PBS est une entreprise de construction spécialisée dans la réalisation d'infrastructures et de projets de grande envergure. Nous accompagnons nos clients, publics et privés, de la conception à la livraison, en alliant expertise technique, rigueur et qualité.",
          expertise: "Construction d'infrastructures et bâtiments, Gestion de projets de grande envergure, Coordination et suivi technique sur site, Solutions sur-mesure adaptées aux besoins des clients",
          image: "/filiales/pbs.jpg",
          icon: Building2
        },
        {
          id: "integral-solutions",
          name: "Integral Solutions",
          description: "Spécialiste de la location de mobilier et de matériel événementiel, Integral Solutions accompagne les projets d'aménagement avec flexibilité, réactivité et sens du détail.",
          expertise: "Location de mobilier, solutions techniques et logistiques événementielles.",
          image: "/filiales/Integral.jpg",
          icon: Home
        },
        {
          id: "ateliers-dko",
          name: "Les Ateliers DKO",
          description: "Espace de conception et de fabrication de mobilier sur-mesure, Les Ateliers DKO allient savoir-faire artisanal et technologies modernes pour créer des aménagements uniques et durables, adaptés aux besoins des professionnels comme des particuliers.",
          expertise: "Fabrication de mobilier sur mesure, agencement d'espaces, menuiserie haut de gamme.",
          image: "/filiales/ateliersdko.jpg",
          icon: Home
        },
        {
          id: "aquila",
          name: "Aquila Sécurité",
          description: "Entreprise spécialisée dans la sécurité privée, Aquila propose des solutions complètes de protection pour les sites professionnels, les événements et les résidences. Son équipe de vigiles qualifiés veille à la sûreté des biens et des personnes, avec rigueur et professionnalisme.",
          expertise: "Sécurité privée, gardiennage, protection d'événements et surveillance de sites sensibles.",
          image: "/filiales/aquila.jpg",
          icon: Building2
        }
      ]
    }
  ];

  const [activeTab, setActiveTab] = useState("live");
  const [initialLoad, setInitialLoad] = useState(true);
  const [isReady, setIsReady] = useState(false);
  const activePole = poles.find(p => p.id === activeTab) || poles[0];
  const filialeRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});
  const scrollTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Handle URL parameters on initial load only
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const poleParam = params.get('pole');
    const filialeParam = params.get('filiale');

    if (poleParam && poles.some(p => p.id === poleParam)) {
      // Set the active tab first
      setActiveTab(poleParam);
      
      // Mark as ready after state update
      setTimeout(() => {
        setIsReady(true);
      }, 50);
      
      // Wait for the content to render, then scroll to the filiale
      if (filialeParam) {
        // Clear any existing timeout
        if (scrollTimeoutRef.current) {
          clearTimeout(scrollTimeoutRef.current);
        }
        
        // Use a longer delay to ensure content is fully rendered
        scrollTimeoutRef.current = setTimeout(() => {
          const filialeElement = filialeRefs.current[filialeParam];
          if (filialeElement) {
            const yOffset = -120; // Offset for fixed headers
            const y = filialeElement.getBoundingClientRect().top + window.pageYOffset + yOffset;
            window.scrollTo({ top: y, behavior: 'smooth' });
          }
          setInitialLoad(false);
        }, 600); // Increased delay to wait for animation
      } else {
        setInitialLoad(false);
      }
    } else {
      setActiveTab("live");
      setIsReady(true);
      setInitialLoad(false);
    }

    // Cleanup
    return () => {
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
    };
  }, []); // Only run once on mount

  // Scroll when activeTab changes (only after initial load)
  useEffect(() => {
    if (initialLoad || !isReady) return; // Don't run on initial load or before ready

    const params = new URLSearchParams(window.location.search);
    const filialeParam = params.get('filiale');
    
    if (filialeParam) {
      // Clear any existing timeout
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
      
      scrollTimeoutRef.current = setTimeout(() => {
        const filialeElement = filialeRefs.current[filialeParam];
        if (filialeElement) {
          const yOffset = -120;
          const y = filialeElement.getBoundingClientRect().top + window.pageYOffset + yOffset;
          window.scrollTo({ top: y, behavior: 'smooth' });
        }
      }, 400);
    }

    // Cleanup
    return () => {
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
    };
  }, [activeTab, initialLoad, isReady]);

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
            {poles.map((pole) => {
              const isActive = activeTab === pole.id;
              
              return (
                <motion.button
                  key={pole.id}
                  onClick={() => setActiveTab(pole.id)}
                  className="relative px-6 md:px-8 py-3 md:py-4 rounded-full font-semibold text-xs sm:text-sm md:text-base transition-all duration-300 overflow-hidden"
                  style={{
                    backgroundColor: isActive ? GOLD : `${GOLD}15`,
                    color: isActive ? 'white' : GOLD,
                  }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {/* Animated background only shows when isReady */}
                  {isActive && isReady && (
                    <motion.div
                      className="absolute inset-0 rounded-full -z-10"
                      style={{ backgroundColor: GOLD }}
                      layoutId="activeTabBackground"
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{pole.name}</span>
                </motion.button>
              );
            })}
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
                    ref={(el) => { filialeRefs.current[filiale.id] = el; }}
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