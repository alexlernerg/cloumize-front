import React from 'react';
import { Link } from 'react-router-dom';
import Slider from './Slider/Slider';
import './Auth.scss';

const Auth = (
  screenWidthMobile: boolean,
  signinPage: boolean,
  { data, errors, onChange, touched, onBlur, onFocus, onSubmit }: any,
  errorAPI: any,
  show: boolean
) => {
  return (
    <div className='AuthContainer'>
      {!screenWidthMobile && <div className='AuthContainer__slider'>
        <Slider />
      </div>}
      {screenWidthMobile && <img src="/Auth/banner.svg" alt="banner"/>}
      <div className='AuthContainer__form'>
        <div className='AuthContainer__form-container'>
          <h5 className='AuthContainer__form-title'>
            Sign&nbsp;{signinPage ? 'in' : 'up'} to Cloumize
          </h5>
          <form onSubmit={onSubmit}>
          {!signinPage && (
              <>
                <input
                  type='text'
                  placeholder='AWS account name'
                  value={data.awsAccountName}
                  name='awsAccountName'
                  onChange={onChange}
                  onBlur={onBlur}
                  onFocus={onFocus}
                  className={`AuthContainer__form-input ${
                    touched.awsAccountName && errors.awsAccountName ? 'is-invalid' : ''
                  }`}
                  style={{
                    background:
                      "url('./Auth/user.svg') no-repeat scroll 10px 17px",
                    paddingLeft: '30px',
                    paddingTop: '15px'
                  }}
                />
                {touched.awsAccountName && <div className='AuthContainer__form-error'>{errors.awsAccountName}</div>}
              </>
            )}
          {!signinPage && (
              <>
                <input
                  type='text'
                  placeholder='Company Name'
                  value={data.companyName}
                  name='companyName'
                  onChange={onChange}
                  onBlur={onBlur}
                  onFocus={onFocus}
                  className={`AuthContainer__form-input ${
                    touched.companyName && errors.companyName ? 'is-invalid' : ''
                  }`}
                  style={{
                    background:
                      "url('./Auth/user.svg') no-repeat scroll 10px 17px",
                    paddingLeft: '30px',
                    paddingTop: '15px'
                  }}
                />
                {touched.companyName && <div className='AuthContainer__form-error'>{errors.companyName}</div>}
              </>
            )}
            {!signinPage && (
              <>
                <input
                  type='text'
                  placeholder='Full name'
                  value={data.userName}
                  name='userName'
                  onChange={onChange}
                  onBlur={onBlur}
                  onFocus={onFocus}
                  className={`AuthContainer__form-input ${
                    touched.userName && errors.userName ? 'is-invalid' : ''
                  }`}
                  style={{
                    background:
                      "url('./Auth/user.svg') no-repeat scroll 10px 17px",
                    paddingLeft: '30px',
                    paddingTop: '15px'
                  }}
                />
                {touched.userName && <div className='AuthContainer__form-error'>{errors.userName}</div>}
              </>
            )}
            <input
              type='text'
              placeholder='Email'
              value={data.email}
              name='email'
              onChange={onChange}
              onBlur={onBlur}
              onFocus={onFocus}
              className={`AuthContainer__form-input ${
                touched.email && errors.email ? 'is-invalid' : ''
              }`}
              style={{
                background: "url('./Auth/email.svg') no-repeat scroll 10px 15px",
                paddingLeft: '30px',
              }}
            />
            {touched.email && <div className='AuthContainer__form-error'>{errors.email}</div>}
            <input
              type='password'
              placeholder='Password'
              value={data.password}
              name='password'
              onChange={onChange}
              onBlur={onBlur}
              onFocus={onFocus}
              className={`AuthContainer__form-input ${
                touched.password && errors.password ? 'is-invalid' : ''
              }`}
              style={{
                background:
                  "url('./Auth/password.svg') no-repeat scroll 10px 15px",
                paddingLeft: '30px',
              }}
            />
            {touched.password && <div className='AuthContainer__form-error'>
              <p style={{color: (errors.password.lengthMsg === '' && errors.password.uppercaseMsg === '' && errors.password.lowercaseMsg === '') ? '#13D733' : '#FF434E'}}>Password must contain:</p>
                <ul>
                  {errors.password.lengthMsg === '' ? <li className='AuthContainer__form-error-correct'>v At least 8 characters </li>: <li>x At least 8 characters</li>}
                  {errors.password.uppercaseMsg === '' ? <li className='AuthContainer__form-error-correct'>v 1 uppercase letter</li>: <li>x 1 uppercase letter</li>}
                  {errors.password.lowercaseMsg === '' ? <li className='AuthContainer__form-error-correct'>v 1 lowercase letter</li>: <li>x 1 lower case letter</li>}
                </ul>
              </div>}
            {!signinPage && (
              <>
                <input
                  type='password'
                  placeholder='Confirm password'
                  value={data.confirmPassword}
                  name='confirmPassword'
                  onChange={onChange}
                  onBlur={onBlur}
                  onFocus={onFocus}
                  className={`AuthContainer__form-input ${
                    touched.confirmPassword && errors.confirmPassword ? 'is-invalid' : ''
                  }`}
                  style={{
                    background:
                      "url('./Auth/password.svg') no-repeat scroll 10px 15px",
                    paddingLeft: '30px',
                  }}
                />
                {data.confirmPassword !== data.password && <div className='AuthContainer__form-error'>Passwords do not match</div>}
              </>
            )}
            <div className='AuthContainer__form-checkbox'>
              <input
                className='AuthContainer__form-checkbox-input'
                type='checkbox'
              />
              <label
                className='AuthContainer__form-checkbox-label'
                htmlFor='check1'
              >
                Remember me
              </label>
            </div>
            <button className='AuthContainer__form-button'>
              SIGN&nbsp;{signinPage ? 'IN' : 'UP'}
            </button>
          </form>
          {show && <div className='AuthContainer__Error'>
            <p>{errorAPI}</p>
          </div>}
          {signinPage ? (
            <>
              <p className='AuthContainer__redirect'>
                Don’t have an account?&nbsp;
                <span>
                  <Link to='/signup'>
                    Sign Up
                  </Link>
                </span>
              </p>
              <div className='AuthContainer__forgot'>
                <Link to='/forgot-password'>Forgot your password?</Link>
              </div>
            </>
          ) : (
            <p className='AuthContainer__redirect'>
              Already have an account?&nbsp;
              <span>
                <Link to='/signin'>
                  Sign In
                </Link>
              </span>
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Auth;
