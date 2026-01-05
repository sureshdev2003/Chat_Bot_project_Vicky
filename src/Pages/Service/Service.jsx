import React from "react";
import "./Service.css";

const ServicesPage = () => {
  const services = [
    { id: 1, name: "Petrol", icon: "⛽" },
    { id: 2, name: "Near Mechanic", icon: "🔧" },
    { id: 3, name: "Community", icon: "👥" }
  ];

  return (
    <div className="services-container">
      {/* Sidebar */}
      <div className="sidebar">
        {/* Logo */}
        <div className="logo-section">
          <div className="logo-box">🛠</div>
          <h2>MR. MECHANIC</h2>
          <p>MANAGE · MAINTAIN · MOVE</p>
        </div>

        {/* User */}
        <div className="user-profile">
          <div className="user-avatar">👤</div>
          <h3>User Name</h3>
        </div>

        {/* Buttons */}
        <div className="sidebar-buttons">
          <button>Back</button>
          <button>Log out</button>
        </div>
      </div>

      {/* Main Content */}
      <div className="main-content">
        <h1 className="page-title">Services</h1>

        <div className="services-grid">
          {services.map((service) => (
            <div key={service.id} className="service-card">
              <div className="service-icon">{service.icon}</div>
              <button className="service-btn">{service.name}</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;