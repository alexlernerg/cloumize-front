import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.scss';

const Routing = ({ pathname, screenWidthMobile, OnBoarding }: any) => {
  return (
    <ul className='Routing__list'>
      {pathname === '/user' ? (
        <li className='Routing__list-white'>
          <Link to='/user' className={`${OnBoarding ? 'disabled' : ''}`}>
            <img src='/Misc/Navbar/dashBlue.svg' alt='Dashboard' />
            {!screenWidthMobile && <p style={{margin: 0}}>Dashboard</p>}
          </Link>
        </li>
      ) : (
        <li className='Routing__list-blue'>
          <Link to='/user' className={`${OnBoarding ? 'disabled' : ''}`}>
            <img src='/Misc/Navbar/dashWhite.svg' alt='Dashboard' />
            {!screenWidthMobile && <p style={{margin: 0}}>Dashboard</p>}
          </Link>
        </li>
      )}
      {pathname === '/user/savingsFinder' ? (
        <li className='Routing__list-white'>
          <Link to='/user/savingsFinder' className={`${OnBoarding ? 'disabled' : ''}`}>
            <img src='/Misc/Navbar/SFBlue.svg' alt='Savings Finder' />
            {!screenWidthMobile && <p style={{margin: 0}}>Savings Finder</p>}
          </Link>
        </li>
      ) : (
        <li className='Routing__list-blue'>
          <Link to='/user/savingsFinder' className={`${OnBoarding ? 'disabled' : ''}`}>
            <img src='/Misc/Navbar/SFWhite.svg' alt='Savings Finder' />
            {!screenWidthMobile && <p style={{margin: 0}}>Savings Finder</p>}
          </Link>
        </li>
      )}
      {pathname === '/user/computeFinder' ? (
        <li className='Routing__list-white'>
          <Link to='/user/computeFinder' className={`${OnBoarding ? 'disabled' : ''}`}>
            <img src='/Misc/Navbar/CFBlue.svg' alt='Compute Finder' />
            {!screenWidthMobile && <p style={{margin: 0}}>Compute Finder</p>}
          </Link>
        </li>
      ) : (
        <li className='Routing__list-blue'>
          <Link to='/user/computeFinder' className={`${OnBoarding ? 'disabled' : ''}`}>
            <img src='/Misc/Navbar/CFWhite.svg' alt='Compute Finder' />
            {!screenWidthMobile && <p style={{margin: 0}}>Compute Finder</p>}
          </Link>
        </li>
      )}
      {pathname === '/user/existingPlans' ? (
        <li className='Routing__list-white'>
          <Link to='/user/existingPlans' className={`${OnBoarding ? 'disabled' : ''}`}>
            <img src='/Misc/Navbar/EPBlue.svg' alt='Existing Plans' />
            {!screenWidthMobile && <p style={{margin: 0}}>Reserved Instance Plans</p>}
          </Link>
        </li>
      ) : (
        <li className='Routing__list-blue'>
          <Link to='/user/existingPlans' className={`${OnBoarding ? 'disabled' : ''}`}>
            <img src='/Misc/Navbar/EPWhite.svg' alt='Existing Plans' />
            {!screenWidthMobile && <p style={{margin: 0}}>Reserved Instance Plans</p>}
          </Link>
        </li>
      )}
      {pathname === '/user/savingsPlans' ? (
        <li className='Routing__list-white'>
          <Link to='/user/savingsPlans' className={`${OnBoarding ? 'disabled' : ''}`}>
            <img src='/Misc/Navbar/SPBlue.svg' alt='Savings Plans' />
            {!screenWidthMobile && <p style={{margin: 0}}>Savings Plans</p>}
          </Link>
        </li>
      ) : (
        <li className='Routing__list-blue'>
          <Link to='/user/savingsPlans' className={`${OnBoarding ? 'disabled' : ''}`}>
            <img src='/Misc/Navbar/SPWhite.svg' alt='Savings Plans' />
            {!screenWidthMobile && <p style={{margin: 0}}>Savings Plans</p>}
          </Link>
        </li>
      )}
      {pathname === '/user/account' ? (
        <li className='Routing__list-white'>
          <Link to='/user/account' className={`${OnBoarding ? 'disabled' : ''}`}>
            <img src='/Misc/Navbar/AccountBlue.svg' alt='Account' />
            {!screenWidthMobile && <p style={{margin: 0}}>Account</p>}
          </Link>
        </li>
      ) : (
        <li className='Routing__list-blue'>
          <Link to='/user/account' className={`${OnBoarding ? 'disabled' : ''}`}>
            <img src='/Misc/Navbar/AccountWhite.svg' alt='Account' />
            {!screenWidthMobile && <p style={{margin: 0}}>Account</p>}
          </Link>
        </li>
      )}
    </ul>
  );
};

const Navbar = (pathname: string, screenWidthMobile: boolean, OnBoarding:boolean, currentUser:any) => {
  return (
    <div className='NavbarContainer'>
      <div className='NavbarContainer__routing'>
        <div className='NavbarContainer__routing-logo'>
        {!screenWidthMobile ? <img src='/Misc/Navbar/logo.svg' alt='logo' /> : <img src='/Misc/Navbar/logo2.svg' alt='logo' />}
          <hr className='NavbarContainer__routing-hr' />
        </div>
        <Routing pathname={pathname} screenWidthMobile={screenWidthMobile} OnBoarding={OnBoarding}/>
      </div>
      <div className='NavbarContainer__user'>
        {!screenWidthMobile && (
          <p className='NavbarContainer__user-settings'>Settings Profile</p>
        )}
        <div className='NavbarContainer__user-info'>
          {!screenWidthMobile && (
            <>
              <div className='NavbarContainer__user-name'>
                <p>{currentUser?.company_name}</p>
                <p>{currentUser?.user_name}</p>
                <p>{currentUser?.email}</p>
              </div>
            </>
          )}
          <Link to='/user/:id' className={`NavbarContainer__user-settingsImg ${OnBoarding ? 'disabled' : ''}`}>
            <img src='/Misc/Navbar/settings.svg' alt='settings' />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
