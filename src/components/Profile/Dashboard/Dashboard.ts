import { useEffect } from "react";
import { getDashboard } from "../../../services/DataService";
import templateDashboard from "./Dashboard.template";

const Dashboard =()=>{
  const dataRest = [
    {
      user_id_cm: 1, //Falta
      ec2_wasted_spending_year: 1644.2827334544, //missed_savings_last_year?
      ec2_wasted_spending_last_month: 154.656, //missed_savings_last_month?
      spending_ec2_last_month: 663.63, //ec2_cost_last_month?
      spending_ec2_last_year: 19294.53, //ec2_cost_last_year?
      achieved_savings: 0.0, //achieved_savings_last_year / achieved_savings_last_month
      savings_strategies_approved: 0, //OK
      savings_strategies_running: 0, //OK
      savings_strategies_pending: 0, //OK
      instance_breakdown_family: [{ t2: 83.33 }, { m4: 12.5 }, { m5: 4.17 }], //Instance family?
      instance_breakdown_az: [
        { 'eu-central-1a': 91.67 },
        { 'eu-central-1b': 8.33 },
      ], //az?
      instance_breakdown_platform: {
        Windows: 70.83,
        'Linux/UNIX': 8.33,
        'Windows BYOL': 20.83,
      }, //platform?
      coverage: { percentage_covered: 0.0, percentage_not_covered: 100.0 }, //OK
      //Falta spending_overview / potential_annual
    },
    {
      user_id_cm: 2,
      ec2_wasted_spending_year: 0.0,
      ec2_wasted_spending_last_month: 0.0,
      spending_ec2_last_month: 0.0,
      spending_ec2_last_year: 63.0,
      achieved_savings: 0.0,
      savings_strategies_approved: 0,
      savings_strategies_running: 0,
      savings_strategies_pending: 0,
      instance_breakdown_family: [{ t2: 100.0 }],
      instance_breakdown_az: [{ 'eu-west-1a': 33.33 }, { 'eu-west-1b': 66.67 }],
      instance_breakdown_platform: [
        { 'Linux/UNIX': 66.67 },
        { 'Red Hat Enterprise Linux': 16.67 },
        { 'SUSE Linux': 16.67 },
      ],
      coverage: [{ percentage_covered: 25.0 }, { percentage_not_covered: 75.0 }],
    },
  ];

  useEffect(() => {
    getDashboard()
      .then((response: any) => console.log(response.dashboard_data))
      .catch((error: any) => {
        console.error('Error data SF', error);
      });
  }, []);

  const data = [
    { title: 'Last 12 months', EC2: dataRest[0].spending_ec2_last_year, achieved_savings: dataRest[0].achieved_savings, wasted_spending: dataRest[0].ec2_wasted_spending_year},
    {title: 'Last month', EC2: dataRest[0].spending_ec2_last_month, achieved_savings: dataRest[0].achieved_savings, wasted_spending: dataRest[0].ec2_wasted_spending_last_month}
  ]
  return templateDashboard(dataRest, data);
}

export default Dashboard;