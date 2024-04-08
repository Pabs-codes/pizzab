import React from 'react';
import DesktopGIF from '../AssetsN/Desktop_GIF.gif'; // Import the GIF file

const GifDiv = () => {
  return (
    <div className="gif-container">
      <img src={DesktopGIF} alt="Desktop GIF" className="gif-image" />
    </div>
  );
};

export default GifDiv;
