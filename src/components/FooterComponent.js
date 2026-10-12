import React from 'react';
import { AiFillGithub } from 'react-icons/ai';
import { FaLinkedinIn } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';
import { CONTACT_TEXT } from '../shared/SummaryData';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <span className="footer-desc">Designed &amp; built by Badini Sai Mahadev</span>
        <span className="footer-copy">© {year} SM</span>
        <div className="footer-socials">
          <a href={CONTACT_TEXT.ghLink} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <AiFillGithub />
          </a>
          <a href={CONTACT_TEXT.lnLink} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <FaLinkedinIn />
          </a>
          <a href={CONTACT_TEXT.lcLink} target="_blank" rel="noopener noreferrer" aria-label="LeetCode">
            <SiLeetcode />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
