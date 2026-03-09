import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiMenu, FiX } from 'react-icons/fi';
import './Navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'discount', label: '15% DE DESCUENTO' },
    { id: 'collabs', label: 'COLABORACIONES' },
    { id: 'recharge', label: 'RECARGA DELTA COINS' },
  ];

  return (
    <header className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`}>
      <div className="container navbar-container">
        
        <div className="navbar-logo">
          <a 
            href="#hero" 
            onClick={(e) => { 
              e.preventDefault(); 
              document.getElementById('hero').scrollIntoView({ behavior: 'smooth' }) 
            }}
            style={{ cursor: 'pointer', display: 'flex', alignItems: 'center' }}
          >
            <img 
              src="/assets/logozigny.webp" 
              alt="ZIGNY.XL Home" 
              className="nav-logo-img"
            />
          </a>
        </div>

        {/* Desktop Nav */}
        <nav className="navbar-links">
          {navLinks.map((link) => (
            <a 
              key={link.id} 
              href={`#${link.id}`}
              className={`nav-link ${activeLink === link.id ? 'active' : ''}`}
              onClick={() => setActiveLink(link.id)}
            >
              {link.label}
              {activeLink === link.id && (
                <motion.div layoutId="nav-indicator" className="nav-indicator" />
              )}
            </a>
          ))}
          <a href="#contact" className="btn-contact">CONTÁCTAME</a>
        </nav>

        {/* Mobile Toggle */}
        <button className="mobile-toggle" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <FiX /> : <FiMenu />}
        </button>

      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <motion.div 
          className="mobile-menu"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
        >
          {navLinks.map((link) => (
            <a 
              key={link.id} 
              href={`#${link.id}`}
              onClick={() => {
                setActiveLink(link.id);
                setMobileMenuOpen(false);
              }}
            >
              {link.label}
            </a>
          ))}
          <a href="#contact" className="btn-contact">CONTÁCTAME</a>
        </motion.div>
      )}
    </header>
  );
};

export default Navbar;
