import React from "react";
import "./Patients.css"; // We'll create this CSS file

const Patients = () => {
  // Generate 100 dummy patients
  const patients = Array.from({ length: 100 }, (_, i) => ({
    id: i + 1,
    name: `Patient ${i + 1}`,
    age: 20 + (i % 50),
    contact: `98765${1000 + i}`,
    condition: ["Flu", "Diabetes", "Heart", "Injury"][i % 4],
  }));

  return (
    <div className="patients-container">
      <h2>Patients</h2>
      <div className="patients-list">
        {patients.map((patient) => (
          <div key={patient.id} className="patient-card">
            <h3>{patient.name}</h3>
            <p><strong>Age:</strong> {patient.age}</p>
            <p><strong>Contact:</strong> {patient.contact}</p>
            <p><strong>Condition:</strong> {patient.condition}</p>
            <button className="profile-btn">View Profile</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Patients;
