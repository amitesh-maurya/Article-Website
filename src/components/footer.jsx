/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable jsx-a11y/anchor-is-valid */
import { NavLink } from "react-router-dom";

import React, { useState } from "react";
import "./footer.css"; // Make sure to include the correct CSS file

function Footer() {
  // State to manage subscription confirmation
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscription = (e) => {
    e.preventDefault();
    setIsSubscribed(true); // Show confirmation message on successful subscription
  };

  return (
    <>
      {/* Subscription Section */}
      <div id="subscribebtn" className="subscription-container">
        <h2 className="subscription-title">Subscribe to our Newsletter</h2>
        <p className="subscription-text">
        Stay updated with the latest insights in science and technology, only on ScientistsHub.
        </p>
        <form
          className="subscription-form"
          id="subscriptionForm"
          onSubmit={handleSubscription}
        >
          <input
            type="email"
            name="email"
            className="subscription-input"
            placeholder="Enter your email address"
            required
          />
          <button type="submit" className="subscription-button">
            Subscribe
          </button>
        </form>
               {/* Adding the Privacy Policy Link */}
               <div className="contact-policy1">
          <p>
            By submitting the form, you agree to our{" "}
            <NavLink to="/privacy-policy">Privacy Policy</NavLink>.
          </p>
          
          <p className="contact-note1">
            Note: Your email is only used to reply to your inquiry and will not be shared.
          </p>
        </div>
        {isSubscribed && (
          <p
            id="subscription-confirmation"
            style={{
              display: "block",
              color: "#28a745",
              marginTop: "10px",
            }}
          >
            Thank you for subscribing!
          </p>
        )}
      </div>

      {/* Footer Section */}
      <footer className="site-footer">
        <div className="footer-header">
          <h2>Stay Connected with ScientistsHub</h2>
          <p>Bringing you the latest in science and technology.</p>
        </div>
        <div className="footer-content">
          <div className="footer-section about">
            <h4>ScientistsHub</h4>
            <p>
              Scientists Hub is your trusted source for science and tech news,
              articles, and insights. We bring you the information that matters
              most.
            </p>
          </div>
          <div className="footer-section categories">
            <h4>Categories</h4>
            <ul>
              <li>
                <NavLink to="/Discoveries">Discoveries</NavLink>
              </li>
              <li>
                <NavLink to="/Science_Tech">Science & Tech</NavLink>
              </li>
              <li>
                <NavLink to="/History_Society">History & Society</NavLink>
              </li>
              <li>
                <NavLink to="/Animals_Earth">Animals & Earth</NavLink>
              </li>
              <li>
                <NavLink to="/Philosophy">Philosophy</NavLink>
              </li>
            </ul>
          </div>
          <div className="footer-section links">
            <h4>Links</h4>
            <ul>
              <li>
                <NavLink to="/About">About</NavLink>
              </li>
              
              <li>
              <li>
                <NavLink to="/ContactUs">Contact</NavLink>
              </li>
              

              </li>
              <NavLink to="/privacy-policy">Privacy Policy</NavLink>
              <li>
                <NavLink to="TermsAndConditions">Terms and Conditions</NavLink>
              </li>
            </ul>
          </div>
          <div className="footer-section contact">
            <h4>Contact Us</h4>
            <p>
              Email:{" "}
              <NavLink to="mailto:support@scientistshub.com">
                support@scientistshub.com
              </NavLink>
            </p>
          </div>
          <div className="footer-section social-media">
            <h4>Follow Us</h4>
            <NavLink to="#" target="_blank" rel="noreferrer">
              Github | 
            </NavLink>
            <NavLink to="https://twitter.com" target="_blank" rel="noreferrer">
               Twitter | 
            </NavLink>
            <NavLink to="https://linkedin.com" target="_blank" rel="noreferrer">
                LinkedIn
            </NavLink>
          </div>
        </div>
        <div className="footer-bottom">
          <p>
            Copyright &copy; 2024 ScientistsHub. All Rights Reserved. | 
            <NavLink to="/About"> Privacy Policy</NavLink> |{" "}
            <NavLink to="/TermsAndConditions">Terms and Conditions</NavLink> | Developed By{" "}
            {/* <a href="https://www.amiteshmaurya.com/">Amitesh Maurya</a> */}
          </p>
        </div>
      </footer>
    </>
  );
}

export default Footer;
