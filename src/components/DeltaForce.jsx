import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiArrowRight } from 'react-icons/fi';
import './DeltaForce.css';

const DeltaForce = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section 
      className="delta-section" 
      id="recharge"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Background with smoke/particles effect via CSS overlay */}
      <div className="delta-bg">
        <div className="smoke-overlay"></div>
        <div className="hud-scanner"></div>
        {isHovered && <div className="bullet-particles-active"></div>}
      </div>

      <div className="container delta-container">
        <div className="delta-content">
          <motion.div 
            className="delta-badge"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="badge-glow"></div>
            <span>PARTNER OFICIAL</span>
            <img src="/assets/delta-logo.png" alt="Delta Force Logo" className="delta-logo-small" onError={(e) => { e.target.style.display='none' }} />
          </motion.div>

          <motion.h2 
             className="delta-title"
             initial={{ opacity: 0, y: 30 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.6, delay: 0.2 }}
          >
            Crea contenido oficial para uno de los FPS más competitivos del momento
          </motion.h2>

          <motion.a 
            href="https://pagostore.garena.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn-delta"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <span className="btn-text">RECARGAR DELTA COINS</span>
            <FiArrowRight className="btn-icon" />
            <div className="gun-flash"></div>
          </motion.a>
        </div>

        {/* 3D Hand/Phone reference visualization placeholder */}
        <motion.div 
          className="delta-image-container"
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
           <div className="delta-image-wrapper">
             <img 
                src="/assets/MANOS3.webp" 
                alt="Delta Force" 
                className="delta-image" 
              />
              <div className="deltaforce-fade-bottom"></div>
           </div>
        </motion.div>
      </div>
    </section>
  );
};

export default DeltaForce;
