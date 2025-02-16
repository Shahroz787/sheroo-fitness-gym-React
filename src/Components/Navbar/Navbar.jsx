import React, { useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [navbar, setNavbar] = useState(false);
  const [click, setClick] = useState(false);

  const changeBg = () => {
    if (window.scrollY >= 100) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  window.addEventListener("scroll", changeBg);

  return (
    <>
      <nav
        className={
          navbar
            ? "navbar scroll navbar-expand-sm fixed-top"
            : "navbar navbar-expand-sm fixed-top"
        }
      >
        <a href="/" className="navbar-brand">
          <span>S</span>heroo Gym
        </a>

        <div>
          <ul
            className={click ? "mobile-nav" : "navbar-nav"}
            onClick={() => setClick(false)}
          >
            <li className="nav-item">
              <a href="*" className="nav-link">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a href="#aboutscroll" className="nav-link">
                About
              </a>
            </li>
            <li className="nav-item">
              <a href="#servicescroll" className="nav-link">
                Services
              </a>
            </li>

            <li className="nav-item">
              <a href="#pricingscroll" className="nav-link">
                Pricing
              </a>
            </li>
            <li className="nav-item">
              <a href="#contactscoll" className="nav-link">
                Contact
              </a>
            </li>
          </ul>
        </div>

        <button className="toggle" onClick={() => setClick(!click)}>
          {click ? (
            <i className="fa fa-times"></i>
          ) : (
            <i className="fa fa-bars"></i>
          )}
        </button>
      </nav>
    </>
  );
};

export default Navbar;
