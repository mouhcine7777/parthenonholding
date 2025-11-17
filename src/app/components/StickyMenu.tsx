'use client';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';

// Define brand colors as constants (matching the hero component)
const GOLD = "#A98142";
const LIGHT = "#E6E6E6";
const DARK = "#1C1C1B";

export default function ParthenonMenu() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  // Handle component mounting
  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Check scroll position to update sticky menu appearance
  useEffect(() => {
    if (!isMounted) return;
    
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isMounted]);

  // Close mobile menu on window resize
  useEffect(() => {
    if (!isMounted) return;
    
    const handleResize = () => {
      if (window.innerWidth > 1024 && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isMobileMenuOpen, isMounted]);

  // Menu items
  const menuItems = [
    { name: 'Accueil', href: '/' },
    { name: 'À propos', href: '/about' },
    { name: 'Expertises', href: '/expertises' },
    { name: 'Verticaux', href: '/nos-verticaux' },
    { name: 'Nos filiales', href: '/nos-filiales' },
    { name: 'RSE & Durabilité', href: '/rse' },
    { name: 'Contact', href: '/contact' }
  ];

  // Animation variants
  const mobileMenuVariants = {
    hidden: { opacity: 0, x: '100%' },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { 
        duration: 0.4,
        ease: [0.22, 1, 0.36, 1]
      }
    },
    exit: {
      opacity: 0,
      x: '100%',
      transition: { 
        duration: 0.3,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

  // Don't render until mounted to avoid hydration issues
  if (!isMounted) {
    return (
      <header className="fixed top-0 left-0 right-0 z-50 w-full py-5" style={{ backgroundColor: 'transparent' }}>
        <div className="container mx-auto px-4 lg:px-6">
          <div className="flex items-center justify-between">
            <div>
              <img src="/logo.png" alt="Parthenon Holding" className="h-12 md:h-16" />
            </div>
          </div>
        </div>
      </header>
    );
  }

  return (
    <>
      {/* Sticky navigation bar */}
      <motion.header 
        className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 ${
          isScrolled ? 'py-3 shadow-md' : 'py-5'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        style={{ 
          backgroundColor: isScrolled ? DARK : 'transparent',
          backdropFilter: isScrolled ? 'blur(10px)' : 'none',
        }}
      >
        <div className="container mx-auto px-4 lg:px-6">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <motion.div 
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              <Link 
                href="/"
                className="flex items-center"
              >
                <img 
                  src="/logo.png" 
                  alt="Parthenon Holding" 
                  className={`transition-all duration-300 ${
                    isScrolled ? 'h-10 md:h-18' : 'h-12 md:h-19'
                  }`}
                />
              </Link>
            </motion.div>
            
            {/* Desktop navigation */}
            <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2">
              {menuItems.map((item) => (
                <motion.div 
                  key={item.name}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link 
                    href={item.href}
                    className="px-3 py-2 text-sm xl:text-base font-medium relative group"
                    style={{ color: LIGHT }}
                  >
                    {item.name}
                    
                    {/* Animated underline effect */}
                    <span 
                      className="absolute left-0 bottom-0 h-0.5 w-0 group-hover:w-full transition-all duration-300"
                      style={{ backgroundColor: GOLD }}
                    ></span>
                  </Link>
                </motion.div>
              ))}
            </nav>
            
            {/* Contact button (visible on desktop) */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                href="tel:+212522459150"
                className="hidden lg:flex items-center px-5 py-2 rounded-full text-sm font-medium"
                style={{ 
                  backgroundColor: GOLD,
                  color: 'white'
                }}
              >
                Appelez-nous
              </Link>
            </motion.div>
            
            {/* Mobile menu button */}
            <motion.button
              className="lg:hidden p-2 rounded-md"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              aria-label="Toggle mobile menu"
            >
              <Menu className="h-6 w-6" style={{ color: GOLD }} />
            </motion.button>
          </div>
        </div>
      </motion.header>
      
      {/* Mobile menu overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="fixed inset-0 z-50 lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {/* Backdrop */}
            <motion.div 
              className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-sm"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            
            {/* Mobile menu panel */}
            <motion.div
              className="absolute top-0 right-0 w-3/4 sm:w-2/3 max-w-sm h-full overflow-y-auto"
              style={{ backgroundColor: DARK }}
              variants={mobileMenuVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <div className="p-5">
                <div className="flex items-center justify-between mb-8">
                  {/* Logo in mobile menu */}
                  <Link href="/">
                    <img 
                      src="/logo.png" 
                      alt="Parthenon Holding" 
                      className="h-10"
                    />
                  </Link>
                  
                  {/* Close button */}
                  <motion.button
                    onClick={() => setIsMobileMenuOpen(false)}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <X className="h-6 w-6" style={{ color: GOLD }} />
                  </motion.button>
                </div>
                
                {/* Mobile navigation */}
                <nav className="flex flex-col space-y-1">
                  {menuItems.map((item) => (
                    <motion.div
                      key={item.name}
                      whileHover={{ x: 5 }}
                    >
                      <Link
                        href={item.href}
                        className="py-3 text-base font-medium block"
                        onClick={() => setIsMobileMenuOpen(false)}
                        style={{ color: LIGHT }}
                      >
                        {item.name}
                      </Link>
                    </motion.div>
                  ))}
                </nav>
                
                {/* Contact button in mobile menu */}
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Link
                    href="tel:+212522459150"
                    className="mt-8 block w-full text-center px-5 py-3 rounded-full text-base font-medium"
                    onClick={() => setIsMobileMenuOpen(false)}
                    style={{ 
                      backgroundColor: GOLD,
                      color: 'white'
                    }}
                  >
                    Appelez-nous
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}