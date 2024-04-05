import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [retypePassword, setRetypePassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <div className="card">
        <h2>Create Account</h2>
        <form method="POST">
          <div className="form-group">
            <label for="email">Email:"</label>
            <input
              type="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label for="password">Password:"</label>
            <input
              type="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label for="confirmPassword">Confirm Password:"</label>
            <input
              type="password"
              name="confirmPassword"
              value={retypePassword}
              onChange={(e) => setRetypePassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="submit-btn">
            Submit
          </button>
          <p>
            Already has an account? <Link to="/">Login</Link>
          </p>
        </form>
      </div>
    </>
  );
}