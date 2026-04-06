import React from 'react';
import './SocialLayout.css';

const SocialLayout = () => {
  const [activeSlide, setActiveSlide] = React.useState(0);

  const slides = [
    { label: 'TIKTOK', link: 'https://tiktok.com/@zigny.xl', img: '/assets/m3.webp', side: 'right' },
    { label: 'YOUTUBE', link: 'https://youtube.com/c/Zigny', img: '/assets/m2.webp', side: 'left' },
    { label: 'INSTAGRAM', link: 'https://instagram.com/zigny.xl', img: '/assets/m1.webp', side: 'right' },
  ];

  const touchStartX = React.useRef(null);

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    if (touchStartX.current === null) return;
    const delta = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(delta) < 40) return; // ignorar taps cortos
    if (delta > 0) {
      // swipe izquierda → siguiente
      setActiveSlide(prev => (prev + 1) % slides.length);
    } else {
      // swipe derecha → anterior
      setActiveSlide(prev => (prev - 1 + slides.length) % slides.length);
    }
    touchStartX.current = null;
  };

  React.useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide(prev => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

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

      {/* Carrusel Mobile */}
      <div
        className="social-carousel-mobile"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <a href={slides[activeSlide].link} target="_blank" rel="noopener noreferrer" className="social-carousel-card">
          <span className={`social-carousel-label social-carousel-label--${slides[activeSlide].side === 'left' ? 'right' : 'left'}`}>{slides[activeSlide].label} ↗</span>
          <img src={slides[activeSlide].img} alt={slides[activeSlide].label} className={`social-carousel-img social-carousel-img--${slides[activeSlide].side}`} />
        </a>
        <div className="social-carousel-dots">
          {slides.map((_, i) => (
            <button key={i} className={`social-dot ${i === activeSlide ? 'active' : ''}`} onClick={() => setActiveSlide(i)} />
          ))}
        </div>
      </div>
      <div className="social-bottom-bar"></div>
    </section>
  );
};

export default SocialLayout;
