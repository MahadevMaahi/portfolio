import React from 'react';
import PortfolioImage from './UrlImageComponent';

const Summary = ({ info, url = '', ques = '', isImageLeft = true }) => {
  const textBlock = (
    <div className="jumbotron-text">
      {ques && <div className="jumbotron-question">{ques}</div>}
      <p className="jumbotron-description">{info}</p>
    </div>
  );

  const imageBlock = (
    <div className="jumbotron-image-wrap">
      <PortfolioImage url={url} alt={ques} />
    </div>
  );

  return (
    <div className="jumbotron">
      <div className={`jumbotron-inner${isImageLeft ? ' image-left' : ''}`}>
        {isImageLeft ? (
          <>
            {imageBlock}
            {textBlock}
          </>
        ) : (
          <>
            {textBlock}
            {imageBlock}
          </>
        )}
      </div>
    </div>
  );
};

export default Summary;
