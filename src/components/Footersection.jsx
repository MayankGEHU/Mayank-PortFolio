import React from 'react';
import './Footersection.css';
import leetcode from '../assets/leetcode.png';
import github from '../assets/github.png';
import linkedin from '../assets/linkedin.png';

function Footersection() {
  return (
    <div className="fotterDetailsContainer">
      <div className="socialcontainer">
        <div className="socialIconContainer-leftside">
          <div className="icon">
            <a href="https://leetcode.com/u/mayank__24/" target="_blank" rel="noopener noreferrer">
              <img src={leetcode} alt="LeetCode" />
            </a>
          </div>
          <div className="icon">
            <a href="https://github.com/MayankGEHU" target="_blank" rel="noopener noreferrer">
              <img src={github} alt="GitHub" />
            </a>
          </div>
          <div className="icon">
            <a href="https://www.linkedin.com/in/mayank-singh-271ba7288" target="_blank" rel="noopener noreferrer">
              <img src={linkedin} alt="LinkedIn" />
            </a>
          </div>
        </div>
        <div className="socialIconContainer-rightside">
          <div className="socialRightSideTextContainer">
            <p>Here are my social and coding profiles</p>
          </div>
        </div>
      </div>
      <div className="footerTextContainer">
        <div className="textContainerBox">
          <p>Living, learning, & leveling up <br /> one day at a time.</p>
          <h6>Handcrafted by @Mayank Singh</h6>
        </div>
      </div>
    </div>
  );
}

export default Footersection;
