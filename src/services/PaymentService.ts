import { create } from './BaseService';

const http = create({
  useAccessToken: true,
});

export const getClientSecret = async () => {
    return await http.get(`payment/client-secret`);
  };
  export const getPaymentMethod = async () => {
    return await http.get(`payment/payment-method`);
  }
export const transforPaymentMethod = async () => {
  return await http.get(`payment/default-payment`);
};
export const subscribe = async () => {
  return await http.get(`payment/subscribe`);
};
export const changePaymentMethod = async () => {
  return await http.get(`payment/change-payment`);
};
export const unsubscribe = async () => {
  return await http.get(`payment/unsubscribe`);
};
