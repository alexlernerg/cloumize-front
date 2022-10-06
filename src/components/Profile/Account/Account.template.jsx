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

export default function Account() {
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

  if (!success && message === '') {
    return (
      <div className='Account'>
        <Navbar />
        <div className='Account__container'>
          <ProductDisplay />
        </div>
      </div>
    );
  } else if (success && sessionId !== '') {
    return (
      <div className='Account'>
        <Navbar />
        <div className='Account__container'>
        <SuccessDisplay sessionId={sessionId} />
        </div>
      </div>
    )
  } else {
    return (
      <div className='Account'>
        <Navbar />
        <div className='Account__container'>
        <Message message={message} />
        </div>
      </div>
    )  
  }
}
