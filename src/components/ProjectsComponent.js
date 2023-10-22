import React, { useState } from 'react';
import Summary from './SummaryComponent';
import { Row, Col, CardTitle, CardImg, Spinner, Card, CardBody } from 'reactstrap';
import { PROJECTS_TEXT } from '../shared/SummaryData';
import axios from 'axios';

const ProjectImageComponent = ({url="", alt="PHOTO"}) => {

    const [imageData, setImageData] = useState({});
    const [isImageLoaded, setIsImageLoaded] = useState(false);

    const getImageFromUrl = () => {
        axios.get(url, {
            responseType: 'blob'
          }).then((res) => {
            setImageData(res);
            setIsImageLoaded(true);
        });
    }

    if(isImageLoaded) {
        return(<CardImg src={URL.createObjectURL(imageData.data)} className="img-skill img-responsive rounded-circle m-auto" alt={alt}/>);
    } else {
        getImageFromUrl();
        return(<Spinner className='skill-spinner m-auto'/>);
    }
}

const ProjectCard = ({project}) => {
    return(
        <Col xs={12} md={6} lg={3}>
            <a href={project.link} className="project-links" target="_blank" rel='noreferrer'>
                <Card className='project-card'>
                    <ProjectImageComponent url={project.url} alt={project.alt}/>
                    <CardTitle className='text-heading'><bold>{project.title}</bold></CardTitle>
                    <CardBody>{project.description}</CardBody>
                </Card>
            </a>
        </Col>
    );
}

const ProjectContent = ({projectData=[]}) => {
    const info = projectData.map((project) => 
        <ProjectCard project={project} />
    )
    return(
        <div className='content'>
            <Row className='content-row'>{info}</Row>
        </div>
    );
}

const Projects = () => {
    return(
        <>
            <Summary info={PROJECTS_TEXT.text} ques={PROJECTS_TEXT.ques} url={PROJECTS_TEXT.imgUrl} isImageLeft={false} />
            <ProjectContent projectData={PROJECTS_TEXT.projectData}/>
        </>
    );
}

export default Projects;