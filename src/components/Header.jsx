import React, { useState, useEffect, useRef } from 'react';
import { navItems } from '../constant/data';
import {gsap} from 'gsap'
import {ScrollTrigger} from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);
const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [activeLink, setActiveLink] = useState(navItems[0].id);

    const handleLinkClick = (id) => {
        setActiveLink(id);
        setIsOpen(false);
    };

    const headerRef= useRef(null);
    const logoRef= useRef(null);

    useEffect(()=>{
        const el= logoRef.current;

        const ctx= gsap.context(()=>{
            gsap.from(el, {
                scrollTrigger: {
                    trigger: el,
                    start: "top 85%",
                    end: "top 50%",
                    toggleActions: "play none none reset",
                },
                y: -150, 
                opacity: 0, 
                ease: "bounce.out", 
                duration: 1.5,
            });
        });
        return ()=> ctx.revert();
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) {
                if (headerRef.current) {
                    headerRef.current.classList.add("active");
                }
            } else {
                if (headerRef.current) {
                    headerRef.current.classList.remove("active");
                }
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    useEffect(() => {
        const observerOptions = {
            root: null, 
            rootMargin: '-50% 0px -50% 0px',
            threshold: 0,
        };

        const observerCallback = (entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    
                    const navItem = navItems.find(item => item.href === `#${entry.target.id}`);
                    if (navItem) {
                        setActiveLink(navItem.id);
                    }
                }
            });
        };

        const observer = new IntersectionObserver(observerCallback, observerOptions);

        const sections = navItems.map(item => document.querySelector(item.href));
        sections.forEach(section => {
            if (section) {
                observer.observe(section);
            }
        });

        return () => {
            sections.forEach(section => {
                if (section) {
                    observer.unobserve(section);
                }
            });
        };
    }, []); 

    return (
        <header ref={headerRef} className="header">
            <div className='container flex items-center justify-between'>
                {/*logo */}
                <a ref={logoRef} href='#home' onClick={() => handleLinkClick(navItems[0].id)} className='text-3xl font-semibold'>
                    Akshat
                </a>

                {/* Mobile Menu */}
                <nav className={`lg:hidden absolute top-0 left-0 bg-secondary-clr/70 w-full backdrop-blur-2xl max-h-0 overflow-hidden mt-20 flex items-center justify-center z-20 transition-[max-height] duration-300 ${isOpen ? "max-h-[500px] overflow-auto" : ""}`}>
                    <ul className='text-center space-y-6 p-7'>
                        {navItems.map((item) => (
                            <li key={item.id}>
                                <a
                                    href={item.href}
                                    className={`text-lg py-3 relative after:absolute after:bottom-0 after:left-0 after:bg-white after:w-0 after:h-0.5 after:rounded hover:after:w-full after:transition-[width] duration-300 ${activeLink === item.id ? "after:w-full" : ""}`} onClick={() => handleLinkClick(item.id)}
                                >
                                    {item.label}
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>

                {/* lg menu */}
                <ul className='hidden lg:flex gap-8 items-center'>
                    {navItems.map((item) => (
                        <li key={item.id}>
                            <a href={item.href}
                                className={`text-lg py-3 relative after:absolute after:bottom-0 after:left-0 after:bg-white after:w-0 after:h-0.5 after:rounded hover:after:w-full after:transition-[width] duration-300 ${activeLink === item.id ? "after:w-full" : ""}`} onClick={() => handleLinkClick(item.id)}
                            >
                                {item.label}
                            </a>
                        </li>
                    ))}
                </ul>

                {/* menu btn */}
                <button className="lg:hidden relative h-7 w-8 flex items-center justify-center" onClick={() => setIsOpen(!isOpen)}>
                    <span className={`bg-white absolute w-7 h-0.5 rounded-2xl transition-all duration-300 ${isOpen ? "rotate-45 top-1/2" : "top-[6px]"}`}></span>
                    <span className={`bg-white absolute w-7 h-0.5 rounded-2xl transition-all duration-300 ${isOpen ? "-rotate-45 top-1/2" : "top-[14px]"}`}></span>
                </button>

            </div>
        </header>
    )
}

export default Header;