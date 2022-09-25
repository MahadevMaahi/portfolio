import React from 'react';
import Summary from './SummaryComponent';
import { ABOUT_TEXT } from '../shared/SummaryData';
import { Card, CardBody, CardTitle, Row, Col } from 'reactstrap';

const AboutCard = ({data}) => {
    return(
        <Col xs={12} md={6} lg={3}>
            <Card className='about-card'>
                <CardTitle className='text-heading'>{data.ques}</CardTitle>
                <CardBody>{data.ans}</CardBody>
            </Card>
        </Col>
    );
}

const AboutContent = ({aboutData}) => {
    const info = aboutData.map((data) => 
            <AboutCard data={data} />
    )
    return(
        <div className='content'>
            <Row className='content-row'>{info}</Row>
        </div>
    );
}

const About = () => {
    return(
        <>
            <Summary info={ABOUT_TEXT.text} ques={ABOUT_TEXT.ques} url={ABOUT_TEXT.imgUrl} isImageLeft={false}/>
            <AboutContent aboutData={ABOUT_TEXT.aboutData}/>
        </>
    );
}

export default About;