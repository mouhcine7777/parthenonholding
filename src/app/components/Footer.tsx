'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { 
  MapPin, 
  Mail, 
  Phone, 
  Linkedin
} from 'lucide-react';

const GOLD = "#A98142";
const LIGHT = "#E6E6E6";
const DARK = "#1C1C1B";

export default function CompactFooter() {
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
  
  const contactInfo = [
    { 
      icon: <MapPin size={16} />, 
      text: "Porte 4, 106 Rue Abderrahman Sahraoui, Casablanca 20100",
      href: "/"
    },
    { 
      icon: <Mail size={16} />, 
      text: "contact@parthenon.ma",
      href: "mailto:contact@parthenon.ma"
    },
    { 
      icon: <Phone size={16} />, 
      text: "+212 (5)22 45 91 50",
      href: "tel:+2125224-59150"
    }
  ];

  return (
    <footer 
      className="relative py-6 md:py-8"
      style={{ backgroundColor: DARK }}
    >
      <div className="container mx-auto px-4 md:px-6">
        {/* Logo */}
        <div className="flex justify-center mb-4">
          <Link href="/">
            <img 
              src="/logo.png" 
              alt="Parthenon Holding" 
              className="h-19 md:h-30 cursor-pointer"
            />
          </Link>
        </div>
        
        {/* Contact info - centered */}
        <div className="flex flex-col md:flex-row md:flex-wrap justify-center items-center gap-3 md:gap-6 mb-4">
          {contactInfo.map((item, index) => (
            <a
              key={index}
              href={item.href}
              className="flex items-center gap-2 hover:opacity-80 transition-opacity"
              rel={item.href.startsWith('mailto') || item.href.startsWith('tel') ? 'noopener' : 'noopener noreferrer'}
              target={item.href.startsWith('http') ? '_blank' : undefined}
            >
              <span style={{ color: GOLD }}>
                {item.icon}
              </span>
              <span 
                className="text-xs md:text-sm"
                style={{ color: `${LIGHT}CC` }}
              >
                {item.text}
              </span>
            </a>
          ))}
        </div>
        
        {/* Social & Copyright */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-3 pt-4 border-t" style={{ borderColor: `${LIGHT}15` }}>
          <a
            href="https://ma.linkedin.com/company/parthenonholding"
            target="_blank"
            rel="noopener noreferrer"
            className="w-8 h-8 flex items-center justify-center rounded-full hover:opacity-80 transition-opacity"
            style={{ 
              backgroundColor: `${LIGHT}15`,
              color: GOLD
            }}
          >
            <Linkedin size={18} />
          </a>
          
          <p 
            className="text-xs text-center"
            style={{ color: `${LIGHT}70` }}
          >
            © {currentYear} Parthenon Holding. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
}