import React, { useState } from "react";
import logo from "../../assets/logo.png";
import menu from "../../assets/menu.png";
import { NavLink, Link } from "react-router-dom";
import "./navbar.css"; 
import { useSelector } from "react-redux";

const Navbar = () => {
  const [isActive, setIsActive] = useState(false);
  const [isActive2, setIsActive2] = useState(false);
  const [isActive3, setIsActive3] = useState(false)


  const cart = useSelector(state => state.cart); 
   console.log(cart.length);
   
  

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-light ">
         <div className="container-fluid nav-padding"> {/*  971522347966 */}
          <a className="navbar-brand" href="#">
            <img src={logo} />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            onClick={() => setIsActive3((prevState) => !prevState)}
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
          {
            isActive3 ? (<i class="bi bi-x"></i>) : (<img src={menu} className="w-100" />)
          }
            

          </button>
          <div
            className="collapse navbar-collapse main-menu"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav m-auto mb-2 mb-lg-0">
              <li className="nav-item mx-3">
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>

              <li className="nav-item mx-3">
                <a className="nav-link active" aria-current="page" href="#">
                  Category
                </a>
              </li>
              <li className="nav-item mx-3">
                <Link className="nav-link active" aria-current="page" to="/productlist">
                  Collection
                </Link>
              </li>
              <li className="nav-item mx-3">
                <Link className="nav-link active" aria-current="page" to="/contact">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          <div className="nav-icons">
            <div>
              <i onClick={() => setIsActive((prevState) => !prevState)} className="bi bi-search"></i>
            </div>
            <div>
              <i onClick={() => setIsActive2((prevState) => !prevState)}  className="bi bi-person-circle"></i>
            </div>
            <div className="count-parent">
              <i className="bi bi-heart ">
                <span className="count-style">0</span>
              </i>
            </div>
            <div className={`search-bar ${isActive ? "active" : ""} `}>
              <form action="#">
                <input type="text" placeholder="Search" />
                <button className="button-search">
                  <i className="bi bi-search"></i>
                </button>
              </form>
            </div>

            <div className={`login-dropdown ${isActive2 ? 'active':''} `}>
              <ul>
                <li>
                  <a href="/login-register">Login</a>
                </li>
                <li>
                  <a href="/login-register">Register</a>
                </li>
                <li>
                  <a href="/my-account">my account</a>
                </li>
              </ul>
            </div>
            <div className="count-parent">
            <Link to="/cart"> 
              <i className="bi bi-bag text-dark">
                <span className="count-style">{cart.length}</span>
              </i>
              </Link> 
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
