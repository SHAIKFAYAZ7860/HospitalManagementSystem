import React from "react";
import "./Doctors.css"; // We'll create this CSS file

const Doctors = () => {
  const doctors = [
    { id: 1, name: "Dr. Smith", specialty: "Cardiologist" },
    { id: 2, name: "Dr. Jane", specialty: "Neurologist" },
    { id: 3, name: "Dr. Brown", specialty: "Orthopedic" },
    { id: 4, name: "Dr. Alice", specialty: "Pediatrician" },
    { id: 5, name: "Dr. David", specialty: "Dermatologist" },
    { id: 6, name: "Dr. Michael", specialty: "Oncologist" },
    { id: 7, name: "Dr. Emily", specialty: "Gynecologist" },
    { id: 8, name: "Dr. Robert", specialty: "Psychiatrist" },
    { id: 9, name: "Dr. Laura", specialty: "ENT Specialist" },
    { id: 10, name: "Dr. Kevin", specialty: "Urologist" },
  ];

  return (
    <div className="doctors-container">
      <h2>Our Doctors</h2>
      <div className="doctors-list">
        {doctors.map((doctor) => (
          <div key={doctor.id} className="doctor-card">
            <div className="doctor-avatar">
              {doctor.name.split(" ")[1][0]} {/* Initial of last name */}
            </div>
            <h3>{doctor.name}</h3>
            <p>{doctor.specialty}</p>
            <button className="profile-btn">View Profile</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Doctors;
