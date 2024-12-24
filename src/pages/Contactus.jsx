import React from 'react';
import bgcImage from '../assets/bgc.avif'; // Adjust the path based on your file structure

const Contactus = () => {
  return (
    <>
      <div className="container-fluid p-0">
        {/* Background Image Section */}
        <div className="d-flex justify-content-center align-items-center" style={{ height: '60vh', overflow: 'hidden' }}>
          <img
            src={bgcImage}
            alt="Background"
            className="img-fluid rounded-5 shadow"
            style={{ width: '80%', height: '100%', borderRadius: '20px' }}
          />
        </div>

        {/* Contact Form Section */}
        <div className="container mt-5">
          <h2 className="text-center text-3xl mb-4">Contact Us</h2>
          <form className="p-4 border rounded shadow-sm" style={{backgroundColor:'#D8BFD8'}}>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">
                Full Name
              </label>
              <input
                type="text"
                className="form-control"
                id="name"
                placeholder="Enter your name"
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email Address
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="Enter your email"
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="message" className="form-label">
                Message
              </label>
              <textarea
                className="form-control"
                id="message"
                rows="4"
                placeholder="Write your message here"
                required
              ></textarea>
            </div>
            <div className="text-center">
              <button type="submit" className="btn btn-primary">
                Send Message
              </button>
            </div>
          </form>
        </div>

        {/* Frequently Asked Questions Section */}
        <div className="container mt-5">
          <h2 className="text-center text-3xl mb-4">Frequently Asked Questions</h2>
          <div className="accordion" id="faqAccordion" >
            {/* Question 1 */}
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingOne">
                <button
                  className="accordion-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseOne"
                  aria-expanded="true"
                  aria-controls="collapseOne"
                  style={{backgroundColor:'#E6E6FA'}}
                >
                  What is HireBot?
                </button>
              </h2>
              <div
                id="collapseOne"
                className="accordion-collapse collapse show"
                aria-labelledby="headingOne"
                data-bs-parent="#faqAccordion"
              >
                <div className="accordion-body">
                  HireBot is a platform designed for creative professionals to find opportunities, sell assets, and connect with talent.
                </div>
              </div>
            </div>

            {/* Question 2 */}
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingTwo">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseTwo"
                  aria-expanded="false"
                  aria-controls="collapseTwo"
                  style={{backgroundColor:'#E6E6FA'}}
                >
                  How can I use the quiz platform?
                </button>
              </h2>
              <div
                id="collapseTwo"
                className="accordion-collapse collapse"
                aria-labelledby="headingTwo"
                data-bs-parent="#faqAccordion"
              >
                <div className="accordion-body">
                  You can use the quiz platform to test your skills, learn new concepts, and track your progress in various creative fields.
                </div>
              </div>
            </div>

            {/* Question 3 */}
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingThree">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseThree"
                  aria-expanded="false"
                  aria-controls="collapseThree"
                  style={{backgroundColor:'#E6E6FA'}}
                >
                  Is HireBot free to use?
                </button>
              </h2>
              <div
                id="collapseThree"
                className="accordion-collapse collapse"
                aria-labelledby="headingThree"
                data-bs-parent="#faqAccordion"
              >
                <div className="accordion-body">
                  Yes, HireBot offers free features, with optional premium services for enhanced functionality and access to exclusive content.
                </div>
              </div>
            </div>

            {/* Question 4 */}
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingFour">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseFour"
                  aria-expanded="false"
                  aria-controls="collapseFour"
                  style={{backgroundColor:'#E6E6FA'}}
                >
                  What happens if I face problems during a test?
                </button>
              </h2>
              <div
                id="collapseFour"
                className="accordion-collapse collapse"
                aria-labelledby="headingFour"
                data-bs-parent="#faqAccordion"
              >
                <div className="accordion-body">
                  If you encounter problems during a test, you can contact support for assistance or restart the test from where you left off, depending on the platform settings.
                </div>
              </div>
            </div>

            {/* Question 5 */}
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingFive">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseFive"
                  aria-expanded="false"
                  aria-controls="collapseFive"
                  style={{backgroundColor:'#E6E6FA'}}
                >
                  Can I retake tests to improve my score?
                </button>
              </h2>
              <div
                id="collapseFive"
                className="accordion-collapse collapse"
                aria-labelledby="headingFive"
                data-bs-parent="#faqAccordion"
              >
                <div className="accordion-body">
                  Yes, most tests can be retaken to improve your score. This allows you to learn from previous mistakes and enhance your skills.
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* Footer Section */}
      <footer className="foot bg-dark text-white py-5 ">
        <div className="container-fluid">
          {/* Single Row for Footer Content */}
          <div className="row align-items-start">
            {/* Behance Logo */}
            <div className="col-lg-2 mb-3 mx-3 p-3 fw-bold text-3xl">
              <h2>HireBot</h2>
            </div>

            {/* Built for Creatives */}
            <div className="col-lg-2  mb-3 mx-3">
              <h4 className="text-uppercase mx-2 text-xl p-1 fw-bold my-2">Built For Creatives</h4>
              <ul className="list-unstyled">
                <li><a href="#" className="text-white text-decoration-none">Try HireBot</a></li>
                <li><a href="#" className="text-white text-decoration-none">Find Inspiration</a></li>
                <li><a href="#" className="text-white text-decoration-none">Get Hired</a></li>
                <li><a href="#" className="text-white text-decoration-none">Sell Creative Assets</a></li>
                <li><a href="#" className="text-white text-decoration-none">Sell Freelance Services</a></li>
              </ul>
            </div>

            {/* Find Talent */}
            <div className="col-lg-2 mb-3 mx-3">
              <h3 className="text-uppercase mx-2 p-1 text-xl fw-bold my-2">Find Talent</h3>
              <ul className="list-unstyled">
                <li><a href="#" className="text-white text-decoration-none">Post a Job</a></li>
                <li><a href="#" className="text-white text-decoration-none">Graphic Designers</a></li>
                <li><a href="#" className="text-white text-decoration-none">Photographers</a></li>
                <li><a href="#" className="text-white text-decoration-none">Video Editors</a></li>
                <li><a href="#" className="text-white text-decoration-none">Web Designers</a></li>
                <li><a href="#" className="text-white text-decoration-none">Illustrators</a></li>
              </ul>
            </div>

            {/* Behance Info */}
            <div className="col-lg-2 mb-3 mx-3">
              <h3 className="text-uppercase text-xl mx-2 p-1 fw-bold my-2 ">HireBot</h3>
              <ul className="list-unstyled">
                <li><a href="#" className="text-white text-decoration-none">About HireBot</a></li>
                <li><a href="#" className="text-white text-decoration-none">Adobe Portfolio</a></li>
                <li><a href="#" className="text-white text-decoration-none">Download the App</a></li>
                <li><a href="#" className="text-white text-decoration-none">Blog</a></li>
                <li><a href="#" className="text-white text-decoration-none">Careers</a></li>
                <li><a href="#" className="text-white text-decoration-none">Help Center</a></li>
                <li><a href="#" className="text-white text-decoration-none">Contact Us</a></li>
              </ul>
            </div>

            {/* Social Links */}
            <div className="col-lg-2 mb-3 mx-3">
              <h3 className="text-uppercase text-xl mx-2 p-1 fw-bold my-2 ">Social</h3>
              <ul className="list-unstyled">
                <li><a href="#" className="text-white text-decoration-none"><i className="bi bi-instagram"></i> Instagram</a></li>
                <li><a href="#" className="text-white text-decoration-none"><i className="bi bi-twitter"></i> Twitter</a></li>
                <li><a href="#" className="text-white text-decoration-none"><i className="bi bi-pinterest"></i> Pinterest</a></li>
                <li><a href="#" className="text-white text-decoration-none"><i className="bi bi-facebook"></i>Facebook</a></li>
                <li><a href="#" className="text-white text-decoration-none"><i className="bi bi-linkedin"></i> LinkedIn</a></li>
              </ul>
            </div>
          </div>

          {/* Footer Bottom */}
          <div className="d-flex justify-content-between align-items-center border-top pt-2 mt-4">
            <div className="d-flex align-items-center">
              <span className="ms-2">© 2024 Adobe Inc. All rights reserved.</span>
            </div>
            <ul className="list-inline mb-0">
              <li className="list-inline-item"><a href="#" className="text-white text-decoration-none">English</a></li>
              <li className="list-inline-item"><a href="#" className="text-white text-decoration-none">TOU</a></li>
              <li className="list-inline-item"><a href="#" className="text-white text-decoration-none">Privacy</a></li>
              <li className="list-inline-item"><a href="#" className="text-white text-decoration-none">Community</a></li>
              <li className="list-inline-item"><a href="#" className="text-white text-decoration-none">Cookie Preferences</a></li>
              <li className="list-inline-item"><a href="#" className="text-white text-decoration-none">Do not sell or share my personal information</a></li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Contactus;
