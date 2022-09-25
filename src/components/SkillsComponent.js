import React, { useState } from 'react';
import Summary from './SummaryComponent';
import { SKILLS_TEXT } from '../shared/SummaryData';
import { Row, Col, CardTitle, CardImg, Spinner } from 'reactstrap';
import axios from 'axios';

const SkillImageComponent = ({url="", alt="PHOTO"}) => {

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
        return(<CardImg src={URL.createObjectURL(imageData.data)} className="img-skill img-responsive rounded-circle" alt={alt}/>);
    } else {
        getImageFromUrl();
        return(<Spinner className='skill-spinner'/>);
    }
}

const SkillCard = ({skill}) => {
    return(
        <Col xs={12} md={6} lg={3}>
            <SkillImageComponent url={skill.url} alt={skill.alt}/>
            <CardTitle className='text-heading'>
                <bold>{skill.level}</bold>
            </CardTitle>
        </Col>
    );
}

const SkillContent = ({skillSet=[]}) => {

    const info = skillSet.map((skill) => 
        <SkillCard skill={skill} />
    )

    return(
        <div className='content'>
            <Row className='content-row'>{info}</Row>
        </div>
    );
}

const SkillSet = () => {
    return(
        <>
            <Summary info={SKILLS_TEXT.text} ques={SKILLS_TEXT.ques} url={SKILLS_TEXT.imgUrl} isImageLeft={true} />
            <SkillContent skillSet={SKILLS_TEXT.skillSet}/>
        </>
    );
}

export default SkillSet;