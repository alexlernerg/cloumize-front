import { IPasswordResetEmail, IUserSignin, IUserSignup } from "../interfaces/services";
import { create } from "./BaseService";

const http = create({
  useAccessToken: false,
});

export const signUp = (userData:IUserSignup) => {
  return http.post(`/auth/signup`, userData);
};

export const signIn = (userData:IUserSignin) => {
  return http.post(`/auth/login`, userData);
};

// Send email to restore password
export const passwordResetEmail = (user:IPasswordResetEmail) => {
  return http.post("/user/recover-password", user);
};

// Button on landing page to update password
export const updatePassword = (user:[{password: string}, {token:string}]) => {
  return http.put(`/user/change-password/${user[1].token}`, user[0]);
};