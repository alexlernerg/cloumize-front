import { create } from "./BaseService";

const http = create({
  useAccessToken: true,
});

export const getUser = () => {
  return http.get(`/users/me`);
};

export const updateUser = (updateUser:any) => {
  return http.patch(`/users/me`, updateUser);
};

export const deleteUser = () => {
  return http.delete(`/users/me`);
};