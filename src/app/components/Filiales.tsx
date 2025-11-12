'use client';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
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
  poleId: string;
}

export default function NosFiliales() {
  const [swiperInstance, setSwiperInstance] = useState<SwiperType | null>(null);
  
  // Add window resize listener
  useEffect(() => {
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
  
  // Filiales data with poleId added
  const filiales: Filiale[] = [
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
      poleId: "live"
    },
    {
      id: "public-production",
      name: "Public Prod",
      description: "Spécialiste des productions événementielles de grande envergure, Public Production conçoit et réalise des expériences inoubliables pour les marques et les institutions.",
      features: [
        "Événements corporate et grand public",
        "Production technique complète",
        "Scénographie innovante",
        "Gestion logistique intégrée"
      ],
      image: "/filiales/PEP.jpg",
      color: "#B68C45",
      poleId: "live"
    },
    {
      id: "sunset-hospitality",
      name: "Sunset Hospitality",
      description: "Division de Parthenon Holding dédiée aux expériences de loisirs et d'hébergement, Sunset Hospitality regroupe des destinations emblématiques telles que Palooza Park, Skyjump Casablanca et Oxygen Village. L'entité incarne une vision globale du divertissement et de l'hospitalité, mêlant plaisir, innovation et durabilité",
      features: [
        "Gestion de parcs de loisirs",
        "Hôtellerie éco-responsable",
        "Expérience client et exploitation opérationnelle"
      ],
      image: "/filiales/sunset.jpg",
      color: "#B68C45",
      poleId: "loisirs"
    },
    {
      id: "garden-corner",
      name: "Garden Corner",
      description: "Univers de restauration alliant authenticité, créativité et convivialité, Garden Corner réunit plusieurs concepts gourmands où l'art du bon goût s'exprime à travers des espaces chaleureux et contemporains.",
      features: [
        "Cuisine raffinée et produits locaux",
        "Cadre verdoyant exceptionnel",
        "Formules adaptées à tous les événements",
        "Service personnalisé et attentionné"
      ],
      image: "/filiales/gardencorner.jpg",
      color: "#C59B5A",
      poleId: "loisirs"
    },
    {
      id: "go-velodrome",
      name: "GoVélodrome",
      description: "Plateforme de communication et promotion des événements se déroulant au Vélodrome de Casablanca, Go Velodrome connecte organisateurs, partenaires et publics pour maximiser la visibilité et l'impact de chaque manifestation.",
      features: [
        "Promotion et communication des événements au Vélodrome",
        "Gestion des relations avec partenaires et sponsors",
        "Valorisation des événements pour les entreprises et institutions (B2B)",
        "Coordination digitale et médiatique"
      ],
      image: "/filiales/govelodrome.jpg",
      color: "#A98142",
      poleId: "loisirs"
    },
    {
      id: "integral-solutions",
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
      poleId: "services"
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
      poleId: "services"
    },
    {
      id: "aquila",
      name: "Aquila Sécurité",
      description: "Entreprise spécialisée dans la sécurité privée, Aquila propose des solutions complètes de protection pour les sites professionnels, les événements et les résidences. Son équipe de vigiles qualifiés veille à la sûreté des biens et des personnes, avec rigueur et professionnalisme.",
      features: [
        "Sécurité privée",
        "gardiennage",
        "protection d'événements et surveillance de sites sensibles"
      ],
      image: "/filiales/aquila.jpg",
      color: "#A98142",
      poleId: "services"
    },
    {
      id: "ateliers-dko",
      name: "Les Ateliers DKO",
      description: "Espace de conception et de fabrication de mobilier sur mesure, Les Ateliers DKO allient savoir-faire artisanal et technologies modernes pour créer des aménagements uniques et durables, adaptés aux besoins des professionnels comme des particuliers.",
      features: [
        "Fabrication de mobilier sur mesure",
        "agencement d'espaces",
        "menuiserie haut de gamme"
      ],
      image: "/filiales/ateliersdko.jpg",
      color: "#A98142",
      poleId: "services"
    }
  ];

  // Handle card click - navigate to /nos-filiales with query params
  const handleCardClick = (filiale: Filiale) => {
    // In a real Next.js app, you would use:
    // import { useRouter } from 'next/navigation';
    // const router = useRouter();
    // router.push(`/nos-filiales?pole=${filiale.poleId}&filiale=${filiale.id}`);
    
    // For demonstration, we'll construct the URL
    window.location.href = `/nos-filiales?pole=${filiale.poleId}&filiale=${filiale.id}`;
  };

  return (
    <section className="py-20 md:py-32 relative overflow-hidden bg-gray-50">
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
            <h2 className="text-4xl md:text-5xl font-bold mt-2" style={{ color: DARK }}>
              Verticaux
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
            Parthenon holding se distingue par la production de projets innovants, la conception et la scénographie de projets d'envergure, ainsi qu'une expertise reconnue dans les domaines du loisirs et de l'hospitalité.
          </motion.p>
        </motion.div>
        
        {/* Swiper slider */}
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
                  onClick={() => handleCardClick(filiale)}
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
          
          {/* Custom styles for Swiper */}
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
              background: ${DARK}80;
            }
            
            .filiales-pagination .swiper-pagination-bullet-active {
              background: ${GOLD} !important;
            }
            
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
    </section>
  );
}