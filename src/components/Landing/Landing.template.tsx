import React from 'react';
import { Link } from 'react-router-dom';
import './Landing.scss';

const Landing = (screenWidthMobile: boolean, info2: any, info5: any, ID:any, onClick:any) => {
  return (
    <div className='LandingContainer'>
      <section className='LandingContainer__Navbar'>
        <div>
          <img src='/Landing/logo.svg' alt='logo' />
          <p>AI Powered Cloud Savings!</p>
        </div>
        <div>
          <Link
            to={screenWidthMobile ? '/auth' : '/signin'}
            className='LandingContainer__authBtn'
          >
            Signin
          </Link>
          <Link
            to={screenWidthMobile ? '/auth' : '/signup'}
            className='LandingContainer__authBtn'
          >
            Signup
          </Link>
        </div>
      </section>
      <section className='LandingContainer__Section1'>
        <h1>&#123;Save $ : Boost Productivity&#125;</h1>
        <p>Cloumize provides Cloud Savings as a Service to</p>
        <div>
          <Link
            to={screenWidthMobile ? '/auth' : '/signup'}
            className='LandingContainer__authBtn'
          >
            Signup
          </Link>
          <button>Contact Sales</button>
        </div>
        <p>Accelerated by</p>
        <div>
          <img src='/Landing/shuttle.svg' alt='shuttle' />
          <img src='/Landing/shuttle.svg' alt='shuttle' />
        </div>
        <img src='/Landing/dashboard.svg' alt='dashboard' />
      </section>
      <section className='LandingContainer__Section2'>
        <h2>HOW TO BENEFIT</h2>
        <h3>Slash your EC2 costs up to 60%*</h3>
        <p>
          In just few easy step, you are all set to manage your business
          finances. Manage all expenses with Cloumize all in one place.
        </p>
        <div>
          {info2.map((info: any) => (
            <div key={info.id}>
              <img src={info.img.src} alt={info.img.alt} />
              <h4>{info.title}</h4>
              <p>{info.content}</p>
            </div>
          ))}
        </div>
        <div>
          <Link
            to={screenWidthMobile ? '/auth' : '/signup'}
            className='LandingContainer__authBtn'
          >
            Signup
          </Link>
          <button>Contact Sales</button>
        </div>
      </section>
      <section className='LandingContainer__Section3'>
        <div>
          <h2>HOW TO MONOTHERIZE</h2>
          <h3>Monitor and negotiate your transactions</h3>
          <p>
            Cloumize’s algorithm monitors your infrastructure and trades the
            most lucrative deals in real time
          </p>
          <Link
            to={screenWidthMobile ? '/auth' : '/signup'}
            className='LandingContainer__authBtn'
          >
            Signup
          </Link>
        </div>
        <img src='/Landing/savingsFinder.svg' alt='Savings Finder' />
      </section>
      <section className='LandingContainer__Section4'>
        <img src='/Landing/incentives.svg' alt='Savings Finder' />
        <div>
          <h2>HOW TO HAVE INCENTIVES</h2>
          <h3>Aligned with a success fee-revenue incentive</h3>
          <p>
            Cloumize’s algorithm monitors your infrastructure and trades the
            most lucrative deals in real time
          </p>
          <Link
            to={screenWidthMobile ? '/auth' : '/signup'}
            className='LandingContainer__authBtn'
          >
            Signup
          </Link>
        </div>
      </section>
      <section className='LandingContainer__Section5'>
        <h2>HOW TO REGISTER</h2>
        <h3>Few Easy Steps and Done</h3>
        <p>
          In just few easy step, you are all set to manage your business
          finances.Manage all expenses with Cloumize all in one place.
        </p>
        {info5.map((info: any) => (
          <div key={info.id}>
            <img src={info.img.src} alt={info.img.alt} />
            <p>{info.content}</p>
          </div>
        ))}
        <div>
          <Link
            to={screenWidthMobile ? '/auth' : '/signup'}
            className='LandingContainer__authBtn'
          >
            Signup
          </Link>
          <button>Contact Sales</button>
        </div>
      </section>
      <section className='LandingContainer__Section5'>
        <h2>Frequently Asked Questions</h2>
        <div>
          <button id='0' onClick={onClick}>What is a Payment Gateway?</button>
          <button id='1' onClick={onClick}>Do I need to pay to Instapay even when there is no transaction going on in my business?</button>
          <button id='2' onClick={onClick}>What platforms does ACME payment gateway support?</button>
          <button id='3' onClick={onClick}>Does ACME provide international payments support?</button>
          <button id='4' onClick={onClick}>Is there any setup fee or annual maintainance fee that I need to pay regularly?</button>
        </div>
        <div>
          {Number(ID) === 0 && <div>
            <p>What is a Payment Gateway?</p>
            <p>No, you do not need to pay Instapay where there is no transaction happening. With one of the lowest transaction charges in the industry, pay only when you get paid!</p>
            </div>}
          {Number(ID) === 1 && <div>
            <p>Do I need to pay to Instapay even when there is no transaction going on in my business?</p>
            <p>No, you do not need to pay Instapay where there is no transaction happening. With one of the lowest transaction charges in the industry, pay only when you get paid!</p>
            </div>}
          {Number(ID) === 2 && <div>
            <p>What platforms does ACME payment gateway support?</p>
            <p>No, you do not need to pay Instapay where there is no transaction happening. With one of the lowest transaction charges in the industry, pay only when you get paid!</p>
            </div>}
          {Number(ID) === 3 && <div>
            <p>Does ACME provide international payments support?</p>
            <p>No, you do not need to pay Instapay where there is no transaction happening. With one of the lowest transaction charges in the industry, pay only when you get paid!</p>
            </div>}
          {Number(ID) === 4 && <div>
            <p>Is there any setup fee or annual maintainance fee that I need to pay regularly?</p>
            <p>No, you do not need to pay Instapay where there is no transaction happening. With one of the lowest transaction charges in the industry, pay only when you get paid!</p>
            </div>}
        </div>
      </section>
      <footer className='LandingContainer__Footer'>
      <div>
          <img src='/Landing/logo.svg' alt='logo' />
          <div>
          <Link to="">How to benefit</Link>
          <Link to="">How to monotherize</Link>
          <Link to="">How to have incentives</Link>
          <Link to="">How to register</Link>
            </div>
        </div>
        <div>
          <p>AI Powered Cloud Savings!</p>
          <div>
            <a href="/"><img src="" alt=""/></a>
            <a href="/"><img src="" alt=""/></a>
            <a href="/"><img src="" alt=""/></a>
            <a href="/">Hola@cloumize.com</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Landing;
