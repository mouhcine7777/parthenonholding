'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Award, Building2, Utensils } from 'lucide-react';

const GOLD = "#A98142";
const DARK = "#1C1C1B";

interface Work {
  id: number;
  name: string;
  image: string;
  description: string;
  category?: string;
}

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
  const [hoveredWork, setHoveredWork] = useState<number | null>(null);
  
  const currentTab = TAB_DATA.find(tab => tab.id === activeTab);

  return (
    <section className="w-full min-h-screen" style={{ backgroundColor: DARK }}>
      {/* Tab Navigation */}
      <div className="sticky top-0 z-40 backdrop-blur-xl bg-black/60 border-b" style={{ borderColor: `${GOLD}30` }}>
        <div className="container mx-auto px-4 md:px-6">
          <div className="overflow-x-auto scrollbar-hide">
            <div className="flex justify-start md:justify-center gap-2 py-6 min-w-max md:min-w-0">
              {TAB_DATA.map((tab) => {
                const Icon = tab.icon;
                return (
                  <motion.button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`relative px-6 py-4 rounded-xl transition-all duration-500 whitespace-nowrap flex items-center gap-3 ${
                      activeTab === tab.id ? 'text-white' : 'text-gray-400 hover:text-gray-200'
                    }`}
                    style={{
                      backgroundColor: activeTab === tab.id ? GOLD : 'transparent',
                      border: `2px solid ${activeTab === tab.id ? GOLD : 'transparent'}`
                    }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Icon size={20} />
                    <span className="font-medium">{tab.label}</span>
                  </motion.button>
                );
              })}
            </div>
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

      {/* Dynamic Asymmetric Layout */}
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
            {/* Process works in groups of 3 with varying layouts */}
            {Array.from({ length: Math.ceil(currentTab.works.length / 3) }).map((_, groupIndex) => {
              const startIdx = groupIndex * 3;
              const groupWorks = currentTab.works.slice(startIdx, startIdx + 3);
              const layoutType = groupIndex % 3; // Rotate between 3 different layouts

              return (
                <div key={groupIndex} className="mb-0">
                  {/* Layout 1: Large left, 2 stacked right */}
                  {layoutType === 0 && (
                    <div className="grid grid-cols-1 md:grid-cols-2">
                      {groupWorks[0] && (
                        <WorkCard 
                          work={groupWorks[0]} 
                          isHovered={hoveredWork === groupWorks[0].id}
                          onHover={() => setHoveredWork(groupWorks[0].id)}
                          onLeave={() => setHoveredWork(null)}
                          className="md:row-span-2"
                          height="h-[60vh] md:h-screen"
                        />
                      )}
                      <div className="grid grid-rows-2">
                        {groupWorks[1] && (
                          <WorkCard 
                            work={groupWorks[1]} 
                            isHovered={hoveredWork === groupWorks[1].id}
                            onHover={() => setHoveredWork(groupWorks[1].id)}
                            onLeave={() => setHoveredWork(null)}
                            height="h-[50vh]"
                          />
                        )}
                        {groupWorks[2] && (
                          <WorkCard 
                            work={groupWorks[2]} 
                            isHovered={hoveredWork === groupWorks[2].id}
                            onHover={() => setHoveredWork(groupWorks[2].id)}
                            onLeave={() => setHoveredWork(null)}
                            height="h-[50vh]"
                          />
                        )}
                      </div>
                    </div>
                  )}

                  {/* Layout 2: 3 equal columns */}
                  {layoutType === 1 && (
                    <div className="grid grid-cols-1 md:grid-cols-3">
                      {groupWorks.map((work) => (
                        <WorkCard 
                          key={work.id}
                          work={work} 
                          isHovered={hoveredWork === work.id}
                          onHover={() => setHoveredWork(work.id)}
                          onLeave={() => setHoveredWork(null)}
                          height="h-[60vh] md:h-[80vh]"
                        />
                      ))}
                    </div>
                  )}

                  {/* Layout 3: 2 stacked left, Large right */}
                  {layoutType === 2 && (
                    <div className="grid grid-cols-1 md:grid-cols-2">
                      <div className="grid grid-rows-2">
                        {groupWorks[0] && (
                          <WorkCard 
                            work={groupWorks[0]} 
                            isHovered={hoveredWork === groupWorks[0].id}
                            onHover={() => setHoveredWork(groupWorks[0].id)}
                            onLeave={() => setHoveredWork(null)}
                            height="h-[50vh]"
                          />
                        )}
                        {groupWorks[1] && (
                          <WorkCard 
                            work={groupWorks[1]} 
                            isHovered={hoveredWork === groupWorks[1].id}
                            onHover={() => setHoveredWork(groupWorks[1].id)}
                            onLeave={() => setHoveredWork(null)}
                            height="h-[50vh]"
                          />
                        )}
                      </div>
                      {groupWorks[2] && (
                        <WorkCard 
                          work={groupWorks[2]} 
                          isHovered={hoveredWork === groupWorks[2].id}
                          onHover={() => setHoveredWork(groupWorks[2].id)}
                          onLeave={() => setHoveredWork(null)}
                          className="md:row-span-2"
                          height="h-[60vh] md:h-screen"
                        />
                      )}
                    </div>
                  )}
                </div>
              );
            })}
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

interface WorkCardProps {
  work: Work;
  isHovered: boolean;
  onHover: () => void;
  onLeave: () => void;
  className?: string;
  height?: string;
}

function WorkCard({ work, isHovered, onHover, onLeave, className = '', height = 'h-[60vh]' }: WorkCardProps) {
  return (
    <motion.div
      className={`relative group overflow-hidden ${height} ${className}`}
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8 }}
    >
      {/* Background Image */}
      <motion.div
        className="absolute inset-0"
        animate={{ scale: isHovered ? 1.15 : 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <img
          src={work.image || "/api/placeholder/800/1200"}
          alt={work.name}
          className="w-full h-full object-cover"
        />
      </motion.div>

      {/* Gradient Overlay */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"
        animate={{ opacity: isHovered ? 0.95 : 0.7 }}
        transition={{ duration: 0.4 }}
      />

      {/* Gold Accent Overlay on Hover */}
      <motion.div
        className="absolute inset-0"
        style={{ background: `linear-gradient(135deg, ${GOLD}30, transparent)` }}
        animate={{ opacity: isHovered ? 1 : 0 }}
        transition={{ duration: 0.4 }}
      />

      {/* Category Badge */}
      {work.category && (
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="absolute top-6 left-6 px-5 py-2 rounded-full z-10"
          style={{ backgroundColor: `${GOLD}F0` }}
        >
          <span className="text-white text-sm font-bold tracking-wide">
            {work.category}
          </span>
        </motion.div>
      )}

      {/* Content */}
      <motion.div 
        className="absolute bottom-0 left-0 right-0 p-8 md:p-10 z-10"
        animate={{ y: isHovered ? -10 : 0 }}
        transition={{ duration: 0.4 }}
      >
        {/* Decorative Line */}
        <motion.div
          className="w-20 h-1 mb-5 rounded-full"
          style={{ backgroundColor: GOLD }}
          initial={{ width: 0 }}
          whileInView={{ width: 80 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
        />
        
        {/* Title */}
        <motion.h3 
          className="text-2xl md:text-3xl lg:text-3xl font-bold text-white mb-4 leading-tight"
          animate={{ 
            scale: isHovered ? 1.05 : 1,
            color: isHovered ? GOLD : '#ffffff'
          }}
          transition={{ duration: 0.3 }}
        >
          {work.name}
        </motion.h3>
        
        {/* Description */}
        <motion.p   
          className="text-base md:text-lg text-gray-200 leading-relaxed max-w-2xl"
          style={{ 
            textShadow: '0 2px 12px rgba(0,0,0,0.9)'
          }}
          animate={{ 
            opacity: isHovered ? 1 : 0.9,
            x: isHovered ? 5 : 0
          }}
          transition={{ duration: 0.3 }}
        >
          {work.description}
        </motion.p>
      </motion.div>

      {/* Bottom Gradient Enhancement */}
      <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-black to-transparent pointer-events-none z-0" />
    </motion.div>
  );
}