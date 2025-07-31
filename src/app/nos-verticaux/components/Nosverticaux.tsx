import { useState } from 'react';
import { ChevronRight, X, Calendar, Clock } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// Define brand colors
const GOLD = "#A98142";
const LIGHT_BG = "#FAFAFA";
const DARK = "#1C1C1B";
const LIGHT_TEXT = "#444444";

// Define the Program type interface
interface Program {
  id: number;
  name: string;
  image: string;
  description: string;
  longDescription: string; 
  season: string;
  airTime: string;
}

// Program data with extended information
const ORIGINAL_PROGRAMS: Program[] = [
  {
    id: 1,
    name: "FASHION MAGHRIBI",
    image: "/emissions/fashionmaghribi.webp",
    description: "Une compétition de mode mettant en valeur le talent des créateurs locaux",
    longDescription: "Fashion Maghribi met en compétition les meilleurs créateurs de mode du Maghreb. À travers différents défis créatifs, les participants doivent impressionner un jury d'experts pour remporter le titre convoité et une opportunité unique de lancer leur propre collection.",
    season: "Saison 2",
    airTime: "Vendredi 21:00"
  },
  {
    id: 2,
    name: "JMAATNA ZINA",
    image: "/emissions/jmaatnazina.webp",
    description: "Émission communautaire célébrant les traditions et cultures",
    longDescription: "Jmaatna Zina met en lumière la richesse des traditions locales à travers le Maroc. Chaque semaine, l'émission visite une région différente pour découvrir son patrimoine culturel, ses coutumes, sa cuisine et ses célébrations uniques.",
    season: "Saison 3",
    airTime: "Samedi 21:30"
  },
  {
    id: 3,
    name: "LALLA LAÂROSSA",
    image: "/emissions/lalalaaroussa.webp",
    description: "Une compétition entre futures mariées pour gagner leur cérémonie de rêve",
    longDescription: "Lalla Laârossa suit le parcours de futures mariées qui s'affrontent pour remporter le mariage de leurs rêves. À travers des épreuves alliant tradition et modernité, les participantes doivent prouver leur créativité, leur élégance et leur connaissance des coutumes nuptiales.",
    season: "Saison 19",
    airTime: "Samedi 21:45"
  },
  {
    id: 4,
    name: "AL QADAM ADDAHABBI",
    image: "/emissions/alqadamaddahabbi.webp",
    description: "Concours de talents footballistiques pour jeunes prodiges",
    longDescription: "Al Qadam Addahabbi révèle les futures stars du football marocain. Des jeunes de 12 à 17 ans venant de tout le pays participent à cette compétition intense sous l'œil attentif d'entraîneurs professionnels et d'anciennes gloires du football national.",
    season: "Saison 3",
    airTime: "Mercredi 20:00"
  },
  {
    id: 5,
    name: "DREAM ARTIST",
    image: "/emissions/dreamartist.webp",
    description: "Émission de découverte de nouveaux talents artistiques",
    longDescription: "Dream Artist offre une plateforme aux talents émergents dans divers domaines artistiques. Chant, danse, comédie, arts visuels... les participants présentent leurs créations devant un jury exigeant et un public enthousiaste pour tenter de décrocher le titre d'artiste de l'année.",
    season: "Saison 3",
    airTime: "Lundi 21:30"
  },
  {
    id: 6,
    name: "TRI9 ATTAHADI",
    image: "/emissions/tri9attahadi.jpeg",
    description: "Aventure et défis à travers des parcours spectaculaires",
    longDescription: "Tri9 Attahadi emmène ses participants dans une course palpitante à travers des paysages marocains spectaculaires. Des équipes de deux personnes doivent faire preuve d'endurance, d'intelligence et de courage pour surmonter des obstacles physiques et mentaux.",
    season: "Saison 1",
    airTime: "Jeudi 21:15"
  },
  {
    id: 7,
    name: "JAMSHOW",
    image: "/emissions/jamshow.webp",
    description: "Divertissement musical et humour pour toute la famille",
    longDescription: "JamShow est un spectacle hebdomadaire où musique et comédie se rencontrent. Artistes invités, sketches humoristiques et performances musicales se succèdent dans une ambiance festive qui réunit toute la famille devant l'écran.",
    season: "Saison 2",
    airTime: "Mardi 21:00"
  },
  {
    id: 8,
    name: "AKHIR TAMAN",
    image: "/emissions/akhirtaman.webp",
    description: "Apporte l'excitation des enchères à la télévision marocaine",
    longDescription: "Akhir Taman est l'adaptation marocaine de la populaire émission française Affaire Conclue, qui transpose l'effervescence des ventes aux enchères à la télévision marocaine. Cette émission de téléréalité captivante invite des vendeurs de tout le pays à présenter leurs objets de valeur à un jury d'acheteurs experts. Chaque épisode est empreint du frisson des enchères et des négociations tendues.",
    season: "Saison 3",
    airTime: "Samedi 18:00"
  }
];

