import React from 'react';
import { techStack } from '../constant/data';
import { motion } from 'framer-motion';
import { RiSeedlingLine } from '@remixicon/react';

const SkillsCanvas = () => {
  const frontendSkills = techStack.filter(t => ['JavaScript', 'TypeScript', 'React.js', 'Next.js', 'Redux', 'HTML5', 'CSS3', 'Bootstrap', 'Tailwind CSS'].includes(t.name));
  const backendSkills = techStack.filter(t => ['Node.js', 'Express.js', 'Spring', 'REST APIs', 'JWT / OAuth'].includes(t.name));
  const dataSkills = techStack.filter(t => ['PostgreSQL', 'MongoDB', 'MySQL', 'SQL'].includes(t.name));
  const devopsSkills = techStack.filter(t => ['Docker', 'AWS Lambda', 'GitHub Actions', 'CI/CD'].includes(t.name));
  const languageSkills = techStack.filter(t => ['Python', 'Java', 'C++'].includes(t.name));
  const specializedSkills = techStack.filter(t => ['FFmpeg', 'Remotion'].includes(t.name));

  const skillGroups = [
    { 
        title: "LEAVES & BUDS", 
        subtitle: "Frontend Ecosystem",
        list: frontendSkills, 
        description: "Cultivating elegant, responsive layouts and highly interactive canvas scenes." 
    },
    { 
        title: "ROOTS & TRUNK", 
        subtitle: "Backend & Cloud",
        list: backendSkills, 
        description: "Engineering robust server architectures, secure databases, and scalable deployments." 
    },
    { 
        title: "FERTILE SOIL", 
        subtitle: "Data & Storage",
        list: dataSkills, 
        description: "Nurturing persistent data layers with relational and document-based databases." 
    },
    { 
        title: "WIND & RAIN", 
        subtitle: "DevOps & Cloud",
        list: devopsSkills, 
        description: "Automating delivery pipelines, containerization, and cloud-native deployments." 
    },
    { 
        title: "ANCIENT OAKS", 
        subtitle: "Core Languages",
        list: languageSkills, 
        description: "Deep roots in systems programming and algorithmic problem-solving." 
    },
    { 
        title: "RARE BLOOMS", 
        subtitle: "Specialized Tools",
        list: specializedSkills, 
        description: "Mastering niche tools for video engineering and media processing." 
    },
  ];

  return (
    <section className="py-24 md:py-32 relative overflow-hidden" id="skills">
      <div className="container px-4 md:px-6 relative z-10 mx-auto">
        
        {/* Section Header */}
        <div className="w-full flex flex-col items-center text-center mb-16 md:mb-24">
          <motion.div 
            animate={{ rotate: 360 }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            className="inline-block mb-6 md:mb-8 opacity-60"
          >
            <RiSeedlingLine className="text-primary w-8 h-8 md:w-10 md:h-10" />
          </motion.div>
          <h2 className="section-title text-3xl md:text-4xl lg:text-5xl">
            TECH <span className="text-gradient font-serif-italic">STREAMS</span>
          </h2>
          <p className="section-subtitle text-sm md:text-base">Roots of Innovation & Technical Proficiency</p>
        </div>

        {/* Skills Grid */}
        <div className="max-w-5xl mx-auto flex flex-col gap-20 md:gap-28">
          {skillGroups.map((group, gIdx) => (
            <div key={gIdx} className="space-y-10 md:space-y-14 flex flex-col items-center">
              
              {/* Group Header */}
              <div className="text-center space-y-3 relative">
                <div className="flex items-center justify-center gap-4 mb-2">
                    <div className="h-[1px] w-8 md:w-12 bg-primary/30"></div>
                    <span className="text-xs md:text-sm font-bold text-primary uppercase tracking-[0.2em]">{group.title}</span>
                    <div className="h-[1px] w-8 md:w-12 bg-primary/30"></div>
                </div>
                <h3 className="text-lg md:text-xl font-serif italic text-white/90">{group.subtitle}</h3>
                <p className="text-white/50 text-sm font-sans font-light max-w-md mx-auto leading-relaxed">{group.description}</p>
              </div>
              
              {/* Icons Container */}
              <div className="flex flex-wrap justify-center gap-10 md:gap-16 lg:gap-20 w-full">
                {group.list.map((tech, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ 
                      duration: 0.6,
                      delay: i * 0.1 + gIdx * 0.2,
                      ease: "easeOut"
                    }}
                    className="group flex flex-col items-center gap-5 cursor-default"
                  >
                    <div className="relative">
                      {/* Ambient Bloom Effect on Hover */}
                      <div className="absolute inset-0 rounded-full bg-primary/20 scale-100 group-hover:scale-[1.8] opacity-0 group-hover:opacity-100 transition-all duration-700 blur-2xl -z-10"></div>
                      
                      {/* Icon Circle */}
                      <div className="w-20 h-20 md:w-24 md:h-24 glass rounded-full flex items-center justify-center border border-white/5 group-hover:border-primary/40 group-hover:bg-white/[0.03] transition-all duration-500 shadow-lg relative z-10 overflow-hidden">
                        <tech.icon className="w-8 h-8 md:w-10 md:h-10 text-white/30 group-hover:text-primary transition-all duration-500 group-hover:scale-110 group-hover:drop-shadow-[0_0_12px_rgba(134,193,149,0.6)]" />
                      </div>
                    </div>
                    
                    {/* Label */}
                    <div className="text-center relative">
                      <span className="text-xs font-bold uppercase tracking-[0.15em] text-white/40 group-hover:text-white transition-colors duration-500 block mb-1.5">{tech.name}</span>
                      {/* Growing Vine Underline */}
                      <div className="h-[2px] w-0 group-hover:w-full bg-gradient-to-r from-transparent via-primary/60 to-transparent mx-auto transition-all duration-700 ease-out"></div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Decorative Forest Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100vw] max-w-[1000px] h-[600px] bg-[radial-gradient(ellipse_at_center,rgba(45,79,49,0.15)_0%,rgba(0,0,0,0)_70%)] blur-[80px] -z-10 pointer-events-none"></div>
    </section>
  );
};

export default SkillsCanvas;
