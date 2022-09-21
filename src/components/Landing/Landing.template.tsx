import React from 'react';
import { Link } from 'react-router-dom';
import './Landing.scss';

const Faqs = ({ ID, onClick }: any) => {
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
            id='0'
            onClick={onClick}
          >
            <article id='0' onClick={onClick}>
              <span id='0' onClick={onClick}>
                01
              </span>
              <p id='0' onClick={onClick}>
                How does the pricing model work?
              </p>
            </article>
            <button id='0' onClick={onClick}>
              {Number(ID) === 0 ? (
                <img id='0' src='/Landing/arrowBlue.svg' alt='Selected' />
              ) : (
                <img id='0' src='/Landing/arrowLight.svg' alt='No selected' />
              )}
            </button>
          </div>
          <div
            className={`${
              Number(ID) === 1 &&
              'LandingContainer__Section6-questions__selected'
            }`}
            id='1'
            onClick={onClick}
          >
            <article id='1' onClick={onClick}>
              <span id='1' onClick={onClick}>
                02
              </span>
              <p id='1' onClick={onClick}>
                How does the buy-back guarantee work?
              </p>
            </article>
            <button id='1' onClick={onClick}>
              {Number(ID) === 1 ? (
                <img id='1' src='/Landing/arrowBlue.svg' alt='Selected' />
              ) : (
                <img id='1' src='/Landing/arrowLight.svg' alt='No selected' />
              )}
            </button>
          </div>
          <div
            className={`${
              Number(ID) === 2 &&
              'LandingContainer__Section6-questions__selected'
            }`}
            id='2'
            onClick={onClick}
          >
            <article id='2' onClick={onClick}>
              <span id='2' onClick={onClick}>
                03
              </span>
              <p id='2' onClick={onClick}>
                What is my commitment period with Cloumize reservations?
              </p>
            </article>
            <button id='2' onClick={onClick}>
              {Number(ID) === 2 ? (
                <img id='2' src='/Landing/arrowBlue.svg' alt='Selected' />
              ) : (
                <img id='2' src='/Landing/arrowLight.svg' alt='No selected' />
              )}
            </button>
          </div>
          <div
            className={`${
              Number(ID) === 3 &&
              'LandingContainer__Section6-questions__selected'
            }`}
            id='3'
            onClick={onClick}
          >
            <article id='3' onClick={onClick}>
              <span id='3' onClick={onClick}>
                04
              </span>
              <p id='3' onClick={onClick}>
                How does the onboarding process work, and do I need engineering
                resources to set it up?
              </p>
            </article>
            <button id='3' onClick={onClick}>
              {Number(ID) === 3 ? (
                <img id='3' src='/Landing/arrowBlue.svg' alt='Selected' />
              ) : (
                <img id='3' src='/Landing/arrowLight.svg' alt='No selected' />
              )}
            </button>
          </div>
          <div
            className={`${
              Number(ID) === 4 &&
              'LandingContainer__Section6-questions__selected'
            }`}
            id='4'
            onClick={onClick}
          >
            <article id='4' onClick={onClick}>
              <span id='4' onClick={onClick}>
                05
              </span>
              <p id='4' onClick={onClick}>
                Will Cloumize interrupt my infrastructure or cause downtime?
              </p>
            </article>
            <button id='4' onClick={onClick}>
              {Number(ID) === 4 ? (
                <img id='4' src='/Landing/arrowBlue.svg' alt='Selected' />
              ) : (
                <img id='4' src='/Landing/arrowLight.svg' alt='No selected' />
              )}
            </button>
          </div>
        </div>
        <div className='LandingContainer__Section6-answers'>
          {Number(ID) === 0 && (
            <div>
              <p className='LandingContainer__Section6-answers__title'>
                How does the pricing model work?
              </p>
              <p className='LandingContainer__Section6-answers__content'>
                Cloumize charges upon success rate. At the end of each month,
                Cloumize will charge 25% of the achieved savings.
                <br />
                <br />
                For example, if your EC2 bill is $20,000 per month, and Cloumize
                reduces your costs to $12,000, achieved savings would be $8,000.
                Cloumize will charge $2,000, in line with the 25% fee.
                <br />
                <br />
                If Cloumize doesn't find savings, the product is free to use.
              </p>
            </div>
          )}
          {Number(ID) === 1 && (
            <div>
              <p className='LandingContainer__Section6-answers__title'>
                How does the buy-back guarantee work?
              </p>
              <p className='LandingContainer__Section6-answers__content'>
                Cloumize monitors the coverage and utilization of your EC2
                reservations, aiming for a 95%-100% coverage and 100%
                utilization.
                <br />
                <br />
                If you over-provisioned Reserved Instances purchased through
                Cloumize, the excess cost associated with AWS payment is
                refunded in the form of Cloumize credit on the following month's
                bill.
              </p>
            </div>
          )}
          {Number(ID) === 2 && (
            <div>
              <p className='LandingContainer__Section6-answers__title'>
                What is my commitment period with Cloumize reservations?
              </p>
              <p className='LandingContainer__Section6-answers__content'>
                With Cloumize, you don't have long-term commitments, so you can
                maximize savings without compromising flexibility. However,
                given the AWS marketplace rules, we cannot sell a Reserved
                Instance within the first 30 days of purchase.
                <br />
                <br />
                Cloumize constantly monitors your infrastructure and sells
                Reserved Instance when your usage drops. You can rest calmly,
                knowing you only pay for what you use.
              </p>
            </div>
          )}
          {Number(ID) === 3 && (
            <div>
              <p className='LandingContainer__Section6-answers__title'>
                How does the onboarding process work, and do I need engineering
                resources to set it up?
              </p>
              <p className='LandingContainer__Section6-answers__content'>
                You can sign up and start maximizing Cloumize in under 5 minutes
                with no extra engineering efforts. We have packaged all the
                requirements in a convenient CloudFormation template.
              </p>
            </div>
          )}
          {Number(ID) === 4 && (
            <div>
              <p className='LandingContainer__Section6-answers__title'>
                Will Cloumize interrupt my infrastructure or cause downtime?
              </p>
              <p className='LandingContainer__Section6-answers__content'>
                Cloumize works exclusively at the billing layer, meaning we
                cannot modify, start or terminate any of your existing
                instances.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

const FaqsMob = ({ ID, onClick }: any) => {
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
            id='0'
            onClick={onClick}
          >
            <article id='0' onClick={onClick}>
              <span id='0' onClick={onClick}>
                01
              </span>
              <p id='0' onClick={onClick}>
                How does the pricing model work?
              </p>
            </article>
            <button id='0' onClick={onClick}>
              {Number(ID) === 0 ? (
                <img id='0' src='/Landing/arrowUpBlue.svg' alt='Selected' />
              ) : (
                <img id='0' src='/Landing/arrowDownLight.svg' alt='No selected' />
              )}
            </button>
          </div>
          {Number(ID) === 0 && (
            <div>
              <p className='LandingContainer__Section6-answers__content'>
                Cloumize charges upon success rate. At the end of each month,
                Cloumize will charge 25% of the achieved savings.
                <br />
                <br />
                For example, if your EC2 bill is $20,000 per month, and Cloumize
                reduces your costs to $12,000, achieved savings would be $8,000.
                Cloumize will charge $2,000, in line with the 25% fee.
                <br />
                <br />
                If Cloumize doesn't find savings, the product is free to use.
              </p>
            </div>
          )}
          <div
            className={`${
              Number(ID) === 1 &&
              'LandingContainer__Section6-questions__selected'
            }`}
            id='1'
            onClick={onClick}
          >
            <article id='1' onClick={onClick}>
              <span id='1' onClick={onClick}>
                02
              </span>
              <p id='1' onClick={onClick}>
                How does the buy-back guarantee work?
              </p>
            </article>
            <button id='1' onClick={onClick}>
              {Number(ID) === 1 ? (
                <img id='1' src='/Landing/arrowUpBlue.svg' alt='Selected' />
              ) : (
                <img id='1' src='/Landing/arrowDownLight.svg' alt='No selected' />
              )}
            </button>
          </div>
          {Number(ID) === 1 && (
            <div>
              <p className='LandingContainer__Section6-answers__content'>
                Cloumize monitors the coverage and utilization of your EC2
                reservations, aiming for a 95%-100% coverage and 100%
                utilization.
                <br />
                <br />
                If you over-provisioned Reserved Instances purchased through
                Cloumize, the excess cost associated with AWS payment is
                refunded in the form of Cloumize credit on the following month's
                bill.
              </p>
            </div>
          )}
          <div
            className={`${
              Number(ID) === 2 &&
              'LandingContainer__Section6-questions__selected'
            }`}
            id='2'
            onClick={onClick}
          >
            <article id='2' onClick={onClick}>
              <span id='2' onClick={onClick}>
                03
              </span>
              <p id='2' onClick={onClick}>
                What is my commitment period with Cloumize reservations?
              </p>
            </article>
            <button id='2' onClick={onClick}>
              {Number(ID) === 2 ? (
                <img id='2' src='/Landing/arrowUpBlue.svg' alt='Selected' />
              ) : (
                <img id='2' src='/Landing/arrowDownLight.svg' alt='No selected' />
              )}
            </button>
          </div>
          {Number(ID) === 2 && (
            <div>
              <p className='LandingContainer__Section6-answers__content'>
                With Cloumize, you don't have long-term commitments, so you can
                maximize savings without compromising flexibility. However,
                given the AWS marketplace rules, we cannot sell a Reserved
                Instance within the first 30 days of purchase.
                <br />
                <br />
                Cloumize constantly monitors your infrastructure and sells
                Reserved Instance when your usage drops. You can rest calmly,
                knowing you only pay for what you use.
              </p>
            </div>
          )}
          <div
            className={`${
              Number(ID) === 3 &&
              'LandingContainer__Section6-questions__selected'
            }`}
            id='3'
            onClick={onClick}
          >
            <article id='3' onClick={onClick}>
              <span id='3' onClick={onClick}>
                04
              </span>
              <p id='3' onClick={onClick}>
                How does the onboarding process work, and do I need engineering
                resources to set it up?
              </p>
            </article>
            <button id='3' onClick={onClick}>
              {Number(ID) === 3 ? (
                <img id='3' src='/Landing/arrowUpBlue.svg' alt='Selected' />
              ) : (
                <img id='3' src='/Landing/arrowDownLight.svg' alt='No selected' />
              )}
            </button>
          </div>
          {Number(ID) === 3 && (
            <div>
              <p className='LandingContainer__Section6-answers__content'>
                You can sign up and start maximizing Cloumize in under 5 minutes
                with no extra engineering efforts. We have packaged all the
                requirements in a convenient CloudFormation template.
              </p>
            </div>
          )}
          <div
            className={`${
              Number(ID) === 4 &&
              'LandingContainer__Section6-questions__selected'
            }`}
            id='4'
            onClick={onClick}
          >
            <article id='4' onClick={onClick}>
              <span id='4' onClick={onClick}>
                05
              </span>
              <p id='4' onClick={onClick}>
                Will Cloumize interrupt my infrastructure or cause downtime?
              </p>
            </article>
            <button id='4' onClick={onClick}>
              {Number(ID) === 4 ? (
                <img id='4' src='/Landing/arrowUpBlue.svg' alt='Selected' />
              ) : (
                <img id='4' src='/Landing/arrowDownLight.svg' alt='No selected' />
              )}
            </button>
          </div>
          {Number(ID) === 4 && (
            <div>
              <p className='LandingContainer__Section6-answers__content'>
                Cloumize works exclusively at the billing layer, meaning we
                cannot modify, start or terminate any of your existing
                instances.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

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
          <img src='/Landing/logo.png' alt='logo' />
          <p>AI Powered Cloud Savings</p>
        </div>
        <div className='LandingContainer__Navbar-part2'>
          <a href='https://medium.com/@cloumize' target="_blank" rel="noreferrer" className='LandingContainer__Navbar-part2__medium'>
            {!screenWidthMobile ? 'Visit our Blog' : 'Blog'}&nbsp;
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
            Sign up
          </Link>
        </div>
      </section>
      <section className='LandingContainer__Section1'>
        <h1 className='LandingContainer__Section1-title'>
          Slash your EC2 costs up to 60%
        </h1>
        <p className='LandingContainer__Section1-subtitle'>
          There are two kinds of companies, those that work to try to charge
          more and those that work to charge less. <br style={{display: screenWidthMobile ? 'none' : "block"}}/>We will be the second. - Jeff
          Bezos
        </p>
        <div className='LandingContainer__Section1-btns'>
          <a href='https://form-cloumize.carrd.co/' target="_blank" rel="noreferrer" className='LandingContainer__Section1-btns-signup'>Sign up</a>
          <a href="https://calendly.com/alex-cloumize/cloumize-support" target="_blank" rel="noreferrer" className='LandingContainer__Section1-btns-contact'>Contact Sales</a>
        </div>
        <img src='/Landing/dashboard.png' alt='dashboard' />
      </section>
      <section className='LandingContainer__Section2'>
        <h2 className='LandingContainer__Section2-title'>Cloumize in Action</h2>
        {screenWidthMobile ?<h3 className='LandingContainer__Section2-subtitle'>
          &#123;Save $ :<br/> Boost Productivity&#125;
        </h3> : <h3 className='LandingContainer__Section2-subtitle'>
          &#123;Save $ : Boost Productivity&#125;
        </h3>}
        <p className='LandingContainer__Section2-content'>
          Cloumize manages your compute costs and trades in real time on the AWS
          EC2 Reserved Instance Marketplace
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
          <a href='https://form-cloumize.carrd.co/' target="_blank" rel="noreferrer" className='LandingContainer__Section2-btns-signup'>Sign up</a>
          <a href="https://calendly.com/alex-cloumize/cloumize-support" target="_blank" rel="noreferrer" className='LandingContainer__Section2-btns-contact'>Contact Sales</a>
        </div>
      </section>
      <section className='LandingContainer__Section3'>
        <div>
          <h2 className='LandingContainer__Section3-title'>
            HOW TO START SAVING
          </h2>
          <h3 className='LandingContainer__Section3-subtitle'>
            Explore potential savings without long-term commitments
          </h3>
          <p className='LandingContainer__Section3-content'>
            Cloumize's algorithm monitors your infrastructure and trades the
            most profitable plans in real time
          </p>
          {!screenWidthMobile && (
            <Link
            to={screenWidthMobile ? '/auth' : '/signup'}>Sign up</Link>
          )}
        </div>
        <img src='/Landing/savingsFinder.png' alt='Savings Finder' />
        {screenWidthMobile && (
          <Link
            to={screenWidthMobile ? '/auth' : '/signup'}>Sign up</Link>
        )}
      </section>
      <section className='LandingContainer__Section4'>
        {screenWidthMobile && (
          <Link
            to={screenWidthMobile ? '/auth' : '/signup'}>Sign up</Link>
        )}
        <img src='/Landing/incentives.png' alt='Savings Finder' />
        <div>
          <h2 className='LandingContainer__Section4-title'>THE BENEFITS</h2>
          <h3 className='LandingContainer__Section4-subtitle'>
            Aligned with our customers, having a success-fee revenue model
          </h3>
          <p className='LandingContainer__Section4-content'>
            We only charge a 25% of the savings, mantaining an aligned interest
            with the customer
          </p>
          {!screenWidthMobile && (
            <Link
            to={screenWidthMobile ? '/auth' : '/signup'}>Sign up</Link>
          )}
        </div>
      </section>
      <section className='LandingContainer__Section5'>
        <h2 className='LandingContainer__Section5-title'>HOW TO REGISTER</h2>
        <h3 className='LandingContainer__Section5-subtitle'>
          Start saving with a few clicks
        </h3>
        <p className='LandingContainer__Section5-content'>
          Register and execute a CloudFormation template to explore the
          available savings
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
            <Link
            to={screenWidthMobile ? '/auth' : '/signup'} className='LandingContainer__Section5-btns-signup'>Sign up</Link>
          <a href="https://calendly.com/alex-cloumize/cloumize-support" target="_blank" rel="noreferrer" className='LandingContainer__Section5-btns-contact'>Contact Sales</a>
          </div>
        )}
      </section>
      {!screenWidthMobile ? (
        <Faqs ID={ID} onClick={onClick} />
      ) : (
        <FaqsMob ID={ID} onClick={onClick} />
      )}
      <section className='LandingContainer__Section7'>
        <p>Accelerated by</p>
        <div className='LandingContainer__Section7-accelerated'>
          <img src='/Landing/shuttle.png' alt='shuttle' />
          <img src='/Landing/aws.png' alt='shuttle' />
        </div>
      </section>
      <footer className='LandingContainer__Footer'>
        <div className='LandingContainer__Footer-part1'>
          <img src='/Landing/logo.png' alt='logo' />
          <p>AI Powered Cloud Savings!</p>
        </div>
        <div className='LandingContainer__Footer-part2'>
          {/* <div className='LandingContainer__Footer-part2__links'>
            <Link to=''>How to benefit</Link>
            <Link to=''>Monetize</Link>
            <Link to=''>Achieve</Link>
            <Link to=''>How to register</Link>
          </div> */}
          <div className='LandingContainer__Footer-part2__sm'>
            <div>
              <a href='https://medium.com/@cloumize' target="_blank" rel="noreferrer">
                <img src='/Landing/medium.svg' alt='medium' />
              </a>
              <a href="https://www.linkedin.com/company/cloumize/about/" target="_blank" rel="noreferrer">
                <img
                  src='/Landing/Linkedin.svg'
                  alt='linkedIn'
                  style={{ marginBottom: '5px' }}
                />
              </a>
              <a href='https://twitter.com/Cloumize' target="_blank" rel="noreferrer">
                <img src='/Landing/Twitter.svg' alt='twitter' />
              </a>
            </div>
            <a href='https://mail.google.com/mail/?view=cm&fs=1&to=support@cloumize.com' target="_blank" rel="noreferrer">support@cloumize.com</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Landing;
