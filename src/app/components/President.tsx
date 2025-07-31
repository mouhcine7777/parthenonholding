import { motion } from 'framer-motion';
import { ArrowRight, Globe, Target, Layers } from 'lucide-react';

// Define brand colors as constants
const GOLD = "#A98142";
const LIGHT = "#E6E6E6";
const DARK = "#1C1C1B";

export default function AboutParthenon() {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };
  
  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] }
    }
  };

  // Core values and expertise areas
  const coreValues = [
    {
      icon: <Globe color={GOLD} size={36} />,
      title: "Global Vision",
      description: "Embracing international standards and forward-thinking strategies that transcend traditional boundaries."
    },
    {
      icon: <Target color={GOLD} size={36} />,
      title: "Precision & Innovation",
      description: "Delivering cutting-edge solutions through meticulous planning and creative problem-solving approaches."
    },
    {
      icon: <Layers color={GOLD} size={36} />,
      title: "Integrated Expertise",
      description: "Leveraging multi-disciplinary capabilities across Live, Services, and Leisure sectors."
    }
  ];

  return (
    <section className="py-16 md:py-24" style={{ backgroundColor: LIGHT }}>
      <div className="container mx-auto px-6">
        <motion.div 
          className="flex flex-col lg:flex-row items-center gap-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {/* Left side - Modern Image Collage */}
          <motion.div 
            className="lg:w-5/12 grid grid-cols-2 gap-4"
            variants={itemVariants}
          >
            {/* First Image */}
            <motion.div 
              className="col-span-2 relative rounded-xl overflow-hidden shadow-lg"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.4 }}
            >
              <div className="aspect-w-16 aspect-h-9">
                <img 
                  src="/about2.webp" 
                  alt="Parthenon Holding Corporate" 
                  className="object-cover w-full h-full"
                />
                <div 
                  className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-50"
                ></div>
              </div>
            </motion.div>

            {/* Second Image */}
            <motion.div 
              className="relative rounded-xl overflow-hidden shadow-md"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.4 }}
            >
              <div className="aspect-w-1 aspect-h-1">
                <img 
                  src="/emissions/jamshow.webp" 
                  alt="Parthenon Team" 
                  className="object-cover w-full h-full"
                />
              </div>
            </motion.div>

            {/* Third Image */}
            <motion.div 
              className="relative rounded-xl overflow-hidden shadow-md"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.4 }}
            >
              <div className="aspect-w-1 aspect-h-1">
                <img 
                  src="/savoirefaire4.png" 
                  alt="Parthenon Innovation" 
                  className="object-cover w-full h-full"
                />
              </div>
            </motion.div>
          </motion.div>
          
          {/* Right side - About Us Content */}
          <motion.div 
            className="lg:w-7/12 space-y-6"
            variants={itemVariants}
          >
            <div className="space-y-2">
              <motion.div
                variants={itemVariants}
                className="flex items-center space-x-3"
              >
                <div className="h-px w-12" style={{ backgroundColor: GOLD }}></div>
                <span className="text-xs uppercase tracking-wider font-medium" style={{ color: GOLD }}>
                  Notre Histoire
                </span>
              </motion.div>
              
              <motion.h2 
                variants={itemVariants}
                className="text-3xl md:text-4xl font-bold"
                style={{ color: DARK }}
              >
                À propos de Parthenon Holding
              </motion.h2>
            </div>
            
            <motion.div 
              className="space-y-4 text-lg"
              variants={itemVariants}
              style={{ color: `${DARK}E6` }}
            >
              <p>
                Fondé en 2002, Parthenon Holding est un groupe dynamique et innovant qui se positionne à la convergence de l'événementiel, de la production média, de l'aménagement et du divertissement. Notre parcours est marqué par une ambition constante : transformer les défis en opportunités et créer de la valeur à travers des solutions créatives et intégrées.
              </p>
              
              <p>
                Notre philosophie repose sur trois piliers essentiels : <span style={{ color: GOLD }}>audace, expertise collaborative et engagement permanent vers l'excellence</span>. Nous ne nous contentons pas de suivre les tendances, nous les définissons.
              </p>
            </motion.div>
            
            {/* Core Values Grid */}
            <motion.div 
              className="grid md:grid-cols-3 gap-4 pt-4"
              variants={itemVariants}
            >
              {coreValues.map((value, index) => (
                <div 
                  key={index} 
                  className="p-4 rounded-lg border border-opacity-10"
                  style={{ borderColor: GOLD, backgroundColor: `${GOLD}10` }}
                >
                  <div className="mb-3">{value.icon}</div>
                  <h3 
                    className="text-lg font-semibold mb-2"
                    style={{ color: DARK }}
                  >
                    {value.title}
                  </h3>
                  <p 
                    className="text-sm"
                    style={{ color: `${DARK}99` }}
                  >
                    {value.description}
                  </p>
                </div>
              ))}
            </motion.div>
            
            {/* CTA Section */}
            <motion.div 
              variants={itemVariants}
              className="pt-6"
            >
              <a 
                href="#contact" 
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full transition-all duration-300 hover:shadow-lg"
                style={{ 
                  backgroundColor: GOLD, 
                  color: LIGHT,
                  boxShadow: `0 4px 6px ${GOLD}40`
                }}
              >
                Découvrir Plus <ArrowRight size={20} />
              </a>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}