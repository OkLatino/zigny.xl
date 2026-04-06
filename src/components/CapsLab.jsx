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
              <p className="capslab-label capslab-text-hide" style={{alignSelf: 'center'}}>USA MI CÓDIGO:</p>
              <img src="/assets/PAGINA_WEB_gorras-09.webp" alt="Zigny.xl en Capslab" className="capslab-code-img" />
              <p className="capslab-sublabel capslab-text-hide" style={{fontFamily: "'Rajdhani', sans-serif", fontSize: '0.9rem', letterSpacing: '0.1em', fontWeight: '500', color: '#666', marginTop: '-4px', marginBottom: '24px', alignSelf: 'center'}}>EN CAPSLAB.COM.MX</p>

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
                  className="ticket-icon"
                />
                <div className="ticket-data">
                  <p className="ticket-item" style={{lineHeight: 1.2}}>Gorra CAPSLAB Dragon Ball Z Goku<br/><span style={{fontWeight: '400', color: '#444', fontSize: '0.9em'}}>Ultra Instinto Infantil</span></p>
                  <span className="ticket-code"><span style={{color: '#f59e0b', fontSize: '1.2em', marginRight: '4px'}}>🏷️</span>ZIGNY.XL (-$104.85)</span>
                </div>
                <div className="ticket-prices" style={{textAlign: 'right'}}>
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
