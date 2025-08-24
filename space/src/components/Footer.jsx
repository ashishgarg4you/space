import React from "react";
import { Container, Row, Col } from "react-bootstrap";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-5 bg-light text-dark">
      {/* Top area */}
      <Container className="py-5">
        <Row className="g-4">
          {/* Logo / About */}
          <Col xs={12} lg={4}>
            <div className="d-flex align-items-center gap-3">
              <img
                src="/logo-printmonk.png" // replace with your logo path
                alt="Print Monk India"
                style={{ height: 64, width: "auto" }}
              />
            </div>
            <p className="mt-3 mb-0 text-muted" style={{ fontSize: 14, lineHeight: 1.6 }}>
              Central India’s trusted partner for customized apparel, corporate
              gifts, and promotional products.
            </p>
          </Col>

          {/* Company links */}
          <Col xs={12} sm={6} lg={4}>
            <h6 className="text-uppercase mb-3" style={{ letterSpacing: 1 }}>
              Company
            </h6>
            <ul className="list-unstyled mb-0" style={{ fontSize: 14 }}>
              <li className="mb-2">
                <a href="/blog" className="text-decoration-none text-dark">
                  Blog
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="/brochure.pdf"
                  className="text-decoration-none text-dark"
                >
                  Download Corporate Gifting Brochure
                </a>
              </li>
              <li className="mb-2">
                <a href="/contact" className="text-decoration-none text-dark">
                  Contact Us
                </a>
              </li>
              <li className="mb-2">
                <a href="/about" className="text-decoration-none text-dark">
                  About
                </a>
              </li>
            </ul>
          </Col>

          {/* Contact Info */}
          <Col xs={12} sm={6} lg={4}>
            <h6 className="text-uppercase mb-3" style={{ letterSpacing: 1 }}>
              Contact Info
            </h6>

            <div className="mb-2">
              <small className="text-muted">Address</small>
              <div style={{ fontSize: 14 }}>
                Shop No-04, Plot No-09,
                <br />
                Prabhakar Planic Appt, OPP ICICI ATM,
                <br />
                Uday Nagar, Nagpur
              </div>
            </div>

            <div className="mb-2">
              <small className="text-muted">Phone</small>
              <div>
                <a
                  href="tel:+918888810489"
                  className="text-decoration-none text-dark"
                  style={{ fontSize: 14 }}
                >
                  (+91) 8888810489
                </a>
              </div>
            </div>

            <div className="mb-3">
              <small className="text-muted">Email</small>
              <div>
                <a
                  href="mailto:info@printmonkindia.com"
                  className="text-decoration-none text-dark"
                  style={{ fontSize: 14 }}
                >
                  info@malakprinting.com
                </a>
              </div>
            </div>

            {/* Socials */}
            <div className="d-flex align-items-center gap-2">
              {socialLinks.map(({ href, icon, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="d-inline-flex align-items-center justify-content-center"
                  style={socialBtnStyle}
                >
                  <i className={icon} />
                </a>
              ))}
            </div>
          </Col>
        </Row>
      </Container>

      {/* Bottom bar */}
      <div className="bg-dark text-light">
        <Container>
          <div className="d-flex flex-column flex-md-row justify-content-between align-items-center py-3">
            <small>© malak printing press, {year}. All Rights Reserved</small>
            <div className="d-flex gap-3 mt-2 mt-md-0">
              <a
                href="/privacy"
                className="text-decoration-none text-light"
                style={{ fontSize: 13 }}
              >
                Privacy Policy
              </a>
              <a
                href="/terms"
                className="text-decoration-none text-light"
                style={{ fontSize: 13 }}
              >
                Terms of Service
              </a>
            </div>
          </div>
        </Container>
      </div>

      {/* Back to top button */}
      <button
        type="button"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        aria-label="Back to top"
        className="position-fixed d-none d-md-inline-flex align-items-center justify-content-center"
        style={{
          right: 16,
          bottom: 16,
          width: 44,
          height: 44,
          borderRadius: "50%",
          border: "1px solid rgba(255,255,255,0.35)",
          background: "#1f2328",
          color: "#fff",
          zIndex: 1000,
        }}
      >
        <i className="bi bi-chevron-up" />
      </button>
    </footer>
  );
}

// social links config
const socialLinks = [
  { href: "https://facebook.com/printmonk", icon: "bi bi-facebook", label: "Facebook" },
  { href: "https://x.com/printmonk", icon: "bi bi-twitter-x", label: "X" },
  { href: "https://instagram.com/printmonkindia", icon: "bi bi-instagram", label: "Instagram" },
];

// inline style object for social buttons
const socialBtnStyle = {
  width: 36,
  height: 36,
  borderRadius: "50%",
  background: "#fff",
  color: "#333",
  border: "1px solid rgba(0,0,0,0.1)",
  fontSize: 16,
};
