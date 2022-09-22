import templateSavingsFinder from './SavingsFinder.template';
import { useEffect, useState } from 'react';
import { getSavingsFinder } from '../../../services/DataService';
import { useUser } from '../../../context/hook/useUser';
import axios from 'axios';
import { getAccessToken } from '../../../store/AccessTokenStore';

const SavingsFinder = () => {
  //Screen width
  const screenWidthMobile = window.screen.width < 1280;

  const [dataSF, setDataSF] = useState([
    {
      user_id_cm: 1,
      aws_account_id: 111825639153,
      recommendation_id_cm: 'cm_22926193',
      region: 'EXAMPLE EU (Frankfurt)',
      instance_family: 't2',
      units: 3,
      current_rate: 156.8040008544922,
      Cloumize_Discount: 36.31285095214844,
      cloumize_rate: 99.86399841308594,
      monthly_savings: 56.939998626708984,
      state: '',
    },
  ]);

  useEffect(() => {
    getSavingsFinder()
      .then((response: any) => setDataSF(response.savings_finder_data))
      .catch((error: any) => {
        console.error('Error data SF', error);
      });
  }, []);

  // const dataSF = [
  //   {
  //     user_id_cm: 1,
  //     aws_account_id: 111825639153,
  //     recommendation_id_cm: 'cm_22926193',
  //     region: 'EU (Frankfurt)',
  //     instance_family: 't2',
  //     units: 3,
  //     current_rate: 156.8040008544922,
  //     Cloumize_Discount: 36.31285095214844,
  //     cloumize_rate: 99.86399841308594,
  //     monthly_savings: 56.939998626708984,
  //     state: 'Approved',
  //   },
  //   {
  //     user_id_cm: 1,
  //     aws_account_id: 159825639153,
  //     recommendation_id_cm: 'cm_75986519',
  //     region: 'EU (Frankfurt)',
  //     instance_family: 'm4',
  //     units: 1,
  //     current_rate: 156.6819610595703,
  //     Cloumize_Discount: 27.72176170349121,
  //     cloumize_rate: 113.24696350097656,
  //     monthly_savings: 43.435001373291016,
  //     state: 'Approved',
  //   },
  //   {
  //     user_id_cm: 1,
  //     aws_account_id: 159825639153,
  //     recommendation_id_cm: 'cm_89454363',
  //     region: 'EU (Frankfurt)',
  //     instance_family: 'm5',
  //     units: 2,
  //     current_rate: 167.89999389648438,
  //     Cloumize_Discount: 56.5217399597168,
  //     cloumize_rate: 73.0,
  //     monthly_savings: 94.9000015258789,
  //     state: 'Pending Approval',
  //   },
  //   {
  //     user_id_cm: 1,
  //     aws_account_id: 159825639153,
  //     recommendation_id_cm: 'cm_86770535',
  //     region: 'EU (Frankfurt)',
  //     instance_family: 't2',
  //     units: 5,
  //     current_rate: 131.39999389648438,
  //     Cloumize_Discount: 36.11111068725586,
  //     cloumize_rate: 83.94999694824219,
  //     monthly_savings: 47.45000076293945,
  //     state: 'Approved',
  //   },
  //   {
  //     user_id_cm: 1,
  //     aws_account_id: 159825639153,
  //     recommendation_id_cm: 'cm_31888347',
  //     region: 'EU (Frankfurt)',
  //     instance_family: 't2',
  //     units: 5,
  //     current_rate: 465.2811279296875,
  //     Cloumize_Discount: 34.65348815917969,
  //     cloumize_rate: 304.0450134277344,
  //     monthly_savings: 161.23614501953125,
  //     state: 'Approved',
  //   },
  //   {
  //     user_id_cm: 1,
  //     aws_account_id: 159825639153,
  //     recommendation_id_cm: 'cm_54931469',
  //     region: 'EU (Frankfurt)',
  //     instance_family: 'm4',
  //     units: 1,
  //     current_rate: 87.5999984741211,
  //     Cloumize_Discount: 49.58333206176758,
  //     cloumize_rate: 44.165000915527344,
  //     monthly_savings: 43.435001373291016,
  //     state: 'Savings Activated',
  //   },
  //   {
  //     user_id_cm: 2,
  //     aws_account_id: 2379241094,
  //     recommendation_id_cm: 'cm_27779995',
  //     region: 'EU (Ireland)',
  //     instance_family: 't2',
  //     units: 3,
  //     current_rate: 14.18025016784668,
  //     Cloumize_Discount: 47.87644958496094,
  //     cloumize_rate: 7.391250133514404,
  //     monthly_savings: 6.789000034332275,
  //     state: 'Pending Approval',
  //   },
  // ];

  const columnsSF = [
    'AWS Account ID',
    'Recomendation ID',
    'Region',
    'Family',
    'Units',
    'Current rate',
    'Discount',
    'Cloumize rate',
    'State',
    'Approval',
  ];

  const info = [
    { id: 0, title: 'Cloumize annual', savings: 'Savings', total: '$1,000' },
    { id: 1, title: 'Unapproved annual ', savings: 'Savings', total: '$700' },
    { id: 2, title: 'Total potential', savings: 'Savings', total: '$1,700' },
  ];

  return templateSavingsFinder(screenWidthMobile, dataSF, columnsSF, info);
};

export default SavingsFinder;
