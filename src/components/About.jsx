import React from 'react'
import './About.css'
// import {motion} from 'framer-motion';

// import{fadeIn} from '../varients';
function About() {
  return (
    <div>
        <div className="Information-About">
            <div className="Details">
                <div 
                      // variants={fadeIn("up",0.2)} 
                      // initial ="hidden"
                      // whileInView={"show"}
                      // viewport={{once: false, amount : 0.7}}
                className="box-Details">
                    <h1>Hi im Mayank Singh.</h1>
                    <p>Hi my name is mayank singh and im a third year computer science student at Graphic era university 
                    I'm quietly confident, naturally curious, and perpetually working on improving my chops.</p>
                </div>               
            </div>
        </div>
    </div>
  )
}

export default About
