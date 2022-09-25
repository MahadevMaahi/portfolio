import React from 'react';
import Typewriter from 'typewriter-effect';
import { Row, Col, CardTitle, CardBody} from 'reactstrap';
import UrlImageComponent from './UrlImageComponent';

const Description = ({info, ques}) => {
    return(
        <div className='summary-text'>
            <CardTitle>{ques}</CardTitle>
            <CardBody>
                <Typewriter 
                    onInit={(typewriter) => {
                        typewriter.typeString(info).start()
                    }}/>
            </CardBody>
            </div>
    );
}

const getSummaryContent = (info, url, ques, isImageLeft) => {
    if(isImageLeft) {
        return(
            <Row>
                <Col xs={12} md={3} >
                    <UrlImageComponent url={url}/>
                </Col>
                <Col xs={12} md={9} >
                    <Description info={info} ques={ques}/>
                </Col>
            </Row>
        );
    } else {
        return(
            <Row>
                <Col xs={12} md={9} >
                    <Description info={info} ques={ques}/>
                </Col>
                <Col xs={12} md={3} >
                    <UrlImageComponent url={url}/>
                </Col>
            </Row>
        );
    }
}

const Summary = ({info, url="", ques="", isImageLeft=true}) => {
    return(
        <div className='jumbotron'>
            {getSummaryContent(info, url, ques, isImageLeft)}
        </div>
    );
}

export default Summary;