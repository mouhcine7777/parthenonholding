'use client';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

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

  return (
    <section className="py-0" style={{ backgroundColor: LIGHT }}>
      <div className="container mx-auto px-0">
        <motion.div 
          className="flex flex-col lg:flex-row items-stretch gap-0"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {/* Left side - Modern Image Collage - FULL COVERAGE */}
          <motion.div 
            className="lg:w-5/12 w-full"
            variants={itemVariants}
            style={{ padding: 0, margin: 0 }}
          >
            <div 
              className="overflow-hidden h-full"
              style={{ 
                display: 'flex',
                flexDirection: 'column',
                gap: 0,
                padding: 0,
                margin: 0
              }}
            >
              {/* First Image - Full width top */}
              <motion.div 
                className="relative overflow-hidden"
                style={{ 
                  margin: 0,
                  padding: 0,
                  lineHeight: 0,
                  flex: 1
                }}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.4 }}
              >
                <img 
                  src="/about2.webp" 
                  alt="Parthenon Holding Corporate" 
                  style={{ 
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    display: 'block',
                    margin: 0,
                    padding: 0
                  }}
                />
                <div 
                  className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-40"
                ></div>
              </motion.div>

              {/* Bottom Row - Two Images Side by Side */}
              <div 
                style={{ 
                  display: 'flex',
                  gap: 0,
                  margin: 0,
                  padding: 0,
                  lineHeight: 0,
                  flex: 1
                }}
              >
                {/* Second Image - Bottom left */}
                <motion.div 
                  className="relative overflow-hidden"
                  style={{ 
                    flex: 1,
                    margin: 0,
                    padding: 0,
                    lineHeight: 0
                  }}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.4 }}
                >
                  <img 
                    src="/dreamartist.jpg" 
                    alt="Parthenon Team" 
                    style={{ 
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      display: 'block',
                      margin: 0,
                      padding: 0
                    }}
                  />
                </motion.div>

                {/* Third Image - Bottom right */}
                <motion.div 
                  className="relative overflow-hidden"
                  style={{ 
                    flex: 1,
                    margin: 0,
                    padding: 0,
                    lineHeight: 0
                  }}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.4 }}
                >
                  <img 
                    src="/onmt.jpg" 
                    alt="Parthenon Innovation" 
                    style={{ 
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      display: 'block',
                      margin: 0,
                      padding: 0
                    }}
                  />
                </motion.div>
              </div>
            </div>
          </motion.div>
          
          {/* Right side - About Us Content */}
          <motion.div 
            className="lg:w-7/12 space-y-6 flex flex-col justify-center"
            variants={itemVariants}
            style={{ padding: '4rem 3rem' }}
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
                Depuis plus de 20 ans, Parthenon Holding crée des émotions à vivre — sur scène, à l'écran et dans des lieux d'exception.
              </p>
            </motion.div>
            
            {/* CTA Section */}
            <motion.div 
              variants={itemVariants}
              className="pt-6"
            >
              <a 
                href="/about" 
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full transition-all duration-300"
                style={{ 
                  backgroundColor: GOLD, 
                  color: LIGHT,
                  boxShadow: `0 4px 6px ${GOLD}40`
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-2px)';
                  e.currentTarget.style.boxShadow = `0 8px 12px ${GOLD}60`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = `0 4px 6px ${GOLD}40`;
                }}
              >
                En savoir plus <ArrowRight size={20} />
              </a>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}