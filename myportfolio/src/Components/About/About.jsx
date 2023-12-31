import React from 'react'
import MainLayout from '../MainLayout/MainLayout'
import './About.css'
import { Fade } from "react-awesome-reveal";
import work1 from "../../assets/askust.jpg";
import about1 from '../../assets/about1.jpg'
import  about2 from '../../assets/about2.jpg'
import about3 from '../../assets/about3.jpg'
import about4 from '../../assets/about4.jpg'

function About() {
  return (
    <>
    <MainLayout>
      <div className='about'>
      <div className='title'>
      <Fade direction="up" duration={1000}>
      <h1>FRONTEND AND BACKEND DEVELOPMENT</h1>
      <h2>Take the time to learn more about me, 
        my personality, what I value, my experiences, and the things I enjoy. </h2>
        </Fade>
      </div>
    <div className='about_imgdiv'>
      <div className="about_img">
              <img src={about1}></img>
          </div>
          <div className="about_img">
              <img src={about2}></img>
          </div>
          <div className="about_img">
              <img src={about3}></img>
          </div>
          <div className="about_img">
              <img src={about4}></img>
          </div>
          </div>

          <div className="about_description">
            <h3>(001)</h3>
            <h2>
             Hello, my name is Karlos Andrew P. Lazaro and I'm currently a fresh graduate from the University of Santo Tomas with 
             Bachelor of Science in Information Technology Specializing in Web and Mobile Development.
            </h2>
          </div>
          <div className="about_description">
            <h3>(002)</h3>
            <h2>
            ReactJS is my most comfortable coding language, as the 
            majority of my projects have been built using this framework. I feel confident and at ease when working with ReactJS, leveraging its powerful features and extensive ecosystem to 
            create robust and innovative applications.
            </h2>
          </div>
          <div className="about_description">
            <h3>(003)</h3>
            <h2>
            When I'm not immersed in coding or studying other programming languages, my greatest pleasure lies in playing online games with my friends. This passion brings me immense joy and excitement, 
            making it an essential part of my life.
            </h2>
          </div>

          

          <div className="education_title">
            <h1>Education</h1>
            <div>
            <div className="education">
              <div className="education_item">
                <h3>College.</h3>
                <h3>University of Santo Tomas</h3>
                <h3>(2023)<br></br><br/>Bachelor of Science in Information Technology
                  <br/>Specializing in Web and Mobile Development
                  <br/>GWA: 1.754</h3>
              </div>
              <div className="education_item">
              <h3>Senior High School.</h3>
                <h3>Faith Christian School</h3>
                <h3>(2019)<br/><br/>(STEM) Science, Technology, Engineering, and Mathematics. </h3>
              </div>
              <div className="education_item">
              <h3>Junior High School.</h3>
                <h3>Faith Christian School</h3>
                <h3>Grade 7 - Grade 10 </h3>
              </div>
              <div className="info_item"></div>
            </div>
            </div>
          </div>
      </div>
    </MainLayout>
    </>
  )
}

export default About