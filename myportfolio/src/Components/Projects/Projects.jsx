import React from "react";
import MainLayout from "../MainLayout/MainLayout";
import "./Projects.css";
import Work from "../Work/Work";
import { Fade } from "react-awesome-reveal";

function Projects() {
  return (
    <MainLayout>
      <div className="projects">
        <div className="projects_title">
          <Fade direction="up" duration={1000}>
            <h1>SELECTED WORK</h1>
            <h1>(2019 - 2023)</h1>
            <h2>
            Take a moment to explore a few of the projects 
            I've had the opportunity to be a part of.
            </h2>
          </Fade>
        </div>
        <Work />
      </div>
    </MainLayout>
  );
}

export default Projects;
