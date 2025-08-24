import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import logo from "../assets/logo.jpg";

export default function NavBar({ onLoginClick }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50); // transparent only at very top
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`navbar navbar-expand-lg fixed-top ${
        scrolled
          ? "shadow-sm bg-white navbar-light"
          : "bg-transparent navbar-dark"
      }`}
      style={{
        minHeight: "80px",
        paddingTop: "12px",
        paddingBottom: "12px",
      }}
    >
      <div className="container">
        <a className="navbar-brand fw-bold d-flex align-items-center" href="/">
          <img
            src={logo}
            alt="logo"
            className="img-fluid"
            style={{ height: "50px", width: "auto", objectFit: "contain" }}
          />
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link" href="/">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/products">Products</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/contact">Contact</a>
            </li>
            <li className="nav-item">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="btn btn-primary ms-2"
                onClick={onLoginClick}
              >
                Login
              </motion.button>
            </li>
          </ul>
        </div>
      </div>
    </motion.nav>
  );
}
