// // // import React from 'react';
// // // import { ResumeItems } from '../constant/data';
// // // import { motion } from 'framer-motion';
// // // import { RiSeedlingLine, RiFlowerLine, RiPlantLine, RiGraduationCapLine, RiAwardLine, RiLeafLine } from '@remixicon/react';

// // // const Timeline = () => {
// // //   return (
// // //     <section className="py-32 relative overflow-hidden" id="timeline">
// // //       <div className="container relative z-10">
// // //         {/* Section Header */}
// // //         <div className="mb-20 w-full flex flex-col items-center text-center">
// // //           <motion.div 
// // //             initial={{ opacity: 0, scale: 0.8 }}
// // //             whileInView={{ opacity: 1, scale: 1 }}
// // //             viewport={{ once: true }}
// // //             className="inline-block p-3 rounded-2xl bg-primary/10 border border-primary/20 mb-6"
// // //           >
// // //             <RiSeedlingLine className="text-primary" size={22} />
// // //           </motion.div>
// // //           <h2 className="section-title">
// // //             THE GROWING <span className="text-gradient font-serif-italic">PATH</span>
// // //           </h2>
// // //           <p className="section-subtitle">Chronicles of a Digital Gardener</p>
// // //         </div>

// // //         <div className="max-w-6xl mx-auto">
// // //           {ResumeItems.map((section, idx) => (
// // //             <div key={idx} className="relative mb-32 last:mb-0">
// // //               {/* Section Title */}
// // //               <div className="mb-12 flex items-center justify-center gap-3">
// // //                 <h3 className="text-2xl font-bold font-serif italic text-white">{section.title}</h3>
// // //                 <span className="w-12 h-px bg-white/20"></span>
// // //               </div>

// // //               {/* Chronological Timeline Flow */}
// // //               <div className="relative w-full mt-12">
// // //                 {/* Desktop Center Line */}
// // //                 <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-[1px] bg-primary/20 -translate-x-1/2"></div>
// // //                 {/* Mobile Left Line */}
// // //                 <div className="md:hidden absolute left-4 top-0 bottom-0 w-[1px] bg-primary/20"></div>

// // //                 <div className="flex flex-col gap-12 md:gap-16">
// // //                   {section.list.map((item, i) => (
// // //                     <div key={i} className={`relative flex flex-col md:flex-row items-center justify-between w-full ${i % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>

// // //                       {/* Node/Dot */}
// // //                       <div className="absolute left-4 md:left-1/2 top-10 md:top-1/2 md:-translate-y-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-[#080d09] border-2 border-primary z-10 shadow-[0_0_15px_rgba(122,158,126,0.6)]"></div>

// // //                       {/* Empty side for layout balancing (Desktop) */}
// // //                       <div className="hidden md:block md:w-[45%]"></div>

// // //                       {/* Card Container */}
// // //                       <div className="w-full pl-12 md:pl-0 md:w-[45%]">
// // //                         <motion.div
// // //                           initial={{ opacity: 0, y: 30 }}
// // //                           whileInView={{ opacity: 1, y: 0 }}
// // //                           viewport={{ once: true, amount: 0.2 }}
// // //                           transition={{ duration: 0.6, ease: "easeOut" }}
// // //                           className="glass py-8 px-6 md:py-10 md:px-8 group relative overflow-hidden rounded-2xl w-full hover:border-primary/40 transition-all duration-500 shadow-xl"
// // //                         >
// // //                           {/* Ambient Leaf */}
// // //                           <div className="absolute top-0 right-0 p-4 opacity-[0.02] group-hover:opacity-10 transition-opacity">
// // //                              <RiLeafLine size={100} className="rotate-45 text-primary" />
// // //                           </div>

// // //                           <div className="relative z-10 flex flex-col items-start md:items-center md:text-center">
// // //                             <div className="flex flex-row md:flex-col items-center gap-3 mb-5">
// // //                                  {item.icon && (
// // //                                    <div className="p-2 bg-primary/10 rounded-lg border border-primary/20">
// // //                                      <item.icon className="text-primary" size={16} />
// // //                                    </div>
// // //                                  )}
// // //                                  <span className="px-4 py-1.5 bg-primary/5 border border-primary/20 rounded-full text-[10px] font-bold text-primary uppercase tracking-[0.2em]">
// // //                                    {item.time}
// // //                                  </span>
// // //                             </div>

// // //                             <h4 className="text-lg lg:text-xl font-bold mb-2 group-hover:text-primary transition-colors duration-500 leading-tight">{item.role}</h4>
// // //                             <p className="text-white/60 font-medium font-serif italic mb-4 text-sm">{item.label}</p>

