import React from 'react';
import Lottie from 'lottie-react';
import hero from '../assets/animations/hero.json';

const Animation = () => {
   return (
  
     <Lottie animationData={hero} loop={true} />

  );
};
export default Animation;