import React from 'react';
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import Navbar from '../../Misc/Navbar/Navbar';
import CardSetupForm from './CardSetupForm';
import './Account.scss';
import PopUp from '../Aux/PopUp/PopUp';
import { subscribe } from '../../../services/PaymentService';

export default function Account(currentUser, view, changeView, show, openModal, AWSfill, contentPopUp, sendApproval, responseAPI) {
  const stripePromise = loadStripe('pk_test_51LSlY8GDFiXM20ocQPScB7UOHwxTjEuwJIQehEMO527ssoaGaTZyvOrQ7vkJgITkwuQrELMaZtCcJjuBtCbZAeAe00xV0b5bxv');
  const onClick = () => {
    subscribe()
    .then((response)=> console.log(response))
    .catch((error)=> console.log("error", error))
  }
  return (
    <div className='Account'>
      <Navbar />
      <div className='Account__container'>
        <h1 className='Account__container-title'>Account</h1>
        <div className='Account__container-main'>
          <div className='Account__container-menu'>
            <button
              className='Account__container-menu__btn'
              onClick={changeView}
              id='0'
            >
              {currentUser?.arn && (
                <img
                  className='Account__container-menu__btn-img'
                  id='0'
                  src='/Profile/check.svg'
                  alt='check'
                ></img>
              )}
              <p className='Account__container-menu__btn-number Account__container-menu__btn-number-1' id='0'>
                1
              </p>
              <p className='Account__container-menu__btn-section' id='0'>
                Account ARN
              </p>
            </button>
            <img src='/Profile/line.svg' alt='line' className='Account__container-menu__line'/>
            <button
              className='Account__container-menu__btn'
              onClick={changeView}
              id='1'
            >
              <img
                className='Account__container-menu__btn-img'
                id='1'
                src='/Profile/check.svg'
                alt='check'
              ></img>
              <p className='Account__container-menu__btn-number' id='1'>
                2
              </p>
              <p className='Account__container-menu__btn-section' id='1'>
                AWS
              </p>
            </button>
            <img src='/Profile/line.svg' alt='line' className='Account__container-menu__line'/>
            <button
              className='Account__container-menu__btn'
              onClick={changeView}
              id='2'
            >
              <img
                className='Account__container-menu__btn-img'
                id='2'
                src='/Profile/check.svg'
                alt='check'
              ></img>
              <p className='Account__container-menu__btn-number' id='2'>
                3
              </p>
              <p className='Account__container-menu__btn-section' id='2'>
                Payment Method
              </p>
            </button>
          </div>
          {view === 0 && (
            <div className='Account__container-ARN'>
              <div>
                <>
                  <p className='Account__container-ARN-label'>Account ARN</p>
                  <p className='Account__container-ARN-info'>
                    {currentUser?.arn}
                  </p>
                </>
                <>
                  <p className='Account__container-ARN-label'>Email</p>
                  <p className='Account__container-ARN-info'>
                    {currentUser?.email}
                  </p>
                </>
              </div>
            </div>
          )}
          {view === 1 && (
            <>
              <div className='Account__container-AWS'>
                <p>Check if you have already filled out the AWS form</p>
                <input type='checkbox' onChange={openModal} checked={AWSfill} disabled={AWSfill}/>
              </div>
              {show && <PopUp showPopup={openModal} sendApproval={sendApproval} responseAPI={responseAPI} content={contentPopUp}/>}
            </>
          )}
          {view === 2 && (
            <>
              <div className='Account__container-Payments'>
                {/* <p>Add an account to benefit from Cloumize discounts.</p>
                <button>Add credit card</button> */}
                <Elements stripe={stripePromise}>
                  <CardSetupForm />
                </Elements>
              </div>
              <div className='Account__container-cardSaved'>
                <div className='Card__saved'>
                  <img src="/Profile/creditCard.svg" alt="card"/>
                  <div>
                    <p>· · · ·  · · · ·  · · · ·  9783</p>
                    <p>04/23</p>
                  </div>
                </div>
                <div className='Card__saved-buttons'>
                  <button className='Card__saved-change'>Change payment method</button>
                  <button className='Card__saved-unsubscribe'>Unsubscribe</button>
                </div>
                {/* <button onClick={onClick}>Subscribe</button> */}
              </div>
            </>
          )}
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
