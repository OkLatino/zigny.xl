import React from 'react';
import { motion } from 'framer-motion';
import './Clan.css';

const Clan = () => {
  // Se requiere texto repetido para cubrir el espacio.
  // Repetirlo dos veces (de la de 14 original) dentro del span permite una animación marquee de 0 a -50% que loopea perfectamente.
  const marqueeOriginal = Array(14).fill("@ZIGNY.XL ").join('');
  const marqueeInfinite = marqueeOriginal + marqueeOriginal;

  return (
    <section className="clan-section">
      <img src="/images/FONDO6.webp" alt="Background Clan" className="clan-bg" />
      <div className="clan-marquee-top">
        <span className="clan-marquee-text">{marqueeInfinite}</span>
      </div>

      <h3 className="clan-subtitle">UNETE AL CLAN</h3>
      <h2 className="clan-title">ZXL</h2>

      <motion.img
        src="/assets/CELULAR1.webp"
        alt="Zigny Clan Phone"
        className="clan-phone"
        whileHover={{
          y: -16,
          rotate: 2,
          scale: 1.03,
        }}
        transition={{
          duration: 0.4,
          ease: "easeOut"
        }}
      />

      <p className="clan-cta">
        MANDA DM AL INSTAGRAM: 
        <a 
          href="https://www.instagram.com/zigny.xl/"
          target="_blank"
          rel="noopener noreferrer"
          className="clan-ig-link"
        >
          @ZIGNY.XL
        </a>
      </p>

      <div className="clan-marquee-bottom">
        <span className="clan-marquee-text">{marqueeInfinite}</span>
      </div>
    </section>
  );
};

export default Clan;
