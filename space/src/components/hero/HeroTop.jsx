// HeroTop.jsx
import React from 'react';
import { motion } from 'framer-motion';

export default function HeroTop() {
  return (
    <div style={{ textAlign: 'center', padding: '2rem' }}>
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        style={{
          fontSize: 'clamp(2rem, 5vw, 3.5rem)',
          fontWeight: '800',
          letterSpacing: '1px',
          marginBottom: '1rem',
        }}
      >
        Welcome to Malak press & printing
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
        style={{
          fontSize: 'clamp(1rem, 2vw, 1.5rem)',
          fontWeight: '400',
          maxWidth: '700px',
          margin: '0 auto',
        }}
      >
        Your one-stop custom printing solution for Apparel, Gifts, and Branding.
      </motion.p>
    </div>
  );
}
