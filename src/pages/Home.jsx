import React from 'react';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";


const Home = () => {
  return (
    <> 
      <div className="text-center p-5">
        <h1 className="fw-bold mb-5 text-5xl">SKILLS TESTS TO HIRE THE BEST</h1>
        <p className="text-muted mb-4 p-4">Talent assessments that replace resumes with results.</p>
        <div className="d-flex flex-column flex-md-row  justify-content-center gap-3 ">
          <button className="btn btn-primary fw-bold rounded-pill p-3 my-3" style={{ backgroundColor: '#E400A5'}}>
            For employers & recruiters
          </button>
          <button className="btn  btn-outline-dark fw-bold rounded-pill p-3 my-3" style={{ borderRadius: '50px',margincolor:'dark' }}>
            For job seekers
          </button>
        </div>
      </div>
       
  <div className="card mx-auto rounded-5" style={{ maxWidth: '90%', height: '400px' }}>
    <div className="row g-0 h-100">
      <div className="col-md-4">
        <img
          src="./src/assets/p1.svg"
          className="img-fluid rounded-start h-100"
          alt="Descriptive Alt Text"
        />
      </div>
      <div className="col-md-8 d-flex">
        <div className="card-body">
          <h2 className="card-title my-5 fw-bold text-center ">Turn Quizzing into a Powerful Learning Tool</h2>
          <p className="card-text fs-6">
          Quizzes are powerful learning tools that go beyond testing knowledge. They help students evaluate their understanding, strengthen memory through active recall, and identify areas for improvement. By promoting critical thinking and active learning, quizzes turn study sessions into engaging experiences. Regular quizzing boosts confidence and fosters long-term mastery.</p>
          <p className="card-text my-4  text-center">
            <small className="text-body-secondary fw-bold">Last updated 3 mins ago</small>
          </p>
        </div>
      </div>
    </div>
  </div>


<div className="text-center py-5" >
      <h1 className="mb-4 fw-bold text-4xl">SEE WHAT HAPPENS WHEN YOU PUT SKILLS FIRST</h1>
      <button className="btn btn-primary px-4 py-2 mb-5 rounded-pill" style={{ backgroundColor: '#E400A5', border: 'none' }}>
        Calculate your ROI
      </button>

      <div className="container-fluid">
        <div className="row">
          <div className="col-md-4 text-center">
            <h2 className="display-3 fw-bold">90%</h2>
            <p>of companies reduced their mis-hires</p>
            <a href="#" className="text-primary">Report</a>
          </div>
          <div className="col-md-4 text-center">
            <h2 className="display-3 fw-bold">400%</h2>
            <p>more candidates assessed</p>
            <a href="#" className="text-primary">Case study</a>
          </div>
          <div className="col-md-4 text-center">
            <h2 className="display-3 fw-bold">34%</h2>
            <p>reduction in time-to-hire by using our platform</p>
            <a href="#" className="text-primary">Case study</a>
          </div>
        </div>
      </div>
    </div>
      {/* Rest of the content */}
      
  <div className="text-center py-5">
  <h1 className="text-center text-4xl fw-bold my-2 p-3">Worldwide Brands Using HireBot</h1>
  <div
    id="carouselExampleInterval"
    className="carousel slide"
    data-bs-ride="carousel" // Automatically cycles through the slides

  >
    <div className="carousel-inner">
      {/* Slide 1 */}
      <div className="carousel-item active " data-bs-interval="1000">
        <div className="d-flex justify-content-center">
          <div className="card m-2" style={{ width: '18rem', height: '18rem' }}>
            <img src="./src/assets/nc1.png" className="card-img-top" alt="Brand 1" style={{ height: '100%', objectFit: 'contain' }} />
          </div>
          <div className="card m-2" style={{ width: '18rem', height: '18rem' }}>
            <img src="./src/assets/nc2.jpg" className="card-img-top" alt="Brand 2" style={{ height: '100%', objectFit: 'contain' }} />
          </div>
          <div className="card m-2" style={{ width: '18rem', height: '18rem' }}>
            <img src="./src/assets/nc3.png" className="card-img-top" alt="Brand 3" style={{ height: '100%', objectFit: 'contain' }} />
          </div>
          <div className="card m-2" style={{ width: '18rem', height: '18rem' }}>
            <img src="./src/assets/nc4.png" className="card-img-top" alt="Brand 4" style={{ height: '100%', objectFit: 'contain' }} />
          </div>
        </div>
      </div>

      {/* Slide 2 */}
      <div className="carousel-item " data-bs-interval="1000">
        <div className="d-flex justify-content-center">
          <div className="card m-2" style={{ width: '18rem', height: '18rem' }}>
            <img src="./src/assets/c5.png" className="card-img-top" alt="Brand 5" style={{ height: '100%', objectFit: 'contain' }} />
          </div>
          <div className="card m-2" style={{ width: '18rem', height: '18rem' }}>
            <img src="./src/assets/c6.png" className="card-img-top" alt="Brand 6" style={{ height: '100%', objectFit: 'contain' }} />
          </div>
          <div className="card m-2" style={{ width: '18rem', height: '18rem' }}>
            <img src="./src/assets/c7.png" className="card-img-top" alt="Brand 7" style={{ height: '100%', objectFit: 'contain' }} />
          </div>
          <div className="card m-2" style={{ width: '18rem', height: '18rem' }}>
            <img src="./src/assets/c8.png" className="card-img-top" alt="Brand 8" style={{ height: '100%', objectFit: 'contain' }} />
          </div>
        </div>
      </div>

      {/* Slide 3 */}
      <div className="carousel-item " data-bs-interval="1000">
        <div className="d-flex justify-content-center">
          <div className="card m-2" style={{ width: '18rem', height: '18rem' }}>
            <img src="./src/assets/c9.png" className="card-img-top" alt="Brand 9" style={{ height: '100%', objectFit: 'contain' }} />
          </div>
          <div className="card m-2" style={{ width: '18rem', height: '18rem' }}>
            <img src="./src/assets/c10.png" className="card-img-top" alt="Brand 10" style={{ height: '100%', objectFit: 'contain' }} />
          </div>
          <div className="card m-2" style={{ width: '18rem', height: '18rem' }}>
            <img src="./src/assets/nc1.png" className="card-img-top" alt="Brand 1" style={{ height: '100%', objectFit: 'contain' }} />
          </div>
          <div className="card m-2" style={{ width: '18rem', height: '18rem' }}>
            <img src="./src/assets/nc2.jpg" className="card-img-top" alt="Brand 2" style={{ height: '100%', objectFit: 'contain' }} />
          </div>
        </div>
      </div>
    </div>

    {/* Carousel Controls */}
    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
  </div>
</div>


  <div className="container my-5 p-5">
  {/* Heading */}
  <h1 className="text-center text-4xl fw-bold my-2 p-3">Choose the plan that works for you</h1>

  {/* Toggle for Monthly/Yearly */}
  <div className="text-center mb-4">
    <button className="btn btn-outline-success me-2 p-2">Monthly</button>
    <button className="btn btn-secondary p-2">Yearly <span className="badge bg-success ms-2">Save 16%</span></button>
  </div>

  {/* Pricing Cards */}
  <div className="row text-center p-3" style={{height:"500px"}}>
    {/* Basic Plan */}
    <div className="col-md-4 d-flex align-items-stretch">
      <div className="card shadow-sm p-3 w-100 card-hover rounded-4">
        <h3 className="fw-bold p-4 text-2xl">Basic</h3>
        <p className="text-muted p-1">Create interactive forms that connect to your workflow</p>
        <h2 className="fw-bold p-1">25 USD <small className="fs-6">/mo</small></h2>
        <p className="text-success p-3">Save 58 USD /yr</p>
        <button className="btn btn-dark btn-lg w-100 p-2">Get Basic</button>
        <ul className="list-unstyled mt-4 text-start">
          <li><span className="me-2 text-success p-2">✔️</span>100 responses/mo included</li>
          <li><span className="me-2 text-success p-2">✔️</span>1 user</li>
          <li><span className="me-2 text-success p-2">✔️</span>Unlimited typeforms</li>
          <li><span className="me-2 text-success p-2">✔️</span>Unlimited questions</li>
        </ul>
      </div>
    </div>

    {/* Plus Plan */}
    <div className="col-md-4 d-flex align-items-stretch">
      <div className="card shadow-sm p-3 w-100 card-hover rounded-4 bg-info-subtle">
        <h3 className="fw-bold p-4 text-2xl">Plus</h3>
        <p className="text-muted p-1">Make your forms more beautiful and on-brand</p>
        <h2 className="fw-bold p-1">50 USD <small className="fs-6">/mo</small></h2>
        <p className="text-success p-3">Save 118 USD /yr</p>
        <button className="btn btn-dark btn-lg w-100 ">Get Plus</button>
        <ul className="list-unstyled mt-4 text-start">
          <li><span className="me-2 text-success p-2">✔️</span>1,000 responses/mo included</li>
          <li><span className="me-2 text-success p-2">✔️</span>3 users</li>
          <li><span className="me-2 text-success p-2">✔️</span>Everything in <strong>Basic</strong></li>
          <li><span className="me-2 text-success p-2">✔️</span>Remove Typeform branding</li>
          <li><span className="me-2 text-success p-2">✔️</span>Custom subdomain</li>
        </ul>
      </div>
    </div>

    {/* Business Plan */}
    <div className="col-md-4 d-flex align-items-stretch">
      <div className="card shadow-sm p-3 w-100 card-hover rounded-4">
        <h3 className="fw-bold p-4 text-2xl">Business</h3>
        <p className="text-muted p-1">Analyze performance and do more with your data</p>
        <h2 className="fw-bold p-1">83 USD <small className="fs-6">/mo</small></h2>
        <p className="text-success p-3">Save 198 USD /yr</p>
        <button className="btn btn-dark btn-lg w-100">Get Business</button>
        <ul className="list-unstyled mt-4 text-start">
          <li><span className="me-2 text-success p-2">✔️</span>10,000 responses/mo included</li>
          <li><span className="me-2 text-success p-2">✔️</span>5 users</li>
          <li><span className="me-2 text-success p-2">✔️</span>Everything in <strong>Plus</strong></li>
          <li><span className="me-2 text-success p-2">✔️</span>Drop-off rates</li>
          <li><span className="me-2 text-success p-2">✔️</span>Conversion tracking</li>
          <li><span className="me-2 text-success p-2">✔️</span>Priority support and live chat</li>
        </ul>
      </div>
    </div>
  </div>
</div>
 {/* Carousel Section */}
 <section
      className="py-5 text-center rounded-5  text-dark justify-content-center align-items-center mx-auto"
      style={{ backgroundColor: "#D8BFD8", color: "dark",width:"90%",height:"auto"  }}
    >
      <div className="container">
        <h1 className="mb-3 text-4xl fw-bold">HIRING DOWN TO A SCIENCE</h1>
        <p className="mb-5">
          Across 400+ tests, developed by 15 specialists with 12 PhDs between
          them, you can screen talent on exactly what matters. Making smarter,
          faster, more accurate decisions, the first time around.
        </p>

        {/* Carousel Component */}
        <Carousel
          interval={null}
          indicators={false}
          prevIcon={<span className="carousel-control-prev-icon" />}
          nextIcon={<span className="carousel-control-next-icon" />}
        >
          {/* First Slide - 4 Cards */}
          <Carousel.Item>
            <div className="row justify-content-center">
              {/* Card 1 */}
              <div className="col-md-3 mb-4">
                <div className="card h-100 text-center">
                  <div className="card-body">
                    <img
                      src="./src/assets/h1.png"
                      alt="Programming Icon"
                      className="mb-3"
                      style={{ width: "50px" }}
                    />
                    <h5 className="card-title">Programming</h5>
                    <p className="card-text">
                      Level up your tech team recruitment with coding tests in
                      20+ languages, helping you identify top developer talent.
                    </p>
                    <button className="btn btn-outline-dark my-3">See more</button>
                  </div>
                </div>
              </div>

              {/* Card 2 */}
              <div className="col-md-3 mb-4">
                <div className="card h-100 text-center">
                  <div className="card-body">
                    <img
                      src="./src/assets/h2.jpg"
                      alt="Cognitive Icon"
                      className="mb-3"
                      style={{ width: "50px" }}
                    />
                    <h5 className="card-title">Cognitive ability</h5>
                    <p className="card-text">
                      Uncover problem-solving and critical thinking skills with
                      tests to assess verbal and numerical understanding.
                    </p>
                    <button className="btn btn-outline-dark my-3">See more</button>
                  </div>
                </div>
              </div>

              {/* Card 3 */}
              <div className="col-md-3 mb-4">
                <div className="card h-100 text-center">
                  <div className="card-body">
                    <img
                      src="./src/assets/h3.png"
                      alt="Personality Icon"
                      className="mb-3"
                      style={{ width: "50px" }}
                    />
                    <h5 className="card-title">Personality and culture</h5>
                    <p className="card-text">
                      Gauge personality traits to match individuals to cultures
                      where they'll thrive, ensuring team compatibility.
                    </p>
                    <button className="btn btn-outline-dark my-3">See more</button>
                  </div>
                </div>
              </div>

              {/* Card 4 */}
              <div className="col-md-3 mb-4">
                <div className="card h-100 text-center">
                  <div className="card-body">
                    <img
                      src="./src/assets/h4.jpg"
                      alt="Languages Icon"
                      className="mb-3"
                      style={{ width: "50px" }}
                    />
                    <h5 className="card-title">Languages</h5>
                    <p className="card-text">
                      Evaluate language proficiency for roles requiring
                      linguistic skills and to ensure effective communication
                      across global.
                    </p>
                    <button className="btn btn-outline-dark my-3">See more</button>
                  </div>
                </div>
              </div>
            </div>
          </Carousel.Item>

          {/* Second Slide - 4 New Cards */}
          <Carousel.Item>
            <div className="row justify-content-center">
              {/* Card 5 */}
              <div className="col-md-3 mb-4">
                <div className="card h-100 text-center">
                  <div className="card-body">
                    <img
                      src="./src/assets/h5.png"
                      alt="Marketing Icon"
                      className="mb-3"
                      style={{ width: "50px" }}
                    />
                    <h5 className="card-title">Marketing</h5>
                    <p className="card-text">
                      Screen marketing skills with tests that assess creative
                      thinking, market research ability, and digital strategy.
                    </p>
                    <button className="btn btn-outline-dark my-3">See more</button>
                  </div>
                </div>
              </div>

              {/* Card 6 */}
              <div className="col-md-3 mb-4">
                <div className="card h-100 text-center">
                  <div className="card-body">
                    <img
                      src="./src/assets/h6.png"
                      alt="Leadership Icon"
                      className="mb-3"
                      style={{ width: "50px" }}
                    />
                    <h5 className="card-title">Leadership</h5>
                    <p className="card-text">
                      Evaluate leadership qualities such as decision-making,
                      team-building, and conflict resolution skills.
                    </p>
                    <button className="btn btn-outline-dark my-3">See more</button>
                  </div>
                </div>
              </div>

              {/* Card 7 */}
              <div className="col-md-3 mb-4">
                <div className="card h-100 text-center">
                  <div className="card-body">
                    <img
                      src="./src/assets/h7.jpg"
                      alt="Analytics Icon"
                      className="mb-3"
                      style={{ width: "50px" }}
                    />
                    <h5 className="card-title">Analytics</h5>
                    <p className="card-text">
                      Assess analytical skills with tests designed to measure
                      proficiency in data interpretation and decision-making.
                    </p>
                    <button className="btn btn-outline-dark my-3">See more</button>
                  </div>
                </div>
              </div>

              {/* Card 8 */}
              <div className="col-md-3 mb-4">
                <div className="card h-100 text-center">
                  <div className="card-body">
                    <img
                      src="./src/assets/h8.jpg"
                      alt="Communication Icon"
                      className="mb-3"
                      style={{ width: "50px" }}
                    />
                    <h5 className="card-title">Communication</h5>
                    <p className="card-text">
                      Test communication skills, including verbal and written
                      proficiency, to ensure clarity and effectiveness in global.
                    </p>
                    <button className="btn btn-outline-dark my-3">See more</button>
                  </div>
                </div>
              </div>
            </div>
          </Carousel.Item>
        </Carousel>
      </div>

      {/* Footer Section */}
      <div className="d-flex justify-content-center text-center align-items-center border-top pt-2 mt-4">
        <div>
        <button className="btn btn-primary fw-bold rounded-pill p-3 my-3" style={{ backgroundColor: '#FF3399'}}>
             Go for a test run
          </button>
        </div>
        <div className='d-flex text-center border-white justify-content-center mx-4'>
          <button className="btn btn-outline-dark text-white fw-bold  rounded-pill p-3 my-3">
            Explore all tests
          </button>
        </div>
      </div>
    </section>
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
              <h4 className="text-uppercase  text-xl   fw-bold my-2">Built For Creatives</h4>
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
              <h3 className="text-uppercase   text-xl fw-bold my-2">Find Talent</h3>
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
              <h3 className="text-uppercase text-xl  fw-bold my-2 ">HireBot</h3>
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
              <h3 className="text-uppercase text-xl  fw-bold my-2 ">Social</h3>
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
              <li className="list-inline-item"><a href="#"  className="text-white text-decoration-none">English</a></li>
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

export default Home;
