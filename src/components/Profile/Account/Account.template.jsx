import { Elements } from '@stripe/react-stripe-js';
import Navbar from '../../Misc/Navbar/Navbar';
import PopUp from '../Aux/PopUp/PopUp';
import CardForm from './CardForm/CardForm';
import './Account.scss';

export default function Account({
  currentUser,
  view,
  changeView,
  show,
  openModal,
  AWSfill,
  contentPopUp,
  sendApproval,
  responseAPI,
  stripePromise,
  onClick,
  card,
  screenWidthMobile
}) {
  console.log('current', currentUser);
  return (
    <div className='Account'>
      <Navbar />
      <div className='Account__container'>
        <h1 className='Account__container-title'>Account</h1>
        <div className='Account__container-main'>
          <div className='Account__container-menu'>
            <div className='Account__container-menu__check'>
              {currentUser?.arn && (
                <img
                  className='Account__container-menu__check-img'
                  id='0'
                  src='/Profile/check.svg'
                  alt='check'
                  onClick={changeView}
                ></img>
              )}
              {currentUser?.confirmed_seller && (
                <img
                  className='Account__container-menu__check-img'
                  id='0'
                  src='/Profile/check.svg'
                  alt='check'
                  onClick={changeView}
                ></img>
              )}
              {currentUser?.stripe_customer_id && (
                <img
                  className='Account__container-menu__check-img'
                  id='0'
                  src='/Profile/check.svg'
                  alt='check'
                  onClick={changeView}
                ></img>
              )}
            </div>
            <div className='Account__container-menu__numbers'>
              <p
                
                onClick={changeView}
              >
                1
              </p>
              <img
                src='/Profile/line.svg'
                alt='line'
                className='Account__container-menu__line'
              />
              <p
                id='1'
                onClick={changeView}
              >
                2
              </p>
              <img
                src='/Profile/line.svg'
                alt='line'
                className='Account__container-menu__line'
              />
              <p
                id='2'
                onClick={changeView}
              >
                3
              </p>
            </div>
            <div className='Account__container-menu__sectionName'>
              <p
                id='0'
                onClick={changeView}
              >
                Account ARN
              </p>
              <p
                id='1'
                onClick={changeView}
              >
                AWS
              </p>
              <p
                id='2'
                onClick={changeView}
              >
                Payment Method
              </p>
            </div>
          </div>
          {view === 0 && (
            <div className='Account__container-ARN'>
              <div>
                <>
                  <p className='Account__container-ARN-label'>Account ARN</p>
                  <p className='Account__container-ARN-info'>
                    {!screenWidthMobile ? currentUser?.arn : currentUser?.arn.slice(0, 25) + '...'}
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
                <input
                  type='checkbox'
                  onChange={openModal}
                  checked={currentUser.confirmed_seller || AWSfill}
                  disabled={currentUser.confirmed_seller || AWSfill}
                />
              </div>
              {show && (
                <PopUp
                  showPopup={openModal}
                  sendApproval={sendApproval}
                  responseAPI={responseAPI}
                  content={contentPopUp}
                />
              )}
            </>
          )}
          {view === 2 &&
            (!currentUser.stripe_customer_id ? (
              <div className='Account__container-Payments'>
                {/* <p>Add an account to benefit from Cloumize discounts.</p>
                <button>Add credit card</button> */}
                <Elements stripe={stripePromise}>
                  <CardForm />
                </Elements>
              </div>
            ) : (
              <div className='Account__container-cardSaved'>
                <div className='Card__saved'>
                  <img src='/Profile/creditCard.svg' alt='card' />
                  <div className='Card__saved-data'>
                    <p>· · · · · · · · · · · · {card?.last4}</p>
                    <p>
                      {card?.month}/{card?.year}
                    </p>
                  </div>
                </div>
                <div className='Card__saved-buttons'>
                  <button className='Card__saved-change'>
                    Change payment method
                  </button>
                  <button className='Card__saved-unsubscribe'>
                    Unsubscribe
                  </button>
                </div>
                <button onClick={onClick}>Subscribe</button>
              </div>
            ))}
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
