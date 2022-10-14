import React, { useEffect, useState } from 'react';
import { useStripe, useElements, CardElement } from '@stripe/react-stripe-js';

import CardSection from './CardSection';
import { getClientSecret, transforPaymentMethod } from '../../../services/PaymentService';
import { useUser } from '../../../context/hook/useUser';
import './Account.scss';

export default function CardSetupForm() {
  const { currentUser } = useUser();
  const [clientID, setClientID] = useState('');
  useEffect(() => {
    getClientSecret()
      .then((response) => {
        console.log("response", response);
        setClientID(response);
      })
      .catch((error) => console.log('error', error));
  }, []);

  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (event) => {
    // We don't want to let default form submission happen here,
    // which would refresh the page.
    event.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js has not yet loaded.
      // Make sure to disable form submission until Stripe.js has loaded.
      return;
    }
    if (clientID !== '') {
      const result = await stripe.confirmCardSetup(`${clientID}`, {
        payment_method: {
          card: elements.getElement(CardElement),
          billing_details: {
            name: currentUser?.name,
            email: currentUser?.email,
          },
        },
      });
      console.log('result', result);
      // if (result.error) {
      //   // Display result.error.message in your UI.
      // } else {
      //   // The setup has succeeded. Display a success message and send
      //   // result.setupIntent.payment_method to your server to save the
      //   // card to a Customer
      // }
      transforPaymentMethod()
        .then((response) => console.log("response", response))
        .catch((error)=> console.log("error", error))
    }

  };

  return (
    <form onSubmit={handleSubmit}>
      <CardSection />
      <button disabled={!stripe} className="Card__button">
        Save Card
      </button>
    </form>
  );
}
