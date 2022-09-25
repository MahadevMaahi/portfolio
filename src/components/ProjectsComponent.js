import React from 'react';
import Summary from './SummaryComponent';
import { PROJECTS_TEXT } from '../shared/SummaryData';

const ProjectContent = () => {
    return(
        <div className='content'>

        </div>
    );
}

const Projects = () => {
    return(
        <>
            <Summary info={PROJECTS_TEXT.text} ques={PROJECTS_TEXT.ques} url={PROJECTS_TEXT.imgUrl} isImageLeft={false} />
            <ProjectContent />
        </>
    );
}

export default Projects;