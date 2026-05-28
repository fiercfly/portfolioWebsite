import React, { useEffect, useState, useRef } from 'react';
import { motion, useSpring } from 'framer-motion';

const ButterflyCursor = () => {
  const mouseX = useSpring(0, { stiffness: 200, damping: 30 });
  const mouseY = useSpring(0, { stiffness: 200, damping: 30 });
  const [isHovering, setIsHovering] = useState(false);
  const [particles, setParticles] = useState([]);
  
  const lastPosition = useRef({ x: 0, y: 0 });

  useEffect(() => {
      const handleMouseMove = (e) => {
        const x = e.clientX;
        const y = e.clientY;
        
        mouseX.set(x);
        mouseY.set(y);
        
        const target = e.target;
        setIsHovering(
          window.getComputedStyle(target).cursor === 'pointer' ||
          target.tagName === 'A' ||
          target.tagName === 'BUTTON'
        );

        // Only spawn particles when mouse moves a noticeable amount,
        // and keep the trail lighter to avoid busy motion.
        const dx = x - lastPosition.current.x;
        const dy = y - lastPosition.current.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance > 35) {
          const id = Math.random().toString(36).substring(2, 9);
          const types = ['leaf', 'ember', 'butterfly'];
          const type = types[Math.floor(Math.random() * types.length)];
          const size = 8 + Math.random() * 8; // Smaller trail particles
          const rotate = Math.random() * 360;
          const driftX = (Math.random() - 0.5) * 20; // Gentle drift
          const driftY = -20 - Math.random() * 10;

          const newParticle = { id, x, y, type, size, rotate, driftX, driftY };
          setParticles((prev) => {
            const next = [...prev, newParticle];
            return next.length > 8 ? next.slice(next.length - 8) : next;
          });
          lastPosition.current = { x, y };
        }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  const removeParticle = (id) => {
    setParticles((prev) => prev.filter((p) => p.id !== id));
  };

  return (
    <>
      {/* Global Butterfly Cursor */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] hidden md:block"
        style={{
          x: mouseX,
          y: mouseY,
          translateX: '-50%',
          translateY: '-50%',
        }}
      >
        <motion.div
          animate={{
            rotateY: [0, 60, 0],
            scale: isHovering ? 1.5 : 1,
          }}
          transition={{
            rotateY: { duration: 0.2, repeat: Infinity, ease: "easeInOut" },
            scale: { duration: 0.3 }
          }}
          className="relative w-8 h-8"
        >
          {/* Butterfly Wings */}
          <svg viewBox="0 0 100 100" className="w-full h-full fill-secondary drop-shadow-[0_0_8px_rgba(244,194,194,0.6)]">
            <path d="M50 50 C20 10, 10 40, 50 60 C90 40, 80 10, 50 50 Z" />
            <path d="M50 50 C20 90, 10 60, 50 60 C90 60, 80 90, 50 50 Z" className="opacity-80" />
          </svg>
        </motion.div>
        
        {/* Core glow */}
        <motion.div 
          animate={{ opacity: [0.15, 0.4, 0.15], scale: [0.8, 1.3, 0.8] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/2 left-1/2 w-4 h-4 bg-accent/20 rounded-full blur-sm -translate-x-1/2 -translate-y-1/2"
        />
      </motion.div>

      {/* Particles Trail */}
      {particles.map((p) => (
        <motion.div
          key={p.id}
          initial={{
            opacity: 0.75,
            scale: 0.8,
            x: p.x,
            y: p.y,
            rotate: p.rotate,
          }}
          animate={{
            opacity: 0,
            scale: 0,
            y: p.y + (p.driftY ?? -80), // Ethereal up/down drift
            x: p.x + p.driftX,
          }}
          transition={{
            duration: 1.5,
            ease: "easeOut",
          }}
          onAnimationComplete={() => removeParticle(p.id)}
          className="fixed top-0 left-0 pointer-events-none z-[9998] -translate-x-1/2 -translate-y-1/2 mix-blend-screen"
          style={{
            width: p.size,
            height: p.size,
          }}
        >
          {p.type === 'leaf' && (
            <svg viewBox="0 0 24 24" className="w-full h-full fill-primary/35 drop-shadow-[0_0_4px_rgba(134,193,149,0.3)]">
              <path d="M17,8C8,10 5.9,16.17 3.82,21.34L2.18,20.66C4.26,15.49 6.36,9.32 15.36,7.3C13,5 9,5 9,5C9,5 13,3 17,6C19,8 22,10 22,10C22,10 19,6 17,8Z" />
            </svg>
          )}
          {p.type === 'ember' && (
            <svg viewBox="0 0 24 24" className="w-full h-full fill-accent/30 drop-shadow-[0_0_6px_rgba(255,215,0,0.4)]">
              <circle cx="12" cy="12" r="8" />
            </svg>
          )}
          {p.type === 'butterfly' && (
            <svg viewBox="0 0 24 24" className="w-full h-full fill-secondary/35 drop-shadow-[0_0_5px_rgba(244,194,194,0.3)]">
              <path d="M12,12 C4,2 1,8 12,14 C23,8 20,2 12,12 Z" />
              <path d="M12,12 C4,22 1,16 12,14 C23,16 20,22 12,12 Z" className="opacity-80" />
            </svg>
          )}
        </motion.div>
      ))}
    </>
  );
};

export default ButterflyCursor;
