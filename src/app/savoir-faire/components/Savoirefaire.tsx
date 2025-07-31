import { useState } from 'react';
import { motion } from 'framer-motion';
import { Play, Monitor, PaintBucket, Landmark } from 'lucide-react';

// Define brand colors as constants
const GOLD = "#A98142";
const LIGHT = "#E6E6E6";
const DARK = "#1C1C1B";

const expertiseData = [
  {
    title: "CRÉATION DE PROGRAMMES ET DE CONTENUS AUDIOVISUELS",
    subtitle: "BY PUBLIC ÉVÉNEMENT PRODUCTION",
    description: "Pionnier du marché de l'émission grand public, avec des émissions comme Lalla Laârossa, Al Kadam Addahabi ou encore Fashion Maghribi, Public Événement Production mise sur l'innovation, la diversité et l'audace créative pour la conception de ses programmes originaux. Véritable créateur d'audience, Public Evénement Production veille en outre à l'adaptation de programmes à succès internationaux afin de partager avec le public marocain des émissions divertissantes et dans l'air du temps.",
    icon: <Monitor className="w-6 h-6" />,
    image: "/marques-image.jpg",
    alt: "Production audiovisuelle"
  },
  {
    title: "EXPÉRIENCE ÉVÉNEMENTIELLE 360°",
    subtitle: "BY PUBLIC EVENTS",
    description: "Depuis sa création en 2002, Public Events s'attache à offrir à ses clients, entreprises et institutions de renom, des réponses personnalisées et percutantes en matière d'événementiel. En plus de faire preuve de conseils avisés, notre équipe tend à être force de proposition afin que chaque événement devienne une expérience singulière, unique et inoubliable ! Plus encore, la combinaison entre nos deux agences de communication événementielle et de production audiovisuelle apporte à nos clients une expertise à 360° au service de l'entertainment.",
    icon: <Play className="w-6 h-6" />,
    image: "/about2.webp",
    alt: "Événementiel 360°"
  },
  {
    title: "SCÉNOGRAPHIE & THÉMATISATION",
    subtitle: "BY ATELIER DKO",
    description: "À travers sa filiale Atelier Deko, Parthenon Holding met au service de vos projets et de vos événements une expertise axée autour de l'aménagement des lieux, de la scénographique ou encore de la muséographie. De la conception à la livraison clé en main, Atelier Deko s'engage à déployer une décoration pérenne ou éphémère, guidée par des idées novatrices et une approche événementielle s'inspirant des dernières tendances et des nouvelles technologies.",
    icon: <PaintBucket className="w-6 h-6" />,
    image: "/savoirefaire3.jpg",
    alt: "Scénographie et décoration"
  },
  {
    title: "PARCS À THÈMES, ESPACES CULTURELS ET DE LOISIRS",
    subtitle: "BY PARTHENON LOISIRS",
    description: "Depuis 2015, le groupe Parthenon Holding se dote d'un pôle Loisirs. Celui-ci a pour mission de gérer et d'exploiter deux parcs d'attractions destinés à toute la famille. À Casablanca, du côté du quartier Oulfa, Loupi Jungle offre un cadre verdoyant pourvu de plus de 20 manèges sécurisés. À Marrakech, Palooza Park, premier parc à thèmes au Maroc, propose sur pas moins de 24 000 m² des attractions uniques, des espaces ludiques et des événements saisonniers, spécialement conçus pour que les petits et les grands partent à la découverture du monde fascinant des dinosaures.",
    icon: <Landmark className="w-6 h-6" />,
    image: "/savoirefaire4.png",
    alt: "Parcs à thèmes"
  }
];