// // //                             {item.description && (
// // //                               <p className="text-white/85 text-sm leading-relaxed md:max-w-sm text-left md:text-center">{item.description}</p>
// // //                             )}
// // //                           </div>
// // //                         </motion.div>
// // //                       </div>
// // //                     </div>
// // //                   ))}
// // //                 </div>
// // //               </div>
// // //             </div>
// // //           ))}
// // //         </div>
// // //       </div>
// // //     </section>
// // //   );
// // // };

// // // export default Timeline;



// // import React from 'react';
// // import { ResumeItems } from '../constant/data';
// // import { motion } from 'framer-motion';
// // import { RiSeedlingLine, RiLeafLine } from '@remixicon/react';

// // const Timeline = () => {
// //   // Flatten the ResumeItems list to create a single chronological flow
// //   const allTimelineItems = ResumeItems.flatMap(section => section.list);

// //   return (
// //     <section className="relative overflow-hidden" id="timeline">
// //       <div className="container relative z-10">
// //         {/* Section Header */}
// //         <div className="mb-20 w-full flex flex-col items-center text-center">
// //           <motion.div
// //             initial={{ opacity: 0, scale: 0.8 }}
// //             whileInView={{ opacity: 1, scale: 1 }}
// //             viewport={{ once: true }}
// //             className="inline-block p-3 rounded-2xl bg-primary/10 border border-primary/20 mb-6"
// //           >
// //             <RiSeedlingLine className="text-primary" size={22} />
// //           </motion.div>
// //           <h2 className="section-title">
// //             THE GROWING <span className="text-gradient font-serif-italic">PATH</span>
// //           </h2>
// //           <p className="section-subtitle">Chronicles of a Digital Gardener</p>
// //         </div>

// //         <div className="max-w-6xl mx-auto">
// //           <div className="relative mb-32 last:mb-0">
// //             {/* Chronological Timeline Flow - Single Line */}
// //             <div className="relative w-full mt-12">
// //               {/* Desktop Center Line */}
// //               <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-[1px] bg-primary/20 -translate-x-1/2"></div>
// //               {/* Mobile Left Line */}
// //               <div className="md:hidden absolute left-6 top-0 bottom-0 w-[1px] bg-primary/20"></div>

// //               <div className="flex flex-col gap-8 md:gap-16">
// //                 {allTimelineItems.map((item, i) => (
// //                   <div key={i} className={`relative flex flex-col md:flex-row items-center justify-between w-full ${i % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>

// //                     {/* Node/Dot */}
// //                     <div className="absolute left-6 md:left-1/2 top-8 md:top-1/2 md:-translate-y-1/2 -translate-x-1/2 w-3.5 h-3.5 rounded-full bg-[#080d09] border-2 border-primary z-10 shadow-[0_0_15px_rgba(122,158,126,0.6)]"></div>

// //                     {/* Empty side for layout balancing (Desktop) */}
// //                     <div className="hidden md:block md:w-[45%]"></div>

// //                     {/* Card Container */}
// //                     <div className="w-full pl-14 md:pl-0 md:w-[45%]">
// //                       <motion.div
// //                         initial={{ opacity: 0, y: 30 }}
// //                         whileInView={{ opacity: 1, y: 0 }}
// //                         viewport={{ once: true, amount: 0.2 }}
// //                         transition={{ duration: 0.6, ease: "easeOut" }}
// //                         className="glass py-8 px-6 md:py-10 md:px-8 group relative overflow-hidden rounded-2xl w-full hover:border-primary/40 transition-all duration-500 shadow-xl"
// //                       >
// //                         {/* Ambient Leaf */}
// //                         <div className="absolute top-0 right-0 p-4 opacity-[0.02] group-hover:opacity-10 transition-opacity">
// //                           <RiLeafLine size={100} className="rotate-45 text-primary" />
// //                         </div>

// //                         <div className="relative z-10 flex flex-col items-start md:items-center md:text-center">
// //                           <div className="flex flex-row md:flex-col items-center gap-3 mb-5">
// //                             {item.icon && (
// //                               <div className="p-2 bg-primary/10 rounded-lg border border-primary/20">
// //                                 <item.icon className="text-primary" size={16} />
// //                               </div>
// //                             )}
// //                             <span className="px-4 py-1.5 bg-primary/5 border border-primary/20 rounded-full text-[10px] font-bold text-primary uppercase tracking-[0.2em]">
// //                               {item.time}
// //                             </span>
// //                           </div>

// //                           <h4 className="text-lg lg:text-xl font-bold mb-2 group-hover:text-primary transition-colors duration-500 leading-tight">{item.role}</h4>
// //                           <p className="text-white/60 font-medium font-serif italic mb-4 text-sm">{item.label}</p>

