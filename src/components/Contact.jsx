import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('idle');

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('submitting');

    // Simulate submission and trigger glitch effect
    setTimeout(() => {
      setStatus('success');
      setTimeout(() => setStatus('idle'), 3000);
      setFormData({ name: '', email: '', message: '' });
    }, 1000);
  };

  return (
    <section className="contact-section" id="contact">
      <img src="/images/fondo1black.webp" className="contact-bg" alt="Fondo" />
      <div className="container contact-container">

        <div className="contact-visual">
          <div className="contact-glow"></div>
          <img
            src="/assets/1z.webp"
            alt="Cyber Contact"
            className="contact-avatar"
            loading="lazy"
            onError={(e) => { e.target.src = "https://placehold.co/400x500/111/444?text=1z.webp" }}
          />
          <div className="contact-fade-bottom"></div>
        </div>

        <motion.div
          className="contact-content"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h2 className="contact-title">
            CONTÁCTAME<br />PARA <span className="text-red">COLABORAR</span>
          </h2>
          <p className="contact-email">zignybussines@gmail.com</p>

          <form className={`contact-form ${status === 'success' ? 'glitch-anim' : ''}`} onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                type="text"
                placeholder="NOMBRE"
                required
                value={formData.name}
                onChange={e => setFormData({ ...formData, name: e.target.value })}
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                placeholder="EMAIL"
                required
                value={formData.email}
                onChange={e => setFormData({ ...formData, email: e.target.value })}
              />
            </div>
            <div className="form-group">
              <textarea
                placeholder="MENSAJE"
                rows="4"
                required
                value={formData.message}
                onChange={e => setFormData({ ...formData, message: e.target.value })}
              ></textarea>
            </div>

            <button type="submit" className="btn-submit" disabled={status === 'submitting'}>
              {status === 'success' ? '¡ENVIADO!' : status === 'submitting' ? 'ENVIANDO...' : 'CONTACTO'}
            </button>
          </form>
        </motion.div>

      </div>
    </section>
  );
};

export default Contact;
