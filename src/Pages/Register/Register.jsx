import React, { useState } from "react";
import "./Register.css";

const SignUpPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: ""
  });
  const [agreedToTerms, setAgreedToTerms] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    if (!agreedToTerms) {
      alert("Please agree to the terms and conditions");
      return;
    }
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match");
      return;
    }
    console.log("Form submitted:", formData);
  };

  return (
    <div className="signup-container">
      {/* Background blobs */}
      <div className="bg-effects">
        <div className="blue-blob"></div>
        <div className="red-blob"></div>
      </div>

      {/* Logo */}
      <div className="logo">
        <div className="logo-icon">
          <svg viewBox="0 0 24 24">
            <path d="M22.7 19l-9.1-9.1c.9-2.3.4-5-1.5-6.9-2-2-5-2.4-7.4-1.3L9 6 6 9 1.6 4.7C.4 7.1.9 10.1 2.9 12.1c1.9 1.9 4.6 2.4 6.9 1.5l9.1 9.1c.4.4 1 .4 1.4 0l2.3-2.3c.5-.4.5-1.1.1-1.4z"/>
          </svg>
        </div>
        <div>
          <h3>MR.MECHANIC</h3>
          <p>MANAGE · MAINTAIN · MOVE</p>
        </div>
      </div>

      {/* Card */}
      <div className="signup-card">
        <h2>Sign up</h2>

        <input type="text" name="name" placeholder="Name" onChange={handleChange} />
        <input type="email" name="email" placeholder="Email" onChange={handleChange} />
        <input type="password" name="password" placeholder="Create Password" onChange={handleChange} />
        <input type="password" name="confirmPassword" placeholder="Confirm Password" onChange={handleChange} />

        <div className="terms">
          <input type="checkbox" onChange={(e) => setAgreedToTerms(e.target.checked)} />
          <span>I agree to the Terms & Conditions</span>
        </div>

        <button onClick={handleSubmit}>Sign up</button>

        <div className="social-login">
          <button>F</button>
          <button>G</button>
          <button>A</button>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;