import React, { useState } from 'react';

const PortfolioImage = ({ url = '', alt = '', className = '' }) => {
  const [hasError, setHasError] = useState(false);

  if (hasError || !url) {
    return <div className={`img-placeholder ${className}`} aria-label={alt} />;
  }

  return (
    <img
      src={url}
      alt={alt}
      className={className}
      onError={() => setHasError(true)}
      loading="lazy"
    />
  );
};

export default PortfolioImage;
