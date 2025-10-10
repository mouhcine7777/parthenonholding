'use client';
import { useState, useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Target, Users, Zap, Leaf, MoveRight } from 'lucide-react';

const GOLD = "#A98142";
const LIGHT = "#E6E6E6";
const DARK = "#1C1C1B";

interface Value {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  icon: any;
}

export default function ValuesSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const values: Value[] = [
    {
      id: "audace",
      title: "Audace",
      subtitle: "& Ambition",
      description: "Oser l'inhabituel pour offrir des expériences mémorables qui marquent les esprits et transforment les événements en souvenirs inoubliables.",
      image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=1200&q=80",
      icon: Target
    },
    {
      id: "equipe",
      title: "Esprit d'équipe",
      subtitle: "& Performance",
      description: "La force du collectif pour des projets créatifs et maîtrisés, où chaque talent contribue à l'excellence du résultat final.",
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&q=80",
      icon: Users
    },
    {
      id: "innovation",
      title: "Innovation",
      subtitle: "Continue",
      description: "Anticiper les tendances pour proposer des solutions modernes et impactantes, toujours à la pointe de la technologie et de la créativité.",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200&q=80",
      icon: Zap
    },
    {
      id: "durabilite",
      title: "Responsabilité",
      subtitle: "& Durabilité",
      description: "Bâtir des projets pérennes et respectueux grâce à notre vision P.A.C, en harmonie avec l'environnement et les générations futures.",
      image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=1200&q=80",
      icon: Leaf
    }
  ];

  return (
    <section className="relative overflow-hidden" style={{ backgroundColor: LIGHT }}>
      {/* Header */}
      <div className="container mx-auto px-6 lg:px-12 pt-16 sm:pt-20 lg:pt-32 mb-12 sm:mb-16 lg:mb-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <motion.div 
            className="flex items-center mb-4 sm:mb-6"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <div className="w-12 sm:w-16 lg:w-20 h-px mr-4 sm:mr-6" style={{ backgroundColor: GOLD }} />
            <span className="uppercase tracking-[0.2em] sm:tracking-[0.3em] text-xs sm:text-sm font-semibold" style={{ color: GOLD }}>
              Nos Valeurs
            </span>
          </motion.div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold mb-4 sm:mb-6 leading-tight" style={{ color: DARK }}>
            L'excellence par nos valeurs
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 leading-relaxed">
            Quatre principes fondamentaux qui façonnent notre vision et guident chacune de nos actions
          </p>
        </motion.div>
      </div>

      {/* Cards Grid - Full Width with Creative Center Separator */}
      <div className="relative w-full">
        {/* Creative Center Separator */}
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-10">
          {/* Vertical Line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2" style={{ backgroundColor: `${GOLD}60` }}>
            {/* Top Diamond */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <div className="w-3 h-3 rotate-45" style={{ backgroundColor: GOLD }} />
            </div>
            {/* Center Ornament */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <div className="relative">
                <div className="w-8 h-8 rotate-45 border-2" style={{ borderColor: GOLD, backgroundColor: LIGHT }} />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full" style={{ backgroundColor: GOLD }} />
              </div>
            </div>
            {/* Bottom Diamond */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2">
              <div className="w-3 h-3 rotate-45" style={{ backgroundColor: GOLD }} />
            </div>
          </div>
          
          {/* Horizontal Line */}
          <div className="absolute left-0 right-0 top-1/2 h-px -translate-y-1/2" style={{ backgroundColor: `${GOLD}60` }}>
            {/* Left Diamond */}
            <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2">
              <div className="w-3 h-3 rotate-45" style={{ backgroundColor: GOLD }} />
            </div>
            {/* Right Diamond */}
            <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2">
              <div className="w-3 h-3 rotate-45" style={{ backgroundColor: GOLD }} />
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2">
          {values.map((value, index) => {
            const Icon = value.icon;
            const isActive = activeIndex === index;

            return (
              <motion.div
                key={value.id}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7, delay: index * 0.15 }}
                onMouseEnter={() => setActiveIndex(index)}
                onMouseLeave={() => setActiveIndex(null)}
                className="group relative cursor-pointer"
              >
                {/* Card Container */}
                <div className="relative h-[450px] sm:h-[550px] lg:h-[650px] overflow-hidden">
                  {/* Background Image */}
                  <div className="absolute inset-0">
                    <motion.img
                      src={value.image}
                      alt={value.title}
                      className="w-full h-full object-cover"
                      animate={{
                        scale: isActive ? 1.15 : 1,
                      }}
                      transition={{ duration: 0.8, ease: "easeOut" }}
                    />
                    {/* Gradient Overlay */}
                    <motion.div
                      className="absolute inset-0"
                      animate={{
                        background: isActive
                          ? `linear-gradient(180deg, ${DARK}00 0%, ${DARK}DD 100%)`
                          : `linear-gradient(180deg, ${DARK}00 0%, ${DARK}E6 100%)`
                      }}
                      transition={{ duration: 0.5 }}
                    />
                  </div>

                  {/* Content */}
                  <div className="relative h-full flex flex-col justify-between p-6 sm:p-8 lg:p-12">
                    {/* Top Section - Icon & Number */}
                    <div className="flex items-start justify-between">
                      {/* Icon */}
                      <motion.div
                        className="relative"
                        animate={{
                          scale: isActive ? 1.1 : 1,
                          rotate: isActive ? 10 : 0,
                        }}
                        transition={{ duration: 0.5 }}
                      >
                        <motion.div
                          className="w-14 h-14 sm:w-16 sm:h-16 lg:w-20 lg:h-20 rounded-xl lg:rounded-2xl flex items-center justify-center backdrop-blur-md"
                          style={{ 
                            backgroundColor: isActive ? GOLD : `${GOLD}30`,
                            border: `2px solid ${GOLD}`
                          }}
                        >
                          <Icon 
                            className="w-6 h-6 sm:w-7 sm:h-7 lg:w-9 lg:h-9"
                            style={{ color: isActive ? DARK : 'white' }}
                          />
                        </motion.div>
                      </motion.div>

                      {/* Number */}
                      <motion.div
                        className="text-5xl sm:text-6xl lg:text-8xl font-bold opacity-20"
                        style={{ color: GOLD }}
                        animate={{
                          opacity: isActive ? 0.4 : 0.2,
                          scale: isActive ? 1.1 : 1,
                        }}
                      >
                        {String(index + 1).padStart(2, '0')}
                      </motion.div>
                    </div>

                    {/* Bottom Section - Title & Description */}
                    <div>
                      {/* Title */}
                      <div className="mb-4 sm:mb-6">
                        <motion.h3
                          className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-2 leading-tight"
                          animate={{
                            y: isActive ? -5 : 0,
                          }}
                          transition={{ duration: 0.4 }}
                        >
                          {value.title}
                        </motion.h3>
                        <motion.div
                          className="text-xl sm:text-2xl lg:text-3xl font-light"
                          style={{ color: GOLD }}
                          animate={{
                            y: isActive ? -5 : 0,
                          }}
                          transition={{ duration: 0.4, delay: 0.05 }}
                        >
                          {value.subtitle}
                        </motion.div>
                      </div>

                      {/* Decorative Line */}
                      <motion.div
                        className="h-1 rounded-full mb-4 sm:mb-6"
                        style={{ backgroundColor: GOLD }}
                        initial={{ width: '60px' }}
                        animate={{
                          width: isActive ? '120px' : '60px',
                        }}
                        transition={{ duration: 0.5 }}
                      />

                      {/* Description */}
                      <motion.p
                        className="text-base sm:text-lg leading-relaxed mb-6 sm:mb-8"
                        style={{ color: LIGHT }}
                        animate={{
                          opacity: isActive ? 1 : 0.8,
                          y: isActive ? 0 : 10,
                        }}
                        transition={{ duration: 0.4 }}
                      >
                        {value.description}
                      </motion.p>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Background Decorative Elements */}
      <div className="absolute top-20 right-0 w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full opacity-5 pointer-events-none" style={{ backgroundColor: GOLD, filter: 'blur(100px)' }} />
      <div className="absolute bottom-0 left-0 w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full opacity-5 pointer-events-none" style={{ backgroundColor: GOLD, filter: 'blur(100px)' }} />
    </section>
  );
}