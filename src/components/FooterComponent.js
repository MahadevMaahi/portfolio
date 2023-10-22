import React from 'react';
import { Row, Col } from "reactstrap";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { FaCode } from "react-icons/fa";
import { CONTACT_TEXT } from '../shared/SummaryData';

const Description = () => {
  return(
      <h5>Designed and Developed by Badini Sai Mahadev</h5>
  );
}

const CopyRight = () => {
  let date = new Date();
  let year = date.getFullYear();
  return(
    <h5>Copyright © {year} SM</h5>
  );
}

const ContactLinks = ({ghLink, lnLink, lcLink}) => {

  return(
    <Row>
      <Col md="4">
      <a
                href={ghLink}
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <AiFillGithub />
              </a>
      </Col>
      <Col md="4">
      <a
        href={lnLink}
        style={{ color: "white" }}
        target="_blank" 
        rel="noopener noreferrer"
      >
        <FaLinkedinIn />
      </a>
      </Col>
      <Col md="4">
      <a
        href={lcLink}
        style={{ color: "white" }}
        target="_blank" 
        rel="noopener noreferrer"
      >
        <FaCode />
      </a>
      </Col>
    </Row>
  );
}

const FooterRow = () => {
  return(
    <>
      <Col md="6" className="footer-copywright">
        <Description />
      </Col>
      <Col md="4" className="footer-copywright">
        <CopyRight />
      </Col>
      <Col md="2" className="footer-copywright">
        <ContactLinks ghLink={CONTACT_TEXT.ghLink} lnLink={CONTACT_TEXT.lnLink} lcLink={CONTACT_TEXT.lcLink}/>
      </Col>
    </>
  );
}

function Footer() {
  return (
    <Row fluid className="footer fixed-bottom">
      <FooterRow />
    </Row>
  );
}

export default Footer;