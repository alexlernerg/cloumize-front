import axios from "axios";
import { getAccessToken, isTokenValid, logout } from "../store/AccessTokenStore";

export const create = (opts: any): any => {
  const http = axios.create({
    baseURL:
    "https://sandbox-api.cloutomo.com/api",
    // "https://cloumize-api.herokuapp.com/api",
    ...opts,
  });

  http.interceptors.request.use((request:any) => {
    if (opts.useAccessToken !== false) {
      // console.log("tokenValid", isTokenValid(getAccessToken()))
      // if (!isTokenValid(getAccessToken())) {
      //   console.log('3');
      //   logout();
      // }
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
        [401, 403, 400].includes(error.response.data.status)
      ) {
        logout();
      }

      return Promise.reject(error?.response);
    }
  );

  return http;
};
