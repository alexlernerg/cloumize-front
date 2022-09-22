import { create } from "./BaseService";

const http = create({
  useAccessToken: true,
});

export const getUser = () => {
  console.log("entra en getUser")
  return http.get('/user/me');
};

export const updateUser = (updateUser:any) => {
  return http.patch(`/user/update`, updateUser);
};

export const deleteUser = (user:any) => {
  return http.delete(`/user/delete`, user);
};

