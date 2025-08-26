import React from "react";
import "./Appointments.css"; // We'll create this CSS file

const Appointments = () => {
  // Sample dummy data for demonstration
  const appointments = [
    { id: 1, name: "John Doe", date: "2025-08-28", time: "10:00 AM", status: "Confirmed" },
    { id: 2, name: "Jane Smith", date: "2025-08-29", time: "02:00 PM", status: "Pending" },
    { id: 3, name: "Alice Johnson", date: "2025-08-30", time: "11:30 AM", status: "Cancelled" },
  ];

  return (
    <div className="appointments-container">
      <h2>Appointments</h2>
      {appointments.length === 0 ? (
        <p>No appointments scheduled yet.</p>
      ) : (
        <div className="appointments-list">
          {appointments.map((appointment) => (
            <div key={appointment.id} className={`appointment-card ${appointment.status.toLowerCase()}`}>
              <h3>{appointment.name}</h3>
              <p><strong>Date:</strong> {appointment.date}</p>
              <p><strong>Time:</strong> {appointment.time}</p>
              <p><strong>Status:</strong> {appointment.status}</p>
              <button className="details-btn">View Details</button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Appointments;
