'use client';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  MapPin, 
  Mail, 
  Phone, 
  Instagram, 
  Facebook, 
  Linkedin, 
  ChevronUp, 
  ArrowUpRight
} from 'lucide-react';

// Define brand colors as constants (matching the hero and menu components)
const GOLD = "#A98142";
const LIGHT = "#E6E6E6";
const DARK = "#1C1C1B";

export default function ParthenonFooter() {
  const [isVisible, setIsVisible] = useState(false);
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
  
  // Back to top smooth scroll
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  
  // Intersection observer to trigger animations when footer comes into view
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );
    
    const footer = document.getElementById('parthenon-footer');
    if (footer) {
      observer.observe(footer);
    }
    
    return () => {
      if (footer) {
        observer.unobserve(footer);
      }
    };
  }, []);

// Footer column animation variants
const columnVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({  // Explicitly type the 'i' parameter as number
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.1 * i,
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1]
    }
  })
};
  // Contact info links with their icons
  const contactInfo = [
    { 
      icon: <MapPin size={18} />, 
      text: "Porte 4, 106 Rue Abderrahman Sahraoui, Casablanca 20100",
      href: "https://maps.google.com/?q=22+Rue+de+Paradis+75010+Paris+France"
    },
    { 
      icon: <Mail size={18} />, 
      text: "contact@parthenon.ma",
      href: "mailto:contact@parthenon.ma"
    },
    { 
      icon: <Phone size={18} />, 
      text: "+212 (5)22 45 91 50",
      href: "tel:+2125224-59150"
    }
  ];
  
  // Social media links
  const socialLinks = [
    { icon: <Linkedin size={20} />, href: "https://ma.linkedin.com/company/parthenonholding", label: "LinkedIn" }
  ];
  
  // Updated footer menu columns to match header navigation
  const footerColumns = [
    {
      title: "Navigation",
      links: [
        { text: "Accueil", href: "/" },
        { text: "A propos", href: "/about" },
        { text: "Nos verticaux", href: "#verticals" },
        { text: "Expertises", href: "#expertise" },
        { text: "Nos filiales", href: "#careers" },
        { text: "RSE & Durabilité", href: "#careers" },
        { text: "Contact", href: "#contact" }
      ]
    },
    {
      title: "Nos verticaux",
      links: [
        { text: "Programmes audiovisuels", href: "#legal" },
        { text: "Scénographie & Aménagement", href: "#privacy" },
        { text: "Loisirs & Hospitality", href: "#cookies" },
        { text: "Bâtiment & Travaux Publics (BTP)", href: "#accessibility" }
      ]
    },
    {
      title: "Informations",
      links: [
        { text: "Mentions légales", href: "#legal" },
        { text: "Politique de confidentialité", href: "#privacy" },
        { text: "Cookies", href: "#cookies" },
        { text: "Accessibilité", href: "#accessibility" }
      ]
    }
  ];

  return (
    <footer 
      id="parthenon-footer" 
      className="relative pt-16 pb-8 overflow-hidden"
      style={{ backgroundColor: DARK }}
    >
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: `linear-gradient(${GOLD}50 1px, transparent 1px), linear-gradient(90deg, ${GOLD}50 1px, transparent 1px)`,
        backgroundSize: '50px 50px'
      }}></div>
      
      {/* Diagonal decorative line */}
      <motion.div
        className="absolute top-0 left-0 right-0 h-px transform -rotate-2 origin-left"
        style={{ backgroundColor: GOLD }}
        initial={{ scaleX: 0 }}
        animate={isVisible ? { scaleX: 1 } : { scaleX: 0 }}
        transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
      />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Top section with logo and newsletter */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 md:mb-16">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ duration: 0.6 }}
          >
            <img 
              src="/logo.png" 
              alt="Parthenon Holding" 
              className="h-12 md:h-16"
            />
          </motion.div>
        </div>
        
        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-10 md:mb-16">
          {/* Contact information column */}
          <motion.div
            custom={0}
            variants={columnVariants}
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
          >
            <h3 className="text-lg font-medium mb-4" style={{ color: GOLD }}>
              Contact
            </h3>
            
            <ul className="space-y-3">
              {contactInfo.map((item, index) => (
                <li key={index}>
                  <motion.a
                    href={item.href}
                    className="flex items-start group"
                    whileHover={{ x: 5 }}
                    rel={item.href.startsWith('mailto') || item.href.startsWith('tel') ? 'noopener' : 'noopener noreferrer'}
                    target={item.href.startsWith('http') ? '_blank' : undefined}
                  >
                    <span className="mr-3 mt-1" style={{ color: GOLD }}>
                      {item.icon}
                    </span>
                    <span 
                      className="text-sm group-hover:underline"
                      style={{ color: `${LIGHT}CC` }}
                    >
                      {item.text}
                    </span>
                  </motion.a>
                </li>
              ))}
            </ul>
            
            {/* Social media links */}
            <div className="flex space-x-3 mt-6">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="w-9 h-9 flex items-center justify-center rounded-full"
                  whileHover={{ 
                    scale: 1.1,
                    backgroundColor: GOLD,
                    color: DARK
                  }}
                  style={{ 
                    backgroundColor: `${LIGHT}15`,
                    color: GOLD,
                    transition: 'background-color 0.3s ease, color 0.3s ease'
                  }}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>
          
          {/* Footer menus */}
          {footerColumns.map((column, columnIndex) => (
            <motion.div
              key={columnIndex}
              custom={columnIndex + 1}
              variants={columnVariants}
              initial="hidden"
              animate={isVisible ? "visible" : "hidden"}
            >
              <h3 className="text-lg font-medium mb-4" style={{ color: GOLD }}>
                {column.title}
              </h3>
              
              <ul className="space-y-2">
                {column.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <motion.a
                      href={link.href}
                      className="text-sm inline-block relative"
                      whileHover={{ x: 5 }}
                      style={{ color: `${LIGHT}CC` }}
                    >
                      {link.text}
                      <span 
                        className="absolute left-0 bottom-0 w-0 h-px group-hover:w-full transition-all duration-300"
                        style={{ backgroundColor: GOLD }}
                      ></span>
                    </motion.a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
        
        {/* Bottom footer with copyright */}
        <div className="pt-6 border-t" style={{ borderColor: `${LIGHT}15` }}>
          <div className="flex flex-col md:flex-row justify-between items-center">
            {/* Copyright text */}
            <motion.p 
              className="text-xs text-center md:text-left"
              style={{ color: `${LIGHT}70` }}
              initial={{ opacity: 0 }}
              animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
            >
              © {currentYear} Parthenon Holding. Tous droits réservés.
            </motion.p>
            
            {/* Back to top button */}
            <motion.button
              onClick={scrollToTop}
              className="mt-4 md:mt-0 w-10 h-10 rounded-full flex items-center justify-center"
              whileHover={{ y: -5, backgroundColor: GOLD }}
              whileTap={{ scale: 0.9 }}
              initial={{ opacity: 0 }}
              animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
              transition={{ delay: 0.9, duration: 0.6 }}
              style={{ backgroundColor: `${LIGHT}15` }}
            >
              <ChevronUp size={20} style={{ color: LIGHT }} />
            </motion.button>
          </div>
        </div>
      </div>
      
      {/* Decorative golden circle in bottom corner */}
      <motion.div
        className="absolute -bottom-24 -right-24 rounded-full opacity-10"
        style={{ 
          width: '300px', 
          height: '300px',
          background: `radial-gradient(circle, ${GOLD} 0%, ${GOLD}00 70%)`
        }}
        initial={{ scale: 0 }}
        animate={isVisible ? { scale: 1 } : { scale: 0 }}
        transition={{ delay: 0.7, duration: 1 }}
      />
    </footer>
  );
}