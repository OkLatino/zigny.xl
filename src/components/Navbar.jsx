import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiMenu, FiX } from 'react-icons/fi';
import { FaInstagram, FaTiktok, FaYoutube } from 'react-icons/fa';
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
          <a
            href="https://linktr.ee/zigny"
            target="_blank"
            rel="noopener noreferrer"
            className="nav-link"
          >
            MIS RECOMENDACIONES
          </a>
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
          {/* Header: logo + close */}
          <div className="mobile-menu-header">
            <img src="/assets/logozigny.webp" alt="ZIGNY.XL" className="mobile-menu-logo" />
            <button className="mobile-menu-close" onClick={() => setMobileMenuOpen(false)}>
              <FiX />
            </button>
          </div>

          <div className="mobile-menu-divider" />

          {/* Nav links */}
          <nav className="mobile-menu-nav">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                className="mobile-menu-link"
                onClick={() => { setActiveLink(link.id); setMobileMenuOpen(false); }}
              >
                {link.label}
                <span>&#62;</span>
              </a>
            ))}
            <a
              href="https://linktr.ee/zigny"
              target="_blank"
              rel="noopener noreferrer"
              className="mobile-menu-link"
            >
              MIS RECOMENDACIONES <span>›</span>
            </a>
          </nav>

          <div className="mobile-menu-divider" />

          {/* CTA */}
          <a href="#contact" className="mobile-menu-cta" onClick={() => setMobileMenuOpen(false)}>
            CONTÁCTAME
          </a>

          {/* Logo Z — ocupa el espacio sobrante */}
          <div className="mobile-menu-logo-block">
            <img src="/assets/logoZ.webp" alt="Z" className="mobile-menu-z-logo" />
          </div>

          {/* Redes sociales pegadas al fondo */}
          <div className="mobile-menu-socials-bottom">
            <p className="mobile-menu-socials-label">REDES SOCIALES</p>
            <div className="mobile-menu-socials">
              <a href="https://www.instagram.com/zigny.xl/" target="_blank" rel="noopener noreferrer">
                <FaInstagram />
              </a>
              <a href="https://www.tiktok.com/@zigny.xl" target="_blank" rel="noopener noreferrer">
                <FaTiktok />
              </a>
              <a href="https://youtube.com/c/Zigny" target="_blank" rel="noopener noreferrer">
                <FaYoutube />
              </a>
            </div>
          </div>
        </motion.div>
      )}
    </header>
  );
};

export default Navbar;
