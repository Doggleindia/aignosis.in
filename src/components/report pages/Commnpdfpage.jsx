import React, { useEffect, useState } from 'react';

const Commnpdfpage = ({ src, alttext }) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src = src;
    img.crossOrigin = 'anonymous'; // Allow CORS for html2canvas
    img.onload = () => setImageLoaded(true);
  }, [src]);

  return (
    <div className="flex min-h-screen flex-col flex-wrap items-center bg-gray-100 p-8">
      <div className="pdf-page flex h-[297mm] w-[210mm] flex-wrap items-center justify-center rounded-md bg-white p-8 shadow-md">
        {imageLoaded ? (
          <img src={src} alt={alttext} className="pdf-image h-auto w-full" crossOrigin="anonymous" />
        ) : (
          <p>Loading Image...</p>
        )}
      </div>
    </div>
  );
};

export default Commnpdfpage;
