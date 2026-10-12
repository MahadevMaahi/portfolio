import React from 'react';
import { motion } from 'framer-motion';
import Summary from './SummaryComponent';
import { SKILLS_TEXT } from '../shared/SummaryData';
import PortfolioImage from './UrlImageComponent';

const LEVEL_BADGE = {
  ADVANCED: 'badge-advanced',
  INTERMEDIATE: 'badge-intermediate',
  BEGINNER: 'badge-beginner',
};

const LEVEL_ORDER = ['ADVANCED', 'INTERMEDIATE', 'BEGINNER'];

const SkillCard = ({ skill, index }) => (
  <motion.div
    className="skill-card"
    initial={{ opacity: 0, scale: 0.9 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true, margin: '-40px' }}
    transition={{ duration: 0.4, delay: index * 0.07 }}
  >
    <PortfolioImage url={skill.url} alt={skill.alt} className="skill-icon" />
    <span className="skill-name">{skill.alt}</span>
    <span className={LEVEL_BADGE[skill.level]}>{skill.level}</span>
  </motion.div>
);

const SkillSet = () => {
  const grouped = LEVEL_ORDER.reduce((acc, level) => {
    acc[level] = SKILLS_TEXT.skillSet.filter((s) => s.level === level);
    return acc;
  }, {});

  return (
    <>
      <Summary
        info={SKILLS_TEXT.text}
        ques={SKILLS_TEXT.ques}
        url={SKILLS_TEXT.imgUrl}
        isImageLeft
      />
      <div className="content">
        <div className="content-inner">
          {LEVEL_ORDER.map((level) => (
            <div key={level} className="skill-group">
              <div className="skill-group-label">{level}</div>
              <div className="content-grid content-grid-4">
                {grouped[level].map((skill, index) => (
                  <SkillCard key={skill.alt} skill={skill} index={index} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default SkillSet;
