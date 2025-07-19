import { Link,Outlet } from "react-router";
// import "./about.css"

function Nav() {
  return (
  //   const show =()=> {
    
  //   if (menubtn.style.display === 'block') {

  //         menubtn.style.display = 'none'
  //   } else {
  //     menubtn.style.display = 'block'
  //   }
  // }
    <>
      <div className="navbar1 justify-between flex text-center bg-amber-300 border-gray-800">
          <div className="img max-w-[200px] h-auto bg-amber-600">
            <img src="/public/img/Main logo.png" className="!w-full h-auto" alt="" srcset="" />
          </div>
          <div className="flex justify-around w-full bg-amber-950 items-center px-4">
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
            <option value="volvo">Blog</option>
            <option value="saab">Saab</option>
            <option value="opel">Opel</option>
            <option value="audi">Audi</option>
          </select>

          <Link to="">Contact</Link>
            <button type="button" className="bg-amber-300 w-[200px]  flex items-center rounded-md size-10">
              <h6 className="">Get in touch</h6> <img src="/public/img/Right-Arrow.png" alt="" srcset="" />
            </button>
          </div>
        </div>
        


        {/* Responsive Navbar */}
          {/* <div class="drop-img">
             <img src="/public/img/Main logo.png" alt="aspirant logo...." srcset="" id="main-logo"  onClick={0} img/>
            <img src="/public/img/menu-bar.png" alt="Menu btn...." srcset="" />
          </div>
         <div class="onclick" id="menubtn">
          
          <Link to="#">
            <span id="home">Home</span>
          </Link>
          <Link to="about">About Us</Link>

          <select name="cars" id="drop-text">
            <Link to=""><option value="volvo">Service</option></Link>
            <Link to=""><option value="saab">Saab</option></Link>
            <Link to=""><option value="opel">Opel</option></Link>
            <Link to=""><option value="audi">Audi</option></Link>
          </select>

          <select name="cars" id="drop-text">
            <option value="volvo" id="drop-text">
              blog
            </option>
            <option value="saab">Saab</option>
            <option value="opel">Opel</option>
            <option value="audi">Audi</option>
          </select>

          <Link to="">contact</Link>
          <div class="btn-drop">
            <button type="button">
              Get in touch <img src=""alt="" srcset="" />
            </button>
          </div>
        </div> */}
        </>
  );
}

export default Nav;