import React from 'react';
import { useDispatch } from 'react-redux';
import { nextImage, prevImage } from '../redux/actions/actions';

const NavigationComponent = () => {
  const dispatch = useDispatch();

  const handleNext = () => {
    dispatch(nextImage());
  };

  const handlePrev = () => {
    dispatch(prevImage());
  };

  return (
    <div className="button-container">
      <button onClick={handlePrev} className='btn'>Back</button>
      <button onClick={handleNext} className='btn'>Next</button>
    </div>
  );
};

export default NavigationComponent;