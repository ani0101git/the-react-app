import "./App.css";
import { Link,Outlet } from "react-router";
import React from "react";
import Nav from "./pages/nav.jsx";




function App() {
  return (
    <>
       <Nav />
     <Outlet/>
      {/* @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@*/}

      <footer class="main-footer" >
        <div class="footer-background-overlay"></div>

        <div class="footer-content">
          <div class="newsletter-section">
            <div class="newsletter-text">
              <h2>Newsletter</h2>
              <p>
                A creative agency speciali innovative and solutions to <br />
                businesses A creative agency speciali
              </p>
            </div>
            <div class="newsletter-form">
              <input type="email" placeholder="Enter your email" />
              <button type="submit">
                SUBSCRIBE NOW <i class="fas fa-arrow-right"></i>
              </button>
            </div>
          </div>

          <div class="footer-columns">
            <div class="footer-logo-about">
              <img
                src="/public/img/Main logo.png"
                alt="Aspirant Solution Logo"
                class="footer-logo"
              />
            </div>

            <div class="footer-column">
              <h3 id="size">Page</h3>
              <ul>
                <li>
                  <a href="#" id="center">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" id="center">
                    Services
                  </a>
                </li>
                <li>
                  <a href="#" id="center">
                    Why Chose Us
                  </a>
                </li>
                <li>
                  <a href="#" id="center">
                    Contact Us
                  </a>
                </li>
                <li>
                  <a href="#" id="center">
                    Blog And News
                  </a>
                </li>
              </ul>
            </div>

            <div class="footer-column">
              <h3 id="size">Services</h3>
              <ul>
                <li>
                  <a href="#" id="center">
                    <i class="fas fa-chevron-right list-arrow"></i> Digital
                    Transformation
                  </a>
                </li>
                <li>
                  <a href="#" id="center">
                    <i class="fas fa-chevron-right list-arrow"></i> Product
                    Engineering
                  </a>
                </li>
                <li>
                  <a href="#" id="center">
                    <i class="fas fa-chevron-right list-arrow"></i> Application
                    Development
                  </a>
                </li>
                <li>
                  <a href="#" id="center">
                    <i class="fas fa-chevron-right list-arrow"></i> Big Data &
                    Analytics
                  </a>
                </li>
                <li>
                  <a href="#" id="center">
                    <i class="fas fa-chevron-right list-arrow"></i> Web
                    Development
                  </a>
                </li>
              </ul>
            </div>

            <div class="footer-column contact-info">
              <p id="bold">Address</p>

              <p>
                Metro Station, A Wing 302, Northern Supremous, Northern Hills,
                Shyam Narayan Dubey Rd, near Dahisar East, Mumbai, Maharashtra
                -400068
                <br />
              </p>

              <h4>
                <span id="bold">Phone Number</span>
                <br />
              </h4>
              <p>
                {" "}
                79773 90331
                <br />
              </p>
              <h4>
                <span id="bold">Email</span>
                <br />
              </h4>
              <p> aspirantsolutions@gmail.com</p>
            </div>
          </div>
        </div>
        <div class="copyright-main">
        <div class="copyright-bar">
          <p>&copy; Aspirant Solutions 2025 | All Rights Reserved</p>
          <div class="copyright-Links">
            <a href="#">Terms & Condition</a>
            <a href="#">Privacy Policy</a>
            <a href="#">Contact Us</a>
          </div>
        </div>
        </div>
      </footer>
    </>
  );
}

export default App;
