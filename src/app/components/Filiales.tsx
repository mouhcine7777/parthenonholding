'use client';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronRight } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// Define brand colors as constants
const GOLD = "#A98142";
const LIGHT = "#E6E6E6";
const DARK = "#1C1C1B";

// Define TypeScript interfaces
interface Filiale {
  id: string;
  name: string;
  description: string;
  features: string[];
  image: string;
  color: string;
}

export default function NosFiliales() {
  const [selectedFiliale, setSelectedFiliale] = useState<string | null>(null);
  const [swiperInstance, setSwiperInstance] = useState<SwiperType | null>(null);
  const [windowWidth, setWindowWidth] = useState<number>(0);
  
  // Add window resize listener
  useEffect(() => {
    // Set initial width
    setWindowWidth(window.innerWidth);
    
    // Handle resize event
    const handleResize = () => {
      if (swiperInstance) {
        swiperInstance.update(); // Update swiper on resize
      }
    };
    
    window.addEventListener('resize', handleResize);
    
    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [swiperInstance]);
  
  // Filiales data
  const filiales: Filiale[] = [
    {
      id: "public-production",
      name: "Public Production",
      description: "Spécialiste des productions événementielles de grande envergure, Public Production conçoit et réalise des expériences inoubliables pour les marques et les institutions.",
      features: [
        "Événements corporate et grand public",
        "Production technique complète",
        "Scénographie innovante",
        "Gestion logistique intégrée"
      ],
      image: "/filiales/PEP.jpg",
      color: "#B68C45",
    },
    {
      id: "integral-solution",
      name: "Integral Solution",
      description: "Integral Solution propose des solutions globales pour optimiser chaque aspect de vos événements et espaces, de la conception à la réalisation.",
      features: [
        "Conseil en optimisation d'espace",
        "Solutions technologiques innovantes",
        "Services intégrés clé en main",
        "Gestion de projet complète"
      ],
      image: "/filiales/Integral.jpg",
      color: "#C59B5A",
    },
    {
      id: "skyjump",
      name: "Skyjump",
      description: "Spécialiste des activités de loisirs à sensations fortes, Skyjump propose des expériences aériennes uniques pour tous les publics.",
      features: [
        "Attractions aériennes sécurisées",
        "Expériences adrénaline pour tous",
        "Équipements de pointe certifiés",
        "Encadrement professionnel"
      ],
      image: "/filiales/Skyjump.jpg",
      color: "#9E774E",
    },
    {
      id: "go-velodrome",
      name: "Go Velodrome",
      description: "Premier centre cycliste indoor innovant, Go Velodrome offre des installations de qualité pour les passionnés de vélo de tous niveaux.",
      features: [
        "Pistes cyclables indoor",
        "Cours collectifs et individuels",
        "Événements compétitifs",
        "Location d'équipements premium"
      ],
      image: "/filiales/Govelodrome.jpg",
      color: "#A98142",
    },
    {
      id: "public-events",
      name: "Public Events",
      description: "Expert en conception et organisation d'événements publics d'envergure, festivals et célébrations culturelles.",
      features: [
        "Festivals thématiques sur mesure",
        "Événements urbains innovants",
        "Gestion de grands rassemblements",
        "Programmation artistique exclusive"
      ],
      image: "/filiales/publicevents.jpg",
      color: "#9E774E",
    },
    {
      id: "palooza-park",
      name: "Palooza Park",
      description: "Parc d'attractions thématique offrant une multitude d'expériences ludiques et immersives pour toute la famille.",
      features: [
        "Attractions thématiques variées",
        "Spectacles et animations exclusifs",
        "Espaces de restauration thématiques",
        "Événements saisonniers spéciaux"
      ],
      image: "/filiales/Palooza.jpg",
      color: "#B68C45",
    },
    {
      id: "garden-brunch",
      name: "Garden Brunch",
      description: "Concept de restauration haut de gamme spécialisé dans les brunchs gourmets dans un cadre naturel et élégant.",
      features: [
        "Cuisine raffinée et produits locaux",
        "Cadre verdoyant exceptionnel",
        "Formules adaptées à tous les événements",
        "Service personnalisé et attentionné"
      ],
      image: "/filiales/Gardenbrunch.jpg",
      color: "#C59B5A",
    },
    {
      id: "pbs",
      name: "PBS",
      description: "PBS offre des services de sécurité et de logistique de haut niveau pour tous types d'événements et d'infrastructures.",
      features: [
        "Sécurité événementielle certifiée",
        "Solutions logistiques complexes",
        "Personnel qualifié et formé",
        "Coordination multi-sites"
      ],
      image: "/filiales/pbs.jpg",
      color: "#A98142",
    },
    {
      id: "loupi-jungle",
      name: "Loupi Jungle",
      description: "Aire de jeux immersive pour enfants, alliant divertissement, aventure et apprentissage dans un environnement sécurisé.",
      features: [
        "Parcours d'aventure thématisés",
        "Ateliers pédagogiques ludiques",
        "Fêtes d'anniversaire sur mesure",
        "Encadrement spécialisé enfants"
      ],
      image: "/filiales/Loupijungle.jpg",
      color: "#B68C45",
    },
    {
      id: "garden-bakes",
      name: "Garden Bakes",
      description: "Pâtisserie artisanale proposant des créations gourmandes pour les particuliers et les professionnels dans un esprit éco-responsable.",
      features: [
        "Pâtisseries artisanales de qualité",
        "Ingrédients biologiques et locaux",
        "Service traiteur pour événements",
        "Ateliers de pâtisserie créative"
      ],
      image: "/filiales/Gardenbakes.jpg",
      color: "#C59B5A",
    }
  ];

  // Open popup modal
  const openModal = (id: string) => {
    setSelectedFiliale(id);
    document.body.style.overflow = 'hidden';
  };

  // Close popup modal
  const closeModal = () => {
    setSelectedFiliale(null);
    document.body.style.overflow = 'auto';
  };

  // Get the selected filiale data
  const getSelectedFiliale = () => {
    return filiales.find(f => f.id === selectedFiliale);
  };

  return (
    <section className="py-20 md:py-32 relative overflow-hidden" style={{ backgroundColor: "#1C1C1B" }}>
      {/* Background elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full" 
          style={{
            backgroundImage: `radial-gradient(circle at 20% 20%, ${LIGHT} 1px, transparent 1px), 
                              radial-gradient(circle at 80% 80%, ${LIGHT} 1px, transparent 1px)`,
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
              Notre Réseau
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mt-2 text-white">
              Nos Filiales
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
            style={{ color: LIGHT }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Découvrez notre écosystème de marques spécialisées qui forment ensemble le groupe Parthenon Holding, chacune apportant son expertise unique.
          </motion.p>
        </motion.div>
        
        {/* Swiper slider - Fixed spacing that remains consistent at all zoom levels */}
        <div className="w-full">
          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={20}
            slidesPerView={1}
            navigation
            pagination={{ 
              clickable: true,
              el: '.filiales-pagination'
            }}
            loop={true}
            onSwiper={(swiper) => setSwiperInstance(swiper)}
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 4,
                spaceBetween: 25,
              },
              1280: {
                slidesPerView: 5,
                spaceBetween: 25,
              },
            }}
            className="filiales-swiper"
          >
            {filiales.map((filiale) => (
              <SwiperSlide key={filiale.id}>
                <motion.div
                  className="aspect-[3/4] h-80 md:h-96 cursor-pointer rounded-lg overflow-hidden relative"
                  whileHover={{ scale: 1.03, y: -5 }}
                  transition={{ duration: 0.3 }}
                  onClick={() => openModal(filiale.id)}
                >
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/60 z-10" />
                  <img 
                    src={filiale.image || `/api/placeholder/800/800`}
                    alt={filiale.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 p-4 z-20">
                    <p className="text-xl font-medium text-white text-center">{filiale.name}</p>
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
          
          {/* External pagination element */}
          <div className="filiales-pagination flex justify-center mt-8 mb-4"></div>
          
          {/* Custom styles for Swiper - Fixed zoom behavior */}
          <style jsx global>{`
            .filiales-swiper {
              width: 100%;
              margin: 0 auto;
              position: relative;
            }
            
            .filiales-swiper .swiper-button-disabled {
              opacity: 0.5 !important;
              pointer-events: auto !important;
              cursor: pointer !important;
            }
            
            .filiales-swiper .swiper-button-next,
            .filiales-swiper .swiper-button-prev {
              color: ${GOLD} !important;
            }
            
            .filiales-pagination .swiper-pagination-bullet {
              width: 10px;
              height: 10px;
              margin: 0 6px;
              background: ${LIGHT}80;
            }
            
            .filiales-pagination .swiper-pagination-bullet-active {
              background: ${GOLD} !important;
            }
            
            /* This fixes the zoom issue by forcing consistent card proportions */
            .filiales-swiper .swiper-wrapper {
              display: flex;
              align-items: stretch;
            }
            
            .filiales-swiper .swiper-slide {
              height: auto;
              display: flex;
              flex: 1;
            }
          `}</style>
        </div>
      </div>
      
      {/* Modal popup */}
      <AnimatePresence>
        {selectedFiliale && (
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
              className="bg-white rounded-xl overflow-hidden w-full max-w-4xl z-10 relative shadow-2xl flex flex-col md:flex-row"
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
            >
              {/* Left side - Image (optional) */}
              <div className="hidden md:block w-1/3 bg-black relative">
                <div className="absolute inset-0 overflow-hidden">
                  <motion.img 
                    src={getSelectedFiliale()?.image || "/api/placeholder/340/470"}
                    alt={getSelectedFiliale()?.name}
                    className="w-full h-full object-cover opacity-90"
                    initial={{ scale: 1.1 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.8 }}
                  />
                </div>
              </div>
              
              {/* Right side - Content */}
              <div className="flex-1 relative overflow-hidden">
                {/* Decorative background elements */}
                <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-gradient-to-b from-gold/5 to-transparent -mr-32 -mt-32 z-0" />
                <div className="absolute bottom-0 left-0 w-32 h-32 rounded-full bg-gradient-to-t from-gold/5 to-transparent -ml-16 -mb-16 z-0" />
                
                {/* Content */}
                <div className="p-6 md:p-8 relative z-10">
                  {/* Close button */}
                  <button 
                    className="absolute top-4 right-4 w-10 h-10 rounded-full bg-black/5 text-gray-600 flex items-center justify-center hover:bg-black/10 transition-colors"
                    onClick={closeModal}
                  >
                    <X size={20} />
                  </button>
                  
                  {/* Title with gold accent */}
                  <div className="mb-6">
                    <div 
                      className="w-12 h-1 mb-3"
                      style={{ backgroundColor: getSelectedFiliale()?.color }}
                    />
                    <h3 className="text-3xl font-bold text-gray-900">{getSelectedFiliale()?.name}</h3>
                  </div>
                  
                  {/* Description */}
                  <p className="text-lg text-gray-700 mb-8 leading-relaxed">{getSelectedFiliale()?.description}</p>
                  
                  {/* Features section */}
                  <div className="mb-8">
                    <h4 className="text-lg font-semibold mb-4" style={{ color: getSelectedFiliale()?.color }}>
                      Nos services
                    </h4>
                    
                    <ul className="grid grid-cols-1 gap-3">
                      {getSelectedFiliale()?.features.map((feature, index) => (
                        <motion.li 
                          key={index} 
                          className="flex items-start gap-3"
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.2 + (index * 0.1), duration: 0.5 }}
                        >
                          <div 
                            className="w-2 h-2 mt-2 rounded-full shrink-0"
                            style={{ backgroundColor: getSelectedFiliale()?.color }}
                          />
                          <span className="text-gray-700">{feature}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}