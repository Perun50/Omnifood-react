import React from "react";
import "./Hero.css";
import customer1 from "../img/customers/customer1.jpg";
import customer2 from "../img/customers/customer2.jpg";
import customer3 from "../img/customers/customer3.jpg";
import customer4 from "../img/customers/customer4.jpg";
import customer5 from "../img/customers/customer5.jpg";
import customer6 from "../img/customers/customer6.jpg";
import heroMin from "../img/heroMin.png";
import hero from "../img/hero.webp";
import Footer from "./footer/Footer";
import Featured from "./main/Featured";

function Hero() {
  return (
    <>
      <section className="section-hero">
        <div className="hero">
          <div className="hero-text-box">
            <h1 className="heading-primary">
              A healthy meal delivered to your door, every single day
            </h1>
            <p className="hero-description">
              The smart 365-days-per-year food subscription that will make you
              eat healthy again. Tailored to your personal tastes and
              nutritional needs.
            </p>
            <a href="#cta" className="btn btn--full margin-right-sm">
              Start eating well
            </a>

            <a href="#how" className="btn btn--outline">
              Learn more &darr;
            </a>
            <div className="delivered-meals">
              <div className="delivered-imgs">
                <img src={customer1} alt="Customer photo" />
                <img src={customer2} alt="Customer photo" />
                <img src={customer3} alt="Customer photo" />
                <img src={customer4} alt="Customer photo" />
                <img src={customer5} alt="Customer photo" />
                <img src={customer6} alt="Customer photo" />
              </div>
              <p className="delivered-text">
                <span>250,000+</span> meals delivered last year!
              </p>
            </div>
          </div>
          <div className="hero-img-box">
            <picture>
              <source srcset={hero} type="image/webp" />
              <source srcset={heroMin} type="image/png" />

              <img
                src={heroMin}
                className="hero-img"
                alt="Woman enjoying food, meals in storage container, and food bowls on a table"
              />
            </picture>
          </div>
        </div>
      </section>
      <Featured/>
      <Footer />
    </>
  );
}

export default Hero;
