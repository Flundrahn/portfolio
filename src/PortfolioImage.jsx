import React from 'react';
import ProgressiveImage from 'react-progressive-graceful-image';

function PortfolioImage({
  className,
  src,
  placeholder,
  alt,
}) {
  return (
    <ProgressiveImage src={src} placeholder={placeholder}>
      {(progressiveSrc, loadingImg) => (
        <img
          className={`${className}${loadingImg ? ' image--loading' : ''}`}
          src={progressiveSrc}
          alt={alt}
        />
      )}
    </ProgressiveImage>
  );
}

export default PortfolioImage;
