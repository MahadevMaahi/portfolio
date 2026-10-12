import React from 'react';
import { motion } from 'framer-motion';
import Summary from './SummaryComponent';
import { ABOUT_TEXT } from '../shared/SummaryData';

const AboutCard = ({ data, index }) => (
  <motion.div
    className="about-card"
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: '-50px' }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
  >
    <div className="about-card-question">{data.ques}</div>
    <p className="about-card-answer">{data.ans}</p>
  </motion.div>
);

const About = () => (
  <>
    <Summary
      info={ABOUT_TEXT.text}
      ques={ABOUT_TEXT.ques}
      url={ABOUT_TEXT.imgUrl}
      isImageLeft={false}
    />
    <div className="content">
      <div className="content-inner">
        <h2 className="section-heading">A bit about me</h2>
        <div className="content-grid content-grid-4">
          {ABOUT_TEXT.aboutData.map((data, index) => (
            <AboutCard key={index} data={data} index={index} />
          ))}
        </div>
      </div>
    </div>
  </>
);

export default About;
