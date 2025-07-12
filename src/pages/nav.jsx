import { Link,Outlet } from "react-router";
// import "./about.css"

function Nav() {
  return (
    <>
      <div className="navbar1">
          <div className="img">
            <img src="/public/img/Main logo.png" alt="" srcset="" />
          </div>
          <Link to="/">
            <span id="home">Home</span>
          </Link>
          <Link to="/about">About Us</Link>

          <select name="cars" id="service">
            <option value="volvo">Service</option>
            <option value="saab">Saab</option>
            <option value="opel">Opel</option>
            <option value="audi">Audi</option>
          </select>

          <select name="cars" id="service">
            <option value="volvo">blog</option>
            <option value="saab">Saab</option>
            <option value="opel">Opel</option>
            <option value="audi">Audi</option>
          </select>

          <Link to="">contact</Link>
          <div class="btn">
            <button type="button">
              Get in touch <img src="/public/img/Right-Arrow.png" alt="" srcset="" />
            </button>
          </div>
        </div>
        {/* <Outlet/> */}
        </>
  );
}

export default Nav;