import React from "react";

export default function Card({ image, title, subtitle, ctaText, onCtaClick }) {
  return (
    <div
      className="card border-0 shadow-sm h-100"
      style={{
        position: "relative",
        borderRadius: 16,
        overflow: "hidden",
        transition: "transform 0.25s ease, box-shadow 0.25s ease",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* Image wrapper (fills available space) */}
      <div
        style={{
          flex: "1 1 auto",
          overflow: "hidden",
          borderTopLeftRadius: 16,
          borderTopRightRadius: 16,
        }}
      >
        <img
          src={image}
          alt={title}
          className="w-100 h-100"
          style={{
            objectFit: "cover",
            transition: "transform 0.5s ease",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.08)")}
          onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
        />
      </div>

      {/* Content (same height area for all cards) */}
      <div
        className="p-3 d-flex flex-column justify-content-end"
        style={{
          background: "linear-gradient(to top, rgba(0,0,0,0.65), transparent)",
          color: "white",
          minHeight: "140px", // 🔑 ensures all cards line up
        }}
      >
        {subtitle && (
          <h6 className="text-light mb-1" style={{ margin: 0 }}>
            {subtitle}
          </h6>
        )}
        <h5 className="fw-bold" style={{ margin: 0 }}>
          {title}
        </h5>
        {ctaText && (
          <button
            className="btn btn-sm btn-light mt-2 align-self-start"
            style={{
              borderRadius: 20,
              fontWeight: 500,
            }}
            onClick={onCtaClick}
          >
            {ctaText}
          </button>
        )}
      </div>
    </div>
  );
}