// //                           {item.description && (
// //                             <p className="text-white/85 text-sm leading-relaxed md:max-w-sm text-left md:text-center">{item.description}</p>
// //                           )}
// //                         </div>
// //                       </motion.div>
// //                     </div>
// //                   </div>
// //                 ))}
// //               </div>
// //             </div>
// //           </div>
// //         </div>
// //       </div>
// //     </section>
// //   );
// // };

// // export default Timeline;










// import React from 'react';
// import { ResumeItems } from '../constant/data';
// import { motion } from 'framer-motion';
// import { RiSeedlingLine, RiLeafLine } from '@remixicon/react';

// const Timeline = () => {
//   // Flatten the ResumeItems list to create a single chronological flow
//   const allTimelineItems = ResumeItems.flatMap(section => section.list);

//   return (
//     <section className="relative overflow-hidden" id="timeline">
//       <div className="container px-4 md:px-6 relative z-10 mx-auto">
//         {/* Section Header */}
//         <div className="mb-16 md:mb-20 w-full flex flex-col items-center text-center mt-10 md:mt-0">
//           <motion.div
//             initial={{ opacity: 0, scale: 0.8 }}
//             whileInView={{ opacity: 1, scale: 1 }}
//             viewport={{ once: true }}
//             className="inline-block p-2 md:p-3 rounded-2xl bg-primary/10 border border-primary/20 mb-4 md:mb-6"
//           >
//             <RiSeedlingLine className="text-primary w-6 h-6 md:w-auto md:h-auto" />
//           </motion.div>
//           <h2 className="section-title text-3xl md:text-4xl lg:text-5xl">
//             THE GROWING <span className="text-gradient font-serif-italic">PATH</span>
//           </h2>
//           <p className="section-subtitle text-sm md:text-base">Chronicles of a Digital Gardener</p>
//         </div>

//         <div className="max-w-6xl mx-auto">
//           <div className="relative mb-20 md:mb-32 last:mb-0">
//             {/* Chronological Timeline Flow - Single Line */}
//             <div className="relative w-full mt-8 md:mt-12">

//               {/* Desktop Center Line (Hidden on Mobile) */}
//               <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-[1px] bg-primary/20 -translate-x-1/2"></div>

//               {/* Note: The Mobile Left Line has been completely removed for a cleaner mobile UI */}

//               <div className="flex flex-col gap-6 md:gap-16">
//                 {allTimelineItems.map((item, i) => (
//                   <div key={i} className={`relative flex flex-col md:flex-row items-center justify-between w-full ${i % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>

//                     {/* Node/Dot - Hidden on mobile (hidden md:block) */}
//                     <div className="hidden md:block absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 w-3.5 h-3.5 rounded-full bg-[#080d09] border-2 border-primary z-10 shadow-[0_0_15px_rgba(122,158,126,0.6)]"></div>

//                     {/* Empty side for layout balancing (Desktop) */}
//                     <div className="hidden md:block md:w-[45%]"></div>

//                     {/* Card Container - Removed mobile left padding so it fits perfectly */}
//                     <div className="w-full md:w-[45%]">
//                       <motion.div
//                         initial={{ opacity: 0, y: 30 }}
//                         whileInView={{ opacity: 1, y: 0 }}
//                         viewport={{ once: true, amount: 0.1 }}
//                         transition={{ duration: 0.6, ease: "easeOut" }}
//                         className="glass py-6 px-5 md:py-10 md:px-8 group relative overflow-hidden rounded-2xl w-full hover:border-primary/40 transition-all duration-500 shadow-xl"
//                       >
//                         {/* Ambient Leaf */}
//                         <div className="absolute top-0 right-0 p-4 opacity-[0.02] group-hover:opacity-10 transition-opacity">
//                           <RiLeafLine size={100} className="rotate-45 text-primary" />
//                         </div>

//                         <div className="relative z-10 flex flex-col items-start md:items-center md:text-center">
//                           <div className="flex flex-row md:flex-col items-center gap-3 mb-4 md:mb-5">
//                             {item.icon && (
//                               <div className="p-2 bg-primary/10 rounded-lg border border-primary/20">
//                                 <item.icon className="text-primary w-4 h-4 md:w-5 md:h-5" />
//                               </div>
//                             )}
//                             <span className="px-3 md:px-4 py-1 md:py-1.5 bg-primary/5 border border-primary/20 rounded-full text-[9px] md:text-[10px] font-bold text-primary uppercase tracking-[0.2em]">
//                               {item.time}
//                             </span>
//                           </div>

