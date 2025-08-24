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
            className="col-12 col-md-6"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.2, duration: 0.5, ease: "easeOut" }}
          >
            <div
              className="shadow-sm"
              style={{
                borderRadius: 16,
                cursor: "pointer",
                position: "relative",
                background: "#fff",
              }}
              onClick={() => onCardClick?.(item)}
            >
              {/* Animate only image wrapper */}
              <motion.div
                whileHover={{ scale: 1.08 }}
                transition={{ duration: 0.4 }}
                style={{ borderRadius: 16 }}
              >
                <Card
                  image={item.image}
                  title={item.title}
                  subtitle={item.subtitle}
                  ctaText={item.ctaText}
                />
              </motion.div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
