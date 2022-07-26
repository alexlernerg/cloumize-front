import React from 'react';
import { Link } from 'react-router-dom';
import Slider from './Slider/Slider';
import './Auth.scss';

const Auth = (
  signinPage: boolean,
  { data, errors, onChange, touched, onBlur, onFocus, onSubmit }: any
) => {
  return (
    <div className='AuthContainer'>
      <div className='AuthContainer__slider'>
        <Slider />
      </div>
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
                  placeholder='Full name'
                  value={data.name}
                  name='name'
                  onChange={onChange}
                  onBlur={onBlur}
                  onFocus={onFocus}
                  className={`AuthContainer__form-input ${
                    touched.name && errors.name ? 'is-invalid' : ''
                  }`}
                  style={{
                    background:
                      "url('./Auth/email.svg') no-repeat scroll 10px 12px",
                    paddingLeft: '30px',
                  }}
                />
                {/* <div>{errors.name}</div> */}
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
                background: "url('./Auth/email.svg') no-repeat scroll 10px 12px",
                paddingLeft: '30px',
              }}
            />
            {/* <div>{errors.email}</div> */}
            <input
              type='text'
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
                  "url('./Auth/password.svg') no-repeat scroll 10px 12px",
                paddingLeft: '30px',
              }}
            />
            {/* <div>{errors.password}</div> */}
            {!signinPage && (
              <>
                <input
                  type='text'
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
                      "url('./Auth/password.svg') no-repeat scroll 10px 12px",
                    paddingLeft: '30px',
                  }}
                />
                {/* <div>{errors.name}</div> */}
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
          {signinPage ? (
            <p className='AuthContainer__redirect'>
              Don’t have an account?&nbsp;
              <span>
                <Link to='/signup'>
                  Sign Up
                </Link>
              </span>
            </p>
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
