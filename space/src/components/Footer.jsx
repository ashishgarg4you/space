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
          <Col xs={12} lg={3}>
            <div className="d-flex align-items-center gap-3">
              <img
                src="/logo-printmonk.png" // replace with your logo path
                alt="Malak Press & Print"
                style={{ height: 64, width: "auto" }}
              />
            </div>
            <p
              className="mt-3 mb-0 text-muted"
              style={{ fontSize: 14, lineHeight: 1.6 }}
            >
              Central India’s trusted partner for customized apparel, corporate
              gifts, and promotional products.
            </p>
          </Col>

          {/* Company links */}
          <Col xs={12} sm={6} lg={3}>
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
          <Col xs={12} sm={6} lg={3}>
            <h6 className="text-uppercase mb-3" style={{ letterSpacing: 1 }}>
              Contact Info
            </h6>

            <div className="mb-2">
              <small className="text-muted">Address</small>
              <div style={{ fontSize: 14 }}>
                Chatrapati Shivaji Maharaj Chowk,
                <br />
                Niphad, Nashik, Maharashtra
                <br />
                422303
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
                  href="mailto:info@malakprinting.com"
                  className="text-decoration-none text-dark"
                  style={{ fontSize: 14 }}
                >
                  info@malakprinting.com
                </a>
              </div>
            </div>
          </Col>

          {/* Google Maps */}
          <Col xs={12} lg={3}>
            <h6 className="text-uppercase mb-3" style={{ letterSpacing: 1 }}>
              Find Us
            </h6>
            <div style={{ borderRadius: 8, overflow: "hidden" }}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1163.7277995703332!2d74.10885706963161!3d20.077655298834028!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bddcff73cf6ed37%3A0x6e21f9a78a363792!2sMalak%20Press%20%26%20Print!5e1!3m2!1sen!2sin!4v1756130986281!5m2!1sen!2sin"
                width="100%"
                height="200"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Malak Press & Print Location"
              ></iframe>
            </div>
          </Col>
        </Row>
      </Container>

      {/* Bottom bar */}
      <div className="bg-dark text-light">
        <Container>
          <div className="d-flex flex-column flex-md-row justify-content-between align-items-center py-3">
            <small>© Malak Press & Print, {year}. All Rights Reserved</small>
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
    </footer>
  );
}
