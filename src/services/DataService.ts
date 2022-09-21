import { create } from './BaseService';

const http = create({
  useAccessToken: true,
});

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
  return await http.get(`/data/existing-plans`);
};
export const getSavingsPlans = async () => {
  return await http.get(`/data/savings-plans`);
};
export const getAccount = async () => {
  return await http.get(`/data/account`);
};
