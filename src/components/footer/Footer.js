import React from "react";
import logo from "../../img/logo.png";
import "./Footer.css";
import {
  IoLogoInstagram,
  IoLogoFacebook,
  IoLogoTwitter,
} from "react-icons/io5";
import { IconContext } from "react-icons";
import {Link} from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">
      <div className="container grid grid--footer">
        <div className="logo-col">
          <a to="/" className="footer-logo">
            <img className="logo" alt="Omnifood logo" src={logo} />
          </a>

          <ul className="social-links">
            <li>
              <Link to="/" className="footer-link">
                <IconContext.Provider value={{size: "2.4rem"}}>
                  <IoLogoInstagram />
                </IconContext.Provider>
              </Link>
            </li>
            <li>
              <Link to="/" className="footer-link">
                <IconContext.Provider value={{size: "2.4rem"}}>
                  <IoLogoFacebook />
                </IconContext.Provider>
              </Link>
            </li>
            <li>
              <Link to="/" className="footer-link">
                <IconContext.Provider value={{size: "2.4rem"}}>
                  <IoLogoTwitter/>
                </IconContext.Provider>
              </Link>
            </li>
          </ul>

          <p className="copyright">
            Copyright &copy; <span className="year">2027</span> by Omnifood,
            Inc. All rights reserved.
          </p>
        </div>

        <div className="address-col">
          <p className="footer-heading">Contact us</p>
          <address className="contacts">
            <p className="address">
              623 Harrison St., 2nd Floor, San Francisco, CA 94107
            </p>
            <p>
              <Link to="#" className="footer-link">
                415-201-6370
              </Link>
              <br />
              <Link to="/" className="footer-link">
                hello@omnifood.com
              </Link>
            </p>
          </address>
        </div>

        <nav className="nav-col">
          <p className="footer-heading">Account</p>
          <ul className="footer-nav">
            <li>
              <Link to="/" className="footer-link">
                Create account
              </Link>
            </li>
            <li>
              <Link to="/" className="footer-link">
                Sign in
              </Link>
            </li>
            <li>
              <Link to="/" className="footer-link">
                iOS app
              </Link>
            </li>
            <li>
              <Link to="/" className="footer-link">
                Android app
              </Link>
            </li>
          </ul>
        </nav>

        <nav className="nav-col">
          <p className="footer-heading">Company</p>
          <ul className="footer-nav">
            <li>
              <Link to="/" className="footer-link">
                About Omnifood
              </Link>
            </li>
            <li>
              <Link to="/" className="footer-link">
                For Business
              </Link>
            </li>
            <li>
              <Link to="/" className="footer-link">
                Cooking partners
              </Link>
            </li>
            <li>
              <Link to="/" className="footer-link">
                Careers
              </Link>
            </li>
          </ul>
        </nav>

        <nav className="nav-col">
          <p className="footer-heading">Resources</p>
          <ul className="footer-nav">
            <li>
              <Link to="/" className="footer-link">
                Recipe directory{" "}
              </Link>
            </li>
            <li>
              <Link to="/" className="footer-link">
                Help center
              </Link>
            </li>
            <li>
              <Link to="/" className="footer-link">
                Privacy & terms
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
}

export default Footer;
