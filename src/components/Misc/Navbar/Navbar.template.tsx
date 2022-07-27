import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.scss';

const Routing = ({ pathname }: any) => {
  return (
    <ul className='Routing__list'>
      {pathname === '/user' ? (
        <li className='Routing__list-white'>
          <Link to='/user'>
            <img src='/Misc/Navbar/dashBlue.svg' alt='Dashboard' />
            Dashboard
          </Link>
        </li>
      ) : (
        <li className='Routing__list-blue'>
          <Link to='/user'>
            <img src='/Misc/Navbar/dashWhite.svg' alt='Dashboard' />
            Dashboard
          </Link>
        </li>
      )}
      {pathname === '/user/savingsFinder' ? (
        <li className='Routing__list-white'>
          <Link to='/user/savingsFinder'>
            <img src='/Misc/Navbar/SFBlue.svg' alt='Savings Finder' />
            Savings Finder
          </Link>
        </li>
      ) : (
        <li className='Routing__list-blue'>
          <Link to='/user/savingsFinder'>
            <img src='/Misc/Navbar/SFWhite.svg' alt='Savings Finder' />
            Savings Finder
          </Link>
        </li>
      )}
      {pathname === '/user/computeFinder' ? (
        <li className='Routing__list-white'>
          <Link to='/user/computeFinder'>
            <img src='/Misc/Navbar/CFBlue.svg' alt='Compute Finder' />
            Compute Finder
          </Link>
        </li>
      ) : (
        <li className='Routing__list-blue'>
          <Link to='/user/computeFinder'>
            <img src='/Misc/Navbar/CFWhite.svg' alt='Compute Finder' />
            Compute Finder
          </Link>
        </li>
      )}
      {pathname === '/user/existingPlans' ? (
        <li className='Routing__list-white'>
          <Link to='/user/existingPlans'>
            <img src='/Misc/Navbar/EPBlue.svg' alt='Existing Plans' />
            Existing Plans
          </Link>
        </li>
      ) : (
        <li className='Routing__list-blue'>
          <Link to='/user/existingPlans'>
            <img src='/Misc/Navbar/EPWhite.svg' alt='Existing Plans' />
            Existing Plans
          </Link>
        </li>
      )}
      {pathname === '/user/savingsPlans' ? (
        <li className='Routing__list-white'>
          <Link to='/user/savingsPlans'>
            <img src='/Misc/Navbar/SPBlue.svg' alt='Savings Plans' />
            Savings Plans
          </Link>
        </li>
      ) : (
        <li className='Routing__list-blue'>
          <Link to='/user/savingsPlans'>
            <img src='/Misc/Navbar/SPWhite.svg' alt='Savings Plans' />
            Savings Plans
          </Link>
        </li>
      )}
      {pathname === '/user/account' ? (
        <li className='Routing__list-white'>
          <Link to='/user/account'>
            <img src='/Misc/Navbar/AccountBlue.svg' alt='Account' />
            Account
          </Link>
        </li>
      ) : (
        <li className='Routing__list-blue'>
          <Link to='/user/account'>
            <img src='/Misc/Navbar/AccountWhite.svg' alt='Account' />
            Account
          </Link>
        </li>
      )}
    </ul>
  );
};

const Navbar = (pathname: string) => {
  return (
    <div className='NavbarContainer'>
      <div className='NavbarContainer__routing'>
        <div className='NavbarContainer__routing-logo'>
          <img src='/Misc/Navbar/logo.svg' alt='logo' />
          <hr className='NavbarContainer__routing-hr' />
        </div>
        <Routing pathname={pathname} />
      </div>
      <div className='NavbarContainer__user'>
        <p className='NavbarContainer__user-settings'>Settings Profile</p>
        <hr className='NavbarContainer__user-hr' />
        <div className='NavbarContainer__user-info'>
          <div className='NavbarContainer__user-avatar'>
            <img src='/Misc/Navbar/Avatar.png' alt='avatar' />
          </div>
          <div className='NavbarContainer__user-name'>
            <p>Charlie Bergson</p>
            <p>Charliebergson@cloumize.com</p>
          </div>
          <Link to='/user/:id' className='NavbarContainer__user-settingsImg'>
            <img src='/Misc/Navbar/settings.svg' alt='settings' />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
