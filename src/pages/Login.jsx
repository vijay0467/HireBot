import React from 'react';
import { useNavigate } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import { NavLink } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate(); // Initialize useNavigate for programmatic navigation

  return (
    <div className="container-fluid d-flex justify-content-center align-items-center vh-70">
      <div className="card shadow bg-secondary-subtle p-4 rounded-3" style={{ maxWidth: "450px",width:"40%" }}>
        {/* Close Button */}
        <div className="d-flex justify-content-end">
          <button
            className="btn  p-0"
            style={{ lineHeight: "1" }}
            aria-label="Close"
            onClick={() => navigate("/")} // Navigate to Home.jsx on click
          >
             X
          </button>
        </div>

        {/* Login Header */}
        <div className="text-center mb-4">
          <h2 className="fw-bold mb-1">LOG IN</h2>
        </div>

        {/* Form */}
        <form>
          {/* Email Input */}
          <div className="mb-3">
            <label htmlFor="email" className="form-label fw-semibold">
              EMAIL
            </label>
            <input
              type="email"
              id="email"
              className="form-control"
              placeholder="your@email.com"
              required
            />
          </div>

          {/* Password Input */}
          <div className="mb-3">
            <label htmlFor="password" className="form-label fw-semibold">
              PASSWORD
            </label>
            <div className="input-group">
              <input
                type="password"
                id="password"
                className="form-control"
                placeholder="Password"
                required
              />
              <button
                type="button"
                className="btn btn-outline-secondary"
                aria-label="Show password"
              >
                SHOW
              </button>
            </div>
          </div>

          {/* Submit Button */}
          <div className="d-grid">
            <button
              type="submit"
              className="btn btn-warning fw-bold text-white"
            >
              LOG IN
            </button>
          </div>
        </form>

        {/* Forgot Password */}
        <div className="text-center mt-3">
          <a href="#" className="text-decoration-none text-primary">
            Forgot Password?
          </a>
        </div>

        {/* Social Login */}
        <div className="text-center mt-4">
          <p className="mb-2 fw-semibold">OR CONTINUE WITH</p>
          <div className="d-flex justify-content-center gap-3">
            <button className="btn btn-dark rounded-circle">
              <i className="bi bi-apple text-white"></i>
            </button>
            <button className="btn btn-primary rounded-circle">
              <i className="bi bi-facebook text-white"></i>
            </button>
            <button className="btn btn-light border rounded-circle">
              <i className="bi bi-google text-danger"></i>
            </button>
            <button className="btn btn-warning rounded-circle">
              <i className="bi bi-amazon text-dark"></i>
            </button>
          </div>
        </div>

        {/* Sign Up */}
        <div className="text-center mt-4">
          <p className="mb-0">
            Don't have an account yet?{" "}
            <NavLink className="nav-link d-inline text-primary fw-semibold" to="/signup">
              Sign Up
            </NavLink>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;