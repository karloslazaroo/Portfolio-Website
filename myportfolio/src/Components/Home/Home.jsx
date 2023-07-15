import React from "react";
import "./Home.css";
import work1 from "../../assets/askust.jpg";
import work2 from "../../assets/nutrilife.jpg";
import { Fade } from "react-awesome-reveal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
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
            Committed to continuous learning, professional growth, and
            delivering exceptional results in a collaborative manner.
          </h2>
        </div>

        <div>
          <form action="mailto:karloplazaro@yahoo.com">
            <button className="btn"></button>
          </form>
        </div>

        <div className="work">
          <div className="work_title">
            <h3>(Selected work)</h3>
            <h3>
              {" "}
              Discover <FontAwesomeIcon icon={faArrowDown} />
            </h3>
          </div>
          <div className="work_item">
            <div className="img_div">
            <img src={work1}></img>
            </div>
            <div className="details">
              <h3>AUST: Ask - UST Chatbot for UST - ICT</h3>
              <h3>
                This project aims to make each office as convenient
                <br></br>and reachable as possible whenever they have questions
                or concerns.
                <br></br>AUST's primary goal is to interact with people and
                provide them with the
                <br></br>knowledge that will enable them to address their
                issues.
              </h3>
              <h3>(2023)</h3>
            </div>
          </div>

          <div className="work_item">
          <div className="img_div">
            <img src={work2}></img>
            {/* <div className="middle">
              <h2>View Case</h2>
            </div> */}
            </div>
            <div className="details">
              <h3>NutriLife Fruits and Vegetables Wholesaling Website</h3>
              <h3>
                This project was made to broaden the business reach of the
                <br></br>NutriLife Fruits and Vegetables Wholesaling aside from
                <br></br>having their social media pages.
              </h3>
              <h3>(2022)</h3>
            </div>
            <div className="description">
              <h3>(001)</h3>
              <h2>
                My process as a web developer revolves around collaboration,
                efficient coding, rigorous testing, and constant improvement to
                deliver exceptional web experiences.
              </h2>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}

export default Home;
