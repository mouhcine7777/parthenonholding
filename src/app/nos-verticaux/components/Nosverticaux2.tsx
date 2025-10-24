'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Award, Building2, HardHat } from 'lucide-react';

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
    name: "LALLA LAÂROSSA",
    image: "/emissions/lalalaaroussa.webp",
    description: "Compétition emblématique où des couples s'affrontent pour remporter une cérémonie de mariage de rêve.",
  },
  {
    id: 2,
    name: "AHSSAN PÂTISSIER",
    image: "/emissions/lmp.webp",
    description: "Compétition culinaire inspirée des grands formats internationaux, consacrant les meilleurs pâtissiers du pays.",
  },
  {
    id: 3,
    name: "JMAATNA ZINA",
    image: "/emissions/jmaatnazina.webp",
    description: "Divertissement musical célébrant les traditions, la culture et la convivialité à travers tout le Royaume.",
  },
  {
    id: 4,
    name: "JAMSHOW",
    image: "/emissions/jamshow.webp",
    description: "Divertissement allant à la recherche des nouveaux talents de Rap.",
  },
  {
    id: 5,
    name: "TRI9 ATTAHADI",
    image: "/emissions/tri9attahadi.jpeg",
    description: "Aventure télévisée mêlant défis physiques et épreuves de dépassement dans des paysages spectaculaires.",
  },
  {
    id: 6,
    name: "DREAM ARTIST",
    image: "/emissions/dreamartist.webp",
    description: "Émission de découverte et de valorisation des nouveaux talents artistiques et créatifs.",
  },
  {
    id: 7,
    name: "AL QADAM ADDAHABBI",
    image: "/emissions/alqadamaddahabbi.webp",
    description: "Concours de jeunes talents footballistiques, révélant les futures stars du ballon rond national.",
  },
  {
    id: 8,
    name: "AKHIR TAMAN",
    image: "/emissions/akhirtaman.webp",
    description: "Émission d'enchères captivante où objets rares et passion des collectionneurs se rencontrent.",
  },
  {
    id: 9,
    name: "FASHION MAGHRIBI",
    image: "/emissions/fashionmaghribi.webp",
    description: "Compétition mettant en lumière le talent et la créativité des stylistes et designers de mode",
  }
];

// Services / Scénographie & Aménagement
const SERVICES_WORKS: Work[] = [
  {
    id: 1,
    name: "ONMT",
    image: "/realizations/onmt.webp",
    description: "Pavillons officiel de l'onmt, vitrine du Maroc à travers une scénographie immersive et contemporaine."
  },
  {
    id: 2,
    name: "OCP",
    image: "/realizations/ocp.png",
    description: "Pavillon institutionnel alliant innovation, durabilité et design, conçu pour les expositions internationales du groupe OCP."
  },
  {
    id: 3,
    name: "MAROC EXPORT",
    image: "/realizations/marocexport.jpg",
    description: "Espace modulable dédié à la promotion des entreprises exportatrices et à la mise en valeur du savoir-faire national."
  },
  {
    id: 4,
    name: "PAVILLONS ÉTATIQUES",
    image: "/realizations/pavillons-etatiques.png",
    description: "Conception et aménagement de pavillons institutionnels pour les grandes expositions et salons mondiaux."
  },
  {
    id: 5,
    name: "ADA - ABU DHABI INTERNATIONAL FOOD EXHIBITION",
    image: "/realizations/adif2023.png",
    description: "Pavillon marocain présentant l'excellence agroalimentaire nationale dans une scénographie moderne et lumineuse."
  },
  {
    id: 6,
    name: "INWI",
    image: "/realizations/inwi.png",
    description: "Stand corporate au design épuré et technologique, valorisant l'innovation et la connectivité."
  },
  {
    id: 7,
    name: "CASA EVENTS",
    image: "/realizations/smartcity.png",
    description: "Conception d'un espace interactif et expérientiel pour promouvoir les événements culturels et sportifs de la ville."
  },
  {
    id: 8,
    name: "UM6P",
    image: "/realizations/UM6P.png",
    description: "Scénographie institutionnelle intégrant innovation, éducation et recherche dans un espace inspirant et durable."
  },
  {
    id: 9,
    name: "WORLD BOXING SERIES",
    image: "/realizations/wbs.png",
    description: "Scénographie immersive combinant sport, lumière et mise en scène spectaculaire pour un tournoi international."
  }
];

