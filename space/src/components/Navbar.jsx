// src/components/NavBar.jsx
import { useEffect, useLayoutEffect, useState } from "react";
import { FaUserCircle } from "react-icons/fa"; // 👈 user icon
import logo from "../assets/logo.jpg";

const NAVBAR_HEIGHT = 80;

export default function NavBar({ onLoginClick, user }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useLayoutEffect(() => {
    setScrolled(window.scrollY > 50);
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isLight = scrolled;

  return (
    <>
      <nav
        className={`navbar navbar-expand-lg fixed-top ${
          isLight ? "navbar-light" : "navbar-dark"
        }`}
        style={{
          background: isLight
            ? "rgba(255,255,255,0.98)"
            : "rgba(18,18,18,0.45)",
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

          {/* Mechanical Toggler */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarMain"
            aria-controls="navbarMain"
            aria-expanded={menuOpen}
            aria-label="Toggle navigation"
            onClick={() => setMenuOpen(!menuOpen)}
            style={{
              outline: "none",
              boxShadow: "none",
              transition: "transform 300ms ease",
              transform: menuOpen ? "rotate(90deg)" : "rotate(0deg)",
            }}
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
                      transition: "color 200ms ease",
                    }}
                  >
                    {link.label}
                    {/* Animated underline */}
                    <span
                      style={{
                        position: "absolute",
                        bottom: 0,
                        left: 0,
                        width: "100%",
                        height: 2,
                        backgroundColor: isLight ? "#111" : "#fff",
                        transform: "scaleX(0)",
                        transformOrigin: "right",
                        transition: "transform 250ms ease",
                      }}
                      className="nav-underline"
                    />
                  </a>
                </li>
              ))}

              {/* If user is logged in → Show user icon, else show login */}
              <li className="nav-item ms-lg-3 mt-2 mt-lg-0">
                {user ? (
                  <div className="d-flex align-items-center">
                    <FaUserCircle
                      size={28}
                      color={isLight ? "#111" : "#fff"}
                      style={{ cursor: "pointer" }}
                      title={user.email}
                    />
                    <span
                      style={{
                        marginLeft: 8,
                        fontWeight: 500,
                        color: isLight ? "#111" : "#fff",
                      }}
                    >
                      {user.displayName || user.email}
                    </span>
                  </div>
                ) : (
                  <button
                    type="button"
                    className="btn btn-primary"
                    onClick={onLoginClick}
                    style={{
                      borderRadius: 999,
                      padding: "8px 18px",
                      transition:
                        "transform 150ms ease, box-shadow 200ms ease",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = "translateY(-2px)";
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
                )}
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Spacer */}
      <div style={{ height: NAVBAR_HEIGHT }} />

      {/* Little inline JS for underline animation */}
      <style>
        {`
          .nav-link:hover .nav-underline {
            transform: scaleX(1);
            transform-origin: left;
          }
        `}
      </style>
    </>
  );
}
