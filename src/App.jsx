import React, { Suspense, lazy, useEffect } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import CustomCursor from './components/CustomCursor';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import SocialLayout from './components/SocialLayout';

// Lazy loading below-the-fold components
const DeltaForce = lazy(() => import('./components/DeltaForce'));
const Brands = lazy(() => import('./components/Brands'));
const CapsLab = lazy(() => import('./components/CapsLab'));
const Clan = lazy(() => import('./components/Clan'));
const Contact = lazy(() => import('./components/Contact'));
const Footer = lazy(() => import('./components/Footer'));

function App() {
  useEffect(() => {
    // Esperar a que todos los recursos carguen
    const hideLoader = () => {
      const loader = document.getElementById('loader-screen');
      if (loader) {
        // Esperar mínimo 2.6s para que se vea completa la animación
        setTimeout(() => {
          loader.classList.add('hidden');
          // Remover del DOM después del fade-out
          setTimeout(() => loader.remove(), 700);
        }, 2600);
      }
    };

    if (document.readyState === 'complete') {
      hideLoader();
    } else {
      window.addEventListener('load', hideLoader);
      return () => window.removeEventListener('load', hideLoader);
    }
  }, []);

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <>
      <CustomCursor />
      
      {/* Scroll Progress Bar */}
      <motion.div
        className="scroll-progress-bar"
        style={{
          scaleX,
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          height: '4px',
          background: 'var(--color-red-bright)',
          transformOrigin: '0%',
          zIndex: 10000
        }}
      />
      
      <Navbar />
      
      <main>
        <Hero />
        <Suspense fallback={<div style={{height: '20vh'}} />}>
          <CapsLab />
        </Suspense>
        <SocialLayout />
        <Suspense fallback={<div style={{height: '20vh'}} />}>
          <Brands />
          <DeltaForce />
          <Clan />
          <Contact />
        </Suspense>
      </main>
      
      <Suspense fallback={<div />}>
        <Footer />
      </Suspense>
    </>
  );
}

export default App;
