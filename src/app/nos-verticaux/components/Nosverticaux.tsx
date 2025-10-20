'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';

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

// Restauration / Hospitality (placeholder data)
const RESTAURATION_WORKS: Work[] = [
  {
    id: 1,
    name: "RESTAURANT CONCEPT 1",
    image: "/api/placeholder/800/1200",
    description: "Concept de restauration moderne et élégant"
  },
  {
    id: 2,
    name: "CAFÉ LOUNGE",
    image: "/api/placeholder/800/1200",
    description: "Espace café-lounge avec ambiance contemporaine"
  },
  {
    id: 3,
    name: "FOOD COURT",
    image: "/api/placeholder/800/1200",
    description: "Espace de restauration multimarques"
  }
];

const TAB_DATA = [
  {
    id: 'live',
    label: 'Live / Programmes audiovisuels',
    shortLabel: 'Live',
    works: LIVE_PROGRAMS,
    description: "Depuis plus de vingt ans, Parthenon Holding façonne les grands rendez-vous audiovisuels marocains. Nos équipes de production conçoivent, réalisent et accompagnent des formats emblématiques — de la fiction au divertissement, en passant par les shows live et les compétitions créatives."
  },
  {
    id: 'services',
    label: 'Services / Scénographie & Aménagement',
    shortLabel: 'Services',
    works: SERVICES_WORKS,
    description: "À travers la réalisation de grands projets — pavillons internationaux, musées, zoos ou espaces réhabilités —, nous démontrons notre créativité et notre capacité à concrétiser des œuvres d'envergure avec précision."
  },
  {
    id: 'loisirs',
    label: 'Loisirs / Parcs & centres ludiques',
    shortLabel: 'Loisirs',
    works: LOISIRS_WORKS,
    description: "L'entertainment étant au cœur de notre savoir-faire, nous avons imaginé un parc à thème unique au Royaume, Palooza Park Marrakech, (24 000 m²), plongeant les visiteurs dans l'univers fascinant des dinosaures."
  },
  {
    id: 'restauration',
    label: 'Restauration / Hospitality',
    shortLabel: 'Restauration',
    works: RESTAURATION_WORKS,
    description: "Notre expertise s'étend à la création d'expériences culinaires uniques, alliant design innovant et concepts gastronomiques pour offrir des espaces de restauration exceptionnels."
  }
];

