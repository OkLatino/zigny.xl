import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero-section" id="hero">
      {/* CAPA 1: Fondo base (z-index: 0) */}
      <div className="layer-base">
        <img src="/images/fondo1black.webp" alt="Background" className="bg-image-base" />
      </div>

      {/* CAPA 2: Logo Decorativo Estático (z-index: 1) */}
      <div className="layer-logo-bg">
        <img src="/images/FONDO6.webp" alt="Zigny Logo Background" className="bg-logo-deco" />
      </div>

      {/* CAPA 4-5: Avatar & Luz Roja agrupados para Hover (z-index: 2.5 - 3) */}
      <div className="container hero-container layer-top">
        <div className="hero-avatar-wrapper">
          <div className="layer-glow pulse-glow-red hero-glow"></div>
          <div className="layer-avatar">
            <img src="/assets/2z.webp" alt="Zigny.xl Robot Avatar" className="character-img hero-avatar" 
                 onError={(e) => { e.target.src="https://placehold.co/600x800/111/444?text=2z.webp" }} />
          </div>
        </div>

        {/* CAPA 6: Overlay Content Estático (z-index: 4) */}
        <div className="layer-content hero-content">
          <div className="hero-text-block">
            <span className="hero-line">—</span>

            <p className="hero-partner">PARTHER DE</p>
            <h1 className="hero-delta">DELTA FORCE</h1>

            <p className="hero-sub1">
              Creador de contenido oficial de <strong>Delta Force</strong>
            </p>
            <p className="hero-sub2">
              <strong>Colaborador</strong> con <strong>CapsLab</strong>, 
              Kings League, Infinix, Cubot y Wyze
            </p>
          </div>

          <div className="analytics-card">
            <span className="a-label">MONTHLY ANALYTICS</span>
            <span className="a-number">+500K</span>
            <span className="a-date">JANUARY - FEBRUARY 2026</span>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;
