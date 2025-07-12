import "./about.css"
import { Link, Outlet } from "react-router"

const  About=()=> {
  return (
    <>
      <div className="main1">

        <div className="onclick" id="menubtn">

          <div className="drop-img">
            <img src="../img/main_logo-removebg-preview.png" alt="" srcSet="" />
          </div>
          <Link to="/"><span id="home">Home</span></Link>
          <Link to="/about">About Us</Link>
          

          <select name="services" id="drop-services">
            <option value="service">Service</option>
            <option value="saab">Saab</option>
            <option value="opel">Opel</option>
            <option value="audi">Audi</option>
          </select>

          <select name="blogs" id="drop-blogs">
            <option value="blog">Blog</option>
            <option value="saab">Saab</option>
            <option value="opel">Opel</option>
            <option value="audi">Audi</option>
          </select>

          <Link to="">contact</Link>
          <div className="btn-drop">
            <button type="button">
              Get in touch <img src="../img/right.png" alt="" srcSet="" />
            </button>
          </div>
        </div>

        {/* <!-- @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ -->*/}

         <div className="menubtn" onClick={() => {}}>
          <img src="../img/menu btn.png" alt="" srcSet="" />
        </div> 

 
        <section className="hero-section">
          <div className="container hero-content">
            <h1 className="hero-title">About Us</h1>
            <p className="breadcrumbs">Home <span>/</span> About US</p>
            <div className="hero-bg-text">ABOUT US</div>
          </div>
        </section>

        <section className="about-content-section">
          <div className="container about-wrapper">
            <div className="about-text-column">
              <p className="section-tag">ABOUT COMPANY</p>
              <h2>Crafting Brands <span className="accent-text">The Futures</span></h2>
              <p className="description">A creative agency specially providing innovative and unique solutions to businesses build</p>
              <div className="features-grid">
                <div className="feature-item"><i className="fas fa-check-circle"></i> Drive More Traffic, Convert</div>
                <div className="feature-item"><i className="fas fa-check-circle"></i> More Customers</div>
                <div className="feature-item"><i className="fas fa-check-circle"></i> Increase Visibility</div>
                <div className="feature-item"><i className="fas fa-check-circle"></i> Digital Marketing Solution</div>
              </div>
              <a href="#" className="btn-read-more">READ MORE <i className="fas fa-arrow-right"></i></a>
            </div>
            <div className="about-image-column">
              <div className="image-container">
                <img src="../img/meet 2 img.jpg" alt="Business team working on laptop" />
                <div className="clients-circle">
                  <span>10k+</span>
                  Clients
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      
      <div className="main2">

        <section className="innovation-section">
          <div className="container innovation-wrapper">
            <div className="innovation-left-column">
              <p className="section-tag-small">VISION & MISSION</p>
              <h2 className="innovation-title">
                Driving Innovation,<br />
                Empowering Future<br />
                <span className="accent-text">Technologies</span>
              </h2>
              <div className="image-with-circle">
                <img src="../img/meet img.jpg" alt="Person working on computer screens" />
                <div className="circle-text">

                  <span className="circle-established">since 2013</span>
                </div>
              </div>
            </div>
            <div className="innovation-right-column">
              <img src="../img/work disc.jpg" alt="Silhouette of a team of people" className="team-image" />
              <p className="innovation-description">
                Leading the future with innovative IT solutions, transforming
                businesses with cutting-edge technology. We empower growth
                through secure, scalable, and customer-centric digital
                solutions.
              </p>
            </div>
          </div>
        </section>

      </div>
      
      <div className="main3">

        <section className="vision-creation-section">
          <div className="container">
            <div className="top-content">
              <p className="section-tag-small">WHY CHOOSE US</p>
              <h1 className="main-heading">
                Your Vision Our Creation<br />
                Elevate <span className="accent-text">Your Brand</span>
              </h1>
            </div>

            <div className="bottom-content">
              <div className="left-box">
                <div className="box-inner">
                  <span className="box-number">01.</span>
                  <p className="box-description">
                    Transforming ideas into innovative, functional, and
                    impactful digital solutions with precision and creativity. We
                    bridge imagination and technology to build future-ready solutions.
                  </p>
                  <p className="box-small-text">4o</p>
                  <img src="../img/meet img.jpg" alt="Office worker at desk" />
                </div>
              </div>

              <div className="right-list">
                <div className="list-item">

                  <span className="list-number">01.</span>
                  <span className="list-text">Designing into Reality</span>
                </div>
                <div className="list-item">
                  <span className="list-number">02.</span>
                  <span className="list-text">Excellence Every Pixel</span>
                </div>
                <div className="list-item">
                  <span className="list-number">03.</span>
                  <span className="list-text">Where Ideas Flight</span>
                </div>
                <div className="list-item">
                  <span className="list-number">04.</span>
                  <span className="list-text">Pixel Perfect Solutions</span>
                </div>
                <div className="list-item">
                  <span className="list-number">05.</span>
                  <span className="list-text">Inspire Create Repeat</span>
                </div>
              </div>
            </div>
          </div>
        </section>

      </div>

      <div className="main4">

        <section className="testimonial-section">
          <div className="container testimonial-wrapper">
            <div className="testimonial-left-content">
              <p className="section-tag-small">CLIENT TESTIMONIAL</p>
              <h2 className="testimonial-heading">
                Excellence in Every<br />
                Where <span className="accent-text">Ideas</span>
              </h2>
              <p className="testimonial-description">
                A creative agency specially providing innovative and unique<br />
                solutions to businesses build
              </p>
              <div className="navigation-arrows">
                <button className="arrow-btn prev-btn" aria-label="Previous testimonial">
                  <i className="fas fa-arrow-left"></i>
                </button>
                <button className="arrow-btn next-btn" aria-label="Next testimonial">
                  <i className="fas fa-arrow-right"></i>
                </button>
              </div>
            </div>

            <div className="testimonial-right-card-stack">
              <div className="card-base card-base-2"></div>
              <div className="card-base card-base-1"></div>
              <div className="testimonial-card">
                <div className="card-header">
                  <span className="client-name">Rajeev Shukla</span>
                  <span className="company-name">ZIPGRID</span>
                </div>
                <p className="card-quote">
                  A creative agency providing an innovative and unique solutions to
                  businesses build their brand A creative agency
                </p>
                <div className="card-footer">
                  <span className="quote-icon">"</span>
                  <div className="star-rating">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star-half-alt"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

      </div>


     
      <div className="brands-section">
        <div className="brands-container">
          <div className="brand-logo">
            <img
              src="../img/outreach.png"
              alt="Outreach Logo"
            />
          </div>
          <div className="brand-logo">
            <img
              src="../img/productBoard.png"
              alt="Productboard Logo"
            />
          </div>
          <div className="brand-logo">
            <img
              src="../img/opendoor.png"
              alt="Opendoor Logo"
            />
          </div>
          <div className="brand-logo">
            <img
              src="../img/plaid.png"
              alt="Plaid Logo"
            />
          </div>
          <div className="brand-logo">
            <img
              src="../img/PipeDrive.png"
              alt="Pipedrive Logo"
            />
          </div>
          <div className="brand-logo">
            <img
              src="../img/Rippling.png"
              alt="Rippling Logo"
            />
          </div>
          <div className="brand-logo">
            <img
              src="../img/pendo.png"
              alt="Pendo Logo"
            />
          </div>
          <div className="brand-logo">
            <img
              src="../img/paypal.png"
              alt="PayPal Logo"
            />
          </div>
        </div>
      </div>


    </>
  )

}
 export default About;