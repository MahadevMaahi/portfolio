import React from 'react';
import { motion } from 'framer-motion';
import Summary from './SummaryComponent';
import { CERTIFICATIONS_TEXT } from '../shared/SummaryData';
import PortfolioImage from './UrlImageComponent';
import { MdVerified } from 'react-icons/md';

const FeaturedCertCard = ({ cert, index }) => (
  <motion.a
    href={cert.link}
    className="cert-card-featured"
    target="_blank"
    rel="noopener noreferrer"
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
  >
    <PortfolioImage url={cert.url} alt={cert.alt} className="cert-logo-featured" />
    <div className="cert-name-featured">{cert.description}</div>
    <span className="cert-verified-badge">
      <MdVerified /> Verified
    </span>
  </motion.a>
);

const CertCard = ({ cert, index }) => (
  <motion.a
    href={cert.link}
    className="cert-card"
    target="_blank"
    rel="noopener noreferrer"
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.45, delay: index * 0.08 }}
  >
    <PortfolioImage url={cert.url} alt={cert.alt} className="cert-logo" />
    <div className="cert-name">{cert.description}</div>
  </motion.a>
);

const Certifications = () => {
  const awsCerts = CERTIFICATIONS_TEXT.certificationSet.filter((c) =>
    c.alt.startsWith('AWS')
  );
  const courseraeCerts = CERTIFICATIONS_TEXT.certificationSet.filter(
    (c) => !c.alt.startsWith('AWS')
  );

  return (
    <>
      <Summary
        info={CERTIFICATIONS_TEXT.text}
        ques={CERTIFICATIONS_TEXT.ques}
        url={CERTIFICATIONS_TEXT.imgUrl}
        isImageLeft
      />
      <div className="content">
        <div className="content-inner">
          <div className="cert-section-label">AWS — Featured</div>
          <div className="cert-grid-featured">
            {awsCerts.map((cert, index) => (
              <FeaturedCertCard key={cert.description} cert={cert} index={index} />
            ))}
          </div>

          <div className="cert-section-label">Coursera Specializations</div>
          <div className="cert-grid">
            {courseraeCerts.map((cert, index) => (
              <CertCard key={cert.link} cert={cert} index={index} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Certifications;
