import React, { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "./Data/firebase";

export default function Register({ onClose, onLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const errorMessages = {
    "auth/email-already-in-use": "This email is already registered.",
    "auth/invalid-email": "Invalid email format.",
    "auth/weak-password": "Password should be at least 6 characters.",
  };

  const handleRegister = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      return setError("Passwords do not match.");
    }

    try {
      await createUserWithEmailAndPassword(auth, email, password);
      alert("🎉 Account created successfully!");
      onClose?.();
    } catch (err) {
      setError(errorMessages[err.code] || "Something went wrong. Try again.");
    }
  };

  return (
    <div
      className="position-fixed top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center"
      style={{ background: "rgba(0,0,0,0.5)", zIndex: 1050 }}
    >
      <div className="bg-white rounded shadow p-4" style={{ width: 400 }}>
        {/* Header */}
        <div className="d-flex justify-content-between align-items-center mb-3">
          <h5 className="mb-0">Register</h5>
          <button className="btn-close" onClick={onClose}></button>
        </div>

        {/* Form */}
        <form onSubmit={handleRegister}>
          <div className="mb-3">
            <label className="form-label">Email</label>
            <input
              className="form-control"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Password</label>
            <input
              className="form-control"
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Confirm Password</label>
            <input
              className="form-control"
              type="password"
              required
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>
          {error && <p className="text-danger small">{error}</p>}
          <button className="btn btn-success w-100">Register</button>
        </form>

        {/* Links */}
        <div className="d-flex justify-content-between mt-3">
          <span className="text-muted small">Already have an account?</span>
          <button className="btn btn-link p-0" onClick={onLogin}>
            Login
          </button>
        </div>
      </div>
    </div>
  );
}
