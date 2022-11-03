import { create } from './BaseService';

const http = create({
  useAccessToken: true,
});

//GET 
export const getDashboard = async () => {
  return await http.get(`/data/dashboard`);
};
export const getSavingsFinder = async () => {
  return await http.get(`/data/savings-finder`);
};
export const getComputeFinder = async () => {
  return await http.get(`/data/compute-finder`);
};
export const getExistingPlans = async () => {
  return await http.get(`/data/reserved-instances`);
};
export const getSavingsPlans = async () => {
  return await http.get(`/data/savings-plans`);
};
export const getAccount = async () => {
  return await http.get(`/data/account`);
};
export const getDiscounts = async () => {
  return await http.get(`/data/status-onboarding`);
};

//POST
export const sendARN = async (ARN:any) => {
  return await http.post(`/data/insert-arn`, {data:ARN});
};
export const retryARN = async (SF:any) => {
  return await http.post(`/data/retry-insert-arn`, {data:SF});
};
export const approveSF = async (SF:any) => {
  return await http.post(`/data/aprove-saving-finder`, {data:SF});
};

//AUTO-SAVER
export const saver = async (SF:any) => {
  console.log("DATA TO API:", SF)
  return await http.post(`/data/auto-saver`, {data:SF});
};

