import React from 'react';
import { FiInstagram, FiYoutube, FiMessageSquare } from 'react-icons/fi';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="footer-marquee">
        <div className="track">
          {[...Array(20)].map((_, i) => (
             <span key={i} className="marquee-text">@ZIGNY.XL </span>
          ))}
        </div>
      </div>
      
      <div className="container footer-container">
        <div className="footer-logo">
          <img src="/assets/logozigny.webp" alt="Zigny.xl Logo" className="footer-logo-img" />
        </div>
        
        <div className="footer-socials">
          <a href="https://youtube.com/c/Zigny" target="_blank" rel="noopener noreferrer" aria-label="YouTube"><FiYoutube /></a>
          <a href="https://tiktok.com/@zigny.xl" target="_blank" rel="noopener noreferrer" aria-label="TikTok">
            <svg viewBox="0 0 448 512" width="1em" height="1em" fill="currentColor" style={{ verticalAlign: 'middle' }}>
              <path d="M448,209.91a210.06,210.06,0,0,1-122.77-39.25V349.38A162.55,162.55,0,1,1,185,188.31V278.2a74.62,74.62,0,1,0,52.23,71.18V0l88,0a121.18,121.18,0,0,0,1.86,22.17h0A122.18,122.18,0,0,0,381,102.39a121.43,121.43,0,0,0,67,20.14Z"/>
            </svg>
          </a>
          <a href="https://instagram.com/zigny.xl" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><FiInstagram /></a>
        </div>
        
        <div className="footer-right-block">
          <div className="footer-copyright">
            &copy; {new Date().getFullYear()} ZIGNY.XL. ALL RIGHTS RESERVED.
          </div>
          <a 
            href="https://baltazardv.github.io/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="footer-dev-credit"
          >
            <span>Desarrollado por</span>
            <img src="/assets/logoBD.webp" alt="BD Logo" className="footer-dev-icon" />
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 60" className="footer-dev-svg">
              <defs>
                <linearGradient id="orangeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" style={{stopColor:'#FF6B35',stopOpacity:1}} />
                  <stop offset="100%" style={{stopColor:'#FF5621',stopOpacity:1}} />
                </linearGradient>
                <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
                  <feGaussianBlur stdDeviation="2.5" result="coloredBlur"/>
                  <feMerge><feMergeNode in="coloredBlur"/><feMergeNode in="SourceGraphic"/></feMerge>
                </filter>
                <filter id="softGlow" x="-50%" y="-50%" width="200%" height="200%">
                  <feGaussianBlur stdDeviation="1.5" result="coloredBlur"/>
                  <feMerge><feMergeNode in="coloredBlur"/><feMergeNode in="SourceGraphic"/></feMerge>
                </filter>
              </defs>
              <rect width="200" height="60" fill="transparent"/>
              <polygon points="8,0 200,0 200,60 0,60 0,8" fill="none" stroke="#FF5621" strokeWidth="1" opacity="0.6"/>
              <polyline points="0,14 0,8 8,0 18,0" fill="none" stroke="#FF5621" strokeWidth="1.5" opacity="0.9"/>
              <polyline points="200,46 200,52 194,60 178,60" fill="none" stroke="#FF5621" strokeWidth="1.5" opacity="0.9"/>
              <line x1="8" y1="4" x2="80" y2="4" stroke="#FF5621" strokeWidth="0.5" opacity="0.4"/>
              <line x1="120" y1="56" x2="192" y2="56" stroke="#FF5621" strokeWidth="0.5" opacity="0.4"/>
              <line x1="130" y1="14" x2="130" y2="46" stroke="#FF5621" strokeWidth="0.5" opacity="0.3"/>
              <text x="18" y="44" fontFamily="'Courier New', monospace" fontSize="38" fontWeight="700" letterSpacing="-1" fill="url(#orangeGrad)" filter="url(#glow)">BD</text>
              <text x="136" y="44" fontFamily="'Courier New', monospace" fontSize="38" fontWeight="700" fill="#FF5621" filter="url(#glow)" opacity="1">
                <animate attributeName="opacity" values="1;0;1" dur="1s" repeatCount="indefinite"/>_
              </text>
              <text x="18" y="55" fontFamily="'Courier New', monospace" fontSize="6" letterSpacing="3.5" fill="#FF5621" opacity="0.55">DATA ANALYST</text>
              <circle cx="188" cy="10" r="2" fill="#FF5621" opacity="0.7" filter="url(#softGlow)"/>
              <circle cx="188" cy="10" r="1" fill="#FF8C5A" opacity="0.9"/>
              <line x1="155" y1="44" x2="190" y2="44" stroke="#FF5621" strokeWidth="0.5" opacity="0.25"/>
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
