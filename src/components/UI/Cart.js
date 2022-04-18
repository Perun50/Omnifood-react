import React from "react";
import Modal from "./Modal";
import "./Cart.css";
import { IoCloseOutline } from "react-icons/io5";
import { IconContext } from "react-icons";

function Cart(props) {
  return (
    <Modal onClose={props.onClose}>
      <section className="section-cta" id="cta">
        <div className="cta">
          <span className="x" onClick={props.onClose}>
            <IconContext.Provider value={{size: "3.5rem", color: "#fdf2e9"}}>
              <IoCloseOutline />
            </IconContext.Provider>
          </span>
          <div className="cta-text-box">
            <h2 className="heading-secondary">Get your first meal for free!</h2>
            <p className="cta-text">
              Healthy, tasty and hassle-free meals are waiting for you. Start
              eating well today. You can cancel or pause anytime. And the first
              meal is on us!
            </p>
            <form className="cta-form" name="sign-up" netlify>
              <div>
                <label htmlFor="full-name">Full Name</label>
                <input
                  id="full-name"
                  type="text"
                  placeholder="John Smith"
                  name="full-name"
                  required
                />
              </div>

              <div>
                <label htmlFor="email">Email address</label>
                <input
                  id="email"
                  type="email"
                  placeholder="me@example.com"
                  name="email"
                  required
                />
              </div>

              <div>
                <label htmlFor="select-where">
                  Where did you hear from us?
                </label>
                <select id="select-where" name="select-where" required>
                  <option value="">Please choose one option:</option>
                  <option value="friends">Friends and family</option>
                  <option value="youtube">YouTube video</option>
                  <option value="podcast">Podcast</option>
                  <option value="ad">Facebook ad</option>
                  <option value="others">Others</option>
                </select>
              </div>
              <button className="btn btn--form">Sign up now</button>
              {/* <input type="checkbox" />
                <input type="number" /> */}
            </form>
          </div>
          {/* <div
              className="cta-img-box"
              role="img"
              aria-label="Woman enjoying food"
            ></div> */}
        </div>
      </section>
    </Modal>
  );
}

export default Cart;