const INTERNATIONAL_PROGRAMS: Program[] = [
  {
    id: 1,
    name: "AHSSAN PÂTISSIER",
    image: "/emissions/lmp.webp",
    description: "Compétition culinaire adaptée des formats internationaux de pâtisserie",
    longDescription: "Adaptation du célèbre format 'Best Baker', Ahssan Pâtissier met en compétition les meilleurs pâtissiers amateurs du pays. Chaque semaine, ils relèvent des défis techniques et créatifs pour impressionner le jury avec leurs créations sucrées alliant tradition marocaine et techniques modernes.",
    season: "Saison 2",
    airTime: "Dimanche 21:00"
  }
];

export default function NosVerticauxMarques() {
  const [activeTab, setActiveTab] = useState('original');
  const [selectedProgram, setSelectedProgram] = useState<Program | null>(null);
  
  
  // Open popup modal
  const openModal = (program: Program) => {
    setSelectedProgram(program);
    document.body.style.overflow = 'hidden';
  };
  
  // Close popup modal
  const closeModal = () => {
    setSelectedProgram(null);
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
            Nos Verticaux – <span style={{ color: GOLD }}>Marques</span>
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
          Afin de célébrer chaque jour la passion qui nous anime : l'amour du travail bien fait, 
          le plaisir de partager et d'insuffler de la joie à toute la famille, Parthenon Holding 
          met à profit l'expertise de ses différents pôles. Qu'il soit Loisirs, Services ou encore 
          Live, chacun contribue à créer des expériences uniques au quotidien.
        </p>
        
        {/* Public Événement Production Description */}
        <div
          className="relative mb-16 p-8 rounded-lg"
          style={{ backgroundColor: `${GOLD}10`, border: `1px solid ${GOLD}20` }}
        >
          {/* Decorative element */}
          <div className="absolute -top-3 left-10 px-4 py-1 rounded" style={{ backgroundColor: LIGHT_BG }}>
            <span className="text-sm uppercase tracking-wider font-medium" style={{ color: GOLD }}>Parthenon Live</span>
          </div>
          
          <p className="text-base md:text-lg mb-0" style={{ color: LIGHT_TEXT }}>
            À travers sa filiale Public Événement Production, Parthenon Live est le premier producteur national 
            d'émissions, de shows et de téléréalité en prime time. Au fil des ans, elle a fait preuve de ténacité 
            et de rigueur pour assoir son leadership sur le marché du diversement. Aujourd'hui, elle continue de 
            se distinguer comme un véritable créateur d'audience en misant sur l'inventivité, l'innovation et 
            l'audace tout en valorisant les particularités nationales à travers le développement de programmes 
            inédits et de plateformes créatives.
          </p>
        </div>
        
        {/* Tab Navigation */}
        <div className="flex justify-center mb-8">
          <div 
            className="inline-flex bg-white rounded-lg p-1 shadow-sm"
            style={{ border: `1px solid ${GOLD}20` }}
          >
            <button
              className={`px-4 py-2 text-sm md:text-base font-medium rounded-md transition-all duration-300 ${activeTab === 'original' ? 'text-white' : 'text-gray-700'}`}
              style={{ backgroundColor: activeTab === 'original' ? GOLD : 'transparent' }}
              onClick={() => setActiveTab('original')}
            >
              Programmes Originaux
            </button>
            <button
              className={`px-4 py-2 text-sm md:text-base font-medium rounded-md transition-all duration-300 ${activeTab === 'international' ? 'text-white' : 'text-gray-700'}`}
              style={{ backgroundColor: activeTab === 'international' ? GOLD : 'transparent' }}
              onClick={() => setActiveTab('international')}
            >
              Adaptations Internationales
            </button>
          </div>
        </div>
        
        {/* Program Sections */}
        <div className="mb-12">
          {/* Original Programs */}
          {activeTab === 'original' && (
            <>
              <h3 
                className="text-2xl md:text-3xl font-medium mb-8 text-center"
                style={{ color: DARK }}
              >
                PROGRAMMES ORIGINAUX
              </h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6 w-full px-2 md:px-4">
                {ORIGINAL_PROGRAMS.map((program) => (
                  <motion.div
                    key={program.id}
                    className="relative overflow-hidden rounded-xl shadow-lg cursor-pointer group h-80 sm:h-96 w-full"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.1 }}
                    transition={{ duration: 0.8 }}
                    onClick={() => openModal(program)}
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
                          src={program.image || "/api/placeholder/800/1200"}
                          alt={program.name}
                          className="w-full h-full object-cover"
                        />
                      </motion.div>
                    </div>
                    
                    {/* Season badge */}
                    <div 
                      className="absolute top-4 right-4 z-20 px-2 py-1 rounded-full text-xs font-medium text-white"
                      style={{ backgroundColor: GOLD }}
                    >
                      {program.season}
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
                        <h3 className="text-xl md:text-2xl font-bold text-white">{program.name}</h3>
                        <p className="text-base md:text-lg text-gray-200 opacity-90">{program.description}</p>
                        
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
          
          {/* International Adaptations */}
          {activeTab === 'international' && (
            <>
              <h3 
                className="text-2xl md:text-3xl font-medium mb-6 text-center"
                style={{ color: DARK }}
              >
                ADAPTATIONS DE PROGRAMMES INTERNATIONAUX
              </h3>
              
              <p 
                className="text-base md:text-lg text-center max-w-4xl mx-auto mb-8"
                style={{ color: LIGHT_TEXT }}
              >
                Toujours en quête d'enrichir son contenu et d'innover sur le marché télévisuel national, 
                Public Événement Production s'est également engagée sur la voie de l'adaptation de 
                programmes internationaux à succès.
              </p>
              
              <div className="flex justify-center w-full px-4">
                <div className="w-full max-w-md">
                  {INTERNATIONAL_PROGRAMS.map((program) => (
                    <motion.div
                      key={program.id}
                      className="relative overflow-hidden rounded-xl shadow-lg cursor-pointer group h-96 w-full"
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.1 }}
                      transition={{ duration: 0.8 }}
                      onClick={() => openModal(program)}
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
                            src={program.image || "/api/placeholder/800/1200"}
                            alt={program.name}
                            className="w-full h-full object-cover"
                          />
                        </motion.div>
                      </div>
                      
                      {/* Season badge */}
                      <div 
                        className="absolute top-4 right-4 z-20 px-2 py-1 rounded-full text-xs font-medium text-white"
                        style={{ backgroundColor: GOLD }}
                      >
                        {program.season}
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
                          <h3 className="text-2xl font-bold text-white">{program.name}</h3>
                          <p className="text-lg text-gray-200 opacity-90">{program.description}</p>
                          
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
            </>
          )}
        </div>
        
        {/* Bottom decorative element */}
        <div 
          className="h-px w-48 md:w-72 mx-auto"
          style={{ backgroundColor: `${GOLD}50` }}
        />
      </div>
      
      {/* Modal for program details */}
      <AnimatePresence>
        {selectedProgram && (
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
                  src={selectedProgram.image || "/api/placeholder/1200/600"}
                  alt={selectedProgram.name}
                  className="w-full h-full object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                  <div className="p-4 md:p-6 lg:p-8 w-full">
                    <div 
                      className="w-12 h-1 mb-3"
                      style={{ backgroundColor: GOLD }}
                    />
                    <h3 className="text-2xl md:text-3xl font-bold text-white">{selectedProgram.name}</h3>
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
                <p className="text-base md:text-lg text-gray-800 mb-6">{selectedProgram.longDescription}</p>
                
                <h4 className="text-lg md:text-xl font-semibold mb-4 text-gray-900">
                  Informations
                </h4>
                
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-8">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 mt-2 rounded-full shrink-0" style={{ backgroundColor: GOLD }} />
                    <span className="text-gray-800">Saison: {selectedProgram.season}</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 mt-2 rounded-full shrink-0" style={{ backgroundColor: GOLD }} />
                    <span className="text-gray-800">Diffusion: {selectedProgram.airTime}</span>
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