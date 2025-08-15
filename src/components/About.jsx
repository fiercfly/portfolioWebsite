import React from 'react'
import { aboutItems } from '../constant/data'
import { motion } from "framer-motion";
import { fadeIn, fadeInUp, staggerContainer } from "../motion/animation";

const About = () => {
    return (
        <section className='section bg-secondary-clr' id="about">
            <motion.div variants={staggerContainer} initial='hidden' whileInView="show" viewport={{ once: true }} className="container">
                <motion.h2 variants={fadeInUp}>About me</motion.h2>

                <motion.p variants={fadeInUp} className="mt-3 mb-9">
                    As a Computer Science undergraduate, I am deeply passionate about the entire spectrum of software development. My journey began with a strong focus on Data Structures and Algorithms, which built a solid foundation for logical thinking and efficient coding. I now apply these principles to create seamless and performant full-stack applications using the MERN stack. I thrive on turning complex problems into clean, maintainable, and user-friendly digital experiences.
                </motion.p>

                {/* skills */}
                <div>
                    <motion.p variants={fadeInUp} className='text-white font-semibold text-xl mb-3'>Skills:</motion.p>
                    <motion.ul variants={fadeInUp} className="grid grid-cols-2 gap-x-8 gap-y-2">
                        {aboutItems.map(item => (
                            <li key={item.id}>
                                <p>✔️ {item.label}</p>
                            </li>
                        ))}
                    </motion.ul>
                </div>
            </motion.div>
        </section>
    )
}

export default About;