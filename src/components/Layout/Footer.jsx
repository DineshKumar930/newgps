import "./Footer.css";
import React from "react";
import { FaEnvelope, FaFacebook, FaInstagram, FaLinkedin, FaMapMarkerAlt, FaPhone, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  const quickLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About Us' },
    { path: '/admissions', label: 'Admissions' },
    { path: '/contact', label: 'Contact' }
  ];

  const socialLinks = [
    { icon: <FaFacebook />, url: 'https://facebook.com', label: 'Facebook' },
    { icon: <FaTwitter />, url: 'https://twitter.com', label: 'Twitter' },
    { icon: <FaLinkedin />, url: 'https://linkedin.com', label: 'LinkedIn' },
    { icon: <FaInstagram />, url: 'https://instagram.com', label: 'Instagram' }
  ];

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          {/* College Info with Logo */}
          <div className="footer-section">
            <div className="footer-brand">
              <div className="footer-logo-wrapper">
                <img
                  src="/images/college-logo.png"
                  alt="Government Polytechnic Sahjanwa Logo"
                  className="footer-logo"
                />
              </div>
              <h3>Government Polytechnic Sahjanwa</h3>
            </div>
            <p className="footer-description">
              Committed to excellence in education, research, and innovation since 1990.
            </p>
            <div className="contact-info">
              <div className="contact-item">
                <FaMapMarkerAlt />
                <span>Hardi, Hasanpur, Magahar, Tahsil-Sahjanwa, Gorakhpur – 273209, Uttar Pradesh</span>
              </div>
              <div className="contact-item">
                <FaPhone />
                <span>+91 8709413223</span>
              </div>
              <div className="contact-item">
                <FaEnvelope />
                <span>govtpolytechnicsahjanwa@gmail.com</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul className="footer-links">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link to={link.path}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Important Links */}
          <div className="footer-section">
            <h4>Important Links</h4>
            <ul className="footer-links">
              <li><Link to="/">Student Corner</Link></li>
              <li><Link to="/events">Campus Life</Link></li>
              <li>
                <a href="/pdf/fff.pdf" target="_blank" rel="noopener noreferrer">
                  Faculty Info
                </a>
              </li>
              <li><Link to="/courses">Course Catalog</Link></li>
              <li>
                <a href="/pdf/fff.pdf" target="_blank" rel="noopener noreferrer">
                  Mandatory Disclosure
                </a>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div className="footer-section">
            <h4>Connect With Us</h4>
            <div className="social-links">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon"
                  aria-label={`Visit our ${social.label} page`}
                >
                  {social.icon}
                </a>
              ))}
            </div>
            <div className="newsletter">
              <p>Subscribe to our newsletter</p>
              <div className="newsletter-form">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="newsletter-input"
                />
                <button type="button" className="btn">Subscribe</button>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="copyright">
          <p>
            &copy; {new Date().getFullYear()} Government Polytechnic Sahjanwa Gorakhpur.
            All rights reserved.
          </p>
          <p className="developer">
            Developed by <span className="dev-name">Dinesh Roy</span>
          </p>
          <div className="legal-links">
            <Link to="/privacy">Privacy Policy</Link>
            <Link to="/terms">Terms of Service</Link>
            <Link to="/sitemap">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;