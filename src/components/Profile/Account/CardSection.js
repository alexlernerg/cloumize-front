import React from 'react';
import {CardElement} from '@stripe/react-stripe-js';
import './Account.scss'

const CARD_ELEMENT_OPTIONS = {
  style: {
    base: {
      color: "#102F4E",
      fontFamily: '"Rubik", sans-serif',
      fontSmoothing: "antialiased",
      fontSize: "16px",
      "::placeholder": {
        color: "#8796A6",
      },
    },
    invalid: {
      color: "#FF434E",
      iconColor: "#FF434E",
    },
  },
};
function CardSection() {
  return (
    <label className='Card__label'>
      <p>Card details </p>
      <CardElement options={CARD_ELEMENT_OPTIONS} />
    </label>
  );
};
export default CardSection;