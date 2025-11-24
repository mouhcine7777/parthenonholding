'use client';
import { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
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
    name: "NOSTALGIA LOVERS FESTIVAL",
    image: "/about2.webp",
    description: "Musique, rétro vibes et technologiques de pointe : le Nostalgia Lovers Festival a métamorphosé le Vélodrome de Casablanca en scène immersive hors du temps.",
  },
  {
    id: 2,
    name: "LE MEILLEUR PATISSIER",
    image: "/emissions/lmp.webp",
    description: "Une compétition culinaire d'envergure, inspirée des plus grands formats internationaux, où s'affrontent les talents pâtissiers les plus prometteurs du pays.",
  },
  {
    id: 3,
    name: "FUSION SHOW AYTA D’BLADI",
    image: "/emissions/ayta.jpg",
    description: "Spectacle fusion  mêlant Ayta et musique pop contemporaine, avec un espace muséal  dédié à l'Ayta et un food court de gastronomie marocaine.",
  },
  {
    id: 4,
    name: "COUPE DU MONDE DES CLUBS",
    image: "/realizations/fifa.jpg",
    description: "Pour la Coupe du Monde des Clubs de la FIFA 2014 au Maroc, notre expertise audiovisuelle et événementielle a transformé cet événement prestigieux en une expérience inoubliable.",
  },
  {
    id: 5,
    name: "LALLA LAÂROSSA",
    image: "/emissions/lalalaaroussa.webp",
    description: "Compétition emblématique où des couples s'affrontent pour remporter une cérémonie de mariage de rêve.",
  },
  {
    id: 6,
    name: "WORLD BOXING SERIES",
    image: "/realizations/wbs.png",
    description: "Notre savoir-faire en scénographie immersive à transformé ce tournoi international en un spectacle unique, où sport, lumière et mise en scène se combinent."
  },
  {
    id: 7,
    name: "JAMSHOW",
    image: "/emissions/jamshow.webp",
    description: "Divertissement allant à la recherche des nouveaux talents de Rap.",
  },
  {
    id: 8,
    name: "JMAATNA ZINA",
    image: "/emissions/jmaatnazina.webp",
    description: "Divertissement musical célébrant les traditions, la culture et la convivialité à travers tout le Royaume.",
  },
  {
    id: 9,
    name: "TRI9 ATTAHADI",
    image: "/emissions/tri9attahadi.jpeg",
    description: "Aventure télévisée mêlant défis physiques et épreuves de dépassement dans des paysages spectaculaires.",
  },
  {
    id: 10,
    name: "DREAM ARTIST",
    image: "/emissions/dreamartist.webp",
    description: "Émission de découverte et de valorisation des nouveaux talents artistiques et créatifs.",
  },
  {
    id: 11,
    name: "AL QADAM ADDAHABBI",
    image: "/emissions/alqadamaddahabbi.webp",
    description: "Concours de jeunes talents footballistiques, révélant les futures stars du ballon rond national.",
  },
  {
    id: 12,
    name: "AFFAIRE CONCLUE",
    image: "/emissions/akhirtaman.webp",
    description: "Émission d'enchères captivante où objets rares et passion des collectionneurs se rencontrent.",
  },
  {
    id: 13,
    name: "FASHION MAGHRIBI",
    image: "/emissions/fashionmaghribi.webp",
    description: "Compétition mettant en lumière le talent et la créativité des stylistes et designers de mode",
  },
];

