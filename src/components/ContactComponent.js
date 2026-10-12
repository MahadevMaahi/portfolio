import React from 'react';
import { motion } from 'framer-motion';
import Summary from './SummaryComponent';
import { CONTACT_TEXT } from '../shared/SummaryData';
import { AiFillGithub } from 'react-icons/ai';
import { FaLinkedinIn } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';
import { MdEmail } from 'react-icons/md';

const SOCIAL_LINKS = [
  {
    href: CONTACT_TEXT.ghLink,
    icon: <AiFillGithub />,
    platform: 'GitHub',
    handle: 'MahadevMaahi',
    cardClass: 'social-card-github',
  },
  {
    href: CONTACT_TEXT.lnLink,
    icon: <FaLinkedinIn />,
    platform: 'LinkedIn',
    handle: 'badini-sai-mahadev',
    cardClass: 'social-card-linkedin',
  },
  {
    href: CONTACT_TEXT.lcLink,
    icon: <SiLeetcode />,
    platform: 'LeetCode',
    handle: 'mahadevvone',
    cardClass: 'social-card-leetcode',
  },
];

const ContactMe = () => (
  <>
    <Summary
      info={CONTACT_TEXT.text}
      ques={CONTACT_TEXT.ques}
      url={CONTACT_TEXT.imgUrl}
      isImageLeft={false}
    />
    <div className="contact-section">
      <div className="contact-inner">
        <div className="contact-grid">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
          >
            <h2 className="contact-heading">
              Get In <span>Touch</span>
            </h2>
            <p className="contact-text">
              I'm always open to discussing exciting projects, career opportunities,
              or just a friendly chat about Android development, cloud, or mobile tech.
              Drop me a message and I'll get back to you!
            </p>
            <a href={`mailto:${CONTACT_TEXT.email}`} className="contact-email-btn">
              <MdEmail /> Say Hello
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.15 }}
          >
            <div className="social-cards">
              {SOCIAL_LINKS.map(({ href, icon, platform, handle, cardClass }) => (
                <a
                  key={platform}
                  href={href}
                  className={`social-card ${cardClass}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="social-card-icon">{icon}</span>
                  <div className="social-card-info">
                    <span className="social-card-platform">{platform}</span>
                    <span className="social-card-handle">/{handle}</span>
                  </div>
                </a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  </>
);

export default ContactMe;
