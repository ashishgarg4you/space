// HeroBottom.jsx
import React from "react";
import { motion } from "framer-motion";
import herosectionb from "../../assets/herosectionb.webp";

export default function HeroBottom() {
  return (
    <motion.section
      style={{
        position: "relative",
        width: "100%",
        minHeight: "70vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        overflow: "hidden",
      }}
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
    >
      {/* Background Image */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `url(${herosectionb})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          zIndex: 0,
          transform: "scale(1.1)",
          filter: "brightness(0.75)",
        }}
      ></div>

      {/* Overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "rgba(0,0,0,0.35)", // darker overlay improves text contrast
          zIndex: 1,
        }}
      ></div>

      {/* Content */}
      <div
        style={{
          position: "relative",
          zIndex: 2,
          maxWidth: "900px",
          margin: "0 auto",
          padding: "2rem",
          textAlign: "center",
          color: "#fff",
        }}
      >
        <h2
          style={{
            fontSize: "clamp(1.8rem, 5vw, 2.8rem)",
            marginBottom: "1rem",
            fontWeight: "700",
            textShadow: "2px 2px 10px rgba(0,0,0,0.6)", // glow for readability
          }}
        >
          Why Choose{" "}
          <motion.span
            style={{
              background: "linear-gradient(90deg,#FFD700,#FF8C00)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              fontWeight: "800",
            }}
            whileHover={{
              scale: 1.1,
              textShadow: "0px 0px 15px rgba(255,215,0,0.8)",
            }}
          >
            Print Monk
          </motion.span>
          ?
        </h2>
        <p
          style={{
            fontSize: "1.15rem",
            lineHeight: "1.8",
            color: "rgba(255,255,255,0.9)",
            background: "rgba(0,0,0,0.35)", // semi-dark box for readability
            padding: "1rem 1.5rem",
            borderRadius: "12px",
            boxShadow: "0px 4px 20px rgba(0,0,0,0.3)",
            display: "inline-block",
          }}
        >
          Print Monk is Central India’s leading brand for customized apparel and
          accessories. Whether you need personalized clothing, caps, bags,
          sportswear, or corporate merchandise, we create products that showcase
          your brand with quality and style.
        </p>
      </div>
    </motion.section>
  );
}