// Services / Scénographie & Aménagement
const SERVICES_WORKS: Work[] = [
  {
    id: 1,
    name: "ONMT",
    image: "/realizations/onmt.webp",
    description: "Pavillons officiel de l'ONMT, vitrine du Maroc à travers une scénographie immersive et contemporaine."
  },
  {
    id: 2,
    name: "OCP",
    image: "/realizations/ocp.jpg",
    description: "Mouvement Connect ; scénographie  et organisation de l'événement, visant à connecter son écosystème interne et externe"
  },
  {
    id: 3,
    name: "UM6P",
    image: "/realizations/um6pspectaclefolklorique.jpg",
    description: "Spectacle folklorique, une mise en scène vibrante et authentique qui met en valeur la richesse du patrimoine culturel marocain."
  },
  {
    id: 4,
    name: "MAROC EXPORT",
    image: "/realizations/marocexport.jpg",
    description: "Espace modulable dédié à la promotion des entreprises exportatrices et à la mise en valeur du savoir-faire national."
  },
  {
    id: 5,
    name: "PAVILLONS ÉTATIQUES",
    image: "/realizations/pavillons-etatiques.png",
    description: "Conception et aménagement de pavillons institutionnels pour les grandes expositions et salons mondiaux."
  },
  {
    id: 6,
    name: "ADA - ABU DHABI INTERNATIONAL FOOD EXHIBITION",
    image: "/realizations/adif2023.png",
    description: "Pavillon marocain présentant l'excellence agroalimentaire nationale dans une scénographie moderne et lumineuse."
  },
  {
    id: 7,
    name: "UM6P",
    image: "/realizations/um6pjpo.jpg",
    description: "Journées Portes Ouvertes ; un aménagement accueillant et informatif offrant une découverte immersive de l'université et ses programmes."
  },
  {
    id: 8,
    name: "INWI",
    image: "/realizations/inwi.png",
    description: "Stand corporate au design épuré et technologique, valorisant l'innovation et la connectivité."
  },
  {
    id: 9,
    name: "CASA EVENTS",
    image: "/realizations/smartcity.png",
    description: "Conception d'un espace interactif et expérientiel pour promouvoir les événements culturels et sportifs de la ville."
  },
  {
    id: 10,
    name: "UM6P",
    image: "/realizations/UM6P.png",
    description: "Une scénographie alliant innovation  et recherche  dans un espace captivant."
  },
  {
    id: 11,
    name: "SAFRAN",
    image: "/realizations/safran.jpg",
    description: "Lancement EIS G700 : une scénographie technique  et élégante pour un événement premium célébrant l'innovation aéronautique."
  },
  {
    id: 12,
    name: "ROCK & TALK",
    image: "/realizations/rocktalk.jpg",
    description: "Un événement dynamique combinant  conférences inspirantes et ambiance rock dans un décor scénique immersif."
  },
  {
    id: 13,
    name: "DEMO DAYS",
    image: "/realizations/demodays.jpg",
    description: "Un espace de pitch et de démonstration pour statuts, favorisant l'innovation et les rencontres avec les investisseurs."
  },
  {
    id: 14,
    name: "UM6P",
    image: "/realizations/um6pceremonie.jpg",
    description: "Cérémonie de remise des diplômes : une scène élégante et solennelle dans un cadre mémorable."
  },
  {
    id: 15,
    name: "IMMO GALLERY",
    image: "/realizations/immo.jpg",
    description: "Showroom immobilier élégant offrant une expérience de découverte visuelle et interactive des projets."
  },
  {
    id: 16,
    name: "EUCERIN DAYS",
    image: "/realizations/eucerin.jpg",
    description: "Événement brand experience dédié à la dermatologie, combinant expertise scientifique et design épuré."
  },
  {
    id: 17,
    name: "ONMT/FRMF",
    image: "/realizations/onmtfrmff.jpg",
    description: "Une scénographie de lancement pour Maroc, Terre de Football, célébrant la passion sportif et l'attrait touristique du Maroc."
  },
  {
    id: 18,
    name: "UM6P",
    image: "/realizations/culturaldaysum6p.jpg",
    description: "Cultural days: une scénographie festive mettant en valeur la diversité culturelle à travers des espaces de rencontre animés."
  },
  {
    id: 19,
    name: "AFA",
    image: "/realizations/afa.jpg",
    description: "Organisation et scénographie de l'évènement pour l'Agence For Accounts."
  },
  {
    id: 20,
    name: "SMART CITY",
    image: "/realizations/smartcity.jpg",
    description: "Pavillon futuriste illustrant les solutions urbaines intelligentes et durables pour les villes de demain."
  },
  {
    id: 21,
    name: "OCP", 
    image: "/realizations/ocpmouvementtoready.jpg",
    description: "Mouvement to Ready: scénographie dynamique pour stimuler l'engagement et la transformation."
  },
  {
    id: 22,
    name: "UM6P",
    image: "/realizations/innovationdaysum6p.jpg",
    description: "Forum d'innovation avec scénographie mettant en  avant recherches et projets technologiques dans un cadre moderne et interactif."
  }
];

