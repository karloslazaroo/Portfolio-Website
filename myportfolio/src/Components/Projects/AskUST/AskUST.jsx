import React from "react";
import "./AskUST.css";
import MainLayout from "../../MainLayout/MainLayout";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import {
  askust1,
  askust2,
  askust3,
  askust4,
  askust5,
  askust6,
  askust7,
  askust8,
  askust9,
  askust10,
  askust11,
} from "../../../assets";
import AskUSTimg from "../../../assets/askust.jpg";
import { Fade } from "react-awesome-reveal";

function AskUST() {
  return (
    <MainLayout>
      <div className="askust">
        <div className="askust_title">
          <Fade direction="up" duration={1000}>
            <h1>ASK - UST®</h1>

            <h1>(2023)</h1>
          </Fade>
        </div>
        <div className="askust__worktitle">
          <div >
            <h2 id="askust_desc">A UST Chatbot managing website for concerns and questions.</h2>
          </div>

          <div className="discover">
            <span>
              {" "}
              <h3>
                Discover <FontAwesomeIcon icon={faArrowDown} />
              </h3>
            </span>
          </div>
        </div>
        <div>
          <div className="img_div">
            <img src={AskUSTimg}></img>
          </div>
        </div>
        <div className="askust_desc">
          <div>
            <h4>(001)</h4>
          </div>
          <div className="askust_summary">
            <h3>
              This project aims to make each office as convenient and reachable
              as possible whenever they have questions or concerns. AUST's
              primary goal is to interact with people and provide them with the
              knowledge that will enable them to address their issues.
            </h3>

            <a href="https://askust.online/">
              <p>Visit the website's live version</p>
            </a>

            <div className="info">
              <div className="info_item">
                <h3>Client</h3>
                <h3>UST - ICT </h3>
              </div>
              <div className="info_item">
                <h3>Year</h3>
                <h3>(2023)</h3>
              </div>
              <div className="info_item">
                <h3>Tech Stack</h3>
                <h3>HTML, CSS, Javascript, React.JS, MongoDB </h3>
              </div>
              <div className="info_item"></div>
            </div>
          </div>
        </div>
        <div className="askust_pic">
          <img src={askust1} alt="" />
        </div>
        <div className="askust_pic">
          <img src={askust2} alt="" />
        </div>
        <div className="askust_pic">
          <img src={askust3} alt="" />
        </div>
        <div className="askust_pic">
          <img src={askust4} alt="" />
        </div>
        <div className="askust_pic">
          <img src={askust5} alt="" />
        </div>
        <div className="askust_pic">
          <img src={askust6} alt="" />
        </div>
        <div className="askust_pic">
          <img src={askust5} alt="" />
        </div>
        <div className="askust_pic">
          <img src={askust7} alt="" />
        </div>
        <div className="askust_pic">
          <img src={askust8} alt="" />
        </div>
        <div className="askust_pic">
          <img src={askust9} alt="" />
        </div>
        <div className="askust_pic">
          <img src={askust10} alt="" />
        </div>
        <div className="askust_pic">
          <img src={askust11} alt="" />
        </div>
      </div>
    </MainLayout>
  );
}

export default AskUST;
