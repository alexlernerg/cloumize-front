import { useEffect, useState } from 'react';
import { useUser } from '../../../context/hook/useUser';
import { getDashboard, getDiscounts } from '../../../services/DataService';
import templateDashboard from './Dashboard.template';

const Dashboard = () => {
  const [dataRest, setDataRest] = useState({
    potential_annual: 0,
    missed_savings_last_year: 1596.9853334544,
    ec2_cost_last_year: 19868.27,
    achieved_savings_last_year: 0,
    missed_savings_last_month: 159.8112,
    ec2_cost_last_month: 774.66,
    achieved_savings_last_month: 0,
    savings_strategies_approved: 0,
    savings_strategies_running: 0,
    savings_strategies_pending: 0,
    instance_family: [
      {
        t2: 83.33,
      },
      {
        m4: 12.5,
      },
      {
        m5: 4.17,
      },
    ],
    az: [
      {
        'eu-central-1a': 91.67,
      },
      {
        'eu-central-1b': 8.33,
      },
    ],
    platform: {
      Windows: 70.83,
      'Linux/UNIX': 8.33,
      'Windows BYOL': 20.83,
    },
    coverage: {
      percentage_covered: 60.2,
      percentage_not_covered: 39.8,
    },
    spending_overview: [
      {
        date: '09/21',
        spending_other: 1319.0965546592001,
        autopilot: 0,
      },
      {
        date: '10/21',
        spending_other: 1332.2767557695997,
        autopilot: 0,
      },
      {
        date: '11/21',
        spending_other: 1172.7441292616,
        autopilot: 0,
      },
      {
        date: '12/21',
        spending_other: 1315.966794496,
        autopilot: 0,
      },
      {
        date: '01/22',
        spending_other: 1319.9267891176,
        autopilot: 0,
      },
      {
        date: '02/22',
        spending_other: 1185.717794468,
        autopilot: 0,
      },
      {
        date: '03/22',
        spending_other: 1319.070034856,
        autopilot: 0,
      },
      {
        date: '04/22',
        spending_other: 1290.5424247182,
        autopilot: 0,
      },
      {
        date: '05/22',
        spending_other: 1320.0750210848,
        autopilot: 0,
      },
      {
        date: '06/22',
        spending_other: 0,
        autopilot: 0,
      },
      {
        date: '07/22',
        spending_other: 576.0955757277001,
        autopilot: 0,
      },
      {
        date: '08/22',
        spending_other: 986.6868789024,
        autopilot: 68.186724,
      },
    ],
  });

  const { currentUser } = useUser();

  const [onBoarding, setOnBoarding] = useState(true);
  const showOnBoarding = () => setOnBoarding(false);

  useEffect(() => {
    if (currentUser?.sync_instance_status == 0) {
      setOnBoarding(false);
    } else {
      const interval = setInterval(() => {
        getDiscounts().then((response: any) => {
          if (response.sync_instance_status == 0) {
            setOnBoarding(false);
            clearInterval(interval);
            getDashboard()
              .then((response: any) => {
                if (response.dashboard_data.length !== 0) {
                  setDataRest(response.dashboard_data);
                }
              })
              .catch((error: any) => {
                console.error('Error data Dashboard', error);
              });
          } else {
            setOnBoarding(true);
          }
        });
      }, 5000);
    }
  }, [currentUser, onBoarding]);

  const data = [
    {
      title: 'Last 12 months',
      EC2: dataRest?.ec2_cost_last_year,
      achieved_savings: dataRest?.achieved_savings_last_year,
      wasted_spending: dataRest?.missed_savings_last_year,
    },
    {
      title: 'Last month',
      EC2: dataRest?.ec2_cost_last_month,
      achieved_savings: dataRest?.achieved_savings_last_month,
      wasted_spending: dataRest?.missed_savings_last_month,
    },
  ];
  return templateDashboard(dataRest, data, onBoarding, showOnBoarding);
};

export default Dashboard;
