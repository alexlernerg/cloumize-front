import React from 'react';
import Navbar from '../../Misc/Navbar/Navbar';
import './User.scss';

const User = () => {
  return <div className='UserContainer'>
    <Navbar onBoarding={false}/>
    <div>User</div>
  </div>;
};

export default User;