import React from 'react';
import { techStack } from '../constant/data';
import { motion } from "framer-motion";
import { RiLeafLine, RiSunLine, RiWaterFlashLine } from "@remixicon/react";

const Hero = () => {
    return (
        <section className='relative min-h-screen flex items-center justify-center overflow-hidden pt-24 pb-36 lg:pt-36 lg:pb-48' id="home">
            {/* Ambient Background Elements */}
            <div className="absolute top-24 left-10 hidden xl:block animate-sway opacity-15 pointer-events-none">
                <RiLeafLine className="text-primary" size={140} />
            </div>
            <div className="absolute bottom-24 right-10 hidden xl:block animate-sway opacity-15 pointer-events-none" style={{ animationDelay: '2s' }}>
                <RiWaterFlashLine className="text-primary" size={140} />
            </div>

            {/* Immersive Breathing Radial Gradient Backdrop */}
            <div className="absolute inset-0 z-0 pointer-events-none flex items-center justify-center overflow-hidden">
                <motion.div 
                    animate={{
                        scale: [1, 1.15, 1],
                        opacity: [0.35, 0.5, 0.35]
                    }}
                    transition={{
                        duration: 12,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                    className="w-[80vw] h-[80vw] max-w-[900px] max-h-[900px] rounded-full bg-[radial-gradient(circle,rgba(134,193,149,0.08)_0%,rgba(0,0,0,0)_70%)] blur-[80px]"
                />
            </div>

            {/* Majestic Background Watermark Text */}
            <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex items-center justify-center pointer-events-none select-none overflow-hidden z-0 opacity-[0.01]">
                <h1 className="text-[12vw] md:text-[15vw] font-black uppercase font-sans tracking-[0.1em] text-white leading-none whitespace-nowrap">
                    CREATIVE ARCHITECT
                </h1>
            </div>

            <div className='container relative z-10'>
                <div className='flex flex-col items-center text-center max-w-5xl mx-auto'>
                    
                    {/* Visual Badge */}
                    <motion.div 
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                        className="mb-10 px-6 py-2.5 rounded-full glass border border-white/5 text-primary text-xs md:text-sm font-bold tracking-[0.15em] uppercase flex items-center gap-3 max-w-full text-center justify-center shadow-lg"
                    >
                        <RiSunLine className="animate-spin-slow text-accent" size={16} />
                        CULTIVATING DIGITAL ECOSYSTEMS
                    </motion.div>
 
                    {/* Headline */}
                    <div className="mb-12 md:mb-20 lg:mb-28 overflow-hidden">
                        <motion.h1 
                            initial={{ y: "100%" }}
                            animate={{ y: 0 }}
                            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                            className='text-5xl xs:text-6xl md:text-8xl lg:text-[7.5rem] leading-[1.0] uppercase relative z-30'
                        >
                            <span className="font-extrabold tracking-[0.02em] font-sans text-white/95">Akshat </span>
                            <span className="text-gradient font-serif-italic tracking-[0.05em] font-light">Jain</span>
                        </motion.h1>
                    </div>
 
                    {/* Sub-headline (sleek, tracked-out, luxury brand styling) */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 0.5 }}
                        className="flex flex-col md:flex-row items-center justify-center gap-3 md:gap-6 lg:gap-10 text-xs md:text-sm lg:text-[14px] font-bold text-white/70 tracking-[0.15em] uppercase mb-16 md:mb-24 lg:mb-32 font-sans"
                    >
                        <span>SDE at Appy Pie</span>
                        <span className="hidden md:block w-1.5 h-1.5 bg-primary/40 rounded-full"></span>
                        <span>Scale AI Contributor</span>
                        <span className="hidden md:block w-1.5 h-1.5 bg-primary/40 rounded-full"></span>
                        <span>Scene Builder Architect</span>
                    </motion.div>
 
                    {/* Organic Floating Navigation (Scattered Nodes) */}
                    <motion.div 
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
                        className="relative w-full max-w-2xl h-auto md:h-48 mb-16 md:mb-28 lg:mb-36 flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6"
                    >
                        {/* Wander Through Works (Left stylized leaf node) */}
                        <a 
                            href="#projects" 
                            className="md:absolute md:left-4 lg:left-12 md:top-4 p-5 md:p-8 bg-primary/95 text-bg border border-primary/50 rounded-tl-3xl rounded-br-3xl rounded-tr-lg rounded-bl-lg shadow-[inset_0_1px_4px_rgba(255,255,255,0.25),0_0_35px_rgba(134,193,149,0.45)] hover:shadow-[inset_0_1px_4px_rgba(255,255,255,0.4),0_0_55px_rgba(134,193,149,0.7)] transition-all duration-500 hover:scale-105 group overflow-hidden animate-float w-full max-w-[260px] md:w-56 text-center block"
                        >
                            <span className="relative z-10 font-bold uppercase tracking-[0.2em] text-xs md:text-sm">Wander Through Works</span>
                            <div className="absolute inset-0 bg-gradient-to-br from-primary-light to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        </a>
                        
                        {/* Collect Resume (Right stylized leaf node) */}
                        <a 
                            href="public/Resume/Akshat_Jain_Resume.pdf" 
                            download 
                            className="md:absolute md:right-4 lg:right-12 md:bottom-4 p-5 md:p-8 glass border border-white/10 rounded-tr-3xl rounded-bl-3xl rounded-tl-lg rounded-br-lg shadow-[inset_0_1px_4px_rgba(255,255,255,0.15),0_0_30px_rgba(0,0,0,0.5)] hover:border-primary/40 hover:shadow-[inset_0_1px_4px_rgba(255,255,255,0.25),0_0_40px_rgba(134,193,149,0.3)] transition-all duration-500 hover:scale-105 group overflow-hidden animate-float-delayed w-full max-w-[260px] md:w-56 text-center block"
                        >
                            <span className="relative z-10 text-white/80 font-bold uppercase tracking-[0.2em] text-xs md:text-sm">Collect Resume</span>
                            <div className="absolute inset-0 bg-white/5 translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
                        </a>
                    </motion.div>
 
                    {/* Tech Blossoms */}
                    <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1.5, delay: 1.2 }}
                        className="w-full flex flex-col items-center"
                    >
                        <div className="flex items-center justify-center gap-6 mb-6">
                            <div className="h-[1px] w-20 bg-white/10"></div>
                            <p className="text-xs font-bold text-white/60 uppercase tracking-[0.2em]">Root Technologies</p>
                            <div className="h-[1px] w-20 bg-white/10"></div>
                        </div>
                        <div className="flex flex-wrap justify-center gap-6 md:gap-8 lg:gap-12 xl:gap-20 px-2 md:px-4">
                            {techStack.slice(0, 5).map((tech, i) => (
                                <div key={i} className="flex flex-col items-center gap-3 md:gap-4 group cursor-default">
                                    <div className="p-4 md:p-5 rounded-2xl glass border border-white/5 group-hover:border-primary/40 transition-all duration-500 group-hover:scale-110 shadow-lg">
                                        <tech.icon className="w-7 h-7 text-white/55 group-hover:text-primary transition-all duration-500 group-hover:drop-shadow-[0_0_8px_rgba(134,193,149,0.4)]" />
                                    </div>
                                    <span className="text-[10px] md:text-xs font-bold text-white/60 group-hover:text-white/95 transition-colors uppercase tracking-[0.15em]">{tech.name}</span>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
 
            {/* Bottom Glow */}
            <div className="absolute bottom-0 left-0 w-full h-96 bg-gradient-to-t from-bg via-bg/90 to-transparent pointer-events-none z-20"></div>
        </section>
    );
};

export default Hero;