import React from 'react'
import { Link } from 'react-router-dom'
import { Hexagon, Github, Twitter, Linkedin, Mail } from 'lucide-react'
import './Footer.css'

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <Link to="/" className="footer-logo">
              <Hexagon className="logo-icon" />
              <div className="logo-text">
                <span className="logo-title">QSN</span>
                <span className="logo-subtitle">Quantum Security Network</span>
              </div>
            </Link>
            <p className="footer-desc">
              Next-generation quantum encryption and AI-powered security solutions for the modern enterprise.
            </p>
            <div className="footer-social">
              <a href="#" aria-label="GitHub"><Github size={20} /></a>
              <a href="#" aria-label="Twitter"><Twitter size={20} /></a>
              <a href="#" aria-label="LinkedIn"><Linkedin size={20} /></a>
              <a href="#" aria-label="Email"><Mail size={20} /></a>
            </div>
          </div>

          <div className="footer-links">
            <h4>Product</h4>
            <ul>
              <li><Link to="/features">Features</Link></li>
              <li><Link to="/pricing">Pricing</Link></li>
              <li><Link to="/demo">Demo</Link></li>
              <li><a href="#">Documentation</a></li>
            </ul>
          </div>

          <div className="footer-links">
            <h4>Company</h4>
            <ul>
              <li><a href="#">About Us</a></li>
              <li><Link to="/contact">Contact</Link></li>
              <li><a href="#">Careers</a></li>
              <li><a href="#">Blog</a></li>
            </ul>
          </div>

          <div className="footer-links">
            <h4>Legal</h4>
            <ul>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Terms of Service</a></li>
              <li><a href="#">Security</a></li>
              <li><a href="#">Compliance</a></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} QSN Quantum Security Network Protocol. All rights reserved.</p>
          <p className="footer-tagline">Quantum AI Security Net - Powered by Metatron's Cube Encryption</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
