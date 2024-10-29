import React from 'react';
import './HeroSection.css';
import { motion } from 'framer-motion';
import { fadeIn } from '../varients';
import { Link } from 'react-router-dom';

function HeroSection() {
  return (
    <div>
      <div className="Header">
        <div className="left-section">
          <p>Logo / Image</p>
        </div>
        <div className="right-section">
          <div className="SayHelloContainer">
            <Link to="/contact">
              <h3>Say Hello</h3>
            </Link>
          </div>
        </div>
      </div>

      <motion.div
        variants={fadeIn("up", 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.7 }}
        className="Intro"
      >
        <h1>Frontend Developer, Computer Science Student</h1>
        <h3>I code beautifully simple things, and I love what I do.</h3>
      </motion.div>
      <div className="HeroSectionDash"></div>
    </div>
  );
}

export default HeroSection;
