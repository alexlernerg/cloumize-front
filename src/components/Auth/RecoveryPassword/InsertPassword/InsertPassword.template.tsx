import React from 'react';
import './InsertPassword.scss';

const InsertPassword = (props:any) => {
  return <div className='InsertPasswordContainer'>
   <div className='InsertPasswordContainer__form'>
      <div>
        <h2 className='InsertPasswordContainer__form-head'>Reset password</h2>
        <p className="ForgotPasswordContainer__form-instructions"></p>
        <form onSubmit={props.onSubmit}>
          <div>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="New password"
              value={props.user.password}
              onChange={props.onChange}
              onBlur={props.onBlur}
              onFocus={props.onFocus}
              className="InsertPasswordContainer__form-input"
              style={{
                background:
                  "url('./Auth/password.svg') no-repeat scroll 10px 15px",
                paddingLeft: '30px',
              }}
            />
            {props.touched.password && <div className='AuthContainer__form-error'>
              <p style={{color: (props.errors.password.lengthMsg === '' && props.errors.password.uppercaseMsg === '' && props.errors.password.lowercaseMsg === '') ? '#13D733' : '#FF434E'}}>Password must contain:</p>
                <ul>
                  {props.errors.password.lengthMsg === '' ? <li className='AuthContainer__form-error-correct'>v 8 characteres long</li>: <li>x At least 8 characteres long</li>}
                  {props.errors.password.uppercaseMsg === '' ? <li className='AuthContainer__form-error-correct'>v Uppercase letter</li>: <li>x One upper case letter</li>}
                  {props.errors.password.lowercaseMsg === '' ? <li className='AuthContainer__form-error-correct'>v Lower case letter</li>: <li>x One lower case letter</li>}
                </ul>
              </div>}
          </div>
          <div>
          <input
                  type='password'
                  placeholder='Confirm password'
                  value={props.user.confirmPassword}
                  name='confirmPassword'
                  onChange={props.onChange}
                  onBlur={props.onBlur}
                  onFocus={props.onFocus}
                  className="InsertPasswordContainer__form-input"
                  style={{
                    background:
                      "url('./Auth/password.svg') no-repeat scroll 10px 15px",
                    paddingLeft: '30px',
                  }}
                />
                {props.touched.confirmPassword && (props.user.confirmPassword !== props.user.password) && <div className='AuthContainer__form-error'>Passwords do not match</div>}
          </div>
          <div>
            <button type="submit" className="InsertPasswordContainer__form-button" disabled={!props.isValid()}>
              Actualizar contraseña
            </button>
          </div>
        </form>
        {props.show && (
          <p className="InsertPasswordContainer__form-error">
            {props.response}
          </p>
        )}
      </div>
    </div>
  </div>;
};

export default InsertPassword;
