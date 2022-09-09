import { create } from './BaseService';

const http = create({
  useAccessToken: false,
});

export const getDashboard = async (data:any) => {
    return await http.post(`/data/dashboard`, data);
  };
export const getSavingsFinder = async (data:any) => {
  return await http.post(`/data/savings-finder`, data);
};
export const getComputeFinder = async (data:any) => {
  return await http.post(`/data/compute-finder`, data);
};
export const getExistingPlans = async (data:any) => {
    return await http.post(`/data/existing-plans`, data);
  };
  export const getSavingsPlans = async (data:any) => {
    return await http.post(`/data/savings-plans`, data);
  };
  export const getAccount = async (data:any) => {
    return await http.post(`/data/account`, data);
  };