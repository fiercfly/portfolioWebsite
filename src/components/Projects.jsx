import React from 'react';
import { ProjectsItems } from '../constant/data';
import { motion } from "framer-motion";
import { RiGithubFill, RiExternalLinkLine } from "@remixicon/react";

const Projects = () => {
  return (
    <section className="py-32 relative" id="projects">
      <div className="container relative z-10">
        <div className="flex flex-col items-center text-center mb-16 gap-4">
          <div className="max-w-3xl">
            <h2 className="section-title">
              HARVESTED <span className="text-gradient font-serif-italic">WORKS</span>
            </h2>
            <p className="section-subtitle">Fruits of Digital Labor & Innovation</p>
          </div>
        </div>

        {/* Standardized Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 lg:gap-12 max-w-6xl mx-auto w-full px-2 sm:px-4 md:px-0 mt-12">
          {ProjectsItems.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.8, delay: (i % 2) * 0.15, ease: "easeOut" }}
              whileHover={{ y: -6 }}
              className="group relative w-full flex flex-col h-full"
            >
              <div className="glass rounded-2xl overflow-hidden border border-white/5 group-hover:border-primary/40 transition-all duration-700 flex flex-col h-full relative z-10 shadow-xl flex-grow">
                {/* Visual Area */}
                <div className="relative aspect-video w-full overflow-hidden bg-[#080d09] transition-all duration-700 shrink-0">
                  <img 
                    src={project.src} 
                    alt={project.title} 
                    loading="lazy"
                    className="w-full h-full object-cover opacity-80 saturate-[0.8] mix-blend-normal group-hover:opacity-100 group-hover:saturate-100 group-hover:scale-105 transition-all duration-1000"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/10 to-black/65 z-10 opacity-70 group-hover:opacity-30 transition-all duration-700"></div>
                  
                  {/* Badge */}
                  <div className="absolute top-4 left-4 z-20">
                    <span className="px-3.5 py-1.5 bg-bg/70 backdrop-blur-xl text-primary text-[10px] font-bold uppercase rounded-full tracking-[0.15em] border border-primary/25 shadow-lg">
                      {project.tag}
                    </span>
                  </div>
                </div>

                {/* Content Area */}
                <div className="p-6 md:p-8 lg:p-10 flex flex-col relative bg-gradient-to-b from-transparent to-black/20 items-center text-center flex-grow justify-between gap-6">
                  <div className="space-y-4 flex flex-col items-center">
                    <div className="flex items-center justify-center gap-3">
                       <div className="w-6 h-[1px] bg-primary/30"></div>
                       <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-primary/50">PROJECT {i + 1}</span>
                       <div className="w-6 h-[1px] bg-primary/30"></div>
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold tracking-tight mb-2 transition-colors duration-500 text-center">
                      {project.title}
                    </h3>
                    <p className="text-white/80 text-xs md:text-sm leading-relaxed font-sans font-light text-center max-w-sm mx-auto">
                      {project.text}
                    </p>
                  </div>
                  
                  <div className="mt-6 w-full flex flex-col items-center">
                    <div className="flex flex-wrap justify-center gap-2 mb-6">
                      {project.tech.map((t, idx) => (
                        <span key={idx} className="text-[10px] md:text-xs font-bold text-white/75 border border-white/10 px-3.5 py-1.5 rounded-lg uppercase tracking-widest bg-white/[0.05] group-hover:bg-primary/10 group-hover:border-primary/30 transition-all">
                          {t}
                        </span>
                      ))}
                    </div>
                    
                    <div className="flex items-center justify-center pt-3 border-t border-white/5 w-full">
                      <div className="flex gap-6">
                        <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-primary transition-all duration-300 hover:scale-115 flex items-center gap-2 group/link">
                          <RiGithubFill size={18} />
                          <span className="text-[10px] font-bold uppercase tracking-widest opacity-0 lg:group-hover/link:opacity-100 transition-opacity">Source</span>
                        </a>
                        <a href={project.deployLink} target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-secondary transition-all duration-300 hover:scale-115 flex items-center gap-2 group/link">
                          <RiExternalLinkLine size={18} />
                          <span className="text-[10px] font-bold uppercase tracking-widest opacity-0 lg:group-hover/link:opacity-100 transition-opacity">Launch</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Organic Decoration */}
              <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-primary/5 rounded-full blur-[60px] group-hover:bg-primary/10 transition-all duration-1000 z-0 pointer-events-none"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;