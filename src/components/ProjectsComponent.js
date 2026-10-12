import React from 'react';
import { motion } from 'framer-motion';
import Summary from './SummaryComponent';
import { PROJECTS_TEXT } from '../shared/SummaryData';
import { VscGithubAlt } from 'react-icons/vsc';
import { FiFolder } from 'react-icons/fi';

const ProjectCard = ({ project, index }) => (
  <motion.a
    href={project.link}
    className="project-card"
    target="_blank"
    rel="noopener noreferrer"
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: '-50px' }}
    transition={{ duration: 0.45, delay: index * 0.08 }}
  >
    <div className="project-card-header">
      <FiFolder className="project-folder-icon" />
      <VscGithubAlt className="project-github-icon" />
    </div>
    <div className="project-title">{project.title}</div>
    <p className="project-description">{project.description}</p>
  </motion.a>
);

const Projects = () => (
  <>
    <Summary
      info={PROJECTS_TEXT.text}
      ques={PROJECTS_TEXT.ques}
      url={PROJECTS_TEXT.imgUrl}
      isImageLeft={false}
    />
    <div className="content">
      <div className="content-inner">
        <h2 className="section-heading">Things I've built</h2>
        <div className="content-grid content-grid-3">
          {PROJECTS_TEXT.projectData.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </div>
  </>
);

export default Projects;
