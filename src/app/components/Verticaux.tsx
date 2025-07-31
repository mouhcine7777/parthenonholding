import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronRight } from 'lucide-react';

// Define brand colors as constants
const GOLD = "#A98142";
const LIGHT = "#E6E6E6";
const DARK = "#1C1C1B";

// Define TypeScript interfaces
interface Vertical {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  features: string[];
  image: string;
  color: string;
}

export default function NosVerticaux() {
  const [selectedVertical, setSelectedVertical] = useState<string | null>(null);
  
  // Vertical data
  const verticals: Vertical[] = [
    {
      id: "marques",
      title: "Marques",
      shortDescription: "Portfolio de marques prestigieuses avec expériences uniques",
      fullDescription: "Notre portfolio de marques prestigieuses offre des expériences uniques à travers différents secteurs avec une approche haut de gamme et innovante pour chaque projet.",
      features: [
        "Production événementielle haut de gamme",
        "Concepts immersifs et innovants",
        "Solutions clé en main pour entreprises",
        "Stratégies de communication intégrées"
      ],
      image: "/marques-image.jpg",
      color: "#C59B5A",
    },
    {
      id: "espaces-entertainment",
      title: "Espaces Entertainment",
      shortDescription: "Lieux exceptionnels dédiés au divertissement et à l'évasion",
      fullDescription: "Des lieux exceptionnels dédiés au divertissement, à l'évasion et à l'expérience client pour créer des moments inoubliables et des émotions durables.",
      features: [
        "Concepts d'entertainment novateurs",
        "Espaces immersifs et interactifs",
        "Design et scénographie sur mesure",
        "Expériences sensorielles complètes"
      ],
      image: "/entertainment-image.webp",
      color: "#B68C45",
    },
    {
      id: "services",
      title: "Services",
      shortDescription: "Gamme complète de services professionnels pour tous vos besoins",
      fullDescription: "Une gamme complète de services professionnels pour répondre à tous vos besoins avec expertise, innovation et un souci constant de l'excellence.",
      features: [
        "Conseil stratégique personnalisé",
        "Solutions technologiques avancées",
        "Gestion de projets intégrée",
        "Support logistique et technique"
      ],
      image: "/services-image.jpg",
      color: "#9E774E",
    }
  ];

  // Open popup modal
  const openModal = (id: string) => {
    setSelectedVertical(id);
    document.body.style.overflow = 'hidden';
  };

  // Close popup modal
  const closeModal = () => {
    setSelectedVertical(null);
    document.body.style.overflow = 'auto';
  };

  // Get the selected vertical data
  const getSelectedVertical = () => {
    return verticals.find(v => v.id === selectedVertical);
  };

  return (
    <section className="py-20 md:py-32 relative overflow-hidden bg-gray-50">
      {/* Background elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full" 
          style={{
            backgroundImage: `radial-gradient(circle at 20% 20%, ${DARK} 1px, transparent 1px), 
                              radial-gradient(circle at 80% 80%, ${DARK} 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }}
        />
      </div>
      
      <div className="w-full px-4">
        {/* Section header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-block relative">
            <span className="text-sm uppercase tracking-widest font-medium" style={{ color: GOLD }}>
              Expertise
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mt-2" style={{ color: DARK }}>
              Nos Verticaux
            </h2>
            <motion.div 
              className="h-1 mt-4 mx-auto"
              style={{ backgroundColor: GOLD }}
              initial={{ width: 0 }}
              whileInView={{ width: '100%' }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.3 }}
            />
          </div>
          
          <motion.p 
            className="max-w-2xl mx-auto mt-6 text-lg"
            style={{ color: `${DARK}CC` }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Découvrez nos trois pôles d'expertise qui définissent l'ADN de Parthenon Holding et garantissent une approche globale et intégrée pour tous vos projets.
          </motion.p>
        </motion.div>
        
        {/* Cards container */}
        <div className="flex flex-col md:flex-row w-full gap-6">
          {verticals.map((vertical) => (
            <motion.div
              key={vertical.id}
              className="relative overflow-hidden rounded-xl shadow-lg cursor-pointer group h-120 w-full flex-1"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.8 }}
              onClick={() => openModal(vertical.id)}
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
                    src={vertical.image || "/api/placeholder/800/1200"}
                    alt={vertical.title}
                    className="w-full h-full object-cover"
                  />
                </motion.div>
              </div>
              
              {/* Card content */}
              <div className="absolute bottom-0 left-0 right-0 p-8 z-20 transform transition-transform duration-300 group-hover:translate-y-0">
                <div className="space-y-3">
                  <motion.div
                    className="w-16 h-1 mb-4"
                    style={{ backgroundColor: vertical.color }}
                    whileInView={{ width: 64 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3, duration: 0.6 }}
                  />
                  <h3 className="text-3xl font-bold text-white">{vertical.title}</h3>
                  <p className="text-xl text-gray-200 opacity-90">{vertical.shortDescription}</p>
                  
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
      </div>
      
      {/* Modal popup */}
      <AnimatePresence>
        {selectedVertical && (
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
              <div className="relative h-64 md:h-72 overflow-hidden">
                <img 
                  src={getSelectedVertical()?.image || "/api/placeholder/1200/600"}
                  alt={getSelectedVertical()?.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                  <div className="p-6 md:p-8 w-full">
                    <div 
                      className="w-12 h-1 mb-3"
                      style={{ backgroundColor: getSelectedVertical()?.color }}
                    />
                    <h3 className="text-3xl font-bold text-white">{getSelectedVertical()?.title}</h3>
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
              <div className="p-6 md:p-8">
                <p className="text-lg text-gray-800 mb-6">{getSelectedVertical()?.fullDescription}</p>
                
                <h4 className="text-lg font-semibold mb-4" style={{ color: getSelectedVertical()?.color }}>
                  Caractéristiques
                </h4>
                
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-8">
                  {getSelectedVertical()?.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div 
                        className="w-2 h-2 mt-2 rounded-full shrink-0"
                        style={{ backgroundColor: getSelectedVertical()?.color }}
                      />
                      <span className="text-gray-800">{feature}</span>
                      </li>
                  ))}
                </ul>
                
                <div className="flex justify-center">
                  <button 
                    className="px-6 py-3 rounded-lg transition-all duration-300 flex items-center gap-2 group"
                    style={{ 
                      backgroundColor: getSelectedVertical()?.color,
                      color: LIGHT
                    }}
                  >
                    <span>En savoir plus</span>
                    <ChevronRight 
                      size={18}
                      className="transform transition-transform duration-300 group-hover:translate-x-1"
                    />
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}