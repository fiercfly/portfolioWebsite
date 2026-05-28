import React from 'react';
import { useSeason } from './SeasonEngine';
import { motion } from 'framer-motion';

const WeatherParticles = () => {
  const { season } = useSeason();
  const count = 30;
  
  const getParticle = () => {
    switch (season) {
      case 'winter': return { icon: '❄️', size: '12px' };
      case 'autumn': return { icon: '🍂', size: '20px' };
      case 'summer': return { icon: '✨', size: '8px' };
      default: return { icon: '🌸', size: '16px' };
    }
  };

  const p = getParticle();

  return (
    <>
      {Array.from({ length: count }).map((_, i) => (
        <div
          key={i}
          className="particle"
          style={{
            '--delay': `${Math.random() * 20}s`,
            '--duration': `${15 + Math.random() * 10}s`,
            left: `${Math.random() * 100}vw`,
            fontSize: p.size,
            opacity: 0.4 + Math.random() * 0.4,
          }}
        >
          {p.icon}
        </div>
      ))}
    </>
  );
};

export const AmbientLife = () => {
  const { time, season } = useSeason();
  // Disable butterflies for now to avoid performance issues
  const butterflies = Array.from({ length: 0 });
  const fireflies = Array.from({ length: 15 });

  return (
    <div className="fixed inset-0 pointer-events-none z-20 overflow-hidden">
      {/* Butterflies (Day Only) */}
      {time === 'day' && butterflies.map((_, i) => (
        <motion.div
          key={i}
          animate={{
            x: [Math.random() * 100 + 'vw', Math.random() * 100 + 'vw'],
            y: [Math.random() * 100 + 'vh', Math.random() * 100 + 'vh'],
          }}
          transition={{
            duration: 20 + Math.random() * 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute"
        >
          <div className="flex">
            <div className="w-3 h-4 bg-secondary/60 rounded-full butterfly-wing" style={{ animationDelay: `${i * 0.1}s` }}></div>
            <div className="w-3 h-4 bg-secondary/60 rounded-full butterfly-wing origin-left" style={{ animationDelay: `${i * 0.1}s`, transform: 'scaleX(-1)' }}></div>
          </div>
        </motion.div>
      ))}

      {/* Fireflies (Night Only) */}
      {time === 'night' && fireflies.map((_, i) => (
        <motion.div
          key={i}
          animate={{
            x: [Math.random() * 100 + 'vw', Math.random() * 100 + 'vw'],
            y: [Math.random() * 100 + 'vh', Math.random() * 100 + 'vh'],
            opacity: [0, 1, 0],
            scale: [0.5, 1, 0.5]
          }}
          transition={{
            duration: 5 + Math.random() * 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: Math.random() * 5
          }}
          className="absolute w-1.5 h-1.5 bg-accent rounded-full blur-[2px] shadow-[0_0_10px_var(--garden-accent)]"
        />
      ))}
    </div>
  );
};

export default WeatherParticles;
