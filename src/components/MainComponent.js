import React, { Component } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import Header from './HeaderComponent';
import Home from './HomeComponent';
import AboutMe from './AboutComponent';
import SkillSet from './SkillsComponent';
import Projects from './ProjectsComponent';
import Certifications from './CertificationComponent';
import ContactMe from './ContactComponent';
import Footer from './FooterComponent';

class Main extends Component {

    render() {
        return(
            <div>
                <Header />
                <Routes>
                    <Route path='/home' element={<Home />} />
                    <Route path='/aboutMe' element={< AboutMe />} />
                    <Route path='/skillSet' element={<SkillSet />} />
                    <Route path='/projects' element={<Projects />} />
                    <Route path='/certifications' element={<Certifications />} />
                    <Route path='/contactMe' element={<ContactMe />} />
                    <Route path="*" element={<Navigate to="/home" replace />} />
                </Routes>
                <Footer />
            </div>
        );
    }
}

export default Main;