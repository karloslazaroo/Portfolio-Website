import React from "react";
import "./Home.css";
import work1 from "../../assets/askust.jpg";
import work2 from "../../assets/nutrilife.jpg";
import { Fade } from "react-awesome-reveal";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowDown} from '@fortawesome/free-solid-svg-icons'
import MainLayout from "../MainLayout/MainLayout";

function Home() {
  return (
    <MainLayout>
    <div className="home">
      <div className="title">
        <Fade direction="up" duration={1000}>
          <h1>
            KARLOS LAZARO <br /> SOFTWARE ENGINEER 
          </h1>
        </Fade>

        <h2>
          Committed to continuous learning, professional growth, and delivering
          exceptional results in a collaborative manner.
        </h2>
      </div>

      <div>
        <form action="mailto:karloplazaro@yahoo.com">
        <button className="btn" ></button>
        </form>
      </div>

     

      <div className="work">
      <div className="work_title">
        <h3>(Selected work)</h3>
        <h3> Discover <FontAwesomeIcon icon={faArrowDown} /></h3>
      </div>
        <div className="work_item">
          <img src={work1}></img>
        </div>

        <div className="work_item">
          <img src={work2}></img>
        </div>
      </div>
    </div>
    </MainLayout>
  );
}

export default Home;
