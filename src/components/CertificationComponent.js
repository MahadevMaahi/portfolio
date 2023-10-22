import React, { useState } from 'react';
import Summary from './SummaryComponent';
import { CERTIFICATIONS_TEXT } from '../shared/SummaryData';
import { Row, Col, CardTitle, CardImg, Spinner, Card } from 'reactstrap';
import axios from 'axios';

const CertificateImageComponent = ({url="", alt="PHOTO"}) => {

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

const CertificateCard = ({certificate}) => {
    return(
        <Col xs={12} md={6} lg={3}>
            <a href={certificate.link} className="certificate-links" target="_blank" rel='noreferrer'>
                <Card className='certificate-card'>
                    <CertificateImageComponent url={certificate.url} alt={certificate.alt}/>
                    <CardTitle className='text-heading'>
                        <bold>{certificate.description}</bold>
                    </CardTitle>
                </Card>
            </a>
        </Col>
    );
}

const CertificationContent = ({certificates=[]}) => {
    const info = certificates.map((certificate) => 
        <CertificateCard certificate={certificate} />
    )
    return(
        <div className='content'>
            <Row className='content-row'>{info}</Row>
        </div>
    );
}

const Certifications = () => {
    return(
        <>
            <Summary info={CERTIFICATIONS_TEXT.text} ques={CERTIFICATIONS_TEXT.ques} url={CERTIFICATIONS_TEXT.imgUrl} isImageLeft={true} />
            <CertificationContent certificates={CERTIFICATIONS_TEXT.certificationSet}/>
        </>
    );
}

export default Certifications;