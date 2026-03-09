import React from 'react';
import { motion } from 'framer-motion';
import { FiArrowRight } from 'react-icons/fi';
import './CapsLab.css';

const CapsLab = () => {
  return (
    <>
      {/* Marquee Superior Blanca */}
      <div className="marquee-container" style={{background: '#FFFFFF', borderTop: 'none', borderBottom: 'none', position: 'relative', zIndex: 3}}>
        <div className="marquee-content marquee-left">
          {[...Array(40)].map((_, i) => (
            <span key={i} className="marquee-text" style={{color: '#000000', fontFamily: "'Bebas Neue', cursive", fontSize: '0.9rem', letterSpacing: '0.15em'}}>
              @ZIGNY.XL
            </span>
          ))}
        </div>
      </div>

      <section className="capslab-section" id="discount">
        {/* CAPA 1 - FONDO BASE */}
        <img src="/images/FONDO2.webp" alt="Background Texture" className="capslab-bg" />

        <div className="container capslab-container">
          
          {/* Lado Izquierdo: Textos */}
          <div className="capslab-content">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              style={{display: 'flex', flexDirection: 'column', width: '100%', alignItems: 'flex-start'}}
            >
              <p className="capslab-label">USA MI CÓDIGO:</p>
              <h2 className="capslab-title-big">ZIGNY.XL</h2>
              <p className="capslab-subtitle">EN CAPSLAB.COM.MX</p>

              <h3 className="capslab-discount">15% DE DESCUENTO</h3>
              
              {/* Ticket Flotante */}
              <a 
                href="https://capslab.com.mx/products/gorra-capslab-dragon-ball-z-super-goku-copia-2"
                target="_blank"
                rel="noopener noreferrer"
                className="capslab-product-card"
              >
                <img 
                  src="/images/gorra.webp" 
                  alt="Gorra CAPSLAB Dragon Ball Z" 
                  style={{width: '56px', height: '56px', objectFit: 'cover', borderRadius: '6px'}}
                />
                <div className="ticket-data">
                  <p className="ticket-item">Gorra CAPSLAB Dragon Ball Z Goku Ultra Instinto Infantil</p>
                  <span className="ticket-code">🏷️ ZIGNY.XL (-$104.85)</span>
                </div>
                <div className="ticket-prices">
                  <span className="price-strike">$699.00</span>
                  <span className="price-active">$594.15</span>
                </div>
              </a>

              <p className="capslab-free-shipping">+ENVÍO GRATIS</p>
              
              <a 
                href="https://capslab.com.mx/discount/ZIGNY.XL"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gorras"
              >
                VER TODAS LAS GORRAS →
              </a>
            </motion.div>
          </div>

          {/* Lado Derecho: Laptop (Capa 2) */}
          <div className="capslab-laptop-wrapper">
            <img 
              src="/assets/4z.webp" 
              alt="Laptop CapsLab" 
              className="capslab-laptop"
            />
          </div>

        </div>
      </section>

      {/* Marquee Inferior Blanca */}
      <div className="marquee-container" style={{background: '#FFFFFF', borderTop: 'none', borderBottom: 'none', position: 'relative', zIndex: 3}}>
        <div className="marquee-content marquee-right">
          {[...Array(40)].map((_, i) => (
            <span key={i} className="marquee-text" style={{color: '#000000', fontFamily: "'Bebas Neue', cursive", fontSize: '0.9rem', letterSpacing: '0.15em'}}>
              @ZIGNY.XL
            </span>
          ))}
        </div>
      </div>
    </>
  );
};

export default CapsLab;
