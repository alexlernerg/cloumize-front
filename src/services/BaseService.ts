import axios from "axios";
import { getAccessToken, isTokenValid, logout } from "../store/AccessTokenStore";

export const create = (opts: any): any => {
  const http = axios.create({
    baseURL: "http://localhost:8080",
    ...opts,
  });

  http.interceptors.request.use((request:any) => {
    if (opts.useAccessToken !== false) {
      if (!isTokenValid(getAccessToken())) {
        logout();
      }
      request.headers.common.Authorization = `Bearer ${getAccessToken()}`;
    } else {
      delete request.headers.common.Authorization;
    }
    return request;
  });

  http.interceptors.response.use(
    (response:any) => response.data,
    (error:any) => {
      if (
        opts.reloadOnUnathorized &&
        error.response &&
        [401, 403, 400].includes(error.response.status)
      ) {
        logout();
      }

      return Promise.reject(error?.response?.data?.errors);
    }
  );

  return http;
};