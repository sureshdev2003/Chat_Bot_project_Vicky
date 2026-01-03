import React, { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import "./Login.css";
import logoImage from "../../assets/images/logo.png";
export default function LoginPage() {
    const [showPassword, setShowPassword] = useState(false);
    const [keepLoggedIn, setKeepLoggedIn] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = () => {
        console.log("Login submitted", { email, password, keepLoggedIn });
    };

    return (
        <div className="login-page">
            <div className="login-bg" />
            <div className="login-overlay" />

            <div className="login-content">
                {/* Logo */}
                <div className="login-logo">
                    
                    <div>
                        <img src={logoImage}/>
                    </div>
                </div>

                {/* Card */}
                <div className="login-card">
                    <h1 className="login-title">Log In</h1>

                    <input
                        className="login-input"
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />

                    <div className="password-wrapper" style={{ marginTop: 16 }}>
                        <input
                            className="login-input"
                            type={showPassword ? "text" : "password"}
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <button
                            className="password-toggle"
                            onClick={() => setShowPassword(!showPassword)}
                        >
                            {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                        </button>
                    </div>

                    <div className="login-options">
                        <label className="checkbox">
                            <input
                                type="checkbox"
                                checked={keepLoggedIn}
                                onChange={(e) => setKeepLoggedIn(e.target.checked)}
                            />
                            Keep me logged-in
                        </label>
                        <button className="link-btn">Forgot password?</button>
                    </div>

                    <button className="login-btn" onClick={handleLogin}>
                        Log In
                    </button>

                    <div style={{ textAlign: "center", marginBottom: 24 }}>
                        <button className="link-btn">Create Account</button>
                    </div>

                    <div className="social-row">
                        <button className="social-btn"><svg width="26" height="26" viewBox="0 0 24 24" fill="#1877F2">
                            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                        </svg></button>
                        <button className="social-btn"> <svg width="26" height="26" viewBox="0 0 24 24">
                            <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                            <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                            <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                            <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                        </svg></button>
                        <button className="social-btn"><svg width="26" height="26" viewBox="0 0 24 24" fill="black">
                            <path d="M16.365 1.43c0 1.14-.465 2.206-1.28 3.04-.78.82-2.06 1.45-3.22 1.36-.13-1.11.4-2.29 1.18-3.11.78-.83 2.15-1.45 3.32-1.29z" />
                            <path d="M20.05 17.02c-.5 1.15-.74 1.66-1.39 2.67-.9 1.38-2.18 3.1-3.77 3.12-1.41.02-1.77-.93-3.67-.92-1.9.01-2.3.94-3.71.92-1.59-.02-2.81-1.58-3.71-2.96-2.55-3.92-2.82-8.52-1.25-10.93 1.12-1.74 2.9-2.77 4.56-2.77 1.69 0 2.75.94 4.15.94 1.36 0 2.19-.95 4.14-.95 1.48 0 3.05.81 4.17 2.2-3.67 2.01-3.07 7.22.48 8.48z" />
                        </svg></button>
                    </div>
                </div>
             
                
            </div>
        </div>
    );
}
