// HeroSection.jsx
import React from 'react';
import { motion } from 'framer-motion';
import HeroTop from './HeroTop';
import HeroMid from './HeroMid';
import HeroBottom from './HeroBottom';
import herosection from '../../assets/herosection.jpg';

export default function HeroSection() {
  return (
    <div>
      {/* HERO BACKGROUND SECTION */}
      <motion.div
        style={{
          height: '100vh',
          backgroundImage: `url(${herosection})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          position: 'relative',
          color: 'white',
          overflow: 'hidden',
        }}
        initial={{ scale: 1.05 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2, ease: 'easeOut' }}
      >
        {/* Gradient Overlay */}
        <motion.div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(180deg, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.3) 100%)',
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2 }}
        ></motion.div>

        {/* Hero Content */}
        <motion.div
          style={{ position: 'relative', zIndex: 2, textAlign: 'center' }}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <HeroTop />
        </motion.div>
      </motion.div>

      {/* MIDDLE SECTION */}
      <motion.section
        style={{
          padding: '6rem 2rem', // consistent spacing
          background: '#fff',   // give a background so it feels connected
        }}
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <HeroMid />
      </motion.section>

      {/* BOTTOM SECTION */}
      <motion.section
        style={{
          padding: '6rem 2rem',
          background: '#f9f9f9', // slight variation so transition is smooth
        }}
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <HeroBottom />
      </motion.section>
    </div>
  );
}
