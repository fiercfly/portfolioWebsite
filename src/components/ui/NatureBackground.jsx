import React from 'react';
import { motion } from 'framer-motion';

const NatureBackground = () => {
  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none">
      {/* Soft Gradients */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0A0F0B] via-[#0D1A10] to-[#0A0F0B]"></div>
      
      {/* Radial Glows */}
      <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-primary/5 rounded-full blur-[120px]"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-secondary/5 rounded-full blur-[120px]"></div>

      {/* Fireflies */}
      {Array.from({ length: 12 }).map((_, i) => (
        <div
          key={`firefly-${i}`}
          className="firefly"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 20}s`,
            animationDuration: `${15 + Math.random() * 15}s`,
          }}
        ></div>
      ))}

      {/* Decorative Leaves (Swaying) */}
      <div className="absolute top-20 right-10 opacity-10 animate-sway">
        <svg width="200" height="200" viewBox="0 0 100 100" fill="currentColor" className="text-primary">
          <path d="M50 10C50 10 90 40 50 90C10 40 50 10 50 10Z" />
        </svg>
      </div>
      <div className="absolute bottom-40 left-10 opacity-10 animate-sway" style={{ animationDelay: '1.5s' }}>
        <svg width="150" height="150" viewBox="0 0 100 100" fill="currentColor" className="text-primary">
          <path d="M50 10C50 10 90 40 50 90C10 40 50 10 50 10Z" />
        </svg>
      </div>
    </div>
  );
};

export default NatureBackground;
