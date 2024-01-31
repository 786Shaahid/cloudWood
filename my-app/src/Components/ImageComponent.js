// ImageComponent.js
import React from 'react';
import { images } from '../images'; // Import array of image URLs
import {  useSelector } from 'react-redux';


const ImageComponent = () => {
  const currentIndex = useSelector(state => state.currentIndex);
   
  return (
    <div className="image-container">
    <img src={images[currentIndex]} alt={`img $[currentIndex]`} />
    <div className="img-count">
      {`${currentIndex + 1} /${images.length}`}
    </div>
  </div>
  );
};

export default ImageComponent;