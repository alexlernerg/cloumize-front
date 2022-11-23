import { Elements } from '@stripe/react-stripe-js';
import Navbar from '../../Misc/Navbar/Navbar';
import PopUp from '../Auxiliar/PopUp/PopUp';
import CardForm from './CardForm/CardForm';
import './Account.scss';
import { logout } from '../../../store/AccessTokenStore';

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
                <p>Please Register as an seller in the AWS Reserved Instance Marketplace. Check the box once completed, for instructions follow this
                <a href={
                `https://privacy-terms-cloumize.s3.eu-west-1.amazonaws.com/AWS%20Seller%20Registration%2C%20Espan%CC%83ol.pdf?response-content-disposition=inline&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCWV1LXdlc3QtMyJHMEUCIFRuw7Gyv0Pc4NWH4k1Qv58hgU2hSCThjVK9Q4dOYbdxAiEA8MIWbXn%2Fehl%2FrvOIahBZFJmTgfyXyTOgjeZfD4DREScq8AIIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARABGgwwMDIzNzkyNDEwOTQiDGKa5rPF9tAx496dpCrEAjC%2FuMl6Jy8o7SaeEP%2BwC2bpefL1q6xAf0SdzEkcryc0W4K3kBvbifOY8tkWA76%2Ba1eqGl0zoHG8jgz5xoub2yyOfSelzOZWxw%2FDWJuBXIMDzEKgLS6rC%2BaXEZOERA%2BZBx98g4w2toQPYvyur5EWV%2BMQBAn45dFvqsIOFmm47k%2BGw%2BD8e8LGs1oYTM4q9eI6Q4IsYRwKCfVw0%2BocfYHK3Y4ZAtUhuObBWGqqKP3wBp248srWXqQaW0Q5C1P%2BSKo7HRf3sSS%2FpLSloLwIeOkfuhdMg54fBZ0TKn0IhZqOTIkZbRURpc84A1Xl%2FCUelpF0VD4lbFaGG4UZoanZhIgCR3PCehNBSxFhw2nXp8p1acLQafiyHTV9wl%2BgNUkqu%2BwbzZZ15jo9HT0R3E0oU9eaAVBNOQvRdzkWMJRsQOak9EtnjLXzLTCfyPebBjq0AmChZQKGsJegyr%2FNgvLM4na6yjroMEkSBGC%2BZf4da%2BQkBqXQRny3oeGV6nriERoEmzoGTDSs6TJzqNpWfxwJaFVRF3db%2BNM0Y%2FeRa6%2F8YEXzbqw4Zt%2BQQBXOckGlKyWYgIbUbGlFvIEG%2BXSPvsgFjuq2fGcVwqtryEc8AEIMUCf%2FurDfs%2F4SbJrZMLh2IAO4LwSsGISS%2B4hEn7YvM8OBDzdFaqOwWHS8oeOrVc1L0jPpvwlTYZYcfu8Gsh4KgykdmKGlOw4vAAi9uw3sfppdlulxqClPoRj7N6DFdAWuIYjhsfFgQ1M2FluUBYVytNHi%2FtSPwkEH9eomX6Zi4E6Sjj%2B%2FZd2rpeF2eEnBrtJv9y0BY90zuOBhzlyjiq1%2FSOh27zkPbrJ9aOq8pzW2PP1WU6Aj7f4Z&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20221123T091423Z&X-Amz-SignedHeaders=host&X-Amz-Expires=300&X-Amz-Credential=ASIAQBDOQK2DGWZWRJVJ%2F20221123%2Feu-west-1%2Fs3%2Faws4_request&X-Amz-Signature=272bb708baadbea4aff13e94b80c766cea2506b8ab990f3deee41428ad6f6f04`}
                 target="_blank" rel="noreferrer">
                link
                  </a>
                              </p>
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
        <div className='Account__container-btnLogout'>
          <button onClick={logout}>Logout</button>
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
