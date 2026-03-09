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
          <img src="/assets/logo-zigny.png" alt="Zigny.xl" className="footer-logo-img" onError={(e) => { e.target.style.display='none'; e.target.nextSibling.style.display='block'; }} />
          <span className="logo-text" style={{display: 'none'}}>ZIGNY.XL</span>
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
        
        <div className="footer-copyright">
          &copy; {new Date().getFullYear()} ZIGNY.XL. ALL RIGHTS RESERVED.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
