import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import './Slider.scss';

const Slider = () => {
  return (
    <div className='SliderContainer'>
      <Carousel showArrows={false} showStatus={false} showThumbs={false} swipeable>
        <div>
          <img src='./Auth/slider1.svg' alt='auth' className='SliderContainer__img'/>
        </div>
        <div>
          <img src='./Auth/slider2.svg' alt='auth' className='SliderContainer__img'/>
        </div>
        <div>
          <img src='./Auth/slider3.svg' alt='auth' className='SliderContainer__img'/>
        </div>
      </Carousel>
    </div>
  );
};

export default Slider;
