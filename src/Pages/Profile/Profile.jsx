import React, { useState } from "react";
import "./Profile.css";

const ProfilePage = () => {
  const [isVehiclesOpen, setIsVehiclesOpen] = useState(false);
  const vehicles = ["Hero", "Honda", "TVS"];

  return (
    <div className="profile-container">
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
        {/* Vehicles Dropdown */}
        <div className="vehicle-section">
          <button
            className="vehicle-btn"
            onClick={() => setIsVehiclesOpen(!isVehiclesOpen)}
          >
            Vehicles
            <span className={isVehiclesOpen ? "rotate" : ""}>⌄</span>
          </button>

          {isVehiclesOpen && (
            <div className="vehicle-dropdown">
              {vehicles.map((v, i) => (
                <div key={i} className="vehicle-item">
                  {v}
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Cards */}
        <div className="card-grid">
          <div className="card">
            <div className="card-icon">🕒</div>
            <button>Services</button>
          </div>

          <div className="card">
            <div className="card-icon">⚙️</div>
            <button>Settings</button>
          </div>

          <div className="card">
            <div className="card-icon">📝</div>
            <button>Notes</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;