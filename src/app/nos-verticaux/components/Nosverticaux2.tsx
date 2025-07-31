import { useState } from 'react';
import { ChevronRight, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// Define brand colors
const GOLD = "#A98142";
const LIGHT_BG = "#FAFAFA";
const DARK = "#1C1C1B";
const LIGHT_TEXT = "#444444";

// Define the Realization type interface
interface Realization {
  id: number;
  name: string;
  image: string;
  description: string;
  longDescription: string;
  category: string;
}

// Realization data
const PAVILLONS_REALIZATIONS: Realization[] = [
  {
    id: 1,
    name: "ONMT",
    image: "/realizations/onmt.webp",
    description: "Pavillon officiel de l'Office National Marocain du Tourisme",
    longDescription: "Conception et réalisation du pavillon officiel de l'ONMT pour les expositions internationales de tourisme. Un espace immersif qui met en valeur les richesses culturelles et naturelles du Maroc à travers des technologies interactives et des installations spectaculaires.",
    category: "PAVILLONS NATIONAUX & WORLD EXPO"
  },
  {
    id: 2,
    name: "OCP",
    image: "/realizations/ocp.png",
    description: "Pavillon du groupe OCP pour les expositions internationales",
    longDescription: "Scénographie innovante pour le pavillon OCP présentant les innovations du groupe dans le domaine des phosphates et de l'agriculture durable. L'espace combine éléments pédagogiques et expériences sensorielles pour une visite mémorable.",
    category: "PAVILLONS NATIONAUX & WORLD EXPO"
  },
  {
    id: 3,
    name: "MAROC EXPORT",
    image: "/realizations/marocexport.jpg",
    description: "Espace dédié à la promotion des exportations marocaines",
    longDescription: "Aménagement d'un espace modulable mettant en avant les produits phares de l'export marocain. Design épuré mettant en valeur les produits avec des zones thématiques et des espaces de networking.",
    category: "PAVILLONS NATIONAUX & WORLD EXPO"
  },
  {
    id: 4,
    name: "PAVILLONS ÉTATIQUES",
    image: "/realizations/pavillons-etatiques.png",
    description: "Conception de pavillons nationaux pour divers pays",
    longDescription: "Réalisation de pavillons nationaux pour plusieurs pays lors d'expositions internationales. Chaque espace est conçu pour refléter l'identité culturelle et les atouts économiques du pays représenté.",
    category: "PAVILLONS NATIONAUX & WORLD EXPO"
  },
  {
    id: 5,
    name: "ADA",
    image: "/realizations/adif2023.png",
    description: "Abu Dhabi International Food Exhibition",
    longDescription: "Réalisation de pavillons nationaux pour plusieurs pays lors d'expositions internationales. Chaque espace est conçu pour refléter l'identité culturelle et les atouts économiques du pays représenté.",
    category: "PAVILLONS NATIONAUX & WORLD EXPO"
  },
  {
    id: 6,
    name: "INWI",
    image: "/realizations/inwi.png",
    description: "Conception de pavillons d'inwi Gitex",
    longDescription: "Réalisation de pavillons nationaux pour plusieurs pays lors d'expositions internationales. Chaque espace est conçu pour refléter l'identité culturelle et les atouts économiques du pays représenté.",
    category: "PAVILLONS NATIONAUX & WORLD EXPO"
  },
  {
    id: 6,
    name: "CASA EVENTS",
    image: "/realizations/smartcity.png",
    description: "Conception de pavillons d'inwi Gitex",
    longDescription: "Réalisation de pavillons nationaux pour plusieurs pays lors d'expositions internationales. Chaque espace est conçu pour refléter l'identité culturelle et les atouts économiques du pays représenté.",
    category: "PAVILLONS NATIONAUX & WORLD EXPO"
  },
  {
    id: 6,
    name: "UM6P",
    image: "/realizations/UM6P.png",
    description: "Conception de pavillons d'inwi Gitex",
    longDescription: "Réalisation de pavillons nationaux pour plusieurs pays lors d'expositions internationales. Chaque espace est conçu pour refléter l'identité culturelle et les atouts économiques du pays représenté.",
    category: "PAVILLONS NATIONAUX & WORLD EXPO"
  }
];

const SCENOGRAPHIES_REALIZATIONS: Realization[] = [
  {
    id: 1,
    name: "WORLD BOXING SERIES",
    image: "/realizations/wbs.png",
    description: "Scénographie pour tournoi international de boxe",
    longDescription: "Conception de l'espace de compétition et des installations pour le World Boxing Series. Éclairages dramatiques, écrans géants et parcours d'entrée spectaculaire pour créer une expérience immersive pour les spectateurs sur place et à la télévision.",
    category: "SCÉNOGRAPHIES & EXPÉRIENCES"
  },
  {
    id: 2,
    name: "MEETING INTERNATIONAL M6 D'ATHLÉTISME",
    image: "/realizations/meeting-athle.webp",
    description: "Aménagement du stade et parcours pour meeting d'athlétisme",
    longDescription: "Scénographie complète pour le meeting international d'athlétisme M6. Conception des espaces de compétition, zones techniques et parcours des athlètes pour optimiser l'expérience des participants et des spectateurs.",
    category: "SCÉNOGRAPHIES & EXPÉRIENCES"
  },
  {
    id: 3,
    name: "COUPE DU MONDE DES CLUBS",
    image: "/realizations/cdm-clubs.webp",
    description: "Aménagement des espaces pour compétition footballistique",
    longDescription: "Scénographie des espaces d'accueil, cérémonies et zones techniques pour la Coupe du Monde des Clubs FIFA. Conception d'installations temporaires répondant aux standards internationaux tout en reflétant l'identité locale.",
    category: "SCÉNOGRAPHIES & EXPÉRIENCES"
  },
  {
    id: 4,
    name: "SMART CITY",
    image: "/realizations/smart-city.webp",
    description: "Exposition sur les villes intelligentes",
    longDescription: "Conception et réalisation d'une exposition itinérante sur les smart cities. Espace modulaire présentant les innovations technologiques pour les villes du futur à travers des installations interactives et des maquettes à échelle.",
    category: "SCÉNOGRAPHIES & EXPÉRIENCES"
  }
];

const THEMATISATION_REALIZATIONS: Realization[] = [
  {
    id: 1,
    name: "LE JARDIN ZOOLOGIQUE DE RABAT",
    image: "/realizations/zoo-rabat.webp",
    description: "Thématisation des espaces du zoo national",
    longDescription: "Conception et réalisation des espaces thématiques du Jardin Zoologique de Rabat. Création d'environnements immersifs reproduisant les habitats naturels des animaux avec une attention particulière aux détails et à l'expérience des visiteurs.",
    category: "THÉMATISATION D'ESPACES"
  },
  {
    id: 2,
    name: "PARC ZOOLOGIQUE D'AIN SEBAA",
    image: "/realizations/zoo-ain-sebaa.webp",
    description: "Aménagement thématique des espaces animaliers",
    longDescription: "Thématisation complète des différents biotopes du parc zoologique d'Ain Sebaa. Réalisation d'installations paysagères et architecturales recréant les écosystèmes d'origine des espèces présentées.",
    category: "THÉMATISATION D'ESPACES"
  },
  {
    id: 3,
    name: "LE MUSÉE DES SPORTS",
    image: "/realizations/musee-sports.webp",
    description: "Scénographie muséale sur l'histoire du sport",
    longDescription: "Conception de l'exposition permanente du Musée des Sports. Parcours chronologique et thématique utilisant des technologies interactives, des installations multimédias et des objets historiques pour raconter l'évolution du sport national et international.",
    category: "THÉMATISATION D'ESPACES"
  }
];

export default function NosVerticauxServices() {
  const [activeTab, setActiveTab] = useState('pavillons');
  const [selectedRealization, setSelectedRealization] = useState<Realization | null>(null);
  
  // Open popup modal
  const openModal = (realization: Realization) => {
    setSelectedRealization(realization);
    document.body.style.overflow = 'hidden';
  };
  
  // Close popup modal
  const closeModal = () => {
    setSelectedRealization(null);
    document.body.style.overflow = 'auto';
  };
  
  return (
    <section className="py-16 w-full" style={{ backgroundColor: LIGHT_BG }}>
      <div className="container mx-auto px-4 md:px-6 max-w-full">
        {/* Section Heading with decorative elements */}
        <div className="flex items-center justify-center mb-6">
          <div 
            className="h-px w-16 md:w-24 mr-4"
            style={{ backgroundColor: GOLD }}
          />
          <h2 
            className="text-3xl md:text-4xl font-medium uppercase tracking-wide text-center"
            style={{ color: DARK }}
          >
            Nos Verticaux – <span style={{ color: GOLD }}>Services</span>
          </h2>
          <div 
            className="h-px w-16 md:w-24 ml-4"
            style={{ backgroundColor: GOLD }}
          />
        </div>
        
        {/* Mission Statement */}
        <p 
          className="text-lg md:text-xl text-center max-w-4xl mx-auto mb-12"
          style={{ color: LIGHT_TEXT }}
        >
          Tout au long de l'année, Parthenon Holding, à travers sa filiale Public Events, met son expertise de concepteur et d'aménageur d'espace à disposition de clients nationaux et internationaux lors de la tenue d'événements professionnels, culturels et sportifs.
        </p>
        
        {/* Public Events Description */}
        <div
          className="relative mb-16 p-8 rounded-lg"
          style={{ backgroundColor: `${GOLD}10`, border: `1px solid ${GOLD}20` }}
        >
          {/* Decorative element */}
          <div className="absolute -top-3 left-10 px-4 py-1 rounded" style={{ backgroundColor: LIGHT_BG }}>
            <span className="text-sm uppercase tracking-wider font-medium" style={{ color: GOLD }}>Parthenon Services</span>
          </div>
          
          <p className="text-base md:text-lg mb-0" style={{ color: LIGHT_TEXT }}>
            Public Events met à profit son expertise dans la conceptualisation et l'aménagement d'espaces pour offrir des solutions clé en main à ses clients. De la conception initiale à la réalisation finale, notre équipe pluridisciplinaire s'engage à créer des environnements qui captivent, inspirent et laissent une impression durable. Avec une attention méticuleuse aux détails et une compréhension approfondie des besoins de nos clients, nous transformons des concepts en expériences immersives qui répondent aux objectifs stratégiques tout en dépassant les attentes.
          </p>
        </div>
        
        {/* Responsive Tab Navigation */}
        <div className="flex justify-center mb-8">
          <div 
            className="inline-flex flex-col sm:flex-row bg-white rounded-lg p-1 shadow-sm w-full sm:w-auto"
            style={{ border: `1px solid ${GOLD}20` }}
          >
            <button
              className={`px-3 py-2 text-xs sm:text-sm md:text-base font-medium rounded-md transition-all duration-300 ${activeTab === 'pavillons' ? 'text-white' : 'text-gray-700'} mb-1 sm:mb-0 sm:mr-1`}
              style={{ backgroundColor: activeTab === 'pavillons' ? GOLD : 'transparent' }}
              onClick={() => setActiveTab('pavillons')}
            >
              <span className="whitespace-nowrap">PAVILLONS</span>
              <span className="hidden sm:inline"> NATIONAUX & WORLD EXPO</span>
            </button>
            <button
              className={`px-3 py-2 text-xs sm:text-sm md:text-base font-medium rounded-md transition-all duration-300 ${activeTab === 'scenographies' ? 'text-white' : 'text-gray-700'} mb-1 sm:mb-0 sm:mr-1`}
              style={{ backgroundColor: activeTab === 'scenographies' ? GOLD : 'transparent' }}
              onClick={() => setActiveTab('scenographies')}
            >
              <span className="whitespace-nowrap">SCÉNOGRAPHIES</span>
              <span className="hidden sm:inline"> & EXPÉRIENCES</span>
            </button>
            <button
              className={`px-3 py-2 text-xs sm:text-sm md:text-base font-medium rounded-md transition-all duration-300 ${activeTab === 'thematisation' ? 'text-white' : 'text-gray-700'}`}
              style={{ backgroundColor: activeTab === 'thematisation' ? GOLD : 'transparent' }}
              onClick={() => setActiveTab('thematisation')}
            >
              <span className="whitespace-nowrap">THÉMATISATION</span>
              <span className="hidden sm:inline"> D'ESPACES</span>
            </button>
          </div>
        </div>
        
        {/* Realization Sections */}
        <div className="mb-12">
          {/* Pavillons Nationaux & World Expo */}
          {activeTab === 'pavillons' && (
            <>
              <h3 
                className="text-2xl md:text-3xl font-medium mb-8 text-center"
                style={{ color: DARK }}
              >
                NOS RÉALISATIONS - PAVILLONS NATIONAUX & WORLD EXPO
              </h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 w-full px-2 md:px-4">
                {PAVILLONS_REALIZATIONS.map((realization) => (
                  <motion.div
                    key={realization.id}
                    className="relative overflow-hidden rounded-xl shadow-lg cursor-pointer group h-80 sm:h-96 w-full"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.1 }}
                    transition={{ duration: 0.8 }}
                    onClick={() => openModal(realization)}
                    whileHover={{ y: -5 }}
                  >
                    {/* Card image */}
                    <div className="absolute inset-0 w-full h-full">
                      <div 
                        className="absolute inset-0 bg-gradient-to-t from-black/80 to-black/20 z-10"
                      />
                      <motion.div
                        className="w-full h-full"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.4 }}
                      >
                        <img 
                          src={realization.image || "/api/placeholder/800/1200"}
                          alt={realization.name}
                          className="w-full h-full object-cover"
                        />
                      </motion.div>
                    </div>
                    
                    {/* Card content */}
                    <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6 lg:p-8 z-20 transform transition-transform duration-300 group-hover:translate-y-0">
                      <div className="space-y-2 md:space-y-3">
                        <motion.div
                          className="w-16 h-1 mb-2 md:mb-4"
                          style={{ backgroundColor: GOLD }}
                          whileInView={{ width: 64 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.3, duration: 0.6 }}
                        />
                        <h3 className="text-xl md:text-2xl font-bold text-white">{realization.name}</h3>
                        <p className="text-base md:text-lg text-gray-200 opacity-90">{realization.description}</p>
                        
                        <motion.div 
                          className="flex items-center pt-2 md:pt-4 text-white opacity-80 font-medium group-hover:opacity-100 text-base md:text-lg"
                          initial={{ opacity: 0.7 }}
                          whileHover={{ opacity: 1 }}
                        >
                          <span>Découvrir</span>
                          <ChevronRight size={20} className="ml-2 transform transition-transform group-hover:translate-x-1" />
                        </motion.div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </>
          )}
          
          {/* Scénographies & Expériences */}
          {activeTab === 'scenographies' && (
            <>
              <h3 
                className="text-2xl md:text-3xl font-medium mb-8 text-center"
                style={{ color: DARK }}
              >
                NOS RÉALISATIONS - SCÉNOGRAPHIES & EXPÉRIENCES
              </h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 w-full px-2 md:px-4">
                {SCENOGRAPHIES_REALIZATIONS.map((realization) => (
                  <motion.div
                    key={realization.id}
                    className="relative overflow-hidden rounded-xl shadow-lg cursor-pointer group h-80 sm:h-96 w-full"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.1 }}
                    transition={{ duration: 0.8 }}
                    onClick={() => openModal(realization)}
                    whileHover={{ y: -5 }}
                  >
                    {/* Card image */}
                    <div className="absolute inset-0 w-full h-full">
                      <div 
                        className="absolute inset-0 bg-gradient-to-t from-black/80 to-black/20 z-10"
                      />
                      <motion.div
                        className="w-full h-full"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.4 }}
                      >
                        <img 
                          src={realization.image || "/api/placeholder/800/1200"}
                          alt={realization.name}
                          className="w-full h-full object-cover"
                        />
                      </motion.div>
                    </div>
                    
                    {/* Card content */}
                    <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 z-20 transform transition-transform duration-300 group-hover:translate-y-0">
                      <div className="space-y-3">
                        <motion.div
                          className="w-16 h-1 mb-4"
                          style={{ backgroundColor: GOLD }}
                          whileInView={{ width: 64 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.3, duration: 0.6 }}
                        />
                        <h3 className="text-2xl font-bold text-white">{realization.name}</h3>
                        <p className="text-lg text-gray-200 opacity-90">{realization.description}</p>
                        
                        <motion.div 
                          className="flex items-center pt-4 text-white opacity-80 font-medium group-hover:opacity-100 text-lg"
                          initial={{ opacity: 0.7 }}
                          whileHover={{ opacity: 1 }}
                        >
                          <span>Découvrir</span>
                          <ChevronRight size={20} className="ml-2 transform transition-transform group-hover:translate-x-1" />
                        </motion.div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </>
          )}
          
          {/* Thématisation d'Espaces */}
          {activeTab === 'thematisation' && (
            <>
              <h3 
                className="text-2xl md:text-3xl font-medium mb-8 text-center"
                style={{ color: DARK }}
              >
                NOS RÉALISATIONS - THÉMATISATION D'ESPACES
              </h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 w-full px-2 md:px-4">
                {THEMATISATION_REALIZATIONS.map((realization) => (
                  <motion.div
                    key={realization.id}
                    className="relative overflow-hidden rounded-xl shadow-lg cursor-pointer group h-80 sm:h-96 w-full"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.1 }}
                    transition={{ duration: 0.8 }}
                    onClick={() => openModal(realization)}
                    whileHover={{ y: -5 }}
                  >
                    {/* Card image */}
                    <div className="absolute inset-0 w-full h-full">
                      <div 
                        className="absolute inset-0 bg-gradient-to-t from-black/80 to-black/20 z-10"
                      />
                      <motion.div
                        className="w-full h-full"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.4 }}
                      >
                        <img 
                          src={realization.image || "/api/placeholder/800/1200"}
                          alt={realization.name}
                          className="w-full h-full object-cover"
                        />
                      </motion.div>
                    </div>
                    
                    {/* Card content */}
                    <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 z-20 transform transition-transform duration-300 group-hover:translate-y-0">
                      <div className="space-y-3">
                        <motion.div
                          className="w-16 h-1 mb-4"
                          style={{ backgroundColor: GOLD }}
                          whileInView={{ width: 64 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.3, duration: 0.6 }}
                        />
                        <h3 className="text-2xl font-bold text-white">{realization.name}</h3>
                        <p className="text-lg text-gray-200 opacity-90">{realization.description}</p>
                        
                        <motion.div 
                          className="flex items-center pt-4 text-white opacity-80 font-medium group-hover:opacity-100 text-lg"
                          initial={{ opacity: 0.7 }}
                          whileHover={{ opacity: 1 }}
                        >
                          <span>Découvrir</span>
                          <ChevronRight size={20} className="ml-2 transform transition-transform group-hover:translate-x-1" />
                        </motion.div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </>
          )}
        </div>
        
        {/* Bottom decorative element */}
        <div 
          className="h-px w-48 md:w-72 mx-auto"
          style={{ backgroundColor: `${GOLD}50` }}
        />
      </div>
      
