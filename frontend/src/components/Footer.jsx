import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaShieldAlt, FaTruck, FaHeadset, FaCreditCard } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <div className="footer-features">
            <div className="feature">
              <FaTruck className="feature-icon" />
              <h4>Free Shipping</h4>
              <p>On orders over $50</p>
            </div>
            <div className="feature">
              <FaShieldAlt className="feature-icon" />
              <h4>Secure Payment</h4>
              <p>100% secure transactions</p>
            </div>
            <div className="feature">
              <FaHeadset className="feature-icon" />
              <h4>24/7 Support</h4>
              <p>Ready to help you</p>
            </div>
            <div className="feature">
              <FaCreditCard className="feature-icon" />
              <h4>Money Back</h4>
              <p>30-day return policy</p>
            </div>
          </div>
        </div>

        <div className="footer-content">
          <div className="footer-section">
            <h3>E-Shop Pro</h3>
            <p>Your one-stop destination for premium products. Quality, reliability, and customer satisfaction guaranteed.</p>
            <div className="social-links">
              <a href="#"><FaFacebook /></a>
              <a href="#"><FaTwitter /></a>
              <a href="#"><FaInstagram /></a>
              <a href="#"><FaLinkedin /></a>
            </div>
          </div>

          <div className="footer-section">
            <h3>Quick Links</h3>
            <ul className="footer-links">
              <li><a href="/products">All Products</a></li>
              <li><a href="/">New Arrivals</a></li>
              <li><a href="/">Best Sellers</a></li>
              <li><a href="/">Sale Items</a></li>
              <li><a href="/">Featured Products</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h3>Customer Service</h3>
            <ul className="footer-links">
              <li><a href="/">Contact Us</a></li>
              <li><a href="/">FAQs</a></li>
              <li><a href="/">Shipping Policy</a></li>
              <li><a href="/">Return Policy</a></li>
              <li><a href="/">Privacy Policy</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h3>Newsletter</h3>
            <p>Subscribe to get updates on new arrivals and special offers.</p>
            <form className="newsletter-form">
              <input type="email" placeholder="Enter your email" />
              <button type="submit">Subscribe</button>
            </form>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} E-Shop Pro. All rights reserved.</p>
          <div className="payment-methods">
            <span>We accept:</span>
            <div className="payment-icons">
              <span>💳</span>
              <span>💵</span>
              <span>🏦</span>
              <span>💰</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;