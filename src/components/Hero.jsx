import React from 'react';
import { heroIcons } from '../constant/data';
import { BackgroundGradient } from "./ui/BackgroundGradient.jsx";
import Button from './Button';

//motion
import { motion } from "framer-motion";
import { fadeIn, fadeInUp, staggerContainer } from "../motion/animation";

const Hero = () => {
    return (
        <section className='py-28 lg:pt-40' id="home">
            <motion.div variants={staggerContainer} initial='hidden' whileInView="show" viewport={{ once: true }} className='container flex flex-col items-center'>
                <div className='container flex flex-col items-center'>

                    {/* image */}
                    <motion.div variants={fadeIn}>
                        <BackgroundGradient className='w-70 h-70 lg:w-80 lg:h-80 rounded-full bg-zinc-900'>
                            <figure className='rounded-full overflow-hidden'>
                                <img src="/images/akshat.png" alt="Akshat-Jain" width={452} height={452} />
                            </figure>
                        </BackgroundGradient>
                    </motion.div>

                    {/* content */}
                    <div className='text-center mt-8'>
                        <motion.h1 variants={fadeInUp} className='text-3xl lg:text-5xl mb-1.5 font-bold'>Hi, I'm Akshat Jain.</motion.h1>
                        <motion.h2 variants={fadeInUp}>Full-Stack Developer & Problem Solver</motion.h2>

                        <motion.p variants={fadeInUp} className='max-w-[820px] mx-auto mt-4 mb-6'>
                            I build robust and scalable web applications from concept to deployment. With a strong foundation in data structures and algorithms, I enjoy tackling complex challenges and architecting elegant, high-performance solutions for the modern web.
                        </motion.p>

                        <motion.div variants={fadeIn} className='flex items-center justify-center gap-5'>
                            {heroIcons.map((icon) => (
                                <a
                                    href={icon.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className='hover:text-indigo-400 transition-colors'
                                    key={icon.id}
                                >
                                    <icon.icon size={30} />
                                </a>
                            ))}
                        </motion.div>

                        <motion.div variants={fadeInUp} className='mt-10 flex items-center justify-center flex-wrap gap-5'>
                        
                           <a href="/Akshat_Jain_Resume.pdf" download>
                             <Button label='Download Resume' classes="primary-btn" icon />
                           </a>
                           <a href="#contact">
                             <Button label="Let's Collab" classes="secondary-btn" />
                           </a>
                        </motion.div>

                    </div>
                </div>
            </motion.div>
        </section>
    )
}

export default Hero;