// Loisirs / Parcs & centres ludiques
const LOISIRS_WORKS: Work[] = [
  {
    id: 1,
    name: "Palooza Park",
    image: "/palooza.webp",
    description: "Parc d'attractions thématique dédié aux dinosaures, combinant divertissement familial, pédagogie et expériences immersives uniques."
  },
  {
    id: 2,
    name: "Skyjump Trampoline Park",
    image: "/skyjump.jpg",
    description: "Espace de loisirs indoor entièrement dédié au trampoline, offrant une expérience fun et sportive pour tous les âges."
  },
  {
    id: 3,
    name: "Garden Corner",
    image: "/gardencorner.jpg",
    description: "Un univers où gastronomie, art de vivre et décoration se rencontrent, offrant des expériences gourmandes et sensorielles uniques dans des espaces chaleureux et raffinés."
  },
  {
    id: 4,
    name: "Go Vélodrome",
    image: "/velodrome.jpg",
    description: "Plateforme de communication pour promouvoir les événements du Vélodrome Casablanca."
  },
  {
    id: 5,
    name: "Oxygen Village",
    image: "/oxygen.jpg",
    description: "Concept d'hôtellerie éco-responsable conçu à partir de conteneurs, associant design, confort et nature pour une expérience d'accueil nouvelle génération."
  },
];

// BTP / Construction
const BTP_WORKS: Work[] = [
  {
    id: 1,
    name: "OXYGEN VILLAGE",
    image: "/oxygen.jpg",
    description: "Hébergement éco-responsable où confort, design et respect de l'environnement se rencontrent pour une expérience unique."
  },
  {
    id: 2,
    name: "MC VILLAGE",
    image: "/mcdo.jpg",
    description: "Un projet de 1540 m2 couverts et 9533 m2 d'espaces extérieurs, où architecture innovante et aménagement paysager créent une expérience harmonieuse et accueillante."
  }
];

const TAB_DATA = [
  {
    id: 'live',
    label: 'Création audiovisuelle & événements',
    icon: Sparkles,
    works: LIVE_PROGRAMS,
    description: "Depuis plus de vingt ans, Parthenon Holding imagine et réalise les grands rendez-vous audiovisuels et événementiels du Royaume. Ses équipes conçoivent, produisent et orchestrent des formats emblématiques de la fiction et du divertissement aux shows live, festivals et expériences immersives."
  },
  {
    id: 'loisirs',
    label: 'Loisirs & Hospitalité',
    icon: Award,
    works: LOISIRS_WORKS,
    description: "Parthenon Holding conçoit et exploite des lieux de vie uniques où loisirs, hôtellerie et gastronomie se rencontrent pour offrir des expériences inoubliables alliant plaisir, convivialité et excellence d'accueil."
  },
  {
    id: 'services',
    label: 'Scénographie & Aménagement',
    icon: Building2,
    works: SERVICES_WORKS,
    description: "De la conception à la réalisation, nous signons des espaces scénographiques où architecture, storytelling et technologie s'unissent harmonieusement."
  },
  {
    id: 'btp',
    label: "Bâtiments Tout Corps D'état",
    icon: HardHat,
    works: BTP_WORKS,
    description: "Notre entreprise de construction PBS est spécialisée dans la réalisation de projets divers, allant des infrastructures commerciales aux complexes résidentiels, en mettant l'accent sur la qualité et l'innovation."
  },
];

// Separate component that uses useSearchParams
function NosVerticauxContent() {
  const searchParams = useSearchParams();
  const tabFromUrl = searchParams.get('tab');
  
  // Initialize activeTab from URL or default to 'live'
  const [activeTab, setActiveTab] = useState(() => {
    // Check if the tab from URL is valid
    if (tabFromUrl && TAB_DATA.some(tab => tab.id === tabFromUrl)) {
      return tabFromUrl;
    }
    return 'live';
  });
  
  // Update activeTab when URL changes
  useEffect(() => {
    if (tabFromUrl && TAB_DATA.some(tab => tab.id === tabFromUrl)) {
      setActiveTab(tabFromUrl);
    }
  }, [tabFromUrl]);
  
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
initial={{ opacity: 0, y: 30 }}
whileInView={{ opacity: 1, y: 0 }}
viewport={{ once: true, amount: 0.1 }}
transition={{ 
  duration: 0.4, 
  delay: index * 0.05,
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

// Main component with Suspense wrapper
export default function NosVerticaux() {
  return (
    <Suspense fallback={<div className="w-full min-h-screen" style={{ backgroundColor: DARK }}></div>}>
      <NosVerticauxContent />
    </Suspense>
  );
}