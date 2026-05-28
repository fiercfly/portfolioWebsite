import React, { useState } from 'react';
import { techStack } from '../constant/data';
import { motion, AnimatePresence } from 'framer-motion';
import { RiCodeSSlashLine } from '@remixicon/react';

// Categorize skills for organized display
const skillCategories = [
  {
    id: 'languages',
    title: 'Languages',
    skills: ['JavaScript', 'TypeScript', 'Python', 'Java', 'C++', 'SQL'],
  },
  {
    id: 'frontend',
    title: 'Frontend',
    skills: ['React.js', 'Next.js', 'Redux', 'HTML5', 'CSS3', 'Bootstrap', 'Tailwind CSS'],
  },
  {
    id: 'backend',
    title: 'Backend',
    skills: ['Node.js', 'Express.js', 'Spring', 'REST APIs', 'JWT / OAuth'],
  },
  {
    id: 'databases',
    title: 'Data & Storage',
    skills: ['PostgreSQL', 'MongoDB', 'MySQL'],
  },
  {
    id: 'devops',
    title: 'DevOps & Cloud',
    skills: ['Docker', 'AWS Lambda', 'GitHub Actions', 'CI/CD'],
  },
  {
    id: 'tools',
    title: 'Specialized Tools',
    skills: ['FFmpeg', 'Remotion'],
  },
];

// Map skill names to their techStack entries
const getSkillData = (skillName) =>
  techStack.find((t) => t.name === skillName);

const SkillsCanvas = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredCategories =
    activeCategory === 'all'
      ? skillCategories
      : skillCategories.filter((c) => c.id === activeCategory);

  return (
    <section className="py-24 md:py-32 relative overflow-hidden" id="skills">
      <div className="container relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12 md:mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block p-3 rounded-xl bg-primary/10 border border-primary/20 mb-6"
          >
            <RiCodeSSlashLine className="text-primary" size={22} />
          </motion.div>
          <h2 className="section-title">
            SKILL <span className="text-gradient font-serif-italic">GARDEN</span>
          </h2>
          <p className="section-subtitle !mb-0 font-serif italic">
            Technologies cultivated over the years
          </p>
        </div>

        {/* Category Filter Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-2 md:gap-3 mb-12 md:mb-16 px-2"
        >
          <button
            onClick={() => setActiveCategory('all')}
            className={`px-4 md:px-5 py-2 md:py-2.5 rounded-full text-[10px] md:text-xs font-bold uppercase tracking-[0.15em] transition-all duration-300 border cursor-pointer ${
              activeCategory === 'all'
                ? 'bg-primary/15 border-primary/40 text-primary shadow-[0_0_20px_rgba(134,193,149,0.15)]'
                : 'bg-white/[0.02] border-white/10 text-white/50 hover:text-white/80 hover:border-white/20'
            }`}
          >
            All Skills
          </button>
          {skillCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 md:px-5 py-2 md:py-2.5 rounded-full text-[10px] md:text-xs font-bold uppercase tracking-[0.15em] transition-all duration-300 border cursor-pointer ${
                activeCategory === cat.id
                  ? 'bg-primary/15 border-primary/40 text-primary shadow-[0_0_20px_rgba(134,193,149,0.15)]'
                  : 'bg-white/[0.02] border-white/10 text-white/50 hover:text-white/80 hover:border-white/20'
              }`}
            >
              {cat.title}
            </button>
          ))}
        </motion.div>

        {/* Skills Grid */}
        <div className="max-w-6xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="flex flex-col gap-10 md:gap-14"
            >
              {filteredCategories.map((category, catIdx) => (
                <motion.div
                  key={category.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.1 }}
                  transition={{
                    duration: 0.6,
                    delay: catIdx * 0.1,
                    ease: 'easeOut',
                  }}
                >
                  {/* Category Header */}
                  {activeCategory === 'all' && (
                    <div className="flex items-center gap-4 mb-6 md:mb-8 px-1">
                      <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
                      <span className="text-[10px] md:text-xs font-bold uppercase tracking-[0.25em] text-primary/60 whitespace-nowrap">
                        {category.title}
                      </span>
                      <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
                    </div>
                  )}

                  {/* Skills Items */}
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3 md:gap-4">
                    {category.skills.map((skillName, i) => {
                      const skill = getSkillData(skillName);
                      if (!skill) return null;

                      return (
                        <motion.div
                          key={skill.name}
                          initial={{ opacity: 0, scale: 0.9 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{
                            duration: 0.4,
                            delay: i * 0.05,
                            ease: 'easeOut',
                          }}
                          whileHover={{ y: -4, scale: 1.03 }}
                          className="group relative"
                        >
                          <div className="glass rounded-xl md:rounded-2xl p-4 md:p-5 flex flex-col items-center gap-3 md:gap-4 border border-white/5 group-hover:border-primary/30 transition-all duration-500 cursor-default h-full relative overflow-hidden">
                            {/* Hover glow effect */}
                            <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                            {/* Icon */}
                            <div className="relative z-10 p-3 md:p-3.5 rounded-xl bg-white/[0.03] border border-white/5 group-hover:border-primary/25 group-hover:bg-primary/10 transition-all duration-500 group-hover:shadow-[0_0_20px_rgba(134,193,149,0.15)]">
                              <skill.icon className="w-5 h-5 md:w-6 md:h-6 text-white/50 group-hover:text-primary transition-all duration-500 group-hover:drop-shadow-[0_0_8px_rgba(134,193,149,0.4)]" />
                            </div>

                            {/* Name */}
                            <span className="relative z-10 text-[10px] md:text-xs font-bold text-white/55 group-hover:text-white/90 transition-colors duration-500 uppercase tracking-[0.1em] md:tracking-[0.15em] text-center leading-tight">
                              {skill.name}
                            </span>
                          </div>
                        </motion.div>
                      );
                    })}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Summary Stats Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 md:mt-20 flex flex-wrap justify-center gap-6 md:gap-12 lg:gap-16"
        >
          {[
            { value: `${techStack.length}+`, label: 'Technologies' },
            { value: '6', label: 'Categories' },
            { value: '3+', label: 'Years Experience' },
          ].map((stat, i) => (
            <div key={i} className="flex flex-col items-center gap-1.5 md:gap-2">
              <span className="text-2xl md:text-3xl lg:text-4xl font-bold text-gradient font-serif">
                {stat.value}
              </span>
              <span className="text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] text-white/40">
                {stat.label}
              </span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Ambient Background Blurs */}
      <div className="absolute top-1/4 left-0 w-[300px] h-[300px] md:w-[500px] md:h-[500px] bg-primary/5 rounded-full blur-[120px] -z-10 pointer-events-none -translate-x-1/2" />
      <div className="absolute bottom-1/4 right-0 w-[300px] h-[300px] md:w-[500px] md:h-[500px] bg-secondary/5 rounded-full blur-[120px] -z-10 pointer-events-none translate-x-1/2" />
    </section>
  );
};

export default SkillsCanvas;
