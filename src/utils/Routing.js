import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HeroSection from '../components/HeroSection';
import About from '../components/About';
import EduDetails from '../components/EduDetails';
import ProjectSection from '../components/ProjectSection';
import SkillSection from '../components/SkillSection';
import TalkSection from '../components/TalkSection';
import Footersection from '../components/Footersection';
import Contectus from '../components/ContectUs/Contectus'; 

function Routing() {
    return (
        <Routes>
            <Route path="/" element={
                <>
                    <HeroSection />
                    <About />
                    <EduDetails />
                    <ProjectSection />
                    <SkillSection />
                    <TalkSection />
                    <Footersection />
                </>
            } />
            <Route path="/contact" element={<Contectus />} /> 
        </Routes>
    );
}

export default Routing;
