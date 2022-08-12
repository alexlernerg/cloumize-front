import React from 'react';
import { Link } from 'react-router-dom';
import './Landing.scss';

const Faqs = ({ID, onClick}:any) => {
  console.log("ID", ID)
  return (
    <section className='LandingContainer__Section6'>
      <h2 className='LandingContainer__Section6-title'>
        Frequently Asked Questions
      </h2>
      <div className='LandingContainer__Section6-content'>
        <div className='LandingContainer__Section6-questions'>
          <div
            className={`${
              Number(ID) === 0 &&
              'LandingContainer__Section6-questions__selected'
            }`}
          >
            <article>
              <span>01</span>
              <p>What is a Payment Gateway?</p>
            </article>
            <button
              id='0'
              onClick={onClick}
              className={`${
                Number(ID) === 0 &&
                'LandingContainer__Section6-questions__btnSelected'
              }`}
            >
              &#62;
            </button>
          </div>
          <div
            className={`${
              Number(ID) === 1 &&
              'LandingContainer__Section6-questions__selected'
            }`}
          >
            <article>
              <span>02</span>
              <p>
                Do I need to pay to Instapay even when there is no transaction
                going on in my business?
              </p>
            </article>
            <button
              id='1'
              onClick={onClick}
              className={`${
                Number(ID) === 1 &&
                'LandingContainer__Section6-questions__btnSelected'
              }`}
            >
              &#62;
            </button>
          </div>
          <div
            className={`${
              Number(ID) === 2 &&
              'LandingContainer__Section6-questions__selected'
            }`}
          >
            <article>
              <span>03</span>
              <p>What platforms does ACME payment gateway support?</p>
            </article>
            <button
              id='2'
              onClick={onClick}
              className={`${
                Number(ID) === 2 &&
                'LandingContainer__Section6-questions__btnSelected'
              }`}
            >
              &#62;
            </button>
          </div>
          <div
            className={`${
              Number(ID) === 3 &&
              'LandingContainer__Section6-questions__selected'
            }`}
          >
            <article>
              <span>04</span>
              <p>Does ACME provide international payments support?</p>
            </article>
            <button
              id='3'
              onClick={onClick}
              className={`${
                Number(ID) === 3 &&
                'LandingContainer__Section6-questions__btnSelected'
              }`}
            >
              &#62;
            </button>
          </div>
          <div
            className={`${
              Number(ID) === 4 &&
              'LandingContainer__Section6-questions__selected'
            }`}
          >
            <article>
              <span>05</span>
              <p>
                Is there any setup fee or annual maintainance fee that I need to
                pay regularly?
              </p>
            </article>
            <button
              id='4'
              onClick={onClick}
              className={`${
                Number(ID) === 4 &&
                'LandingContainer__Section6-questions__btnSelected'
              }`}
            >
              &#62;
            </button>
          </div>
        </div>
        <div className='LandingContainer__Section6-answers'>
          {Number(ID) === 0 && (
            <div>
              <p className='LandingContainer__Section6-answers__title'>
                What is a Payment Gateway?
              </p>
              <p className='LandingContainer__Section6-answers__content'>
                No, you do not need to pay Instapay where there is no
                transaction happening. With one of the lowest transaction
                charges in the industry, pay only when you get paid!
              </p>
            </div>
          )}
          {Number(ID) === 1 && (
            <div>
              <p className='LandingContainer__Section6-answers__title'>
                Do I need to pay to Instapay even when there is no transaction
                going on in my business?
              </p>
              <p className='LandingContainer__Section6-answers__content'>
                No, you do not need to pay Instapay where there is no
                transaction happening. With one of the lowest transaction
                charges in the industry, pay only when you get paid!
              </p>
            </div>
          )}
          {Number(ID) === 2 && (
            <div>
              <p className='LandingContainer__Section6-answers__title'>
                What platforms does ACME payment gateway support?
              </p>
              <p className='LandingContainer__Section6-answers__content'>
                No, you do not need to pay Instapay where there is no
                transaction happening. With one of the lowest transaction
                charges in the industry, pay only when you get paid!
              </p>
            </div>
          )}
          {Number(ID) === 3 && (
            <div>
              <p className='LandingContainer__Section6-answers__title'>
                Does ACME provide international payments support?
              </p>
              <p className='LandingContainer__Section6-answers__content'>
                No, you do not need to pay Instapay where there is no
                transaction happening. With one of the lowest transaction
                charges in the industry, pay only when you get paid!
              </p>
            </div>
          )}
          {Number(ID) === 4 && (
            <div>
              <p className='LandingContainer__Section6-answers__title'>
                Is there any setup fee or annual maintainance fee that I need to
                pay regularly?
              </p>
              <p className='LandingContainer__Section6-answers__content'>
                No, you do not need to pay Instapay where there is no
                transaction happening. With one of the lowest transaction
                charges in the industry, pay only when you get paid!
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

const FaqsMob = ({ID, onClick}:any) => {
  return(
    <section className='LandingContainer__Section6'>
      <h2 className='LandingContainer__Section6-title'>
        Frequently Asked Questions
      </h2>
      <div className='LandingContainer__Section6-content'>
        <div className='LandingContainer__Section6-questions'>
          <div className={`${Number(ID) === 0 && 'LandingContainer__Section6-questions__selected'}`}>
            <article>
              <span>01</span>
              <p>What is a Payment Gateway?</p>
            </article>
            <button id='0' onClick={onClick} className={`${Number(ID) === 0 ? 'LandingContainer__Section6-questions__btnSelected' : 'rotate'}`}>v</button>
          </div>
          {Number(ID) === 0 && (
            <div>
              <p className='LandingContainer__Section6-answers__content'>
                No, you do not need to pay Instapay where there is no
                transaction happening. With one of the lowest transaction
                charges in the industry, pay only when you get paid!
              </p>
            </div>
          )}
          <div className={`${Number(ID) === 1 && 'LandingContainer__Section6-questions__selected'}`}>
            <article>
              <span>02</span>
              <p>
                Do I need to pay to Instapay even when there is no transaction
                going on in my business?
              </p>
            </article>
            <button id='1' onClick={onClick} className={`${Number(ID) === 1 ? 'LandingContainer__Section6-questions__btnSelected' : 'rotate'}`}>v</button>
          </div>
          {Number(ID) === 1 && (
            <div>
              <p className='LandingContainer__Section6-answers__content'>
                No, you do not need to pay Instapay where there is no
                transaction happening. With one of the lowest transaction
                charges in the industry, pay only when you get paid!
              </p>
            </div>
          )}
          <div className={`${Number(ID) === 2 && 'LandingContainer__Section6-questions__selected'}`}>
            <article>
              <span>03</span>
              <p>What platforms does ACME payment gateway support?</p>
            </article>
            <button id='2' onClick={onClick} className={`${Number(ID) === 2 ? 'LandingContainer__Section6-questions__btnSelected' : 'rotate'}`}>v</button>
          </div>
          {Number(ID) === 2 && (
            <div>
              <p className='LandingContainer__Section6-answers__content'>
                No, you do not need to pay Instapay where there is no
                transaction happening. With one of the lowest transaction
                charges in the industry, pay only when you get paid!
              </p>
            </div>
          )}
          <div className={`${Number(ID) === 3 && 'LandingContainer__Section6-questions__selected'}`}>
            <article>
              <span>04</span>
              <p>Does ACME provide international payments support?</p>
            </article>
            <button id='3' onClick={onClick} className={`${Number(ID) === 3 ? 'LandingContainer__Section6-questions__btnSelected' : 'rotate'}`}>v</button>
          </div>
          {Number(ID) === 3 && (
            <div>
              <p className='LandingContainer__Section6-answers__content'>
                No, you do not need to pay Instapay where there is no
                transaction happening. With one of the lowest transaction
                charges in the industry, pay only when you get paid!
              </p>
            </div>
          )}
          <div className={`${Number(ID) === 4 && 'LandingContainer__Section6-questions__selected'}`}>
            <article>
              <span>05</span>
              <p>Is there any setup fee or annual maintainance fee that I need to pay regularly?</p>
            </article>
            <button id='4' onClick={onClick} className={`${Number(ID) === 4 ? 'LandingContainer__Section6-questions__btnSelected' : 'rotate'}`}>v</button>
          </div>
          {Number(ID) === 4 && (
              <div>
                <p className='LandingContainer__Section6-answers__content'>
                  No, you do not need to pay Instapay where there is no
                  transaction happening. With one of the lowest transaction
                  charges in the industry, pay only when you get paid!
                </p>
              </div>
            )}
        </div>
      </div>
    </section>
  )
}

const Landing = (
  screenWidthMobile: boolean,
  info2: any,
  info5: any,
  ID: any,
  onClick: any
) => {
  return (
    <div className='LandingContainer'>
      <section className='LandingContainer__Navbar'>
        <div className='LandingContainer__Navbar-part1'>
          <img src='/Landing/logo.svg' alt='logo' />
          <p>AI Powered Cloud Savings!</p>
        </div>
        <div className='LandingContainer__Navbar-part2'>
          <a href='/' className='LandingContainer__Navbar-part2__medium'>
            {!screenWidthMobile ? 'Visita nuestro Blog' : 'Blog'}&nbsp;
            <img src='/Landing/mediumNav.svg' alt='medium' />
          </a>
          <Link
            to={screenWidthMobile ? '/auth' : '/signin'}
            className='LandingContainer__Navbar-part2__signin'
          >
            Login
          </Link>
          <Link
            to={screenWidthMobile ? '/auth' : '/signup'}
            className='LandingContainer__Navbar-part2__signup'
          >
            Signup
          </Link>
        </div>
      </section>
      <section className='LandingContainer__Section1'>
        <h1 className='LandingContainer__Section1-title'>
          &#123;Save $ : Boost Productivity&#125;
        </h1>
        <p className='LandingContainer__Section1-subtitle'>
          Cloumize provides Cloud Savings as a Service to
        </p>
        <div className='LandingContainer__Section1-btns'>
          <Link to={screenWidthMobile ? '/auth' : '/signup'}>Signup</Link>
          <button>Contact Sales</button>
        </div>
        <img src='/Landing/dashboard.svg' alt='dashboard' />
      </section>
      <section className='LandingContainer__Section2'>
        <h2 className='LandingContainer__Section2-title'>HOW TO BENEFIT</h2>
        <h3 className='LandingContainer__Section2-subtitle'>
          Slash your EC2 costs up to 60%*
        </h3>
        <p className='LandingContainer__Section2-content'>
          In just few easy step, you are all set to manage your business
          finances. Manage all expenses with Cloumize all in one place.
        </p>
        <div className='LandingContainer__Section2-cards'>
          {info2.map((info: any) => (
            <div key={info.id} className='LandingContainer__Section2-card'>
              <img src={info.img.src} alt={info.img.alt} />
              <h4 className='LandingContainer__Section2-card__title'>
                {info.title}
              </h4>
              <p className='LandingContainer__Section2-card__content'>
                {info.content}
              </p>
            </div>
          ))}
        </div>
        <div className='LandingContainer__Section2-btns'>
          <Link to={screenWidthMobile ? '/auth' : '/signup'}>Signup</Link>
          <button>Contact Sales</button>
        </div>
      </section>
      <section className='LandingContainer__Section3'>
        <div>
          <h2 className='LandingContainer__Section3-title'>
            HOW TO MONOTHERIZE
          </h2>
          <h3 className='LandingContainer__Section3-subtitle'>
            Monitor and negotiate your transactions
          </h3>
          <p className='LandingContainer__Section3-content'>
            Cloumize’s algorithm monitors your infrastructure and trades the
            most lucrative deals in real time
          </p>
          {!screenWidthMobile && (
            <Link to={screenWidthMobile ? '/auth' : '/signup'}>Signup</Link>
          )}
        </div>
        <img src='/Landing/savingsFinder.svg' alt='Savings Finder' />
        {screenWidthMobile && (
          <Link to={screenWidthMobile ? '/auth' : '/signup'}>Signup</Link>
        )}
      </section>
      <section className='LandingContainer__Section4'>
        {screenWidthMobile && (
          <Link to={screenWidthMobile ? '/auth' : '/signup'}>Signup</Link>
        )}
        <img src='/Landing/incentives.svg' alt='Savings Finder' />
        <div>
          <h2 className='LandingContainer__Section4-title'>
            HOW TO HAVE INCENTIVES
          </h2>
          <h3 className='LandingContainer__Section4-subtitle'>
            Aligned with a success fee-revenue incentive
          </h3>
          <p className='LandingContainer__Section4-content'>
            Cloumize’s algorithm monitors your infrastructure and trades the
            most lucrative deals in real time
          </p>
          {!screenWidthMobile && (
            <Link to={screenWidthMobile ? '/auth' : '/signup'}>Signup</Link>
          )}
        </div>
      </section>
      <section className='LandingContainer__Section5'>
        <h2 className='LandingContainer__Section5-title'>HOW TO REGISTER</h2>
        <h3 className='LandingContainer__Section5-subtitle'>
          Few Easy Steps and Done
        </h3>
        <p className='LandingContainer__Section5-content'>
          In just few easy step, you are all set to manage your business
          finances. Manage all expenses with Cloumize all in one place.
        </p>
        <div className='LandingContainer__Section5-cards'>
          {info5.map((info: any) => (
            <div key={info.id} className='LandingContainer__Section5-card'>
              <img src={info.img.src} alt={info.img.alt} />
              <p className='LandingContainer__Section5-card__content'>
                {info.content}
              </p>
            </div>
          ))}
        </div>
        {!screenWidthMobile && (
          <div className='LandingContainer__Section5-btns'>
            <Link to={screenWidthMobile ? '/auth' : '/signup'}>Signup</Link>
            <button>Contact Sales</button>
          </div>
        )}
      </section>
      {!screenWidthMobile ? <Faqs ID={ID} onClick={onClick}/> : <FaqsMob ID={ID} onClick={onClick}/>}
      <section className='LandingContainer__Section7'>
        <p>Accelerated by</p>
        <div className='LandingContainer__Section7-accelerated'>
          <img src='/Landing/shuttle.svg' alt='shuttle' />
          <img src='/Landing/shuttle.svg' alt='shuttle' />
        </div>
      </section>
      <footer className='LandingContainer__Footer'>
        <div className='LandingContainer__Footer-part1'>
          <img src='/Landing/logo.svg' alt='logo' />
          <p>AI Powered Cloud Savings!</p>
        </div>
        <div className='LandingContainer__Footer-part2'>
          <div className='LandingContainer__Footer-part2__links'>
            <Link to=''>How to benefit</Link>
            <Link to=''>How to monotherize</Link>
            <Link to=''>How to have incentives</Link>
            <Link to=''>How to register</Link>
          </div>
          <div className='LandingContainer__Footer-part2__sm'>
            <div>
              <a href='/'>
                <img src='/Landing/medium.svg' alt='medium' />
              </a>
              <a href='/'>
                <img src='/Landing/Twitter.svg' alt='twitter' />
              </a>
              <a href='/'>
                <img src='/Landing/Linkedin.svg' alt='linkedIn' />
              </a>
            </div>
            <a href='/'>Hola@cloumize.com</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Landing;
