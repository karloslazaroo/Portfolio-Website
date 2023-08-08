import React from "react";
import "./Footer.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUp} from '@fortawesome/free-solid-svg-icons'

function Footer() {

  function topFunction() {

    window.scrollTo({top: 0, behavior: 'smooth'});
    
    }

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
          <a href="https://www.linkedin.com/in/karloslazaroo/">Linked In</a>
        </div>
        <div  className="socials_item">
          <a href="https://instagram.com/karloslazaroo">Instagram</a>
        </div>
        <div  className="socials_item">
          <a href=''>Github</a>
        </div>
      </div>
      <div className="socials_item">
        <a onClick={topFunction}>Back to Top  </a><FontAwesomeIcon icon={faArrowUp} />
      </div>
      <div className="socials_item">
      <a>Copyright©KarlosLazaro</a>
      </div>
      </div>
    </div>
  );
}

export default Footer;
