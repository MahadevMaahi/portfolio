import React from 'react';
import Summary from './SummaryComponent';
import Typewriter from 'typewriter-effect';
import { Row, Col } from 'reactstrap';
import { HOME_TEXT } from '../shared/SummaryData';
import UrlImageComponent from './UrlImageComponent';

const HomeHeading = () => {
  return(
    <>
      <h1 className="heading">
        Hi There!{" "}
        <span className="wave" role="img" aria-labelledby="wave">
          👋🏻
        </span>
      </h1>
      <h1 className="heading-name">
          My Name is<strong className="main-name"> BADINI SAI MAHADEV</strong>, I'm a
      </h1>
    </>
  );
}

const HomeRoles = ({whoami}) => {
  return (
    <div className="type-text">
      <strong>
        <Typewriter 
        options={{
          strings: whoami,
          autoStart: true,
          loop: true,
          delay: 5,
          deleteSpeed: 5,
        }} />
      </strong>
    </div>
  );
}

const Introduction = ({whoami}) => {
  return(
    <>
      <HomeHeading />
      <HomeRoles whoami={whoami}/>
    </>
  );
}

const HomeContent = ({url, whoami}) => {
  return(
    <div className='content'>
      <Row>
        <Col md={7}>
          <Introduction whoami={whoami}/>
        </Col>
        <Col md={5}>
          <UrlImageComponent url={url} />
        </Col>
      </Row>
    </div>
  );
}

const Home = () => {
    return(
        <>
            <Summary info={HOME_TEXT.text} ques={HOME_TEXT.ques} url={HOME_TEXT.imgUrl} isImageLeft={true}/>
            <HomeContent url={HOME_TEXT.homeImgUrl} whoami={HOME_TEXT.whoami}/>
        </>
    );
}

export default Home;