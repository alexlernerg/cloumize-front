import templateSavingsFinder from './SavingsFinder.template';
import { useEffect, useState } from 'react';
import { getSavingsFinder } from '../../../services/DataService';

const SavingsFinder = () => {
  //Screen width
  const screenWidthMobile = window.screen.width < 1280;

  const [info, setInfo] = useState([
    { id: 0, title: 'Cloumize annual', savings: 'Savings', total: '$1,000' },
    { id: 1, title: 'Unapproved annual ', savings: 'Savings', total: '$700' },
    { id: 2, title: 'Total potential', savings: 'Savings', total: '$1,700' },
  ]);

  const [dataSF, setDataSF] = useState([
    {
      user_id_cm: 0,
      aws_account_id: 111825639153,
      recommendation_id_cm: 'no_recommendation',
      region: 'EXAMPLE EU (Frankfurt)',
      instance_family: 't2',
      units: 3,
      current_rate: 156.8040008544922,
      cloumize_discount: 36.31285095214844,
      cloumize_rate: 99.86399841308594,
      cloumize_annual_savings: 521.22,
      state: '',
    },
  ]);

  useEffect(() => {
    getSavingsFinder()
      .then((response: any) => {
        console.log("responseSF", response)
        if (response?.savings_finder_data.length !== 0) {
          setInfo([
            { id: 0, title: 'Cloumize annual', savings: 'Savings', total: `$${response.savings_finder_stats.cloumize_annual_savings.toFixed(2)}` },
            { id: 1, title: 'Unapproved annual ', savings: 'Savings', total: `$${response.savings_finder_stats.unapproved_annual_savings.toFixed(2)}` },
            { id: 2, title: 'Total potential', savings: 'Savings', total: `$${response.savings_finder_stats.total_potential_annual_savings.toFixed(2)}` },
          ])
          setDataSF(response.savings_finder_data)
        } else {
          setDataSF([])
        }
      })
      .catch((error: any) => {
        console.error('Error data SF', error);
      });
  }, []);

  const columnsSF = [
    'AWS Account ID',
    'Recomendation ID',
    'Region',
    'Family',
    'Units',
    'Current rate',
    'Discount',
    'Cloumize rate',
    'Annual Savings',
    'State',
    'Approval'
  ];

  return templateSavingsFinder(screenWidthMobile, dataSF, columnsSF, info);
};

export default SavingsFinder;
