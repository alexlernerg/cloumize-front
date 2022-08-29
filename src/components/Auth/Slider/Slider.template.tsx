import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { Link } from 'react-router-dom';
import './Slider.scss';

const Slider = (screenWidthMobile:boolean) => {
  return (
    <div className='SliderContainer'>
      <Carousel showArrows={false} showStatus={false} showThumbs={false} swipeable>
        <div>
          <img src={screenWidthMobile ? '/Auth/slider1Mob.svg' : '/Auth/slider1.svg'} alt='auth' className='SliderContainer__img'/>
          {screenWidthMobile && <div className='SliderContainer__buttonsAuth'>
            <Link to="/signin" className='SliderContainer__buttonsAuth-signinBtn'>Sign in</Link>
            <Link to="/signup" className='SliderContainer__buttonsAuth-signupBtn'>Sign up</Link>
          </div>}
        </div>
        <div>
          <img src={screenWidthMobile ? '/Auth/slider2Mob.svg' : '/Auth/slider2.svg'} alt='auth' className='SliderContainer__img'/>
          {screenWidthMobile && <div className='SliderContainer__buttonsAuth'>
            <Link to="/signin" className='SliderContainer__buttonsAuth-signinBtn'>Sign in</Link>
            <Link to="/signup" className='SliderContainer__buttonsAuth-signupBtn'>Sign up</Link>
          </div>}
        </div>
        <div>
          <img src={screenWidthMobile ? '/Auth/slider3Mob.svg' : '/Auth/slider3.svg'} alt='auth' className='SliderContainer__img'/>
          {screenWidthMobile && <div className='SliderContainer__buttonsAuth'>
            <Link to="/signin" className='SliderContainer__buttonsAuth-signinBtn'>Sign in</Link>
            <Link to="/signup" className='SliderContainer__buttonsAuth-signupBtn'>Sign up</Link>
          </div>}
        </div>
      </Carousel>
    </div>
  );
};

export default Slider;
