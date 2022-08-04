import { create } from './BaseService';

const http = create({
  useAccessToken: false,
});

export const getPaymentSession = async (data:any) => {
  return await http.post(`/create-checkout-session`, data);
};

export const createPaymentSession = async (data:any) => {
  return await http.post(`/create-portal-session`, data);
};

// export const webhookPayment = async () => {
//   return await http.get(`/webhook`);
// };
