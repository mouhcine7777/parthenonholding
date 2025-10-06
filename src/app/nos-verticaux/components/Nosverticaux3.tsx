'use client';
import { useState } from 'react';
import { ChevronRight, X, MapPin } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// Define brand colors
const GOLD = "#A98142";
const LIGHT_BG = "#FAFAFA";
const DARK = "#1C1C1B";
const LIGHT_TEXT = "#444444";

// Define the EntertainmentSpace type interface
interface EntertainmentSpace {
  id: number;
  name: string;
  image: string;
  description: string;
  longDescription: string;
  location: string;
  type: string;
}

// Entertainment spaces data
const ENTERTAINMENT_SPACES: EntertainmentSpace[] = [
  {
    id: 1,
    name: "PALOOZA PARK MARRAKECH",
    image: "/palooza.webp",
    description: "Parc d'attractions familial avec manèges et activités variées",
    longDescription: "Palooza Park Marrakech est le plus grand parc d'attractions du Maroc offrant une expérience immersive unique en son genre. Avec ses manèges à sensations fortes, ses attractions familiales et ses spectacles divertissants, Palooza Park transporte les visiteurs dans un univers magique au cœur de la ville ocre. Le parc propose également des espaces de restauration thématiques et des boutiques de souvenirs pour compléter l'expérience.",
    location: "Marrakech, Maroc",
    type: "Parc d'attractions"
  },
  {
    id: 2,
    name: "SKY JUMP TRAMPOLINE PARK",
    image: "/skyjump.jpg",
    description: "Espace de loisirs avec trampolines pour tous les âges",
    longDescription: "Sky Jump est un parc de trampolines indoor conçu pour offrir des heures de plaisir et d'activité physique à toute la famille. Avec ses zones de sauts libres, ses parcours d'obstacles, ses fosses de mousses et ses aires de dodgeball, Sky Jump combine divertissement et exercice dans un environnement sécurisé et supervisé par des professionnels. Parfait pour les anniversaires, sorties en famille ou entre amis.",
    location: "Casablanca, Maroc",
    type: "Parc de trampolines"
  },
  {
    id: 3,
    name: "LOUPI JUNGLE",
    image: "/filiales/loupijungle.jpg",
    description: "Aire de jeux thématique pour enfants avec parcours d'aventure",
    longDescription: "Loupi Jungle est un paradis pour les plus jeunes avec son aire de jeux intérieure thématisée autour de la jungle. Les enfants peuvent explorer des labyrinthes, glisser sur des toboggans géants, grimper sur des structures d'escalade sécurisées et se lancer dans des piscines à balles colorées. Le complexe dispose également d'un café pour les parents et propose des formules pour fêter des anniversaires inoubliables.",
    location: "Rabat, Maroc",
    type: "Aire de jeux pour enfants"
  }
];

export default function NosVerticauxEspaces() {
  const [selectedSpace, setSelectedSpace] = useState<EntertainmentSpace | null>(null);
  
  // Open popup modal
  const openModal = (space: EntertainmentSpace) => {
    setSelectedSpace(space);
    document.body.style.overflow = 'hidden';
  };
  
  // Close popup modal
  const closeModal = () => {
    setSelectedSpace(null);
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
            Nos Verticaux – <span style={{ color: GOLD }}>Espaces Entertainment</span>
          </h2>
          <div 
            className="h-px w-16 md:w-24 ml-4"
            style={{ backgroundColor: GOLD }}
          />
        </div>
        

                {/* Public Events Description */}
                <div
          className="relative mb-16 p-8 rounded-lg"
          style={{ backgroundColor: `${GOLD}10`, border: `1px solid ${GOLD}20` }}
        >
          {/* Decorative element */}
          <div className="absolute -top-3 left-10 px-4 py-1 rounded" style={{ backgroundColor: LIGHT_BG }}>
            <span className="text-sm uppercase tracking-wider font-medium" style={{ color: GOLD }}>Loisirs / Parcs & centres ludiques</span>
          </div>
          
          <p className="text-base md:text-lg mb-0" style={{ color: LIGHT_TEXT }}>
          L’entertainment étant au cœur de notre savoir-faire, nous avons imaginé un parc à thème unique au Royaume, Palooza Park Marrakech, (24 000 m²), plongeant les visiteurs dans l’univers fascinant des dinosaures.
          </p>
        </div>
        
        {/* Entertainment Spaces Section */}
        <div className="mb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 w-full px-2 md:px-4">
            {ENTERTAINMENT_SPACES.map((space) => (
              <motion.div
                key={space.id}
                className="relative overflow-hidden rounded-xl shadow-lg cursor-pointer group h-80 sm:h-96 w-full"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.8 }}
                onClick={() => openModal(space)}
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
                      src={space.image || "/api/placeholder/800/1200"}
                      alt={space.name}
                      className="w-full h-full object-cover"
                    />
                  </motion.div>
                </div>
                
                {/* Type badge */}
                <div 
                  className="absolute top-4 right-4 z-20 px-2 py-1 rounded-full text-xs font-medium text-white"
                  style={{ backgroundColor: GOLD }}
                >
                  {space.type}
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
                    <h3 className="text-xl md:text-2xl font-bold text-white">{space.name}</h3>
                    <p className="text-base md:text-lg text-gray-200 opacity-90">{space.description}</p>
                    
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
        </div>
        
        {/* Bottom decorative element */}
        <div 
          className="h-px w-48 md:w-72 mx-auto"
          style={{ backgroundColor: `${GOLD}50` }}
        />
      </div>
      
      {/* Modal for space details */}
      <AnimatePresence>
        {selectedSpace && (
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
              {/* Modal header with image */}
              <div className="relative h-48 sm:h-64 md:h-72 overflow-hidden">
                <img 
                  src={selectedSpace.image || "/api/placeholder/1200/600"}
                  alt={selectedSpace.name}
                  className="w-full h-full object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                  <div className="p-4 md:p-6 lg:p-8 w-full">
                    <div 
                      className="w-12 h-1 mb-3"
                      style={{ backgroundColor: GOLD }}
                    />
                    <h3 className="text-2xl md:text-3xl font-bold text-white">{selectedSpace.name}</h3>
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
                <p className="text-base md:text-lg text-gray-800 mb-6">{selectedSpace.longDescription}</p>
                
                <h4 className="text-lg md:text-xl font-semibold mb-4 text-gray-900">
                  Informations
                </h4>
                
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-8">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 mt-2 rounded-full shrink-0" style={{ backgroundColor: GOLD }} />
                    <span className="text-gray-800">Type: {selectedSpace.type}</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <MapPin size={16} className="mt-1 shrink-0" style={{ color: GOLD }} />
                    <span className="text-gray-800">Lieu: {selectedSpace.location}</span>
                  </li>
                </ul>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}