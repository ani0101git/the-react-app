//  import { Link } from "react-router";

 const HomePage=()=>{
    return ( 
    <>
    <div class="container1">
       




       

        

        {/**********************  phone responsive navbar  *********************** */}

      

        <div class="menubtn" onclick="show()">
          <img src="../img/menu btn.png" alt="" srcset="" />
        </div>

        <div class="text1">
          <p>
            <span>IT STRATEGY</span> AND ROAD MAP <br />
            PLANNING
          </p>
        </div>

        <div class="div1 ">
          <div class="div2">
            <img src="/public/img/left-image.png" alt="" srcset="" />
          </div>

          <div class="div3">
            <div class="para">
              <p>
                Unlock your business's full potential with our expert IT
                <br />
                consultancy services
              </p>
              <div className="arrow-btn1">
              <button>Next<img src="/public/img/login.png"/></button>
              </div>
            </div>
            <img src="/public/img/right image.png" alt="img..." srcset="" id="oneman" />
          </div>
        </div>
      </div>

      {/* ********** SECOND SECOTION ************** */}
      <section class="agency-section">
        <div class="agency-intro">
          <h2>
            A creative agency specializes in <br />
            crafting
            <img
              src="/public/img/1630598774510-removebg-preview 1.png"
              alt="{logo...}"
              srcset=""
            />
            unique and
            
            impact and <br/>digital solutions for clients
          </h2>
        </div>

        <div class="stats-container">
          <div class="stat-item">
            <div class="stat-number">
              300<span>+</span>
            </div>
            <div class="stat-label"> Clients Review</div>
          </div>

          <div class="stat-item">
            <div class="stat-number">
              120<span>+</span>
            </div>
            <div class="stat-label">Team Member</div>
          </div>

          <div class="stat-item">
            <div class="stat-number">
              1<span>k+</span>
            </div>
            <div class="stat-label">Complete Project</div>
          </div>
        </div>
      </section>

      {/******************** * third section *****************************/}

      <section class="tech-section">
       
        <h1 class="main-heading">
         <p class="tagline">Technology What We Use</p>
          Unleashing Creativity The
          <br />
          
            Unleashing <span class="highlight">Success</span>
          
        </h1>

        <div class="card-container">
          <div class="card">
            <h3>Digital Transformation</h3>
            <p>
              A creative agency providing the
              <br />
              to businesses build
            </p>
            <div class="card-footer">
              <div class="icon"><img src="/public/img/011-CRM.png"/></div>
              <span class="read-more">
                READ MORE <span class="arrow">→</span>
              </span>
            </div>
          </div>
          <div class="card">
            <h3>Application Development</h3>
            <p>
              A creative agency providing the
              <br />
              to businesses build
            </p>
            <div class="card-footer">
              <div class="icon"><img src="/public/img/016-cloud computing.png"/></div>
              <span class="read-more">
                READ MORE <span class="arrow">→</span>
              </span>
            </div>
          </div>
          <div class="card">
            <h3>
              Artificial Intelligence <span class="highlight">(AI)</span>
            </h3>
            <p>
              A creative agency providing the
              <br />
              to businesses build
            </p>
            <div class="card-footer">
              <div class="icon"><img src="/public/img/022-magnet.png"/></div>
              <span class="read-more">
                READ MORE <span class="arrow">→</span>
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* section fourth */}

      <section class="about-company">
        <div class="container01">
          <div class="main-left-right">
            <div class="left">
              <p class="section-title">ABOUT COMPANY</p>
              <h1>
                Crafting Brands The 
                <br/>Futures <span>Elevate</span>
              </h1>
              <div class="feature">
                <div class="icon">
                  <i class="fas fa-chart-line"></i>
                </div>
                <div class="text">
                  <h3>Brand Craft</h3>
                  <p>
                    Creative agency specializes provide innovative solutions.
                    <br />
                    They offer to help businesses build
                  </p>
                </div>
              </div>
              <div class="feature">
                <div class="icon">
                  <i class="fas fa-paint-brush"></i>
                </div>
                <div class="text">
                  <h3>Pixel Perfect Solutions</h3>
                  <p>
                    Creative agency specializes provide innovative solutions.
                    <br />
                    They offer to help businesses build
                  </p>
                </div>
              </div>
              <div class="feature">
                <div class="icon">
                  <i class="fas fa-lightbulb"></i>
                </div>
                <div class="text">
                  <h3>Concept Craft Agency</h3>
                  <p>
                    Creative agency specializes provide innovative solutions.
                    <br />
                    They offer to help businesses build
                  </p>
                </div>
              </div>
            </div>
            <div class="right">
              <p class="description">
                Aspirant Solutions is a unique organization<br/> because of its
                combined expertise in IT &<br/> Advertising Industry.
              </p>
              <img src="/public/img/group-discution.png" alt="Team Illustration" />
            </div>
          </div>
        </div>
        
      </section>

      {/* Fifth section */}

      <section class="project-section">
        <div class="section-label">------LATEST PROJECT------</div>
        <h1 class="main-heading">Where Ideas Take Flight</h1>
        <h2 class="sub-heading">Artificial Intelligence</h2>

        <div class="featured-card">
          <img src="/public/img/artificial inteligence.png" alt="AI Feature" />
          <div class="ai-text">Artificial Intelligence</div>
          <div class="cta-icon">→</div>
        </div>

        <div class="description-row">
          <div class="text-block">
            <h2>Igniting Creative Success</h2>
            <p>
              A creative agency special providing innovative and <br />
              unique solutions to businesses build
            </p>
          </div>
          <div class="text-block">
            <p>
              A creative agency special providing innovative and <br />
              solutions to businesses build agency special providing innovative
              and unique solutions
            </p>
          </div>
        </div>

        <div class="cards-row">
          <div class="image-card">
            <img src="/public/img/image.png" alt="Designing Future" />
            <h2>Designing Tomorrow Today</h2>
            <p>
              A creative agency special providing innovative and unique
              <br />
              solutions to businesses build
            </p>
          </div>
          <div class="image-card">
            <img src="/public/img/image2.png" alt="Brand Experience" />
            <h2>Elevate Your Brand Experience</h2>
            <p>
              A creative agency special providing innovative and
              <br />
              unique solutions to businesses build
            </p>
          </div>
        </div>
      </section>
      {/* <!-- sixth section --> */}
      <nav class="top-bar">
        <div class="nav-item">
          <span class="brand bold">Brand Craft</span>
          <i class="fas fa-drafting-compass icon"></i>
        </div>
        <div class="nav-item">
          <span class="brand outlined">Perfect Solutions</span>
          <i class="fas fa-lightbulb icon"></i>
        </div>
        <div class="nav-item">
          <span class="brand bold">Artistry Avenue</span>
          <i class="fas fa-laptop icon"></i>
        </div>
      </nav>

      <div class="team-section">
        <div class="header">
          <p class="section-tag">---- OUR TEAM</p>
          <h1>
            The Futures Elevate Your Brand
            <span class="highlight">Experience</span>
          </h1>
          <div class="navigation-arrows">
            <div class="arrow-circle left-arrow">
              <i class="fas fa-arrow-left"></i>
            </div>
            <div class="arrow-circle right-arrow">
              <i class="fas fa-arrow-right"></i>
            </div>
          </div>
        </div>

        <div class="team-members">

          <div class="member-card">
            <div class="image-wrapper">
              <img
                src="/public/img/sandeep sir.png"
                alt="Sandeep Chauhan"
              />
              <div class="social-icons">
                <a href="#">
                  <i class="fab fa-facebook-f"></i>
                </a>
                <a href="#">
                  <i class="fab fa-twitter"></i>
                </a>
                <a href="#">
                  <i class="fab fa-instagram"></i>
                </a>
                <a href="#">
                  <i class="fab fa-pinterest-p"></i>
                </a>
              </div>
              <div class="share-icon">
                <i class="fas fa-share-alt"></i>
              </div>
            </div>
            <h3>Sandeep Chauhan</h3>
            <p>Co-Founder</p>
          </div>

          <div class="member-card">
            <div class="image-wrapper">
              <img
                src="/public/img/anthony.png"
                alt="Anthony Gonsalves"
              />
              <div class="share-icon">
                <i class="fas fa-share-alt"></i>
              </div>
            </div>
            <h3>Anthony Gonsalves</h3>
            <p>SEO Expert</p>
          </div>
        </div>
      </div>

      {/* <!-- seventh section --> */}
      <section class="faq-contact-section">
        <div class="faq-header">
          <p class="subheading">----- ASK QUESTION</p>
          <h2>
            Got Questions? We've <br />
            Got Answers
          </h2>
        </div>

         <div class="content-wrapper">
          <div class="faq-list">
            <div class="faq-item open">
              <div class="faq-question">
                <span>01.</span> What types of businesses do you support?
                <i class="fas fa-chevron-down toggle-icon"></i>
              </div>
              <div class="faq-answer">
                <p>
                  Car service is essential for maintaining the performance and
                  maintaining the performance and longevity Car service is
                  essential for maintaining
                </p>
              </div>
            </div>

            <div class="faq-item">
              <div class="faq-question">
                <span>02.</span> What are the signs of brake wear?
                <i class="fas fa-chevron-right toggle-icon"></i>
              </div>
              <div class="faq-answer hidden">
                <p>Detailed answer about brake wear signs.</p>
              </div>
            </div>

            <div class="faq-item">
              <div class="faq-question">
                <span>03.</span> Can regular maintenance prevent major repairs?
                <i class="fas fa-chevron-right toggle-icon"></i>
              </div>
              <div class="faq-answer hidden">
                <p>Detailed answer about preventing major repairs.</p>
              </div>
            </div>

            <div class="faq-item">
              <div class="faq-question">
                <span>04.</span> Are scheduled service intervals important for
                my car?
                <i class="fas fa-chevron-right toggle-icon"></i>
              </div>
              <div class="faq-answer hidden">
                <p>Detailed answer about scheduled service intervals.</p>
              </div>
            </div>
          </div>
         
         
          <div class="contact-card">
            <div class="icon-circle">
              <i class="fas fa-envelope"></i>
            </div>
            <h3>Brand Bliss Creations</h3>
            <p>
              A creative agency speciali providing innovative and unique
              solutions to businesses build
            </p>
            <a href="#" class="contact-button">
              CONTACT US
              <i class="fas fa-arrow-right"></i>
            </a>
          </div>
        </div>
      </section>

      {/* <!-- ************************************ --> */}

      <div class="brands-section">
        <div class="brands-container">
          <div class="brand-logo">
            <img src="/public/img/outreach.png" alt="Outreach Logo" />
          </div>
          <div class="brand-logo">
            <img src="/public/img/productBoard.png" alt="Productboard Logo" />
          </div>
          <div class="brand-logo">
            <img src="/public/img/opendoor.png" alt="Opendoor Logo" />
          </div>
          <div class="brand-logo">
            <img src="/public/img/plaid.png" alt="Plaid Logo" />
          </div>
          <div class="brand-logo">
            <img src="/public/img/pipdrive.png" alt="Pipedrive Logo" />
          </div>
          <div class="brand-logo">
            <img src="/public/img/Rippling.png" alt="Rippling Logo" />
          </div>
          <div class="brand-logo">
            <img src="/public/img/pendo.png" alt="Pendo Logo" />
          </div>
          <div class="brand-logo">
            <img src="/public/img/paypal.png" alt="PayPal Logo" />
          </div>
        </div>
      </div>

      {/* <!-- ***************************************** --> */}

      <section class="contact-section1">
        <div class="card-main1">
          <div class="contact-form-card">
            <h1>Get In Touch</h1>
            <form>
              <div class="form-group">
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Your Name"
                />
              </div>
              <div class="form-group">
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Your Email"
                />
              </div>
              <div class="form-group">
                <textarea
                  id="message"
                  name="message"
                  placeholder="Message here.."
                ></textarea>
              </div>
              <button type="submit" class="submit-button">
                SENT NOW <i class="fas fa-arrow-right"></i>
              </button>
            </form>
          </div>

          <div class="contact-info1">
            <h1>
              Contact With Us 
              Today
            </h1>
            <p>
              A creative agency speciali providing innovative and unique <br/>solutions to businesses build
            </p>
            <div class="map-container">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3766.7511436470895!2d72.86141787425629!3d19.249674446499174!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b1328706b417%3A0xb10fd68bdb606d9!2sNorthern%20Heights%2C%20Dahisar%20East!5e0!3m2!1sen!2sin!4v1752314899481!5m2!1sen!2sin"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"/>
            </div>
          </div>
        </div>
      </section>
</>
)
}
export default HomePage;