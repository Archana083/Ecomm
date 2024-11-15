import React from "react";
import logo from "../../assets/logo.png";
import "./footer.css";

const Footer = () => {
  return (
    <footer className=" text-dark py-4 footer">
      <div className="container">
        <div className="row">
          {/* Column 1: Logo & Description */}
          <div className="col-md-3">
            <img src={logo} alt="Logo" className="img-fluid mb-2" />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
              venenatis, nunc at ultricies cursus, arcu erat ultrices est.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div className="col-md-3">
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li>
                <a href="/" className="text-dark text-decoration-none">
                  Home
                </a>
              </li>
              <li>
                <a href="/about" className="text-dark text-decoration-none">
                  About Us
                </a>
              </li>
              <li>
                <a href="/services" className="text-dark text-decoration-none">
                  Services
                </a>
              </li>
              <li>
                <a href="/contact" className="text-dark text-decoration-none">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Location & Contact */}
          <div className="col-md-3">
            <h5>Contact Us</h5>
            <p>123 Main Street, Anytown, USA</p>
            <p>Phone: +1 234 567 890</p>
            <p>
              Email:{" "}
              <a href="mailto:info@example.com" className="text-dark">
                info@example.com
              </a>
            </p>
          </div>

          {/* Column 4: Embedded Map */}
          <div className="col-md-3">
            <h5>Our Location</h5>
            <iframe
              title="Google Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434508209!2d144.95373631531713!3d-37.81627977975151!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf577ee4a2a7755fa!2sMelbourne%20VIC%2C%20Australia!5e0!3m2!1sen!2sus!4v1633900789361!5m2!1sen!2sus"
              width="100%"
              height="170"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
