import React from "react";
import "./Navbar.css";

function Navbar() {
  return (
    <div className="navbar">
      <a>KL®</a>
      <a>Need a hand? Hit me up</a>
      <div className="menu">
        <a href='#'class="hover">Projects,</a>
        <a href='#'class="hover">About</a>
      </div>
      <a class='email'>karloplazaro@yahoo.com</a>
    </div>
  );
}

export default Navbar;
