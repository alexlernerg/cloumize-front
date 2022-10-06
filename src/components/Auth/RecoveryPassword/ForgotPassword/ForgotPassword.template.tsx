import React from 'react';
import { Link } from 'react-router-dom';
import './ForgotPassword.scss';

const ForgotPassword = (props:any) => {
  return <div className='ForgotPasswordContainer'>
   <div className="ForgotPasswordContainer__form">
      <div>
        <div className="ForgotPasswordContainer__form-head">
          <Link to="/signin">
            <img src="/Auth/back.svg" alt="back" />
          </Link>
          <h2>Recovery password</h2>
        </div>
        <p className="ForgotPasswordContainer__form-instructions">Enter your email address below and we will send you instructions to recover your password.</p>
        <form onSubmit={props.onSubmit}>
              <div>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Your email"
                  value={props.user.email}
                  onChange={props.onChange}
                  onBlur={props.onBlur}
                  onFocus={props.onFocus}
                  className="ForgotPasswordContainer__form-input"
                  style={{
                    background: "url('./Auth/email.svg') no-repeat scroll 10px 15px",
                    paddingLeft: '30px',
                  }}
                />
              {props.touched.email !== undefined ? <p className='ForgotPasswordContainer__form-error'>{props.user.error_email}</p> : <p></p>}
              </div>
              <div>
                <button
                  type="submit"
                  className="ForgotPasswordContainer__form-button"
                  disabled={!props.isValid()}
                >
                  Send email
                </button>
              </div>
            {props.show && <div>
              <div>
                <p className="ForgotPasswordContainer__form-error">
                  {props.response}
                </p>
              </div>
            </div>}
        </form>
      </div>
    </div>
  </div>;
};

export default ForgotPassword;