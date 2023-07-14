import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="footer_title">
        <h1>
          KARLOS LAZARO <br /> SOFTWARE ENGINEER
        </h1>
      </div>
      <div className="footer_items">
      <div className="socials">
        <div className="socials_item">
          <a>Linked In</a>
        </div>
        <div  className="socials_item">
          <a>Instagram</a>
        </div>
        <div  className="socials_item">
          <a>Portfolio</a>
        </div>
      </div>
      <div className="top">
        <a>Back to Top</a>
      </div>
      <div className="socials_item">
      <p>Copyright©KarlosLazaro</p>
      </div>
      </div>
    </div>
  );
}

export default Footer;
