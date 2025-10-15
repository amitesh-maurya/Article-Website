import React, { useState } from "react";
// import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { Link, useNavigate } from "react-router-dom"; // Import useNavigate

import logo from "./logo.png"; // Replace with the path to your logo
import "./navbar.css"; // Import CSS for styling

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate(); // Initialize useNavigate

  const toggleMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen); // Toggle mobile menu
  };
  // Function to handle Subscribe button click
  const handleSubscribeClick = () => {
    navigate("/email"); // Redirect to the subscription page
  };




  // Search bar 

  

  return (
    <header>
      <nav className="navbar">
        <div className="nav-container">
          {/* Hamburger menu for mobile */}
          <button className="menu-toggle" onClick={toggleMenu}>
            {isMobileMenuOpen ? "✖" : "☰"} {/* Toggle icons */}
          </button>
          {/* Brand Name */}
          <Link to="/" className="navbar-logo">
            <img src={logo} alt="Brand Logo" className="logo" />
            <span className="brand-name">BrandName</span>{" "}
          </Link>{" "}
          {/* subscribe Button in Navbar */}
          <button
            onClick={handleSubscribeClick}
            className="navbar-button Subscribe-button"
          >
            Subscribe
          </button>


          <div className="navbar-top">
            <ul className={`side-nav ${isMobileMenuOpen ? "open" : ""}`}>
              <div className="side-nav-container">
                {/* <li>
                  <NavLink
                    to="/login"
                    className={({ isActive }) =>
                      isActive ? "active-link" : ""
                    }
                  >
                    Login
                  </NavLink>
                </li> */}

                <li>
                  <NavLink
                    to="/"
                    className={({ isActive }) =>
                      isActive ? "active-link" : ""
                    }
                  >
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/Discoveries"
                    className={({ isActive }) =>
                      isActive ? "active-link" : ""
                    }
                  >Discoveries
                    
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/Science_Tech"
                    className={({ isActive }) =>
                      isActive ? "active-link" : ""
                    }
                  >
                    Science & Tech
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/History_Society"
                    className={({ isActive }) =>
                      isActive ? "active-link" : ""
                    }
                  >
                    History & Society
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/Animals_Earth"
                    className={({ isActive }) =>
                      isActive ? "active-link" : ""
                    }
                  >
                    Animals & Earth
                  </NavLink>
                </li>
                {/* <li>
                  <NavLink
                    to="/Philosophy"
                    className={({ isActive }) =>
                      isActive ? "active-link" : ""
                    }
                  >
                    Philosophy
                  </NavLink>
                </li> */}
              </div>
            </ul>
          </div>
        </div>

        {/* Navigation Links (always visible) */}

        <div className="minimal-navbar scroll-container">
          {/* Navigation Links */}
          <ul className="nav-links2">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) => (isActive ? "active-link" : "")}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/Discoveries"
                className={({ isActive }) => (isActive ? "active-link" : "")}
              >
                Discoveries
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/Science_Tech"
                className={({ isActive }) => (isActive ? "active-link" : "")}
              >
                Science & Tech
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/History_Society"
                className={({ isActive }) => (isActive ? "active-link" : "")}
              >
                History & Society
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/Animals_Earth"
                className={({ isActive }) => (isActive ? "active-link" : "")}
              >
                Animals & Earth
              </NavLink>
            </li>
            {/* <li>
              <NavLink
                to="/Philosophy"
                className={({ isActive }) => (isActive ? "active-link" : "")}
              >
                philosophy
              </NavLink>
            </li> */}
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
