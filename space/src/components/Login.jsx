import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "./Data/firebase"; // import firebase auth

export default function Login({ onClose, onRegister }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      alert("Login successful ✅");
      onClose();
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div
      className="position-fixed top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center"
      style={{ background: "rgba(0,0,0,0.5)", zIndex: 1050 }}
    >
      <div className="bg-white rounded shadow p-4" style={{ width: 400 }}>
        <div className="d-flex justify-content-between align-items-center mb-3">
          <h5 className="mb-0">Login</h5>
          <button className="btn-close" onClick={onClose}></button>
        </div>

        <form onSubmit={handleLogin}>
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
          {error && <p className="text-danger">{error}</p>}
          <button className="btn btn-primary w-100">Login</button>
        </form>

        <div className="d-flex justify-content-between mt-3">
          <button className="btn btn-link p-0">Forgot Password?</button>
          <button className="btn btn-link p-0" onClick={onRegister}>
            Register
          </button>
        </div>
      </div>
    </div>
  );
}
