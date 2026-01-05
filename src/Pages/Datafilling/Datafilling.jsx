import React, { useState } from "react";
import "./Datafilling.css";

const DataFormPage = () => {
  const [formData, setFormData] = useState({
    modelName: "",
    registerNumber: "",
    ownerName: "",
    lastServiceDate: "",
  });

  const [showPopup, setShowPopup] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="page-container">
      {/* Header */}
      <div className="header-buttons">
        <button>Home</button>
        <button>About</button>
        <button>Contact</button>
      </div>

      {/* Logo */}
      <div className="logo">
        <div className="logo-icon">🛠</div>
        <h1>MR. MECHANIC</h1>
      </div>

      {/* Form */}
      <div className="form-wrapper">
        <div className="form-card">
          <div className="form-row">
            <label>Model Name</label>
            <input
              type="text"
              name="modelName"
              value={formData.modelName}
              onChange={handleChange}
            />
          </div>

          <div className="form-row">
            <label>Register Number</label>
            <input
              type="text"
              name="registerNumber"
              value={formData.registerNumber}
              onChange={handleChange}
            />
          </div>

          <div className="form-row">
            <label>Owner Name</label>
            <input
              type="text"
              name="ownerName"
              value={formData.ownerName}
              onChange={handleChange}
            />
          </div>

          <div className="form-row">
            <label>Last Service Date</label>
            <input
              type="date"
              name="lastServiceDate"
              value={formData.lastServiceDate}
              onChange={handleChange}
            />
          </div>

          <div className="submit-section">
            <button onClick={() => setShowPopup(true)}>Submit</button>
          </div>
        </div>
      </div>

      {/* Popup */}
      {showPopup && (
        <div className="popup-overlay">
          <div className="popup-box">
            <h2>Hello! I'm Mr. Mechanic 🤖</h2>
            <p>Do you need our AI service?</p>

            <div className="popup-buttons">
              <button onClick={() => setShowPopup(false)}>Yes</button>
              <button onClick={() => setShowPopup(false)}>No</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DataFormPage;