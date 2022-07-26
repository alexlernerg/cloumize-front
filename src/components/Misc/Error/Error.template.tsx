import React from 'react';
import './Error.scss';

const Error = () => {
  return <div className='ErrorContainer'>
    <img className='ErrorContainer__image' src='./Misc/Error/Error.svg' alt='Error'/>
    <h6 className='ErrorContainer__title'>We're having trouble connecting with you. </h6>
    <p className='ErrorContainer__subtitle'>Visit us on our social networks!</p>
    <button className='ErrorContainer__button'>Visit us at our Linkedin</button>
  </div>;
};

export default Error;