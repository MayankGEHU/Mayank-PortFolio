import React from 'react';
import './ProjectSection.css';
import projectImage from '../assets/Project1.png';
import projectImage2 from '../assets/Project2.png';
import projectImage3 from '../assets/Project3.png';
import projectImage4 from '../assets/Project4.jpg';
import projectImage5 from '../assets/Project5.png';
import projectImage6 from '../assets/Project6.jpg';

function ProjectSection() {
  return (
    <div>
      <div className="topInfo">
        <h1>My Recent Works</h1>
        <h3>Here are a few past design projects I've worked on.</h3>
      </div>
      <div className="cardContainer">
      <div className="cardBox" style={{ backgroundImage: `url(${projectImage})` }}>
          <h4>Real-Estate</h4>
          <p>Description of project 1.</p>
        </div>
        <div className="cardBox" style={{ backgroundImage: `url(${projectImage2})` }}>
          <h4>Project 2</h4>
          <p>Description of project 2.</p>
        </div>
        <div className="cardBox" style={{ backgroundImage: `url(${projectImage3})` }}>
          <h4>Project 3</h4>
          <p>Description of project 3.</p>
        </div>
        <div className="cardBox" style={{ backgroundImage: `url(${projectImage4})` }}>
          <h4>Project 4</h4>
          <p>Description of project 4.</p>
        </div>
        <div className="cardBox" style={{ backgroundImage: `url(${projectImage5})` }}>
          <h4>Project 5</h4>
          <p>Description of project 5.</p>
        </div>
        <div className="cardBox" style={{ backgroundImage: `url(${projectImage6})` }}>
          <h4>Project 6</h4>
          <p>Description of project 6.</p>
        </div>
      </div>
      <div className="textcontainer">
        <div className="textbox">
        <a href="https://github.com/MayankGEHU?tab=repositories" target="_blank" rel="noopener noreferrer"> 
           <h4>See more on GitHub</h4>
        </a>
        </div>
      </div>
      {/* <hr className="Project-divider" /> */}
    </div>
  );
}

export default ProjectSection;
