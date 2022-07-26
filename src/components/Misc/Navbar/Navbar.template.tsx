import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.scss';

const Navbar = () => {
  return <div className='NavbarContainer'>
    <div className='NavbarContainer__routing'>
      <div className='NavbarContainer__routing-logo'>
        <img src="./Misc/Navbar/logo.svg" alt="logo" />
        <hr className='NavbarContainer__routing-hr'/>
      </div>
      <ul className='NavbarContainer__routing-list'>
        <li><Link to="/user">Dashboard</Link></li>
        <li><Link to="/user/savingsFinder">Savings Finder</Link></li>
        <li><Link to="/user/computeFinder">Compute Finder</Link></li>
        <li><Link to="/user/existingPlans">Existing Plans</Link></li>
        <li><Link to="/user/savingsPlans">Savings Plans</Link></li>
        <li><Link to="/user/account">Account</Link></li>
      </ul>
    </div>
    <div className='NavbarContainer__user'>
      <p>Settings Profile</p>
      <hr/>
      <div>
        <img src="" alt="avatar"/>
        <div>
          <p>Charlie Bergson</p>
          <p>Charliebergson@cloumize.com</p>
        </div>
        <Link to="/user/:id"><img src="./Misc/Navbar/settings.svg" alt="settings"/></Link>
      </div>
    </div>
  </div>;
};

export default Navbar;