import React, { useState, useEffect } from 'react';
import {
  createPaymentSession,
  getPaymentSession,
  getPrice,
} from '../../../services/PaymentService';
import Navbar from '../../Misc/Navbar/Navbar';
import './Account.scss';

const ProductDisplay = () => {
  const [product, setProduct] = useState({ lookup_keys: 'aws' });
  const [price, setPrice] = useState(0);
  const onClick = (e) => {
    e.preventDefault();
    getPaymentSession(product).then((response) => {
      window.location.href = response.sessionURL;
    });
  };
  useEffect(() => {
    getPrice(product).then((response) => {
      setPrice(response.prices.data[0].unit_amount);
    });
  });
  return (
    <section>
      <div className='product'>
        <div className='description'>
          <h3>Starter plan</h3>
          <h5>${price} / month</h5>
        </div>
      </div>
      <form>
        {/* Add a hidden field with the lookup_key of your Price */}
        <input type='hidden' name='lookup_key' value={product.lookup_keys} />
        <button id='checkout-and-portal-button' onClick={onClick}>
          Checkout
        </button>
      </form>
    </section>
  );
};

const SuccessDisplay = ({ sessionId }) => {
  const onClick = (e) => {
    e.preventDefault();
    createPaymentSession({ sessionId }).then((response) => {
      window.location.href = response.portalSession;
    });
  };
  return (
    <section>
      <div className='product Box-root'>
        <div className='description Box-root'>
          <h3>Subscription to starter plan successful!</h3>
        </div>
      </div>
      <form>
        <input
          type='hidden'
          id='session-id'
          name='session_id'
          value={sessionId}
        />
        <button id='checkout-and-portal-button' onClick={onClick}>
          Manage your billing information
        </button>
      </form>
    </section>
  );
};

const Message = ({ message }) => (
  <section>
    <p>{message}</p>
  </section>
);

export default function Account(currentUser, view, changeView) {
  let [message, setMessage] = useState('');
  let [success, setSuccess] = useState(false);
  let [sessionId, setSessionId] = useState('');

  useEffect(() => {
    // Check to see if this is a redirect back from Checkout
    const query = new URLSearchParams(window.location.search);
    // console.log('query', query.get('session_id'));

    if (query.get('success')) {
      setSuccess(true);
      setSessionId(query.get('session_id'));
    }

    if (query.get('canceled')) {
      setSuccess(false);
      setMessage(
        "Order canceled -- continue to shop around and checkout when you're ready."
      );
    }
  }, [sessionId]);

  return (
    <div className='Account'>
      <Navbar />
      <div className='Account__container'>
        <h1 className='Account__container-title'>Account</h1>
        <div className='Account__container-main'>
          <div className='Account__container-menu'>
            <button className='Account__container-menu__btn' onClick={changeView} id='0'>
              {currentUser?.arn && <img className='Account__container-menu__btn-img' id='0' src='/Profile/check.svg' alt='check'></img>}
              <p className='Account__container-menu__btn-number' id='0'>1</p>
              <p className='Account__container-menu__btn-section' id='0'>Account ARN</p>
            </button>
            <img src="/Profile/line.svg" alt="line"/>
            <button className='Account__container-menu__btn' onClick={changeView} id='1'>
              <img className='Account__container-menu__btn-img' id='1' src='/Profile/check.svg' alt='check'></img>
              <p className='Account__container-menu__btn-number' id='1'>2</p>
              <p className='Account__container-menu__btn-section' id='1'>AWS</p>
            </button>
            <img src="/Profile/line.svg" alt="line"/>
            <button className='Account__container-menu__btn' onClick={changeView} id='2'>
              <img className='Account__container-menu__btn-img' id='2' src='/Profile/check.svg' alt='check'></img>
              <p className='Account__container-menu__btn-number' id='2'>3</p>
              <p className='Account__container-menu__btn-section' id='2'>Payment Method</p>
            </button>
          </div>
          {view === 0 && <div className='Account__container-ARN'>
            <div>
              <>
                <p className='Account__container-ARN-label'>Account ARN</p>
                <p className='Account__container-ARN-info'>{currentUser?.arn}</p>
              </>
              <>
                <p className='Account__container-ARN-label'>Email</p>
                <p className='Account__container-ARN-info'>{currentUser?.email}</p>
              </>

            </div>
          </div>}
          {view === 1 && <div className='Account__container-AWS'>
            <p>Check if you have already filled out the AWS form</p>
            <input type="checkbox"/>
          </div>}
          {view === 2 && <div className='Account__container-Payments'>
            <p>Add an account to benefit from Cloumize discounts.</p>
            <button>Add credit card</button>
          </div>}
        </div>
        {/* <>
          {!success && message === '' && <ProductDisplay />}
          {success && sessionId !== '' && <SuccessDisplay sessionId={sessionId} />}
          <Message message={message} />
        </> */}
      </div>
    </div>
  );
}