{/* Modal for realization details */}
<AnimatePresence>
  {selectedRealization && (
    <motion.div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <motion.div 
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={closeModal}
      />
      
      <motion.div 
        className="bg-white rounded-xl overflow-hidden w-full max-w-4xl z-10 relative shadow-2xl"
        initial={{ scale: 0.9, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.9, opacity: 0, y: 20 }}
        transition={{ type: "spring", damping: 25, stiffness: 300 }}
      >
        {/* Modal header with image - Increased height */}
        <div className="relative h-64 sm:h-80 md:h-96 lg:h-[28rem] overflow-hidden">
          <img 
            src={selectedRealization.image || "/api/placeholder/1200/600"}
            alt={selectedRealization.name}
            className="w-full h-full object-cover object-top"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
            <div className="p-4 md:p-6 lg:p-8 w-full">
              <div 
                className="w-12 h-1 mb-3"
                style={{ backgroundColor: GOLD }}
              />
              <h3 className="text-2xl md:text-3xl font-bold text-white">{selectedRealization.name}</h3>
              <p className="text-lg text-gray-200 mt-2">{selectedRealization.category}</p>
            </div>
          </div>
          
          {/* Close button */}
          <button 
            className="absolute top-4 right-4 w-10 h-10 rounded-full bg-black/40 backdrop-blur-sm text-white flex items-center justify-center hover:bg-black/60 transition-colors"
            onClick={closeModal}
          >
            <X size={20} />
          </button>
        </div>
              
              {/* Modal content */}
              <div className="p-4 md:p-6 lg:p-8">
                <p className="text-base md:text-lg text-gray-800 mb-6">{selectedRealization.longDescription}</p>
                
                <div className="flex justify-center">
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}