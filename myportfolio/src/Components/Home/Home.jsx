import React from "react";
import "./Home.css";

import { Fade } from "react-awesome-reveal";

import MainLayout from "../MainLayout/MainLayout";
import Work from "../Work/Work";

function Home() {
  return (
    <MainLayout>
      <div className="home">
        <div className="title">
          <Fade direction="up" duration={1000}>
            <h1>
              KARLOS LAZARO <br /> SOFTWARE ENGINEER
            </h1>

            <h2>
              Committed to continuous learning, professional growth, and
              delivering exceptional results in a collaborative manner.
            </h2>
          </Fade>
        </div>

        <div>
          <form action="mailto:karloplazaro@yahoo.com">
            <button className="btn"></button>
          </form>
        </div>

        <Work />
      
      </div>
    </MainLayout>
  );
}

export default Home;
