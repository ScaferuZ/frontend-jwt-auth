import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { login } from "../redux/slices/authSlice";
import { authAPI } from "../services/api";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const dispatcher = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await authAPI.api_login({ email, password });

    if (!response) {
      setError("Some error occured. Try again later");
      return;
    }

    console.log(response);

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
        <h2>Login</h2>
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
          <button type="submit" className="submit-btn" onClick={handleSubmit}>
            Submit
          </button>
          <p>
            New User? <Link to="/signup">Create an account</Link>
          </p>
          {error && <div className="error-message">{error}</div>}
        </form>
      </div>
    </>
  );
}
