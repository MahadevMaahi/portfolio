import React from 'react';
import { Link } from 'react-router-dom';
import Typewriter from 'typewriter-effect';
import { HOME_TEXT } from '../shared/SummaryData';
import PortfolioImage from './UrlImageComponent';
import { FiArrowDown } from 'react-icons/fi';

const Home = () => {
  return (
    <section className="hero">
      <div className="hero-inner">
        <div className="hero-text">
          <p className="hero-greeting">
            Hi There!{' '}
            <span className="wave" role="img" aria-label="wave">
              👋🏻
            </span>
          </p>

          <h1 className="hero-name">BADINI SAI MAHADEV</h1>

          <p className="hero-bio">
            Passionate Android Developer with 6+ years of experience building
            production-grade mobile applications at Samsung, Grab, and GXS Bank.
            Proficient in Kotlin, Jetpack Compose, and modern Android architecture patterns.
          </p>

          <div className="hero-roles">
            <Typewriter
              options={{
                strings: HOME_TEXT.whoami,
                autoStart: true,
                loop: true,
                delay: 40,
                deleteSpeed: 20,
              }}
            />
          </div>

          <div className="hero-cta">
            <Link to="/projects" className="btn-primary-hero">
              View Projects
            </Link>
            <Link to="/contactMe" className="btn-outline-hero">
              Get In Touch
            </Link>
          </div>
        </div>

        <div className="hero-image-wrap">
          <PortfolioImage
            url={HOME_TEXT.homeImgUrl}
            alt="Badini Sai Mahadev"
          />
        </div>
      </div>

      <div className="scroll-indicator" aria-hidden="true">
        <FiArrowDown />
      </div>
    </section>
  );
};

export default Home;
