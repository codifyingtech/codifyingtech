import Lottie from 'lottie-react';
import NotFound from '../assets/animations/NotFound.json';

const Notfound = () => {
  return (
    <div style={{ width: '100%', maxWidth: '600px', margin: '0 auto' }}>
      <Lottie 
        animationData={NotFound} 
        loop={true} 
        style={{ width: '100%', height: 'auto' }} 
      />
    </div>
  );
};

export default Notfound;
