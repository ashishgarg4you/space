import { useEffect, useLayoutEffect, useState } from "react";
import logo from "../assets/logo.jpg";

const NAVBAR_HEIGHT = 80; // keep height constant to avoid layout jumps

export default function NavBar({ onLoginClick }) {
  const [scrolled, setScrolled] = useState(false);

  // Ensure correct state on first paint (no flicker on refresh)
  useLayoutEffect(() => {
    setScrolled(window.scrollY > 50);
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isLight = scrolled; // light variant after scroll, dark at top

  return (
    <>
      <nav
        className={`navbar navbar-expand-lg fixed-top ${
          isLight ? "navbar-light" : "navbar-dark"
        }`}
        style={{
          // glass at top, solid on scroll
          background: isLight ? "rgba(255,255,255,0.98)" : "rgba(18,18,18,0.45)",
          color: isLight ? "#111" : "#fff",
          backdropFilter: "blur(10px)",
          WebkitBackdropFilter: "blur(10px)",
          boxShadow: isLight ? "0 2px 8px rgba(0,0,0,0.08)" : "none",
          minHeight: NAVBAR_HEIGHT,
          transition:
            "background 240ms ease, box-shadow 240ms ease, color 240ms ease",
        }}
      >
        <div className="container">
          {/* Brand */}
          <a className="navbar-brand d-flex align-items-center" href="/">
            <img
              src={logo}
              alt="logo"
              style={{
                height: 48,
                width: "auto",
                objectFit: "contain",
                display: "block",
              }}
            />
          </a>

          {/* Toggler */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarMain"
            aria-controls="navbarMain"
            aria-expanded="false"
            aria-label="Toggle navigation"
            // Add a subtle focus ring to make it feel "mechanical"
            style={{ outline: "none", boxShadow: "none" }}
            onFocus={(e) => (e.currentTarget.style.boxShadow = "0 0 0 0.2rem rgba(13,110,253,.25)")}
            onBlur={(e) => (e.currentTarget.style.boxShadow = "none")}
          >
            <span className="navbar-toggler-icon" />
          </button>

          {/* Links */}
          <div className="collapse navbar-collapse" id="navbarMain">
            <ul className="navbar-nav ms-auto align-items-lg-center">
              {[
                { label: "Home", href: "/" },
                { label: "Products", href: "/products" },
                { label: "Contact", href: "/contact" },
              ].map((link) => (
                <li className="nav-item" key={link.href}>
                  <a
                    className="nav-link"
                    href={link.href}
                    style={{
                      marginInline: 8,
                      fontWeight: 500,
                      position: "relative",
                      transition: "opacity 180ms ease",
                      opacity: 1,
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.8")}
                    onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
                  >
                    {link.label}
                  </a>
                </li>
              ))}

              {/* Login button */}
              <li className="nav-item ms-lg-2 mt-2 mt-lg-0">
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={onLoginClick}
                  style={{
                    borderRadius: 999,
                    padding: "8px 18px",
                    transition: "transform 120ms ease, box-shadow 180ms ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-1px)";
                    e.currentTarget.style.boxShadow =
                      "0 8px 20px rgba(13,110,253,0.25)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow = "none";
                  }}
                >
                  Login
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Spacer to push content below fixed navbar */}
      <div style={{ height: NAVBAR_HEIGHT }} />
    </>
  );
}
