// import React, { Suspense } from 'react';
// import Header from "./components/Header";
// import Hero from "./components/Hero";
// import Timeline from './components/Timeline';
// import Projects from './components/Projects';
// const SkillsCanvas = React.lazy(() => import('./components/SkillsCanvas'));
// import Contact from './components/Contact';
// // ButterflyCursor removed (performance)
// import NatureBackground from './components/ui/NatureBackground';
// import { SeasonProvider, SeasonSwitcher } from './components/ui/SeasonEngine';
// import WeatherParticles, { AmbientLife } from './components/ui/WeatherParticles';

// const App = () => {
//   return (
//     <SeasonProvider>
//       <div className="relative selection:bg-primary/30 min-h-screen">
//         <NatureBackground />
//         <AmbientLife />
//         <Header />

//         <main className="flex flex-col gap-12 md:gap-24 lg:gap-36">
//           <Hero />
//           <Timeline />
//           <Projects />
//           <Suspense fallback={null}>
//             <SkillsCanvas />
//           </Suspense>
//           <Contact />
//         </main>

//         {/* Footer Decoration */}
//         <footer className="py-20 border-t border-white/5 text-center mt-20">
//           <p className="text-white/55 text-xs font-bold tracking-[0.2em] uppercase">
//             &copy; 2026 Akshat Jain // Harvesting Innovation
//           </p>
//         </footer>
//       </div>
//     </SeasonProvider>
//   );
// };

// export default App;



import React, { Suspense } from 'react';
import Header from "./components/Header";
import Hero from "./components/Hero";
import Timeline from './components/Timeline';
import Projects from './components/Projects';
const SkillsCanvas = React.lazy(() => import('./components/SkillsCanvas'));
import Contact from './components/Contact';

// Re-added the optimized, non-blocking version
import ButterflyCursor from './components/ui/ButterflyCursor';

import NatureBackground from './components/ui/NatureBackground';
import { SeasonProvider, SeasonSwitcher } from './components/ui/SeasonEngine';
import WeatherParticles, { AmbientLife } from './components/ui/WeatherParticles';

const App = () => {
  return (
    <SeasonProvider>
      <div className="relative selection:bg-primary/30 min-h-screen overflow-hidden">

        {/* Zero-performance-impact mouse trail */}
        <ButterflyCursor />

        <NatureBackground />
        <AmbientLife />

        {/* Optional: If you have a UI toggle for seasons, you can place it here */}
        {/* <SeasonSwitcher /> */}

        <Header />

        <main className="flex flex-col gap-12 md:gap-24 lg:gap-36 relative z-10">
          <Hero />
          <Timeline />
          <Projects />
          <Suspense fallback={null}>
            <SkillsCanvas />
          </Suspense>
          <Contact />
        </main>

        {/* Footer Decoration */}
        <footer className="py-20 border-t border-white/5 text-center mt-20 relative z-10">
          <p className="text-white/55 text-xs font-bold tracking-[0.2em] uppercase">
            &copy; 2026 Akshat Jain // Harvesting Innovation
          </p>
        </footer>
      </div>
    </SeasonProvider>
  );
};

export default App;