export default function NosVerticaux() {
  const [activeTab, setActiveTab] = useState('live');
  
  const currentTab = TAB_DATA.find(tab => tab.id === activeTab);
  
  return (
    <section className="w-full overflow-hidden" style={{ backgroundColor: LIGHT_BG }}>
      {/* Header Section with Container */}
      <div className="container mx-auto px-4 md:px-6 py-16 max-w-7xl">
        {/* Section Heading */}
        <motion.div 
          className="flex items-center justify-center mb-8"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div 
            className="h-px w-20 md:w-32 mr-6"
            style={{ backgroundColor: GOLD }}
          />
          <h2 
            className="text-4xl md:text-5xl lg:text-6xl font-light uppercase tracking-wider text-center"
            style={{ color: DARK }}
          >
            Nos <span style={{ color: GOLD, fontWeight: 500 }}>Verticaux</span>
          </h2>
          <div 
            className="h-px w-20 md:w-32 ml-6"
            style={{ backgroundColor: GOLD }}
          />
        </motion.div>
        
        {/* Tab Navigation */}
        <motion.div 
          className="flex justify-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div 
            className="inline-flex flex-wrap justify-center gap-3 bg-white/80 backdrop-blur-sm rounded-2xl p-2 shadow-xl"
            style={{ border: `2px solid ${GOLD}30` }}
          >
            {TAB_DATA.map((tab) => (
              <button
                key={tab.id}
                className={`px-6 py-3 text-sm md:text-base font-medium rounded-xl transition-all duration-500 transform ${
                  activeTab === tab.id 
                    ? 'text-white shadow-lg scale-105' 
                    : 'text-gray-700 hover:text-gray-900 hover:bg-gray-50'
                }`}
                style={{ 
                  backgroundColor: activeTab === tab.id ? GOLD : 'transparent',
                  border: activeTab === tab.id ? 'none' : `1px solid ${GOLD}20`
                }}
                onClick={() => setActiveTab(tab.id)}
              >
                <span className="hidden lg:inline">{tab.label}</span>
                <span className="lg:hidden">{tab.shortLabel}</span>
              </button>
            ))}
          </div>
        </motion.div>
        
        {/* Description Box */}
        {currentTab && (
          <motion.div
            className="relative mb-16 p-10 rounded-2xl backdrop-blur-sm"
            style={{ 
              backgroundColor: `${GOLD}08`,
              border: `2px solid ${GOLD}25`,
              boxShadow: `0 10px 40px ${GOLD}15`
            }}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            <div 
              className="absolute -top-4 left-12 px-6 py-2 rounded-full shadow-lg" 
              style={{ 
                backgroundColor: GOLD,
                boxShadow: `0 4px 20px ${GOLD}40`
              }}
            >
              <span className="text-sm md:text-base uppercase tracking-widest font-semibold text-white">
                {currentTab.label}
              </span>
            </div>
            
            <p className="text-lg md:text-xl leading-relaxed mb-0" style={{ color: LIGHT_TEXT }}>
              {currentTab.description}
            </p>
          </motion.div>
        )}
      </div>

      {/* Full Width Cards Section */}
      {currentTab && (
        <div className="w-full px-0">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0">
            {currentTab.works.map((work, index) => (
              <motion.div
                key={work.id}
                className="relative group overflow-hidden aspect-[4/5] cursor-pointer"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.7, delay: index * 0.1 }}
              >
                {/* Background Image */}
                <div className="absolute inset-0">
                  <motion.img 
                    src={work.image || "/api/placeholder/800/1000"}
                    alt={work.name}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                  />
                  
                  {/* Gradient Overlay */}
                  <div 
                    className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500"
                  />
                </div>
                
                {/* Category Badge */}
                {work.category && (
                  <motion.div 
                    className="absolute top-6 right-6 z-20 px-4 py-2 rounded-full text-sm font-semibold text-white backdrop-blur-sm"
                    style={{ 
                      backgroundColor: `${GOLD}DD`,
                      boxShadow: `0 4px 15px ${GOLD}60`
                    }}
                    initial={{ x: 50, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3, duration: 0.5 }}
                  >
                    {work.category}
                  </motion.div>
                )}
                
                {/* Content - Positioned at bottom */}
                <div className="absolute bottom-0 left-0 right-0 p-8 z-20">
                  {/* Gold accent line */}
                  <motion.div
                    className="h-1 mb-6 rounded-full"
                    style={{ backgroundColor: GOLD }}
                    initial={{ width: 0 }}
                    whileInView={{ width: '80px' }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4, duration: 0.6 }}
                  />
                  
                  {/* Title */}
                  <motion.h3 
                    className="text-2xl md:text-3xl font-bold text-white mb-4 leading-tight drop-shadow-2xl"
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5, duration: 0.5 }}
                  >
                    {work.name}
                  </motion.h3>
                  
                  {/* Description */}
                  <motion.p 
                    className="text-base md:text-lg text-gray-200 leading-relaxed drop-shadow-lg"
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6, duration: 0.5 }}
                  >
                    {work.description}
                  </motion.p>
                </div>
                
                {/* Bottom shadow enhancement */}
                <div 
                  className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
                  style={{
                    background: 'linear-gradient(to top, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0) 100%)'
                  }}
                />
              </motion.div>
            ))}
          </div>
        </div>
      )}

      {/* Bottom Decorative Element */}
      <div className="container mx-auto px-4 py-16">
        <motion.div 
          className="h-px mx-auto"
          style={{ 
            backgroundColor: `${GOLD}50`,
            maxWidth: '400px'
          }}
          initial={{ width: 0 }}
          whileInView={{ width: '100%' }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.3 }}
        />
      </div>
    </section>
  );
}