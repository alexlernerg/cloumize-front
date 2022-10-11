import { create } from './BaseService';

const http = create({
  useAccessToken: true,
});

export const getPrice = async (data:any) => {
    return await http.post(`/consulting-price`, data);
  };
export const getPaymentSession = async (data:any) => {
  return await http.post(`/create-checkout-session`, data);
};
export const createPaymentSession = async (data:any) => {
  return await http.post(`/create-portal-session`, data);
};
export const getClientID = async () => {
  return await http.get(`/payment/card-wallet`);
};

// export const webhookPayment = async () => {
//   return await http.get(`/webhook`);
// };
