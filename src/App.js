
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { useEffect } from 'react';
import { animateScroll } from 'react-scroll';
import { HashRouter, Route, Routes } from 'react-router-dom';
// import { HashRouter } from 'react-router-dom';


function App() {
  useEffect(() => {
    // Initialize scroll to top function
    window.scrollToTop = () => animateScroll.scrollToTop();
  }, []);

  
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={
          <>
            <Navbar />
            <Hero />
            <About />
            <Skills />
            <Projects />
            <Contact />
            <Footer />
          </>
        } />
      </Routes>
    </HashRouter>
      
      
    
    
  );
}

export default App;
