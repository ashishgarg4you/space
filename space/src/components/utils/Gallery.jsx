import React from "react";
import Card from "./Card";
import { motion } from "framer-motion";

export default function Gallery({ items = [], onCardClick }) {
  return (
    <section className="container py-5" aria-label="Product gallery">
      <div className="row g-4">
        {items.map((item, idx) => (
          <motion.div
            key={item.id}
            className="col-12 col-md-6 d-flex"  // 🔑 makes columns flex containers
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.2, duration: 0.5, ease: "easeOut" }}
          >
            {/* Direct card wrapper */}
            <motion.div
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.3 }}
              className="shadow-sm flex-grow-1" // 🔑 forces equal height inside flex column
              style={{
                borderRadius: 16,
                cursor: "pointer",
                position: "relative",
                background: "#fff",
              }}
              onClick={() => onCardClick?.(item)}
            >
              <Card
                image={item.image}
                title={item.title}
                subtitle={item.subtitle}
                ctaText={item.ctaText}
              />
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
