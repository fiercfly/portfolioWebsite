import React from 'react'
import { ResumeItems } from '../constant/data'
import { motion } from "framer-motion";
import { fadeIn, fadeInUp, staggerContainer } from "../motion/animation";

const Experience = () => {
    const topRowItems = ResumeItems.slice(0, 2); // Experience and Education
    const bottomRowItem = ResumeItems[2];        // Achievements

    return (
        <section className='section' id="resume">
            <motion.div variants={staggerContainer} initial='hidden' whileInView="show" viewport={{ once: true }} className="container">
                <motion.h2 variants={fadeInUp} >Resume</motion.h2>
                
                {/* Top Row: Experience and Education */}
                <div className='grid gap-10 lg:grid-cols-2 lg:gap-20'>
                    {topRowItems.map((item) => (
                        <motion.div variants={fadeInUp} key={item.id}>
                            <h3 className='text-2xl font-semibold mt-8 pb-3'>{item.title}</h3>
                            <div className='mt-10 space-y-8'>
                                {item.list.map((listItem, index) => (
                                    <div key={index} className='flex items-center justify-between flex-wrap gap-6'>
                                        <div>
                                            <h4 className='font-medium'>{listItem.role}</h4>
                                            <p className='text-neutral-400'>{listItem.label}</p>
                                        </div>
                                        {listItem.time && (
                                            <p className='border border-neutral-700 p-2.5 text-white'>{listItem.time}</p>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Bottom Row: Achievements */}
                {bottomRowItem && (
                    <motion.div variants={fadeInUp} className="mt-16">
                         <h3 className='text-2xl font-semibold mt-8 pb-3'>{bottomRowItem.title}</h3>
                         <div className='mt-10 grid gap-8 md:grid-cols-2'>
                            {bottomRowItem.list.map((listItem, index) => (
                                <div key={index}>
                                    <h4 className='font-medium'>{listItem.role}</h4>
                                    <p className='text-neutral-400'>{listItem.label}</p>
                                </div>
                            ))}
                         </div>
                    </motion.div>
                )}
            </motion.div>
        </section>
    )
}

export default Experience;