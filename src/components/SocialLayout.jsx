import React from 'react';
import './SocialLayout.css';

const SocialLayout = () => {

  return (
    <section className="social-section" id="social">

      {/* HEADER */}
      <div className="social-header">
        <p className="social-sub">SÍGUEME EN MIS</p>
        <h2 className="social-title">REDES SOCIALES</h2>
      </div>

      {/* GRID DE 3 BRAZOS */}
      <div className="social-grid">

        {/* YOUTUBE — m2.webp */}
        <a href="https://youtube.com/c/Zigny"
          target="_blank" rel="noopener noreferrer"
          className="social-card" data-network="youtube">
          <div className="social-arm-wrapper">
            <img src="/assets/m2.webp" alt="YouTube" className="social-arm" />
          </div>
          <span className="social-label">YOUTUBE ↗</span>
        </a>

        {/* TIKTOK — m3.webp (centro, más grande) */}
        <a href="https://tiktok.com/@zigny.xl"
          target="_blank" rel="noopener noreferrer"
          className="social-card social-card--center" data-network="tiktok">
          <div className="social-arm-wrapper">
            <img src="/assets/m3.webp" alt="TikTok" className="social-arm" />
          </div>
          <span className="social-label">TIKTOK ↗</span>
        </a>

        {/* INSTAGRAM — m1.webp */}
        <a href="https://instagram.com/zigny.xl"
          target="_blank" rel="noopener noreferrer"
          className="social-card" data-network="instagram">
          <div className="social-arm-wrapper">
            <img src="/assets/m1.webp" alt="Instagram" className="social-arm" />
          </div>
          <span className="social-label">INSTAGRAM ↗</span>
        </a>

      </div>
      <div className="social-bottom-bar"></div>
    </section>
  );
};

export default SocialLayout;
