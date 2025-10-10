'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Award, Building2, Utensils } from 'lucide-react';

// Define brand colors
const GOLD = "#A98142";
const LIGHT_BG = "#FAFAFA";
const DARK = "#1C1C1B";
const LIGHT_TEXT = "#444444";

// Define unified Work interface
interface Work {
  id: number;
  name: string;
  image: string;
  description: string;
  category?: string;
}

// Live / Programmes audiovisuels
const LIVE_PROGRAMS: Work[] = [
  {
    id: 1,
    name: "FASHION MAGHRIBI",
    image: "/emissions/fashionmaghribi.webp",
    description: "Une compétition de mode mettant en valeur le talent des créateurs locaux",
    category: "Saison 2"
  },
  {
    id: 2,
    name: "JMAATNA ZINA",
    image: "/emissions/jmaatnazina.webp",
    description: "Émission communautaire célébrant les traditions et cultures",
    category: "Saison 3"
  },
  {
    id: 3,
    name: "LALLA LAÂROSSA",
    image: "/emissions/lalalaaroussa.webp",
    description: "Une compétition entre futures mariées pour gagner leur cérémonie de rêve",
    category: "Saison 19"
  },
  {
    id: 4,
    name: "AL QADAM ADDAHABBI",
    image: "/emissions/alqadamaddahabbi.webp",
    description: "Concours de talents footballistiques pour jeunes prodiges",
    category: "Saison 3"
  },
  {
    id: 5,
    name: "DREAM ARTIST",
    image: "/emissions/dreamartist.webp",
    description: "Émission de découverte de nouveaux talents artistiques",
    category: "Saison 3"
  },
  {
    id: 6,
    name: "TRI9 ATTAHADI",
    image: "/emissions/tri9attahadi.jpeg",
    description: "Aventure et défis à travers des parcours spectaculaires",
    category: "Saison 1"
  },
  {
    id: 7,
    name: "JAMSHOW",
    image: "/emissions/jamshow.webp",
    description: "Divertissement musical et humour pour toute la famille",
    category: "Saison 2"
  },
  {
    id: 8,
    name: "AKHIR TAMAN",
    image: "/emissions/akhirtaman.webp",
    description: "Apporte l'excitation des enchères à la télévision marocaine",
    category: "Saison 3"
  },
  {
    id: 9,
    name: "AHSSAN PÂTISSIER",
    image: "/emissions/lmp.webp",
    description: "Compétition culinaire adaptée des formats internationaux de pâtisserie",
    category: "Saison 2"
  }
];

// Services / Scénographie & Aménagement
const SERVICES_WORKS: Work[] = [
  {
    id: 1,
    name: "ONMT",
    image: "/realizations/onmt.webp",
    description: "Pavillon officiel de l'Office National Marocain du Tourisme"
  },
  {
    id: 2,
    name: "OCP",
    image: "/realizations/ocp.png",
    description: "Pavillon du groupe OCP pour les expositions internationales"
  },
  {
    id: 3,
    name: "MAROC EXPORT",
    image: "/realizations/marocexport.jpg",
    description: "Espace dédié à la promotion des exportations marocaines"
  },
  {
    id: 4,
    name: "PAVILLONS ÉTATIQUES",
    image: "/realizations/pavillons-etatiques.png",
    description: "Conception de pavillons nationaux pour divers pays"
  },
  {
    id: 5,
    name: "ADA",
    image: "/realizations/adif2023.png",
    description: "Abu Dhabi International Food Exhibition"
  },
  {
    id: 6,
    name: "INWI",
    image: "/realizations/inwi.png",
    description: "Conception de pavillons d'inwi Gitex"
  },
  {
    id: 7,
    name: "CASA EVENTS",
    image: "/realizations/smartcity.png",
    description: "Smart City Experience"
  },
  {
    id: 8,
    name: "UM6P",
    image: "/realizations/UM6P.png",
    description: "Université Mohammed VI Polytechnique"
  },
  {
    id: 9,
    name: "WORLD BOXING SERIES",
    image: "/realizations/wbs.png",
    description: "Scénographie pour tournoi international de boxe"
  },
  {
    id: 10,
    name: "MEETING INTERNATIONAL M6 D'ATHLÉTISME",
    image: "/realizations/meeting-athle.webp",
    description: "Aménagement du stade et parcours pour meeting d'athlétisme"
  },
  {
    id: 11,
    name: "COUPE DU MONDE DES CLUBS",
    image: "/realizations/cdm-clubs.webp",
    description: "Aménagement des espaces pour compétition footballistique"
  },
  {
    id: 12,
    name: "SMART CITY",
    image: "/realizations/smart-city.webp",
    description: "Exposition sur les villes intelligentes"
  },
  {
    id: 13,
    name: "LE JARDIN ZOOLOGIQUE DE RABAT",
    image: "/realizations/zoo-rabat.webp",
    description: "Thématisation des espaces du zoo national"
  },
  {
    id: 14,
    name: "PARC ZOOLOGIQUE D'AIN SEBAA",
    image: "/realizations/zoo-ain-sebaa.webp",
    description: "Aménagement thématique des espaces animaliers"
  },
  {
    id: 15,
    name: "LE MUSÉE DES SPORTS",
    image: "/realizations/musee-sports.webp",
    description: "Scénographie muséale sur l'histoire du sport"
  }
];

