import React, { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";

export default function LoginPage() {
  const { login } = useContext(AuthContext);
  const [secureId, setSecureId] = useState("");
  const [pin, setPin] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    await login(secureId, pin);
  };

  return (
    <div className="page-center">
      <h1>National Secure Commons – Admin</h1>
      <form onSubmit={handleSubmit} className="form-card">
        <input
          type="text"
          placeholder="Secure ID"
          value={secureId}
          onChange={(e) => setSecureId(e.target.value)}
        />
        <input
          type="password"
          placeholder="PIN / Passphrase"
          value={pin}
          onChange={(e) => setPin(e.target.value)}
        />
        <button type="submit" className="btn-primary">Login</button>
      </form>
    </div>
  );
}