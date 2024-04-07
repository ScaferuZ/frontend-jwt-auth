import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { authAPI } from "../services/api";
import { login } from "../redux/slices/authSlice";

export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [retypePassword, setRetypePassword] = useState("");
  const [error, setError] = useState(null);

  const dispatcher = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      password.length < 8 ||
      !/[A-Z]/.test(password) ||
      !/[a-z]/.test(password) ||
      !/\d/.test(password)
    ) {
      setError(
        "Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, and one number.",
      );
      setPassword("");
      setRetypePassword("");
      return;
    }

    if (password !== retypePassword) {
      setError("Passwords do not match");
      return;
    }

    const response = await authAPI.api_signup({ email, password });

    if (!response) {
      setError("Some error occured. Try again later");
      return;
    }

    if (response.error) {
      setError(response.error);
      return;
    }

    const userJSON = JSON.stringify(response);
    dispatcher(login(userJSON));
  };

  return (
    <>
      <div className="card">
        <h2>Create Account</h2>
        <form method="POST">
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="confirmPassword">Confirm Password:</label>
            <input
              type="password"
              name="confirmPassword"
              value={retypePassword}
              onChange={(e) => setRetypePassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="submit-btn" onClick={handleSubmit}>
            Submit
          </button>
          <p>
            Already has an account? <Link to="/">Login</Link>
          </p>
          {error && <div className="error-message">{error}</div>}
        </form>
      </div>
    </>
  );
}
