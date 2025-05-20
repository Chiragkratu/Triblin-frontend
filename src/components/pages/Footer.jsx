import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../../styles/Footer.css';
import { Linkedin, Instagram, Mail } from 'lucide-react';

const Footer = () => {
  const [email, setEmail] = useState('');

  const handleSubscribe = (e) => {
    e.preventDefault();
    // Handle subscription logic here
    console.log(`Subscribing email: ${email}`);
    setEmail('');
    alert('Thanks for subscribing!');
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-logo">
          <Link to="/">
            <img src="/api/placeholder/120/40" alt="Triblin Logo" />
          </Link>
          <p>Simple carbon accounting for events. Calculate and offset your emissions in minutes.</p>
        </div>

        <div className="footer-links">
          <div className="footer-link-section">
            <h3>Navigation</h3>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/how-it-works">How It Works</Link></li>
              <li><Link to="/calculator">Calculator</Link></li>
              <li><Link to="/offset-projects">Offset Projects</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/contact">Contact</Link></li>
              <li><Link to="/blog">Blog</Link></li>
            </ul>
          </div>

          <div className="footer-link-section">
            <h3>Legal</h3>
            <ul>
              <li><Link to="/privacy">Privacy Policy</Link></li>
              <li><Link to="/terms">Terms of Service</Link></li>
              <li><Link to="/cookies">Cookie Policy</Link></li>
            </ul>
          </div>

          <div className="footer-subscribe">
            <h3>Stay Informed</h3>
            <p>Stay informed about new features and offset projects.</p>
            <form onSubmit={handleSubscribe}>
              <div className="subscribe-form">
                <input
                  type="email"
                  placeholder="Your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <button type="submit" className="btn btn-primary">
                  Subscribe
                </button>
              </div>
            </form>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-social">
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <Linkedin size={20} />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <Instagram size={20} />
            </a>
            <a href="mailto:info@triblin.com">
              <Mail size={20} />
            </a>
          </div>
          <p>&copy; {new Date().getFullYear()} Triblin. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;