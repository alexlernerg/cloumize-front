import React from 'react';
import { Link } from 'react-router-dom';
import './Landing.scss';

const Landing = () => {
  return <div className='LandingContainer'>
    <Link to="/signin" className='LandingContainer__authBtn'>Signin</Link>
    <Link to="/signup" className='LandingContainer__authBtn'>Signup</Link>
  </div>;
};

export default Landing;