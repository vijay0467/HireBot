import React from "react";

const Pricing = () => {
  return (
    <>
      <div className="container my-5">
        {/* Heading */}
        <h1 className="text-center text-4xl fw-bold p-3">
          Choose the plan that works for you
        </h1>

        {/* Toggle for Monthly/Yearly */}
        <div className="text-center mb-4">
          <button className="btn btn-outline-success me-2 p-2">Monthly</button>
          <button className="btn btn-secondary p-2">
            Yearly <span className="badge bg-success ms-2">Save 16%</span>
          </button>
        </div>

        {/* Pricing Cards */}
        <div className="row text-center g-4" style={{ height: "auto" }}>
          {/* Basic Plan */}
          <div className="col-md-4 d-flex align-items-stretch">
            <div className="card shadow-sm p-3 w-100 card-hover rounded-4">
              <h3 className="fw-bold p-4 text-2xl">Basic</h3>
              <p className="text-muted p-1">
                Create interactive forms that connect to your workflow
              </p>
              <h2 className="fw-bold p-1">
                25 USD <small className="fs-6">/mo</small>
              </h2>
              <p className="text-success p-3">Save 58 USD /yr</p>
              <button className="btn btn-dark btn-lg w-100">Get Basic</button>
              <ul className="list-unstyled mt-4 text-start">
                <li>
                  <span className="me-2 text-success p-2">✔️</span>100
                  responses/mo included
                </li>
                <li>
                  <span className="me-2 text-success p-2">✔️</span>1 user
                </li>
                <li>
                  <span className="me-2 text-success p-2">✔️</span>Unlimited
                  typeforms
                </li>
                <li>
                  <span className="me-2 text-success p-2">✔️</span>Unlimited
                  questions
                </li>
              </ul>
            </div>
          </div>

          {/* Plus Plan */}
          <div className="col-md-4 d-flex align-items-stretch">
            <div className="card shadow-sm p-3 w-100 card-hover rounded-4 bg-info-subtle">
              <h3 className="fw-bold p-4 text-2xl">Plus</h3>
              <p className="text-muted p-1">
                Make your forms more beautiful and on-brand
              </p>
              <h2 className="fw-bold p-1">
                50 USD <small className="fs-6">/mo</small>
              </h2>
              <p className="text-success p-3">Save 118 USD /yr</p>
              <button className="btn btn-dark btn-lg w-100">Get Plus</button>
              <ul className="list-unstyled mt-4 text-start">
                <li>
                  <span className="me-2 text-success p-2">✔️</span>1,000
                  responses/mo included
                </li>
                <li>
                  <span className="me-2 text-success p-2">✔️</span>3 users
                </li>
                <li>
                  <span className="me-2 text-success p-2">✔️</span>Everything in{" "}
                  <strong>Basic</strong>
                </li>
                <li>
                  <span className="me-2 text-success p-2">✔️</span>Remove
                  Typeform branding
                </li>
                <li>
                  <span className="me-2 text-success p-2">✔️</span>Custom
                  subdomain
                </li>
              </ul>
            </div>
          </div>

          {/* Business Plan */}
          <div className="col-md-4 d-flex align-items-stretch">
            <div className="card shadow-sm p-3 w-100 card-hover rounded-4">
              <h3 className="fw-bold p-4 text-2xl">Business</h3>
              <p className="text-muted p-1">
                Analyze performance and do more with your data
              </p>
              <h2 className="fw-bold p-1">
                83 USD <small className="fs-6">/mo</small>
              </h2>
              <p className="text-success p-3">Save 198 USD /yr</p>
              <button className="btn btn-dark btn-lg w-100">
                Get Business
              </button>
              <ul className="list-unstyled mt-4 text-start">
                <li>
                  <span className="me-2 text-success p-2">✔️</span>10,000
                  responses/mo included
                </li>
                <li>
                  <span className="me-2 text-success p-2">✔️</span>5 users
                </li>
                <li>
                  <span className="me-2 text-success p-2">✔️</span>Everything in{" "}
                  <strong>Plus</strong>
                </li>
                <li>
                  <span className="me-2 text-success p-2">✔️</span>Drop-off
                  rates
                </li>
                <li>
                  <span className="me-2 text-success p-2">✔️</span>Conversion
                  tracking
                </li>
                <li>
                  <span className="me-2 text-success p-2">✔️</span>Priority
                  support and live chat
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="foot bg-dark text-white py-5 p-3 mt-5">
        <div className="container-fluid">
          {/* Single Row for Footer Content */}
          <div className="row align-items-start">
            {/* Behance Logo */}
            <div className="col-lg-2 mb-3 mx-3 p-3 fw-bold text-3xl">
              <h2>HireBot</h2>
            </div>

            {/* Built for Creatives */}
            <div className="col-lg-2 mb-3 mx-3">
              <h4 className="text-uppercase mx-2 text-xl p-1 fw-bold my-2">
                Built For Creatives
              </h4>
              <ul className="list-unstyled">
                <li>
                  <a href="#" className="text-white text-decoration-none">
                    Try HireBot
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white text-decoration-none">
                    Find Inspiration
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white text-decoration-none">
                    Get Hired
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white text-decoration-none">
                    Sell Creative Assets
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white text-decoration-none">
                    Sell Freelance Services
                  </a>
                </li>
              </ul>
            </div>

            {/* Find Talent */}
            <div className="col-lg-2 mb-3 mx-3">
              <h3 className="text-uppercase mx-2 p-1 text-xl fw-bold my-2">
                Find Talent
              </h3>
              <ul className="list-unstyled">
                <li>
                  <a href="#" className="text-white text-decoration-none">
                    Post a Job
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white text-decoration-none">
                    Graphic Designers
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white text-decoration-none">
                    Photographers
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white text-decoration-none">
                    Video Editors
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white text-decoration-none">
                    Web Designers
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white text-decoration-none">
                    Illustrators
                  </a>
                </li>
              </ul>
            </div>

            {/* Behance Info */}
            <div className="col-lg-2 mb-3 mx-3">
              <h3 className="text-uppercase text-xl mx-2 p-1 fw-bold my-2 ">
                HireBot
              </h3>
              <ul className="list-unstyled">
                <li>
                  <a href="#" className="text-white text-decoration-none">
                    About HireBot
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white text-decoration-none">
                    Adobe Portfolio
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white text-decoration-none">
                    Download the App
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white text-decoration-none">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white text-decoration-none">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white text-decoration-none">
                    Help Center
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white text-decoration-none">
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>

            {/* Social Links */}
            <div className="col-lg-2 mb-3 mx-3">
              <h3 className="text-uppercase text-xl mx-2 p-1 fw-bold my-2 ">
                Social
              </h3>
              <ul className="list-unstyled">
                <li>
                  <a href="#" className="text-white text-decoration-none">
                    <i className="bi bi-instagram"></i> Instagram
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white text-decoration-none">
                    <i className="bi bi-twitter"></i> Twitter
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white text-decoration-none">
                    <i className="bi bi-pinterest"></i> Pinterest
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white text-decoration-none">
                    <i className="bi bi-facebook"></i>Facebook
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white text-decoration-none">
                    <i className="bi bi-linkedin"></i> LinkedIn
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Footer Bottom */}
          <div className="d-flex justify-content-between align-items-center border-top pt-2 mt-4">
            <div className="d-flex align-items-center">
              <span className="ms-2">© 2024 Adobe Inc. All rights reserved.</span>
            </div>
            <ul className="list-inline mb-0">
              <li className="list-inline-item">
                <a href="#" className="text-white text-decoration-none">
                  English
                </a>
              </li>
              <li className="list-inline-item">
                <a href="#" className="text-white text-decoration-none">
                  TOU
                </a>
              </li>
              <li className="list-inline-item">
                <a href="#" className="text-white text-decoration-none">
                  Privacy
                </a>
              </li>
              <li className="list-inline-item">
                <a href="#" className="text-white text-decoration-none">
                  Community
                </a>
              </li>
              <li className="list-inline-item">
                <a href="#" className="text-white text-decoration-none">
                  Cookie Preferences
                </a>
              </li>
              <li className="list-inline-item">
                <a href="#" className="text-white text-decoration-none">
                  Do not sell or share my personal information
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Pricing;
