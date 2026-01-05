import React, { useState } from "react";
import "./Settings.css";

const SettingsPage = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="settings-container">
      {/* Sidebar */}
      <div className="sidebar">
        <div className="logo-section">
          <div className="logo-box">
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M22.7 19l-9.1-9.1c.9-2.3.4-5-1.5-6.9-2-2-5-2.4-7.4-1.3L9 6 6 9 1.6 4.7C.4 7.1.9 10.1 2.9 12.1c1.9 1.9 4.6 2.4 6.9 1.5l9.1 9.1c.4.4 1 .4 1.4 0l2.3-2.3c.5-.4.5-1.1.1-1.4z" />
            </svg>
          </div>
          <h2 className="brand-name">MR.MECHANIC</h2>
          <p className="brand-tag">MANAGE·MAINTAIN·MOVE</p>
        </div>

        <div className="profile-section">
          <div className="profile-pic">
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
            </svg>
          </div>
          <h3>User Name</h3>
        </div>

        <div className="sidebar-buttons">
          <button>Back</button>
          <button>Log out</button>
        </div>
      </div>

      {/* Main Content */}
      <div className="main-content">
        <h1>Settings</h1>

        <div className="form-section">
          <div className="form-row">
            <label>Change user name</label>
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
              placeholder="Enter new username"
            />
          </div>

          <div className="form-row">
            <label>Change Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter new email"
            />
          </div>

          <div className="form-row">
            <label>Change Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter new password"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;