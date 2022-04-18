import React from "react";
import "./Navigation.css";
import logo from "../img/logo.png";
import { NavLink } from "react-router-dom";

function Navigation(props) {
  return (
    <>
      <NavLink to="/">
        <img className="logo" alt="Omnifood logo" src={logo} />
      </NavLink>
      <nav className="main-nav">
        <ul className="main-nav-list">
          <li>
            <NavLink to="/" className="main-nav-link" >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/how" className="main-nav-link" >
              How it works
            </NavLink>
          </li>
          <li>
            <NavLink to="/meals" className="main-nav-link" >
              Meals
            </NavLink>
          </li>
          <li>
            <NavLink to="/testemonials" className="main-nav-link">
              Testimonials
            </NavLink>
          </li>
          <li>
            <NavLink to="/pricing" className="main-nav-link">
              Pricing
            </NavLink>
          </li>
          <li>
            <btn className="main-nav-link nav-cta" onClick={props.onShowCart} >
              Try for free
            </btn>
          </li>
        </ul>
      </nav>
      {/* <button class="btn-mobile-nav">
        <ion-icon className="icon-mobile-nav" name="menu-outline"></ion-icon>
        <ion-icon className="icon-mobile-nav" name="close-outline"></ion-icon>
      </button> */}
    </>
  );
}

export default Navigation;
