import React from 'react';
import './SkillSection.css'; 
import htmllogo from '../assets/html.png';
import reactlogo from '../assets/react.png';
import javascriptLogo from '../assets/javascript.png';
import nodelogo from '../assets/node.png';
import monogobdlogo from '../assets/mongodb.png';
import csslogo from '../assets/css.png';
import cpplogo from '../assets/cpp.png';

import { motion } from 'framer-motion';
import { fadeIn } from '../varients';

const SkillSection = () => {
  const skiils = [
    { name: 'Data Structure & Algorithm'},
    { name: 'HTML', imgSrc: htmllogo }, 
    { name: 'CSS', imgSrc: csslogo },
    { name: 'JavaScript', imgSrc: javascriptLogo },
    { name: 'C++', imgSrc: cpplogo },
    { name: 'React.js', imgSrc: reactlogo },
    { name: 'Node.js', imgSrc: nodelogo },
    { name: 'MongoDB', imgSrc: monogobdlogo },
  ];

  return (
    <div className="Skill-details-container">
            <hr className="skill-divider-upper" />
      <h1>Skills I Gained</h1>
      <motion.div 
        variants={fadeIn("up", 0.3)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.8 }}
        className="logos-grid">
        {skiils.map((skill, index) => (
          <div key={index} className="logo-item">
            <img src={skill.imgSrc} alt={skill.name} />
            <p>{skill.name}</p> 
          </div>
        ))}
      </motion.div>
      <hr className="skill-divider" />
    </div>
  );  
};

export default SkillSection;