// Loisirs / Parcs & centres ludiques
const LOISIRS_WORKS: Work[] = [
  {
    id: 1,
    name: "PALOOZA PARK MARRAKECH",
    image: "/palooza.webp",
    description: "Parc d'attractions familial avec manèges et activités variées"
  },
  {
    id: 2,
    name: "SKY JUMP TRAMPOLINE PARK",
    image: "/skyjump.jpg",
    description: "Espace de loisirs avec trampolines pour tous les âges"
  },
  {
    id: 3,
    name: "LOUPI JUNGLE",
    image: "/filiales/Loupijungle.jpg",
    description: "Aire de jeux thématique pour enfants avec parcours d'aventure"
  }
];

// Restauration / Hospitality
const RESTAURATION_WORKS: Work[] = [
  {
    id: 1,
    name: "Garden Bake's",
    image: "/gardenbakes.jpg",
    description: "Boulangerie & café"
  },
  {
    id: 2,
    name: "Garden Room",
    image: "/gardenroom.jpg",
    description: "Espace café-lounge"
  },
  {
    id: 3,
    name: "Garden Brunch",
    image: "/gardenbrunch.jpg",
    description: "Espace café-lounge"
  },
  {
    id: 4,
    name: "Go Velodrome",
    image: "/velodrome.jpg",
    description: "Espace lifestyle à Casablanca"
  },
  {
    id: 5,
    name: "Oxygen Village",
    image: "/oxygene.jpg",
    description: "Hébergement modulaire"
  }
];

const TAB_DATA = [
  {
    id: 'live',
    label: 'Programmes audiovisuels',
    icon: Sparkles,
    works: LIVE_PROGRAMS,
    description: "Pionnier de la production télé, Parthenon Live a signé des succès tels que Lalla Laâroussa, Trik Tadahi, Jam Show ou encore Ahssan Pâtissier."
  },
  {
    id: 'services',
    label: 'Scénographie & Aménagement',
    icon: Building2,
    works: SERVICES_WORKS,
    description: "À travers la réalisation de grands projets — pavillons internationaux, musées, zoos ou espaces réhabilités."
  },
  {
    id: 'loisirs',
    label: 'Parcs & centres ludiques',
    icon: Award,
    works: LOISIRS_WORKS,
    description: "L'entertainment étant au cœur de notre savoir-faire, nous avons imaginé un parc à thème unique au Royaume."
  },
  {
    id: 'restauration',
    label: 'Hospitality',
    icon: Utensils,
    works: RESTAURATION_WORKS,
    description: "Notre expertise s'étend à la création d'expériences culinaires uniques et concepts gastronomiques."
  }
];

