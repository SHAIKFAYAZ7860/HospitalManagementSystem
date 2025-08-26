import React, { useState } from "react";
import "./Register.css"; // We'll create this CSS file

const Register = () => {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    gender: "",
    dob: "",
    mobile: "",
    email: "",
    address: "",
    city: "",
    state: "",
    zip: "",
    referenceName: "",
    referenceContact: "",
    password: "",
    confirmPassword: "",
    signature: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.password !== form.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    alert("Registered Successfully!");
    console.log(form);
  };

  return (
    <div className="register-container">
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-row">
          <input type="text" name="firstName" placeholder="First Name" onChange={handleChange} required />
          <input type="text" name="lastName" placeholder="Last Name" onChange={handleChange} required />
        </div>

        <div className="form-row gender-row">
          <label>Gender:</label>
          <label><input type="radio" name="gender" value="Male" onChange={handleChange} required /> Male</label>
          <label><input type="radio" name="gender" value="Female" onChange={handleChange} required /> Female</label>
          <label><input type="radio" name="gender" value="Other" onChange={handleChange} required /> Other</label>
        </div>

        <div className="form-row">
          <input type="date" name="dob" onChange={handleChange} required />
          <input type="text" name="mobile" placeholder="Mobile Number" onChange={handleChange} required />
        </div>

        <input type="email" name="email" placeholder="Email" onChange={handleChange} required />
        <textarea name="address" placeholder="Address" onChange={handleChange} required></textarea>

        <div className="form-row">
          <input type="text" name="city" placeholder="City" onChange={handleChange} required />
          <input type="text" name="state" placeholder="State" onChange={handleChange} required />
          <input type="text" name="zip" placeholder="ZIP Code" onChange={handleChange} required />
        </div>

        <div className="form-row">
          <input type="text" name="referenceName" placeholder="Reference Person Name" onChange={handleChange} />
          <input type="text" name="referenceContact" placeholder="Reference Contact" onChange={handleChange} />
        </div>

        <div className="form-row">
          <input type="password" name="password" placeholder="Password" onChange={handleChange} required />
          <input type="password" name="confirmPassword" placeholder="Confirm Password" onChange={handleChange} required />
        </div>

        <input type="text" name="signature" placeholder="Signature" onChange={handleChange} />

        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Register;
