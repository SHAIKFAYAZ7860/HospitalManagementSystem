import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css"; // We'll create this CSS file

const Navbar = () => {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header>
      <div className="nav-container">
        <div className="logo">HospitalMS</div>
        <nav className={`nav-links ${menuOpen ? "open" : ""}`}>
          <Link className={location.pathname === "/" ? "active" : ""} to="/">Home</Link>
          <Link className={location.pathname === "/register" ? "active" : ""} to="/register">Register</Link>
          <Link className={location.pathname === "/login" ? "active" : ""} to="/login">Login</Link>
          <Link className={location.pathname === "/dashboard" ? "active" : ""} to="/dashboard">Dashboard</Link>
          <Link className={location.pathname === "/doctors" ? "active" : ""} to="/doctors">Doctors</Link>
          <Link className={location.pathname === "/patients" ? "active" : ""} to="/patients">Patients</Link>
          <Link className={location.pathname === "/appointments" ? "active" : ""} to="/appointments">Appointments</Link>
        </nav>
        <div className="hamburger" onClick={toggleMenu}>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
