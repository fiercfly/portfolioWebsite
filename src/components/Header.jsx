import React, { useState, useEffect } from 'react';
import { navItems } from '../constant/data';
import { motion, AnimatePresence } from 'framer-motion';
import { RiLeafLine } from '@remixicon/react';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [activeLink, setActiveLink] = useState(navItems[0].id);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        const observerOptions = { root: null, rootMargin: '-50% 0px -50% 0px', threshold: 0 };
        const observerCallback = (entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const navItem = navItems.find(item => item.href === `#${entry.target.id}`);
                    if (navItem) setActiveLink(navItem.id);
                }
            });
        };
        const observer = new IntersectionObserver(observerCallback, observerOptions);
        const sections = navItems.map(item => document.querySelector(item.href));
        sections.forEach(section => section && observer.observe(section));
        return () => sections.forEach(section => section && observer.unobserve(section));
    }, []);

    return (
        <header className={`fixed top-0 left-0 w-full z-[100] transition-all duration-500 ${scrolled ? 'py-3 md:py-4' : 'py-5 lg:py-6'}`}>
            <div className="container mx-auto px-4 md:px-6">
                <nav className={`rounded-full border border-white/5 transition-all duration-500 px-6 py-2.5 md:px-8 md:py-3 bg-white/[0.01] backdrop-blur-3xl shadow-2xl relative overflow-hidden ${scrolled ? 'border-white/10 shadow-[0_15px_40px_rgba(0,0,0,0.8)]' : 'border-white/5 shadow-xl'}`}>
                    {/* Canopy light glow border */}
                    <div className="absolute top-0 left-12 right-12 h-[1px] bg-gradient-to-r from-transparent via-primary/30 to-transparent pointer-events-none z-30"></div>
                    <div className="flex items-center justify-between">
                        {/* Logo */}
                        <a href="#home" className="text-2xl font-bold flex items-center gap-2 group font-serif italic">
                            <RiLeafLine className="text-primary group-hover:rotate-45 transition-transform" size={24} />
                            <span>Akshat<span className="text-primary">.</span></span>
                        </a>

                        {/* Desktop Nav */}
                        <ul className="hidden lg:flex items-center gap-4">
                            {navItems.map((item) => (
                                <li key={item.id} className="relative">
                                    <a
                                        href={item.href}
                                        onClick={() => setActiveLink(item.id)}
                                        className={`relative px-5 py-2.5 rounded-full text-[11px] md:text-xs font-bold uppercase tracking-[0.15em] transition-all duration-300 flex items-center group cursor-pointer select-none ${
                                            activeLink === item.id 
                                            ? 'text-primary' 
                                            : 'text-white/60'
                                        }`}
                                    >
                                        {activeLink === item.id && (
                                            <motion.span
                                                layoutId="activeNavTab"
                                                className="absolute inset-0 bg-primary/10 rounded-full border border-primary/20"
                                                transition={{ type: "spring", stiffness: 350, damping: 28 }}
                                            />
                                        )}
                                        {/* Abstract Leaf SVG (fades and floats up on hover) */}
                                        <svg 
                                            viewBox="0 0 24 24" 
                                            className="w-3 h-3 fill-primary opacity-0 group-hover:opacity-100 group-hover:-translate-y-0.5 transition-all duration-300 transform translate-y-1 mr-1.5 shrink-0 pointer-events-none"
                                        >
                                            <path d="M17,8C8,10 5.9,16.17 3.82,21.34L2.18,20.66C4.26,15.49 6.36,9.32 15.36,7.3C13,5 9,5 9,5C9,5 13,3 17,6C19,8 22,10 22,10C22,10 19,6 17,8Z" />
                                        </svg>
                                        <span className="relative z-10 transition-all duration-300 group-hover:text-[#e8f5e9] group-hover:drop-shadow-[0_0_6px_rgba(134,193,149,0.3)]">{item.label}</span>
                                    </a>
                                </li>
                            ))}
                        </ul>

                        {/* CTA */}
                        <div className="flex items-center gap-6">
                            <a href="#contact" className="hidden md:block text-[12px] font-bold uppercase tracking-[0.2em] text-white/75 hover:text-primary transition-colors">
                                LET'S CONNECT
                            </a>
                            <button 
                                className="lg:hidden w-8 h-8 flex flex-col items-center justify-center gap-1.5"
                                onClick={() => setIsOpen(!isOpen)}
                            >
                                <span className={`w-6 h-0.5 bg-white transition-all ${isOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
                                <span className={`w-6 h-0.5 bg-white transition-all ${isOpen ? 'opacity-0' : ''}`}></span>
                                <span className={`w-6 h-0.5 bg-white transition-all ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
                            </button>
                        </div>
                    </div>
                </nav>
            </div>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        className="lg:hidden absolute top-full left-0 w-full px-4 pt-2 z-50"
                    >
                        <div className="glass bg-[#080d09]/95 backdrop-blur-2xl p-8 md:p-10 rounded-[2rem] md:rounded-[3rem] border-white/10 flex flex-col gap-6 text-center shadow-[0_20px_50px_rgba(0,0,0,0.8)] border border-primary/20">
                            {navItems.map((item) => (
                                <a
                                    key={item.id}
                                    href={item.href}
                                    onClick={() => { setActiveLink(item.id); setIsOpen(false); }}
                                    className={`text-2xl font-bold font-serif italic ${activeLink === item.id ? 'text-primary' : 'text-white/40'}`}
                                >
                                    {item.label}
                                </a>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
};

export default Header;