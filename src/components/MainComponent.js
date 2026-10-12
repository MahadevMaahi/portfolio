import React from 'react';
import { Route, Routes, Navigate, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Header from './HeaderComponent';
import Home from './HomeComponent';
import AboutMe from './AboutComponent';
import Experience from './ExperienceComponent';
import SkillSet from './SkillsComponent';
import Projects from './ProjectsComponent';
import Certifications from './CertificationComponent';
import ContactMe from './ContactComponent';
import Footer from './FooterComponent';

const Main = () => {
  const location = useLocation();

  return (
    <div>
      <Header />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/home" element={<Home />} />
          <Route path="/aboutMe" element={<AboutMe />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/skillSet" element={<SkillSet />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/certifications" element={<Certifications />} />
          <Route path="/contactMe" element={<ContactMe />} />
          <Route path="*" element={<Navigate to="/home" replace />} />
        </Routes>
      </AnimatePresence>
      <Footer />
    </div>
  );
};

export default Main;
