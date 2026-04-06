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
            <img src="/assets/PAGINA_WEB_inicio-10.webp" alt="Partner de Delta Force" className="delta-hero-img" />
          </div>

          <div className="analytics-card" style={{ background: 'transparent', border: 'none', padding: 0, boxShadow: 'none' }}>
            <img src="/assets/PAGINA_WEB_inicio-09.webp" alt="Monthly Analytics" className="analytics-img" />
          </div>
        </div>

      </div>

      {/* Card móvil flotante — fuera del hero-mobile-bottom */}
      <div className="analytics-card-mobile">
        <img src="/assets/PAGINA_WEB_inicio-09.webp" alt="Monthly Analytics" className="analytics-img" />
      </div>

      {/* Franja negra inferior — solo texto */}
      <div className="hero-mobile-bottom">
        <div className="hero-text-block">
          <img src="/assets/PAGINA_WEB_inicio-10.webp" alt="Partner de Delta Force" className="delta-hero-img" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
