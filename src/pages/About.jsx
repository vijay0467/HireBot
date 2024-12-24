import React, { useEffect } from 'react';
import msImage from '../assets/ms.png'; 
import bgtImage from '../assets/bgt.jpg';
import bgiImage from '../assets/bgi.jpg';
import bgaImage from '../assets/bga.jpg';

const About = () => {

  return (
    <>
      <div className="container my-5">
        {/* Background Image Section */}
        <div className="d-flex justify-content-center align-items-center" style={{ height: '60vh', overflow: 'hidden' }}>
          <img
            src={bgaImage}
            alt="Background"
            className="img-fluid rounded-5 shadow"
            style={{ width: '90%', height: '100%', borderRadius: '20px' }}
          />
        </div>

        <h1 className="text-center text-2xl mb-4 mt-4">About HireBot</h1>
        <p className="text-center text-muted mb-5">
          HireBot is an innovative platform designed to streamline the hiring process. Our interactive quizzes and
          assessments ensure you hire the best talent while saving time and effort.
        </p>

        {/* Mission Section */}
        <div className="row align-items-center mb-5">
          <div className="col-md-6">
            <img
              src={msImage}
              alt="Our Mission"
              className="img-fluid rounded-3 shadow fadeInLeft img-hover"
              data-bs-toggle="tooltip"
              data-bs-placement="top"
              title="Our Mission"
              style={{ width: '100%' }}
            />
          </div>
          <div className="col-md-6">
            <h2 className='text-4xl mx-auto text-center'>Our Mission</h2>
            <p className='text-2xl mt-2'>
              At HireBot, our mission is to empower organizations with tools to identify the right talent effectively.
              We believe that the best way to assess skills is through interactive and adaptive testing.
            </p>
          </div>
        </div>

        {/* Team Section */}
        <div className="row align-items-center mb-5 flex-md-row-reverse">
          <div className="col-md-6">
            <img
              src={bgtImage}
              alt="Our Team"
              className="img-fluid rounded-3 shadow fadeInRight img-hover"
              data-bs-toggle="tooltip"
              data-bs-placement="top"
              title="Our Team"
              style={{ width: '100%' }}
            />
          </div>
          <div className="col-md-6">
            <h2 className='text-4xl mx-auto text-center'>Our Team</h2>
            <p className='text-2xl mt-2'>
              Our team is a blend of technology enthusiasts, HR professionals, and designers committed to creating
              a seamless and engaging hiring experience for companies of all sizes.
            </p>
          </div>
        </div>

        {/* Innovation Section */}
        <div className="row align-items-center">
          <div className="col-md-6">
            <img
              src={bgiImage}
              alt="Our Innovation"
              className="img-fluid rounded-3 shadow fadeInUp img-hover"
              data-bs-toggle="tooltip"
              data-bs-placement="top"
              title="Our Innovation"
              style={{ width: '100%' }}
            />
          </div>
          <div className="col-md-6">
            <h2 className='text-4xl mx-auto text-center'>Our Innovation</h2>
            <p className='text-2xl mt-2'>
              We leverage the latest AI and machine learning technologies to design quizzes that are intelligent and
              adaptive. This ensures the process is efficient and accurate for all stakeholders.
            </p>
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <footer className="foot bg-dark text-white py-5">
        <div className="container-fluid">
          <div className="row align-items-start">
            {/* Footer Content */}
            <div className="col-lg-2 mb-3 mx-3 p-3 fw-bold text-3xl">
              <h2>HireBot</h2>
            </div>
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
            <div className="col-lg-2 mb-3 mx-3">
              <h3 className="text-uppercase text-xl mx-2 p-1 fw-bold my-2">HireBot</h3>
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
            <div className="col-lg-2 mb-3 mx-3">
              <h3 className="text-uppercase text-xl mx-2 p-1 fw-bold my-2">Social</h3>
              <ul className="list-unstyled">
                <li><a href="#" className="text-white text-decoration-none"><i className="bi bi-instagram"></i> Instagram</a></li>
                <li><a href="#" className="text-white text-decoration-none"><i className="bi bi-twitter"></i> Twitter</a></li>
                <li><a href="#" className="text-white text-decoration-none"><i className="bi bi-pinterest"></i> Pinterest</a></li>
                <li><a href="#" className="text-white text-decoration-none"><i className="bi bi-facebook"></i> Facebook</a></li>
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

export default About;
