import React from 'react';
import './EduDetails.css';
import { SchoolOutline } from 'react-ionicons'
import { LaptopOutline } from 'react-ionicons'
import { DesktopOutline } from 'react-ionicons'


const EduDetails = () => {
  return (
    <div className="EducardContainer">
      <div className="EduCardBox">
        <div className="EduCard-one">
          <div className="CircleIcon">
          <DesktopOutline
            color={'#141c3a'} 
             height="35px"
             width="35px"
          />
          </div>
          <h3>Infosys</h3>
          <p>Software Engineering Intern (Full Stack Developer)</p>
          <h4>Description:</h4>
          <p>"I’m a former Software Engineering Intern at Infosys, where I developed and enhanced the DailyDose app using the MERN stack. My contributions focused on creating a seamless user experience, improving medication adherence for seniors by 30%.".</p>
          <h4>Tech Stack:</h4>
          <ul>
            <li>React.js</li>
            <li>Node.js</li>
            <li>Express.js</li>
            <li>MongoDB</li>
          </ul>
        </div>
        <div className="EduCard-two">
          <div className="CircleIcon">
          <SchoolOutline
            color={'#141c3a'} 
             height="35px"
             width="35px"
          />
          </div>
          <h3>Graphic Era Hill University</h3>
          <p>3rd year computer science & Eng. Student.</p>
        </div>
        <div className="EduCard-three">
          <div className="CircleIcon">
          <LaptopOutline
            color={'#141c3a'} 
             height="35px"
             width="35px"
          />
          </div>
          <h3>Frontend Developer</h3>
          <p>I like to code things from scratch, and enjoy bringing ideas to life in the browser.</p>
          <h4>Languages I speak:</h4>
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>React.js</li>
            <li>Javascript</li>
            <li>Git</li>
          </ul>
          <h4>Dev Tools:</h4>
          <ul>
            <li>VS Code</li>
            <li>Github</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default EduDetails;