//                           <h4 className="text-base md:text-lg lg:text-xl font-bold mb-1.5 md:mb-2 group-hover:text-primary transition-colors duration-500 leading-tight">{item.role}</h4>
//                           <p className="text-white/60 font-medium font-serif italic mb-3 md:mb-4 text-xs md:text-sm">{item.label}</p>

//                           {item.description && (
//                             <p className="text-white/85 text-xs md:text-sm leading-relaxed md:max-w-sm text-left md:text-center">{item.description}</p>
//                           )}
//                         </div>
//                       </motion.div>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Timeline;








import React from 'react';
import { ResumeItems } from '../constant/data';
import { motion } from 'framer-motion';
import { RiSeedlingLine, RiLeafLine } from '@remixicon/react';

const Timeline = () => {
  // Flatten the ResumeItems list to create a single chronological flow
  const allTimelineItems = ResumeItems.flatMap(section => section.list);

  return (
    <section className="relative overflow-hidden" id="timeline">
      <div className="container px-4 md:px-6 relative z-10 mx-auto">
        {/* Section Header */}
        <div className="mb-16 md:mb-20 w-full flex flex-col items-center text-center mt-10 md:mt-0">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block p-2 md:p-3 rounded-2xl bg-primary/10 border border-primary/20 mb-4 md:mb-6"
          >
            <RiSeedlingLine className="text-primary w-6 h-6 md:w-auto md:h-auto" />
          </motion.div>
          <h2 className="section-title text-3xl md:text-4xl lg:text-5xl">
            THE GROWING <span className="text-gradient font-serif-italic">PATH</span>
          </h2>
          <p className="section-subtitle text-sm md:text-base">Chronicles of a Digital Gardener</p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="relative mb-20 md:mb-32 last:mb-0">
            {/* Chronological Timeline Flow - Single Line */}
            <div className="relative w-full mt-8 md:mt-12">

              {/* Desktop Center Line (Hidden on Mobile) */}
              <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-[1px] bg-primary/20 -translate-x-1/2"></div>

              <div className="flex flex-col gap-6 md:gap-16">
                {allTimelineItems.map((item, i) => (
                  <div key={i} className={`relative flex flex-col md:flex-row items-center justify-between w-full ${i % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>

                    {/* Node/Dot - Hidden on mobile */}
                    <div className="hidden md:block absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 w-3.5 h-3.5 rounded-full bg-[#080d09] border-2 border-primary z-10 shadow-[0_0_15px_rgba(122,158,126,0.6)]"></div>

                    {/* Empty side for layout balancing (Desktop) */}
                    <div className="hidden md:block md:w-[45%]"></div>

                    {/* Card Container */}
                    <div className="w-full md:w-[45%]">
                      {/* <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.1 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        
                        className="glass py-8 px-7 sm:px-8 md:py-10 md:px-10 group relative overflow-hidden rounded-2xl md:rounded-3xl w-full hover:border-primary/40 transition-all duration-500 shadow-xl"
                      > */}

                      {/* PADDING FIX HERE: Increased mobile horizontal padding to px-7/px-8 */}
                      <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.1 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        className="glass py-8 px-7 sm:px-8 md:py-10 md:px-10 group relative overflow-hidden rounded-2xl md:rounded-3xl w-full hover:border-primary/40 transition-all duration-500 shadow-xl"
                      >
                        {/* Ambient Leaf */}
                        <div className="absolute top-0 right-0 p-4 opacity-[0.02] group-hover:opacity-10 transition-opacity">
                          <RiLeafLine size={100} className="rotate-45 text-primary" />
                        </div>

                        <div className="relative z-10 flex flex-col items-start md:items-center md:text-center">
                          <div className="flex flex-row md:flex-col items-center gap-3 mb-5">
                            {item.icon && (
                              <div className="p-2 bg-primary/10 rounded-lg border border-primary/20">
                                <item.icon className="text-primary w-4 h-4 md:w-5 md:h-5" />
                              </div>
                            )}
                            <span className="px-4 py-1.5 bg-primary/5 border border-primary/20 rounded-full text-[9px] md:text-[10px] font-bold text-primary uppercase tracking-[0.2em]">
                              {item.time}
                            </span>
                          </div>

                          <h4 className="text-base md:text-lg lg:text-xl font-bold mb-2 group-hover:text-primary transition-colors duration-500 leading-tight">{item.role}</h4>
                          <p className="text-white/60 font-medium font-serif italic mb-4 text-xs md:text-sm">{item.label}</p>

                          {item.description && (
                            <p className="text-white/85 text-xs md:text-sm leading-relaxed md:max-w-sm text-left md:text-center">{item.description}</p>
                          )}
                        </div>
                      </motion.div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;