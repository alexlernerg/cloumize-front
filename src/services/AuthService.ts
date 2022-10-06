import { create } from "./BaseService";

const http = create({
  useAccessToken: false,
});

export const signUp = (userData:any) => {
  return http.post(`/auth/signup`, userData);
};

export const signIn = (userData:any) => {
  return http.post(`/auth/login`, userData);
};

// Send email to restore password
export const passwordResetEmail = (user:any) => {
  return http.post("/user/recover-password", user);
};

// Button on landing page to update password
export const updatePassword = (user:any) => {
  return http.put(`/user/change-password/${user[1].token}`, user[0]);
};