import React from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      <div className="hero">
        <h1>Welcome to Hospital Management System</h1>
        <p>Manage doctors, patients, and appointments easily.</p>
        <div className="hero-buttons">
          <button className="primary-btn" onClick={() => navigate("/dashboard")}>
            Go to Dashboard
          </button>
          <button className="secondary-btn" onClick={() => navigate("/appointments")}>
            Book Appointment
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
