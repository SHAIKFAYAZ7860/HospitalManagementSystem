import React from "react";
import "./Dashboard.css"; // We'll create this CSS file

const Dashboard = () => {
  // Sample sections for the dashboard
  const sections = [
    { id: 1, name: "Appointments", description: "View and manage all appointments.", color: "#3498db" },
    { id: 2, name: "Patients", description: "Manage patient records and details.", color: "#2ecc71" },
    { id: 3, name: "Doctors", description: "View doctor schedules and profiles.", color: "#f1c40f" },
    { id: 4, name: "Reports", description: "Generate hospital reports.", color: "#e74c3c" },
  ];

  return (
    <div className="dashboard-container">
      <h2>Hospital Dashboard</h2>
      <p>Welcome! Choose a section from below.</p>

      <div className="dashboard-cards">
        {sections.map((section) => (
          <div
            key={section.id}
            className="dashboard-card"
            style={{ borderTop: `5px solid ${section.color}` }}
          >
            <h3>{section.name}</h3>
            <p>{section.description}</p>
            <button className="view-btn">Go to {section.name}</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
