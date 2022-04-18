import React from "react";
import Navigation from "../Navigation";
import "./Header.css";

function Header(props) {
  return (
    <header className="header">
      <Navigation onShowCart={props.onShowCart} />
    </header>
  );
}

export default Header;
