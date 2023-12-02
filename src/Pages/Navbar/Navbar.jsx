import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = ({ role }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="custom-navbar">
      <div className="custom-navbar-container">
        <div className="custom-navbar-header">
          <Link to={`/main/${role}`} className="custom-navbar-brand" href="#">
            Resume Lander
          </Link>
          <button
            className="custom-navbar-toggler"
            onClick={toggleMenu}
            id="custom-navbar-toggler"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
        <div
          className={`custom-navbar-menu ${isMenuOpen ? "active" : ""}`}
          id="custom-navbar-menu"
        >
          {role === "seeker" && (
            <ul className="custom-navbar-nav">
              <li>
                <Link to="/build-career">Build Career</Link>
              </li>
              <li>
                <Link to="/careerpage">New Openings</Link>
              </li>
              <li>
                <Link to="/your-applications">Your Applications</Link>
              </li>
            </ul>
          )}
          {role === "recruiter" && (
            <ul className="custom-navbar-nav">
              <li>
                <Link to="/post-job">Post A Job</Link>
              </li>
              <li>
                <Link to="/trackapplications">Track Openings</Link>
              </li>
              <li>
                <Link to="/jobform">Build Career Page</Link>
              </li>
            </ul>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
