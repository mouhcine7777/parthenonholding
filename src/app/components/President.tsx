'use client';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

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
              Depuis plus de 20 ans, Parthenon Holding façonne les émotions à travers des expériences live, des productions télé et des lieux iconiques.              </p>
            </motion.div>
            
            {/* CTA Section */}
            <motion.div 
              variants={itemVariants}
              className="pt-6"
            >
              <Link 
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
                Découvrir Plus <ArrowRight size={20} />
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}