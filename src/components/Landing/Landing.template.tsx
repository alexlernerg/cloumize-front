import React from 'react';
import { Button, OverlayTrigger, Tooltip } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Landing.scss';

const Landing = (screenWidthMobile: boolean) => {
  return <div className='LandingContainer'>
    <Link to={screenWidthMobile ? "/auth" : "/signin"} className='LandingContainer__authBtn'>Signin</Link>
    <Link to={screenWidthMobile ? "/auth" : "/signup"} className='LandingContainer__authBtn'>Signup</Link>
  </div>;
};

export default Landing;