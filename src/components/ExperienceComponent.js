import React from 'react';
import { motion } from 'framer-motion';
import Summary from './SummaryComponent';
import { EXPERIENCE_TEXT } from '../shared/SummaryData';

const TimelineItem = ({ exp, index }) => (
  <motion.div
    className="timeline-item"
    initial={{ opacity: 0, x: -30 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true, margin: '-60px' }}
    transition={{ duration: 0.55, delay: index * 0.15 }}
  >
    <div className={`timeline-dot ${exp.dotClass}`} />
    <div className="timeline-content">
      <div className="timeline-header">
        <span className="timeline-company">{exp.company}</span>
        <span className="timeline-period">{exp.period}</span>
      </div>
      <div className="timeline-role">{exp.role}</div>
      <div className="timeline-location">📍 {exp.location}</div>
      <ul className="timeline-bullets">
        {exp.description.map((point, i) => (
          <li key={i}>{point}</li>
        ))}
      </ul>
      <div className="tech-tags">
        {exp.tech.map((tag) => (
          <span key={tag} className="tech-tag">{tag}</span>
        ))}
      </div>
    </div>
  </motion.div>
);

const Experience = () => (
  <>
    <Summary
      info={EXPERIENCE_TEXT.text}
      ques={EXPERIENCE_TEXT.ques}
      url={EXPERIENCE_TEXT.imgUrl}
      isImageLeft
    />
    <div className="experience-section">
      <div className="experience-inner">
        <h2 className="section-heading">Work Experience</h2>
        <div className="timeline">
          {EXPERIENCE_TEXT.experiences.map((exp, index) => (
            <TimelineItem key={exp.id} exp={exp} index={index} />
          ))}
        </div>
      </div>
    </div>
  </>
);

export default Experience;
