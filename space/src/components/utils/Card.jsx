import React from "react";

export default function Card({ image, title, subtitle, ctaText }) {
  return (
    <div
      className="card h-100 border-0"
      style={{
        position: "relative",
        borderRadius: 16,
        overflow: "hidden",
      }}
    >
      {/* Image wrapper (scales image only) */}
      <div style={{ overflow: "hidden" }}>
        <img
          src={image}
          alt={title}
          className="w-100"
          style={{
            objectFit: "cover",
            height: "100%",
            transition: "transform 0.4s ease",
          }}
        />
      </div>

      {/* Overlay text (not clipped, sits above image) */}
      <div
        className="card-img-overlay d-flex flex-column justify-content-end p-3"
        style={{
          background: "linear-gradient(to top, rgba(0,0,0,0.6), transparent)",
          borderRadius: 16,
          zIndex: 2,
          pointerEvents: "none", // text stays visible
        }}
      >
        <h6
          className="text-light mb-1"
          style={{ pointerEvents: "auto" }}
        >
          {subtitle}
        </h6>
        <h5
          className="text-white fw-bold"
          style={{ pointerEvents: "auto" }}
        >
          {title}
        </h5>
        {ctaText && (
          <button
            className="btn btn-sm btn-light mt-2"
            style={{ pointerEvents: "auto" }}
          >
            {ctaText}
          </button>
        )}
      </div>
    </div>
  );
}
