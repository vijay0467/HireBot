import React from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const Signup = () => {
  const navigate = useNavigate(); // For navigation

  return (
    <div className="container-fluid d-flex justify-content-center align-items-center vh-60">
      <div className="card shadow bg-secondary-subtle p-4 rounded-3" style={{ maxWidth: "500px" ,height:"60%" }}>
        {/* Close Button */}
        <div className="d-flex justify-content-end">
          <button
            className="btn p-0"
            style={{ lineHeight: "1" }}
            aria-label="Close"
            onClick={() => navigate("/")} // Navigate to Home page on click
          >
             X
          </button>
        </div>

        {/* Signup Header */}
        <div className="text-center mb-3">
          <h2 className="fw-bold mb-1">CREATE AN ACCOUNT</h2>
          <p className="text-muted">Save your progress, share reviews, and more.</p>
        </div>

        {/* Info Box */}
        <div className="p-3 mb-4 rounded text-center text-secondary" style={{ backgroundColor: "#FFF5EE" }}>
  E-learning is the digital delivery of education and training through online platforms, enabling learners to access courses anytime, anywhere.
</div>     

        {/* Signup Form */}
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
            <input
              type="password"
              id="password"
              className="form-control"
              placeholder="Create a password"
              required
            />
          </div>

          {/* Confirm Password Input */}
          <div className="mb-3">
            <label htmlFor="confirmPassword" className="form-label fw-semibold">
              CONFIRM PASSWORD
            </label>
            <input
              type="password"
              id="confirmPassword"
              className="form-control"
              placeholder="Confirm your password"
              required
            />
          </div>

          {/* Terms and Conditions */}
          <div className="form-check mb-4">
            <input
              className="form-check-input"
              type="checkbox"
              id="terms"
              required
            />
            <label className="form-check-label" htmlFor="terms">
              I agree to the <a href="#" className="text-decoration-none text-primary">Terms and Conditions</a>.
            </label>
          </div>

          {/* Submit Button */}
          <div className="d-grid">
            <button
              type="submit"
              className="btn btn-warning fw-bold text-white"
            >
              CREATE ACCOUNT
            </button>
          </div>
        </form>

        {/* Already have an account */}
        <div className="text-center mt-4">
          <p className="mb-0">
            Already have an account?{" "}
            <button
              className="btn btn-link text-decoration-none text-primary p-0"
              onClick={() => navigate("/login")} 
            >
              Log In
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
