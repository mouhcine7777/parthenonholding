'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Leaf, Recycle, Sun, Globe } from 'lucide-react';

const GOLD = "#A98142";
const LIGHT = "#E6E6E6";
const DARK = "#1C1C1B";
const GREEN = "#2D5016";

export default function RSEDurabiliteSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const commitments = [
    {
      icon: Recycle,
      title: "Recyclage",
      description: "Réutilisation des matériaux scénographiques et valorisation des décors après chaque événement."
    },
    {
      icon: Sun,
      title: "Énergies renouvelables",
      description: "Ateliers et productions alimentés par des solutions à faible empreinte carbone."
    },
    {
      icon: Leaf,
      title: "Conception durable",
      description: "Priorité donnée aux matériaux responsables, aux circuits courts et à la longévité des installations."
    }
  ];

  return (
    <section className="py-24 md:py-40 relative overflow-hidden bg-white">
      {/* Organic background shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-10">
        <motion.div
          className="absolute top-20 -left-20 w-96 h-96 rounded-full"
          style={{ backgroundColor: GREEN }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-20 -right-20 w-[500px] h-[500px] rounded-full"
          style={{ backgroundColor: GOLD }}
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.2, 0.4, 0.2]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          {/* Left Side - Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Badge */}
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, type: "spring" }}
              className="inline-flex items-center gap-3 px-5 py-3 rounded-full"
              style={{ backgroundColor: `${GREEN}15` }}
            >
              <Globe size={24} style={{ color: GREEN }} />
              <span className="text-sm font-semibold uppercase tracking-wider" style={{ color: GREEN }}>
                Notre Engagement
              </span>
            </motion.div>

            {/* Title */}
            <div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4" style={{ color: DARK }}>
                RSE & Durabilité
              </h2>
              <motion.div
                className="h-1.5 rounded-full"
                style={{ backgroundColor: GREEN }}
                initial={{ width: 0 }}
                whileInView={{ width: 120 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
              />
            </div>

            {/* Subtitle with ESG badge */}
            <div className="flex items-start gap-4">
              <motion.div
                className="px-4 py-2 rounded-lg font-bold text-sm"
                style={{ backgroundColor: GOLD, color: 'white' }}
                initial={{ rotate: -5 }}
                whileInView={{ rotate: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                ESG
              </motion.div>
              <p className="text-lg md:text-xl leading-relaxed flex-1" style={{ color: `${DARK}DD` }}>
              Chez Parthenon Holding, la créativité s'exprime aussi dans la manière de produire.
              Notre démarche RSE s'appuie sur une conviction simple : chaque projet, chaque espace, chaque production peut conjuguer esthétique, innovation et responsabilité.
              </p>
            </div>

            {/* Main description */}
            <motion.p
              className="text-base md:text-lg leading-relaxed"
              style={{ color: `${DARK}CC` }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Au quotidien, cet engagement prend forme à travers :
            </motion.p>

            {/* Commitments list */}
            <div className="space-y-4 pt-6">
              {commitments.map((commitment, index) => {
                const Icon = commitment.icon;
                const isActive = activeIndex === index;

                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                    onMouseEnter={() => setActiveIndex(index)}
                    onMouseLeave={() => setActiveIndex(null)}
                    className="group cursor-pointer"
                  >
                    <motion.div
                      className="flex items-start gap-4 p-5 rounded-2xl transition-all duration-300"
                      style={{
                        backgroundColor: isActive ? `${GREEN}10` : 'transparent',
                        border: `2px solid ${isActive ? GREEN : 'transparent'}`
                      }}
                      whileHover={{ x: 8 }}
                    >
                      <motion.div
                        className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                        style={{ backgroundColor: isActive ? GREEN : `${GREEN}20` }}
                        animate={{
                          rotate: isActive ? 360 : 0
                        }}
                        transition={{ duration: 0.6 }}
                      >
                        <Icon size={24} className="text-white" style={{ color: isActive ? 'white' : GREEN }} />
                      </motion.div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold mb-1" style={{ color: DARK }}>
                          {commitment.title}
                        </h3>
                        <p className="text-sm" style={{ color: `${DARK}99` }}>
                          {commitment.description}
                        </p>
                      </div>
                    </motion.div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Right Side - Visual */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative aspect-square max-w-xl mx-auto lg:ml-auto">
              {/* Main image container */}
              <motion.div
                className="absolute inset-0 rounded-[3rem] overflow-hidden shadow-2xl"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.4 }}
              >
                <img
                  src="/rse.jpg"
                  alt="RSE & Durabilité"
                  className="w-full h-full object-cover"
                />
                <div 
                  className="absolute inset-0"
                  style={{
                    background: `linear-gradient(135deg, ${GREEN}40 0%, transparent 50%, ${GOLD}30 100%)`
                  }}
                />
              </motion.div>

              {/* Floating decorative elements */}
              <motion.div
                className="absolute -top-8 -right-8 w-32 h-32 rounded-3xl shadow-xl flex items-center justify-center"
                style={{ backgroundColor: GREEN }}
                animate={{
                  y: [0, -15, 0],
                  rotate: [0, 5, 0]
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <Leaf size={48} className="text-white" />
              </motion.div>

              <motion.div
                className="absolute -bottom-6 -left-6 w-28 h-28 rounded-2xl shadow-xl flex items-center justify-center"
                style={{ backgroundColor: GOLD }}
                animate={{
                  y: [0, 10, 0],
                  rotate: [0, -5, 0]
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <Globe size={40} className="text-white" />
              </motion.div>

              {/* Decorative circles */}
              <motion.div
                className="absolute top-1/2 -left-12 w-24 h-24 rounded-full border-4 opacity-30"
                style={{ borderColor: GREEN }}
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.3, 0.6, 0.3]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />

              <motion.div
                className="absolute bottom-1/4 -right-8 w-20 h-20 rounded-full border-4 opacity-30"
                style={{ borderColor: GOLD }}
                animate={{
                  scale: [1, 1.3, 1],
                  opacity: [0.3, 0.6, 0.3]
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1
                }}
              />
            </div>
          </motion.div>
        </div>

        {/* Closing statement - Full width below grid */}
        <motion.p
          className="text-base md:text-lg lg:text-xl leading-relaxed pt-12 text-center max-w-4xl mx-auto"
          style={{ color: DARK }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <span className="font-bold">Engagés pour un avenir durable : RSE et développement au coeur de nos valeurs.</span>
        </motion.p>
      </div>
    </section>
  );
}