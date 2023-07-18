import React from "react";
import "./AskUST.css";
import MainLayout from "../../MainLayout/MainLayout";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import { askust1, askust2} from '../../../assets'
import AskUSTimg from '../../../assets/askust.jpg'

function AskUST() {
  return (
    <MainLayout>
      <div className="askust">
        <div className="askust_title">
          <h1>ASK - UST®</h1>

          <h1>(2023)</h1>
        </div>
        <div className="askust__worktitle">
          <h2>A UST Chatbot managing website for concerns and questions.</h2>
          <h3>
            Discover <FontAwesomeIcon icon={faArrowDown} />
          </h3>
        </div>
        <div>
        <div className="img_div">
            <img src={AskUSTimg}></img>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}

export default AskUST;
