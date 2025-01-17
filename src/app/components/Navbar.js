// import React from 'react'
"use client";
import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { FaMobileScreen, FaFacebookF, FaInstagram } from "react-icons/fa6";

import "../../styles/Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="box1">
        <div className="row">
          <div className="follow">
            <li>Follow Us</li>
            <li>
              <a
                href="https://www.facebook.com/tr?id=1255410015588930&ev=PageView&noscript=1"
                className="follow-icons"
              >
                <span className="">
                  <FaFacebookF color="white" />
                </span>
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/mybharattrips/"
                className="follow-icons"
              >
                <span className="instagram">
                  <FaInstagram color="white" />
                </span>
              </a>
            </li>
          </div>
          <div className="accounts">
            <li>
              <span className="fa mobile">
                <FaMobileScreen color="white" className="mobile-icon" />
                <a href="tel:+91 7836098136" style={{ color: "white" }}>
                  +91 78360 98136
                </a>
              </span>
            </li>
            <li>
              <h3 className="call">
                <p style={{ fontSize: "16px", fontWeight: "500" }}>
                  Feel Free to Call Us
                </p>
              </h3>
            </li>
          </div>
        </div>
      </div>

      <div className="box2">
        <div className="container">
          <div className="logo">
            <a href="#">
              <img src="/assests/himachal-trips-logo.png" alt="logo" />
            </a>
          </div>

          <button className="toggle-button" onClick={toggleMenu}>
            {isOpen ? <FaTimes color="white" /> : <FaBars />}
          </button>
          <div className={`links ${isOpen ? "active" : ""}`}>
            <div className="close-btn">
              <button onClick={toggleMenu} className="">
                <FaTimes color="white" size={24} />
              </button>
            </div>
            <ul className="menu-links">
              <li>
                <a href="#home" onClick={toggleMenu}>
                  Home
                </a>
              </li>
              <li>
                <a href="/#locations" onClick={toggleMenu}>
                  Popular Locations
                </a>
              </li>
              <li>
                <a href="#packages" onClick={toggleMenu}>
                  Packages
                </a>
              </li>
              <li>
                <a href="#footer" onClick={toggleMenu}>
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
