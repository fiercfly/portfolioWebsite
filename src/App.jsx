import React from 'react'
import Header from "./components/Header"
import Hero from "./components/Hero"
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';

const App = () => {
  return (<>
    <Header/>
    <main>
      <Hero/>
      <About/>
      <Experience/>
      <Projects/>
      <Contact/>
    </main>
  </>);
};

export default App