import React from "react";
import "./InsertPassword.scss";
import { IInsertPassParams } from "./interfaces";

const InsertPassword = ({
  user,
  errors,
  touched,
  show,
  onBlur,
  onFocus,
  onChange,
  onSubmit,
  isValid,
  response,
}: IInsertPassParams) => {
  return (
    <div className="InsertPasswordContainer">
      <div className="InsertPasswordContainer__form">
        <div>
          <h2 className="InsertPasswordContainer__form-head">Reset password</h2>
          <p className="ForgotPasswordContainer__form-instructions"></p>
          <form onSubmit={onSubmit}>
            <div>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="New password"
                value={user.password}
                onChange={onChange}
                onBlur={onBlur}
                onFocus={onFocus}
                className="InsertPasswordContainer__form-input"
                style={{
                  background:
                    "url('./Auth/password.svg') no-repeat scroll 10px 15px",
                  paddingLeft: "30px",
                }}
              />
              {touched.password && (
                <div className="AuthContainer__form-error">
                  <p
                    style={{
                      color:
                        errors?.password?.lengthMsg === "" &&
                        errors?.password?.uppercaseMsg === "" &&
                        errors.password?.lowercaseMsg === ""
                          ? "#13D733"
                          : "#FF434E",
                    }}
                  >
                    Password must contain:
                  </p>
                  <ul>
                    {errors.password.lengthMsg === "" ? (
                      <li className="AuthContainer__form-error-correct">
                        v 8 characteres long
                      </li>
                    ) : (
                      <li>x At least 8 characteres</li>
                    )}
                    {errors.password.uppercaseMsg === "" ? (
                      <li className="AuthContainer__form-error-correct">
                        v Uppercase letter
                      </li>
                    ) : (
                      <li>x One upper case letter</li>
                    )}
                    {errors.password.lowercaseMsg === "" ? (
                      <li className="AuthContainer__form-error-correct">
                        v Lower case letter
                      </li>
                    ) : (
                      <li>x One lowercase letter</li>
                    )}
                  </ul>
                </div>
              )}
            </div>
            <div>
              <input
                type="password"
                placeholder="Confirm password"
                value={user.confirmPassword}
                name="confirmPassword"
                onChange={onChange}
                onBlur={onBlur}
                onFocus={onFocus}
                className="InsertPasswordContainer__form-input"
                style={{
                  background:
                    "url('./Auth/password.svg') no-repeat scroll 10px 15px",
                  paddingLeft: "30px",
                }}
              />
              {touched.confirmPassword &&
                user.confirmPassword !== user.password && (
                  <div className="AuthContainer__form-error">
                    Passwords do not match
                  </div>
                )}
            </div>
            <div>
              <button
                type="submit"
                className="InsertPasswordContainer__form-button"
                disabled={!isValid()}
              >
                Actualizar contraseña
              </button>
            </div>
          </form>
          {show && (
            <p className="InsertPasswordContainer__form-error">{response}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default InsertPassword;
