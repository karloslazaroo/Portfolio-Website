import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="navbar">
      <Link to='/'><h1>KL®</h1></Link>
      <a>Need a website? hit me up.</a>
      <div className="menu">
        <Link to='/projects'class="hover">Projects,</Link>
        <Link to='/about'class="hover">About</Link>
      </div>
      <a class='email' href='mailto:karloplazaro@yahoo.com'>karloplazaro@yahoo.com</a>
    </div>
  );
}

export default Navbar;
