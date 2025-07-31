import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Send, 
  ArrowRight, 
  MessageSquare, 
  Share2,
  Instagram,
  Linkedin,
  Twitter,
  Globe
} from 'lucide-react';

// Define brand colors as constants
const GOLD = "#A98142";
const LIGHT = "#E6E6E6";
const DARK = "#1C1C1B";

export default function ContactSection() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  // Contact information items
  const contactInfo = [
    {
      icon: <Phone size={24} />,
      title: "Téléphone",
      content: "+212 522 123 456",
      action: "Appelez-nous"
    },
    {
      icon: <Mail size={24} />,
      title: "Email",
      content: "contact@parthenon.ma",
      action: "Écrivez-nous"
    },
    {
      icon: <MapPin size={24} />,
      title: "Adresse",
      content: "Porte 3, 106 Rue Abderrahman Sahraoui, Casablanca",
      action: "Directions"
    },
    {
      icon: <Clock size={24} />,
      title: "Heures d'ouverture",
      content: "Lun-Ven: 9h-18h",
      action: "Plus d'info"
    }
  ];

  // Social media links
  const socialLinks = [
    { icon: <Instagram size={20} />, label: "Instagram" },
    { icon: <Twitter size={20} />, label: "Twitter" },
    { icon: <Linkedin size={20} />, label: "LinkedIn" },
    { icon: <Globe size={20} />, label: "Site web" },
  ];

  return (
    <section 
      ref={sectionRef}
      className="py-20 md:py-32 relative overflow-hidden"
      style={{ backgroundColor: LIGHT }}
    >
      {/* Creative background elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Floating circles */}
        <motion.div 
          className="absolute top-20 left-10 w-64 h-64 opacity-10 rounded-full" 
          style={{ background: `radial-gradient(circle, ${GOLD} 0%, transparent 70%)` }}
          animate={{ 
            x: [0, 10, 0], 
            y: [0, -15, 0],
          }}
          transition={{ 
            repeat: Infinity, 
            duration: 8,
            ease: "easeInOut" 
          }}
        />
        <motion.div 
          className="absolute bottom-40 right-20 w-96 h-96 opacity-8 rounded-full" 
          style={{ background: `radial-gradient(circle, ${GOLD} 0%, transparent 70%)` }}
          animate={{ 
            x: [0, -15, 0], 
            y: [0, 10, 0],
          }}
          transition={{ 
            repeat: Infinity, 
            duration: 10,
            ease: "easeInOut" 
          }}
        />
        
        {/* Diagonal grid pattern */}
        <div className="absolute top-0 left-0 w-full h-full opacity-3"
          style={{
            backgroundImage: `linear-gradient(45deg, ${DARK} 0.5%, transparent 0.5%)`,
            backgroundSize: '40px 40px'
          }}
        />
        
        {/* Accent lines */}
        <motion.div 
          className="absolute left-0 w-1 h-40 top-1/4" 
          style={{ backgroundColor: GOLD }}
          initial={{ height: 0 }}
          animate={isInView ? { height: 160 } : { height: 0 }}
          transition={{ duration: 1.2, delay: 0.3 }}
        />
        <motion.div 
          className="absolute right-0 w-1 h-40 bottom-1/4" 
          style={{ backgroundColor: GOLD }}
          initial={{ height: 0 }}
          animate={isInView ? { height: 160 } : { height: 0 }}
          transition={{ duration: 1.2, delay: 0.6 }}
        />
      </div>
      
      {/* Content container */}
      <div className="container mx-auto px-6 relative z-10">
        {/* Section header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          <div className="inline-block">
            <div className="flex items-center justify-center gap-3">
              <MessageSquare size={24} style={{ color: GOLD }} />
              <span className="text-sm uppercase tracking-widest font-medium" style={{ color: GOLD }}>
                Contactez-nous
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mt-2" style={{ color: DARK }}>
              Discutons de votre projet
            </h2>
            <motion.div 
              className="h-1 mt-4"
              style={{ backgroundColor: GOLD }}
              initial={{ width: 0 }}
              animate={isInView ? { width: '100%' } : { width: 0 }}
              transition={{ duration: 1, delay: 0.6 }}
            />
          </div>
          
          <motion.p 
            className="max-w-2xl mx-auto mt-6 text-lg"
            style={{ color: `${DARK}CC` }}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Notre équipe est à votre disposition pour répondre à toutes vos questions et vous accompagner dans la réalisation de vos projets.
          </motion.p>
        </motion.div>
        
        {/* Animated contact info bar */}
        <motion.div 
          className="flex flex-wrap justify-center gap-8 items-center mb-16 py-6 px-4 rounded-xl"
          style={{ 
            backgroundColor: `${DARK}05`,
            border: `1px solid ${GOLD}30`,
            boxShadow: `0 10px 30px -10px ${DARK}15`
          }}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {contactInfo.map((item, index) => (
            <motion.div
              key={`contact-inline-${index}`}
              className="flex items-center gap-3"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ delay: 0.5 + (index * 0.15) }}
            >
              <div 
                className="w-10 h-10 rounded-full flex items-center justify-center shrink-0"
                style={{ 
                  background: `linear-gradient(135deg, ${GOLD}, ${GOLD}80)`,
                  boxShadow: `0 4px 10px -2px ${GOLD}40`
                }}
              >
                <span style={{ color: LIGHT }}>{item.icon}</span>
              </div>
              <div>
                <p className="font-medium text-sm" style={{ color: DARK }}>
                  {item.content}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        {/* Main contact content with creative layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-16">
          {/* Google Maps iframe */}
          <motion.div 
            className="lg:col-span-7 rounded-xl overflow-hidden h-full min-h-[450px] relative"
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -40 }}
            transition={{ duration: 0.9, delay: 0.5 }}
          >
            <div 
              className="w-full h-full rounded-xl relative"
              style={{ 
                border: `1px solid ${GOLD}20`,
                boxShadow: `0 20px 40px -15px ${DARK}20`,
                overflow: 'hidden'
              }}
            >
              {/* Google Maps iframe */}
              <div className="w-full h-full relative">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3323.4993903992327!2d-7.620810799999998!3d33.5923449!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda7d29a5fb4219d%3A0x2e1e28ad2bb99ba0!2sPublic%20Evenements!5e0!3m2!1sfr!2sma!4v1746787105805!5m2!1sfr!2sma" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  className="absolute inset-0"
                />
                
                {/* Overlay gradient for better integration */}
                <div 
                  className="absolute inset-0 pointer-events-none"
                  style={{ 
                    background: `linear-gradient(to top, ${DARK}08, transparent 50%)`,
                    borderRadius: 'inherit'
                  }}
                />
                
                {/* Gold accent border */}
                <div 
                  className="absolute inset-0 pointer-events-none"
                  style={{ 
                    border: `2px solid ${GOLD}40`,
                    borderRadius: 'inherit'
                  }}
                />
              </div>
            </div>
          </motion.div>
          
          {/* Creative contact info panel */}
          <motion.div 
            className="lg:col-span-5"
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 40 }}
            transition={{ duration: 0.9, delay: 0.7 }}
          >
            <div 
              className="rounded-xl h-full relative overflow-hidden"
              style={{ 
                backgroundColor: DARK,
                border: `1px solid ${GOLD}40`,
                boxShadow: `0 20px 40px -15px ${DARK}40`
              }}
            >
              {/* Background pattern */}
              <div 
                className="absolute inset-0 opacity-5"
                style={{
                  backgroundImage: `radial-gradient(${LIGHT} 1px, transparent 1px)`,
                  backgroundSize: '20px 20px'
                }}
              />
              
              {/* Content */}
              <div className="p-8 md:p-10 relative z-10">
                <div className="flex items-center gap-3 mb-6">
                  <div 
                    className="w-10 h-10 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: GOLD }}
                  >
                    <Share2 size={20} color={DARK} />
                  </div>
                  <h3 className="text-2xl font-bold" style={{ color: LIGHT }}>
                    Restons connectés
                  </h3>
                </div>
                
                <p className="mb-8 text-lg" style={{ color: `${LIGHT}CC` }}>
                  Notre équipe d'experts se tient à votre disposition pour vous accompagner dans vos projets et répondre à toutes vos questions.
                </p>
                
                {/* Direct contact button */}
                <a 
                  href="mailto:contact@parthenon.ma" 
                  className="inline-flex items-center gap-3 py-4 px-6 rounded-lg mb-8 transition-all duration-300 hover:transform hover:translate-y-[-4px]"
                  style={{ 
                    background: `linear-gradient(135deg, ${GOLD}, ${GOLD}90)`,
                    boxShadow: `0 8px 16px -4px ${GOLD}40`
                  }}
                >
                  <Send size={20} color={DARK} />
                  <span className="font-medium" style={{ color: DARK }}>
                    Contactez-nous directement
                  </span>
                </a>
                
                {/* Social media links */}
                <div className="mt-8">
                  <p className="text-sm uppercase tracking-wider mb-4 font-medium" style={{ color: GOLD }}>
                    Suivez-nous
                  </p>
                  <div className="flex flex-wrap gap-4">
                    {socialLinks.map((social, index) => (
                      <a 
                        key={`social-${index}`}
                        href="#" 
                        className="flex items-center justify-center w-10 h-10 rounded-full transition-all duration-300 hover:transform hover:scale-110"
                        style={{ 
                          backgroundColor: `${LIGHT}15`,
                          border: `1px solid ${GOLD}40`,
                          color: LIGHT
                        }}
                      >
                        {social.icon}
                      </a>
                    ))}
                  </div>
                </div>
                
                {/* Direct contact info */}
                <div 
                  className="mt-8 p-4 rounded-lg"
                  style={{ 
                    backgroundColor: `${LIGHT}10`,
                    border: `1px solid ${GOLD}30`
                  }}
                >
                  <div className="flex items-center gap-3 mb-2">
                    <Phone size={18} style={{ color: GOLD }} />
                    <span style={{ color: LIGHT }}>+212 522 123 456</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail size={18} style={{ color: GOLD }} />
                    <span style={{ color: LIGHT }}>contact@parthenon.ma</span>
                  </div>
                </div>
              </div>
              
              {/* Decorative corner element */}
              <div 
                className="absolute -bottom-10 -right-10 w-40 h-40 rounded-full opacity-20"
                style={{ 
                  background: `radial-gradient(circle, ${GOLD} 0%, transparent 70%)` 
                }}
              />
            </div>
          </motion.div>
        </div>
        
        {/* Bottom CTA section */}
        <motion.div 
          className="text-center relative py-10 px-8 rounded-xl mt-12 overflow-hidden"
          style={{ 
            background: `linear-gradient(135deg, ${DARK}95, ${DARK})`,
            border: `1px solid ${GOLD}30`,
            boxShadow: `0 20px 40px -15px ${DARK}30`
          }}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.9 }}
        >
          {/* Background decoration */}
          <div 
            className="absolute top-0 left-0 w-full h-1"
            style={{ background: `linear-gradient(90deg, transparent, ${GOLD}, transparent)` }}
          />
          <div 
            className="absolute inset-0 opacity-15"
            style={{
              backgroundImage: `radial-gradient(${GOLD} 1px, transparent 1px)`,
              backgroundSize: '30px 30px'
            }}
          />
          
          {/* Content */}
          <h3 className="text-2xl md:text-3xl font-bold mb-4 relative z-10" style={{ color: LIGHT }}>
            Prêt à transformer votre vision en réalité?
          </h3>
          <p className="max-w-2xl mx-auto mb-8 text-lg relative z-10" style={{ color: `${LIGHT}CC` }}>
            Contactez-nous dès aujourd'hui pour un accompagnement sur mesure et découvrez comment Parthenon Holding peut vous aider à atteindre vos objectifs.
          </p>
          <div className="flex flex-wrap justify-center gap-4 relative z-10">
            <a 
              href="tel:+212522123456" 
              className="py-3 px-6 rounded-lg flex items-center gap-2 transition-all duration-300 hover:transform hover:translate-y-[-4px]"
              style={{ 
                backgroundColor: GOLD,
                color: DARK
              }}
            >
              <Phone size={18} />
              <span className="font-medium">Appelez-nous</span>
            </a>
            <a 
              href="mailto:contact@parthenon.ma" 
              className="py-3 px-6 rounded-lg flex items-center gap-2 transition-all duration-300 hover:transform hover:translate-y-[-4px]"
              style={{ 
                backgroundColor: `${LIGHT}10`,
                border: `1px solid ${GOLD}40`,
                color: LIGHT
              }}
            >
              <Mail size={18} />
              <span className="font-medium">Envoyez un email</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}