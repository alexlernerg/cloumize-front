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

//TODO: Update Password
// Send email to restore password
export const passwordResetEmail = (user:any) => {
  return http.post("/users/password_reset", user);
};

// Button on landing page to update password
export const updatePassword = (user:any) => {
  return http.put("/users/password_reset", user);
};