// Loisirs / Parcs & centres ludiques
const LOISIRS_WORKS: Work[] = [
  {
    id: 1,
    name: "Palooza Marrakech",
    image: "/palooza.webp",
    description: "Parc d'attractions thématique dédié aux dinosaures, combinant divertissement familial, pédagogie et expériences immersives uniques."
  },
  {
    id: 2,
    name: "Skyjump Casablanca",
    image: "/skyjump.jpg",
    description: "Espace de loisirs indoor entièrement dédié au trampoline, offrant une expérience fun et sportive pour tous les âges."
  },
  {
    id: 3,
    name: "Garden Bake's",
    image: "/gardenbakes.jpg",
    description: "Boulangerie artisanale où la tradition du pain et de la viennoiserie rencontre l'élégance d'un espace chaleureux et contemporain."
  },
  {
    id: 4,
    name: "Garden Room",
    image: "/filiales/garden-room.jpg",
    description: "Concept gourmand autour de brioches salées et sucrées, servies tout au long de la journée dans une ambiance douce et contemporaine."
  },
  {
    id: 5,
    name: "Garden Brunch",
    image: "/filiales/garden-brunch.jpg",
    description: "Concept de brunch savoureux proposant diverses formules."
  },
  {
    id: 6,
    name: "Go Vélodrome",
    image: "/velodrome.jpg",
    description: "Espace lifestyle au cœur du Vélodrome de Casablanca, accueillant activités, événements et concepts culinaires innovants."
  },
  {
    id: 7,
    name: "Oxygen Village",
    image: "/oxygene.jpg",
    description: "Hébergement éco-responsable conçu à partir de conteneurs modulaires, associant design, confort et nature pour une expérience d'accueil nouvelle génération."
  },
];

// BTP / Construction
const BTP_WORKS: Work[] = [
  {
    id: 1,
    name: "STATION AFRIQUIA LISSASFA",
    image: "/afriquia.jpg",
    description: "Réalisé en collaboration avec AFRIQUIA SMDC et conçu par l'architecte MEHDIBERRADA. Avec une surface de 1995m², cette station incarne notre engagement envers l'efficacité et l'esthétique."
  },
  {
    id: 2,
    name: "MC VILLAGE",
    image: "/mcdo.jpg",
    description: " En collaboration avec Afriquia SMDC et l'architecte TARIK LAKHMIRI. Avec une surface couverte de 1540 m² et une vaste étendue extérieure aménagée de 9533 m², ce projet incarne la fusion entre l'architecture innovante et l'aménagement paysager réfléchi."
  },
  {
    id: 3,
    name: "OXYGEN VILLAGE",
    image: "/oxygen.jpg",
    description: " Dans le cadre exceptionnel du projet OXYGEN VILLAGE, réalisé pour Parthenon Holding, nous avons relevé le défi de créer un hébergement modulaire de qualité."
  }
];

const TAB_DATA = [
  {
    id: 'live',
    label: 'Programmes audiovisuels',
    icon: Sparkles,
    works: LIVE_PROGRAMS,
    description: "Depuis plus de vingt ans, Parthenon Holding façonne les grands rendez-vous audiovisuels marocains. Nos équipes de production conçoivent, réalisent et accompagnent des formats emblématiques — de la fiction au divertissement, en passant par les shows live et les compétitions créatives."
  },
  {
    id: 'services',
    label: 'Scénographie & Aménagement',
    icon: Building2,
    works: SERVICES_WORKS,
    description: "De la conception à la réalisation, nous signons des espaces scénographiques où architecture, storytelling et technologie s'unissent harmonieusement."
  },
  {
    id: 'loisirs',
    label: 'Loisirs & Hospitality',
    icon: Award,
    works: LOISIRS_WORKS,
    description: "Du loisir à l’hôtellerie, Parthenon Holding imagine et opère des lieux de vie où plaisir, convivialité et excellence d’accueil se rencontrent."
  },
  {
    id: 'btp',
    label: 'Bâtiment & Travaux Publics (BTP)',
    icon: HardHat,
    works: BTP_WORKS,
    description: "Notre entreprise de construction PBS est spécialisée dans la réalisation de projets divers, allant des infrastructures commerciales aux complexes résidentiels, en mettant l'accent sur la qualité et l'innovation."
  }, 
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