export default function NotreSavoirFaire() {
  const [activeIndex, setActiveIndex] = useState(0);
  
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };
  
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
    }
  };

  const imageVariants = {
    hidden: { scale: 0.95, opacity: 0 },
    visible: { 
      scale: 1, 
      opacity: 1,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
    }
  };

  return (
    <section className="py-20 md:py-32" style={{ backgroundColor: LIGHT }}>
      <div className="container mx-auto px-6">
        <motion.div 
          className="text-center mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.div variants={itemVariants} className="flex items-center justify-center space-x-3 mb-2">
            <div className="h-px w-8" style={{ backgroundColor: GOLD }}></div>
            <span className="text-xs uppercase tracking-wider font-medium" style={{ color: GOLD }}>
              Parthenon Holding
            </span>
            <div className="h-px w-8" style={{ backgroundColor: GOLD }}></div>
          </motion.div>
          
          <motion.h2 
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold mb-4"
            style={{ color: DARK }}
          >
            Notre savoir-faire
          </motion.h2>
          
          <motion.p 
            variants={itemVariants}
            className="max-w-2xl mx-auto text-lg"
            style={{ color: `${DARK}99` }}
          >
            Expertise multi-disciplinaire au service de vos projets
          </motion.p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {/* Left side - Image showcase */}
          <motion.div 
            className="relative"
            variants={imageVariants}
          >
            <motion.div
              className="rounded-lg overflow-hidden shadow-2xl border-2"
              style={{ borderColor: GOLD }}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.4 }}
            >
              {/* Main expertise image */}
              <div className="aspect-w-4 aspect-h-3 relative">
                <img 
                  src={expertiseData[activeIndex].image}
                  alt={expertiseData[activeIndex].alt}
                  className="object-cover w-full h-full"
                />
                
                {/* Elegant overlay gradient */}
                <div 
                  className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60"
                ></div>
              </div>
            </motion.div>
            
            {/* Decorative elements */}
            <motion.div 
              className="absolute -top-6 -left-6 w-12 h-12"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="w-full h-full rounded-full" style={{ backgroundColor: GOLD, opacity: 0.2 }}></div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full" style={{ backgroundColor: GOLD, opacity: 0.4 }}></div>
            </motion.div>
            
            <motion.div 
              className="absolute -bottom-8 -right-8 w-24 h-24"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="absolute top-0 left-0 w-full h-full">
                <div className="absolute top-0 left-0 w-12 h-1" style={{ backgroundColor: GOLD }}></div>
                <div className="absolute top-0 left-0 w-1 h-12" style={{ backgroundColor: GOLD }}></div>
                <div className="absolute bottom-0 right-0 w-12 h-1" style={{ backgroundColor: GOLD }}></div>
                <div className="absolute bottom-0 right-0 w-1 h-12" style={{ backgroundColor: GOLD }}></div>
              </div>
            </motion.div>
            
            {/* Small brand accent */}
            <motion.div 
              className="absolute -bottom-3 -left-3 bg-white rounded-lg shadow-xl p-3"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center justify-center w-10 h-10 rounded-full" style={{ backgroundColor: `${GOLD}20` }}>
                {expertiseData[activeIndex].icon}
              </div>
            </motion.div>
          </motion.div>
          
          {/* Right side - Expertise selector and content */}
          <motion.div 
            className="space-y-8"
            variants={itemVariants}
          >
            {/* Expertise selector tabs */}
            <div className="flex flex-wrap gap-3">
              {expertiseData.map((item, index) => (
                <motion.button
                  key={`tab-${index}`}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    activeIndex === index 
                      ? 'shadow-md' 
                      : 'opacity-80 hover:opacity-100'
                  }`}
                  style={{ 
                    backgroundColor: activeIndex === index ? GOLD : 'white',
                    color: activeIndex === index ? 'white' : DARK,
                    border: `1px solid ${activeIndex === index ? GOLD : `${GOLD}40`}`
                  }}
                  onClick={() => setActiveIndex(index)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {item.subtitle.replace('BY ', '')}
                </motion.button>
              ))}
            </div>
            
            {/* Current expertise content */}
            <motion.div 
              className="space-y-6"
              key={`content-${activeIndex}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="h-px w-12" style={{ backgroundColor: GOLD }}></div>
                  <span className="text-xs uppercase tracking-wider font-medium" style={{ color: GOLD }}>
                    {expertiseData[activeIndex].subtitle}
                  </span>
                </div>
                
                <h3 
                  className="text-2xl md:text-3xl font-bold"
                  style={{ color: DARK }}
                >
                  {expertiseData[activeIndex].title}
                </h3>
              </div>
              
              <div 
                className="text-lg"
                style={{ color: `${DARK}CC` }}
              >
                <p>{expertiseData[activeIndex].description}</p>
              </div>
              
              <motion.div
                whileHover={{ x: 5 }}
                transition={{ duration: 0.3 }}
              >
                <a
                  href="#"
                  className="inline-flex items-center space-x-2 group"
                >
                  <span className="font-medium" style={{ color: GOLD }}>Découvrir plus</span>
                  <span 
                    className="transform transition-transform duration-300 group-hover:translate-x-1"
                    style={{ color: GOLD }}
                  >→</span>
                </a>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Mini cards for other expertise areas */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-20"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {expertiseData.map((item, index) => (
            <motion.div
              key={`card-${index}`}
              className={`rounded-lg overflow-hidden shadow-lg cursor-pointer ${
                activeIndex === index ? 'ring-2' : ''
              }`}
              style={{ 
                backgroundColor: activeIndex === index ? GOLD : 'white',
                borderColor: GOLD,
                ringColor: GOLD
              }}
              onClick={() => setActiveIndex(index)}
              variants={itemVariants}
              whileHover={{ 
                y: -5,
                transition: { duration: 0.3 }
              }}
            >
              <div className="relative h-40">
                <img 
                  src={item.image}
                  alt={item.alt}
                  className="w-full h-full object-cover"
                />
                <div 
                  className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70"
                ></div>
                <div 
                  className="absolute bottom-0 left-0 right-0 p-4"
                >
                  <div className="flex items-center space-x-2">
                    <div className="flex items-center justify-center w-8 h-8 rounded-full" style={{ backgroundColor: `${activeIndex === index ? DARK : GOLD}40` }}>
                      {item.icon}
                    </div>
                    <h4 className="font-medium truncate" style={{ color: LIGHT }}>
                      {item.subtitle.replace('BY ', '')}
                    </h4>
                  </div>
                </div>

                {/* Active indicator */}
                {activeIndex === index && (
                  <div className="absolute top-3 right-3">
                    <div className="w-3 h-3 rounded-full" style={{ backgroundColor: GOLD }}></div>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}