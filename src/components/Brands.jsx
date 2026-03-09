import React from 'react';
import { motion } from 'framer-motion';
import './Brands.css';

const Brands = () => {
  return (
    <section className="brands-section" id="collabs">
      <motion.div
        className="brands-img-container"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <img
          src="/images/FONDO5.webp"
          alt="Marcas con las que he trabajado"
          className="brands-img"
        />
      </motion.div>
    </section>
  );
};

export default Brands;