export default function NosVerticaux() {
  const [activeTab, setActiveTab] = useState('live');
  
  const currentTab = TAB_DATA.find(tab => tab.id === activeTab);
  
  return (
    <section className="w-full min-h-screen" style={{ backgroundColor: DARK }}>


     {/* Tab Navigation - Responsive Grid */}
     <div className="backdrop-blur-xl bg-black/60 border-b" style={{ borderColor: `${GOLD}30` }}>
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 py-6">
            {TAB_DATA.map((tab) => {
              const Icon = tab.icon;
              return (
                <motion.button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`relative px-4 py-4 rounded-xl transition-all duration-500 flex flex-col md:flex-row items-center justify-center gap-2 md:gap-3 ${
                    activeTab === tab.id ? 'text-white' : 'text-gray-400 hover:text-gray-200'
                  }`}
                  style={{
                    backgroundColor: activeTab === tab.id ? GOLD : 'transparent',
                    border: `2px solid ${activeTab === tab.id ? GOLD : 'transparent'}`
                  }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Icon size={20} className="flex-shrink-0" />
                  <span className="font-medium text-center text-sm md:text-base leading-tight">{tab.label}</span>
                  
                  {activeTab === tab.id && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute inset-0 rounded-xl"
                      style={{ backgroundColor: `${GOLD}20` }}
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                </motion.button>
              );
            })}
          </div>
        </div>
      </div>
      {/* Description Section */}
      <AnimatePresence mode="wait">
        {currentTab && (
          <motion.div
            key={currentTab.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="py-12 md:py-20"
          >
            <div className="container mx-auto px-4 md:px-6 max-w-5xl">
              <div className="text-center">
                <motion.div
                  initial={{ scale: 0, rotate: -180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ type: "spring", stiffness: 200 }}
                  className="inline-block mb-6"
                >
                  {currentTab.icon && <currentTab.icon size={48} style={{ color: GOLD }} />}
                </motion.div>
                
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-white mb-6">
                  {currentTab.label}
                </h2>
                
                <p className="text-lg md:text-xl text-gray-400 leading-relaxed">
                  {currentTab.description}
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Works Masonry Grid */}
      <AnimatePresence mode="wait">
        {currentTab && (
          <motion.div
            key={`works-${currentTab.id}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="pb-20"
          >
            <div className="container mx-auto px-4 md:px-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                {currentTab.works.map((work, index) => (
                  <motion.div
                    key={work.id}
                    initial={{ opacity: 0, y: 60 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ 
                      duration: 0.8, 
                      delay: index * 0.1,
                      ease: [0.25, 0.1, 0.25, 1]
                    }}
                    className="group relative"
                  >
                    <div className="relative overflow-hidden rounded-2xl aspect-[3/4] bg-gray-900">
                      {/* Image */}
                      <motion.img
                        src={work.image || "/api/placeholder/600/800"}
                        alt={work.name}
                        className="w-full h-full object-cover"
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                      />
                      
                      {/* Gradient Overlays */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-90" />

                      
                      {/* Category Badge */}
                      {work.category && (
                        <motion.div
                          initial={{ x: -100, opacity: 0 }}
                          whileInView={{ x: 0, opacity: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.3 }}
                          className="absolute top-6 left-6 px-4 py-2 rounded-full backdrop-blur-md"
                          style={{ 
                            backgroundColor: `${GOLD}E6`,
                            boxShadow: `0 8px 32px ${GOLD}40`
                          }}
                        >
                          <span className="text-white text-sm font-bold">
                            {work.category}
                          </span>
                        </motion.div>
                      )}
                      
                      {/* Content */}
                      <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 z-10">
                        {/* Decorative line */}
                        <motion.div
                          className="w-12 h-1 mb-4 rounded-full"
                          style={{ backgroundColor: GOLD }}
                          initial={{ width: 0 }}
                          whileInView={{ width: 48 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.5, duration: 0.6 }}
                        />
                        
                        <h3 className="text-2xl md:text-3xl font-bold text-white mb-3 leading-tight" 
                            style={{ textShadow: '0 4px 12px rgba(0,0,0,0.8)' }}>
                          {work.name}
                        </h3>
                        
                        <p className="text-sm md:text-base text-gray-300 leading-relaxed mb-4"
                           style={{ textShadow: '0 2px 8px rgba(0,0,0,0.8)' }}>
                          {work.description}
                        </p>
                      </div>
                      
                      {/* Bottom shadow enhancement */}
                      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-black to-transparent pointer-events-none" />
                    </div>
                    
                    {/* Outer glow on hover */}
                    <div 
                      className="absolute -inset-1 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-xl"
                      style={{ backgroundColor: `${GOLD}40` }}
                    />
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Footer Decoration */}
      <div className="pb-20">
        <motion.div
          className="w-32 h-1 mx-auto rounded-full"
          style={{ backgroundColor: GOLD }}
          initial={{ width: 0 }}
          whileInView={{ width: 128 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        />
      </div>
    </section>
  );
}