import { useEffect, useState } from "react";
import { getExistingPlans } from "../../../services/DataService";
import templateExistingPlans from "./ExistingPlans.template";

const ExistingPlans =()=>{
  //Screen width
  const screenWidthMobile = window.screen.width < 1280

  const [info, setInfo] = useState([
    { id: 0, title: 'Monthly Commitment', savings: 'Total', total: '$0' },
    { id: 1, title: 'Upfront Payment', savings: 'Total', total: '$0' },
    { id: 2, title: 'Reserved Instances', savings: 'Count', total: '0' },
  ]);

  const [stats, setStats] = useState([0, 0]);

  const [dataEP, setDataEP] = useState([{
    user_id_cm: 0,
    aws_account_id: 159825639152,
    group_reservation_id: "186cbf9e-c75f-4f10-8688-468719c62ddf",
    status: "Active",
    description: "Linux/UNIX standard reserved Instance",
    instance_family: 12,
    reservation_count: 2,
    'term_remaining (days)': "Autopilot", //Change
    discount: "25%",
    cloumize_auto_saver: "True", //Change
  }]);

  useEffect(() => {
    getExistingPlans()
      .then((response: any) => {
        if (response.reserved_instance_data.length !== 0){
          setInfo ([
            { id: 0, title: 'Monthly Commitment', savings: 'Total', total: `$${response.reserved_instance_stats.total_upfront_payment.toFixed(2)}` },
            { id: 1, title: 'Upfront Payment', savings: 'Total', total: `$${response.reserved_instance_stats.total_monthly_payment.toFixed(2)}` },
            { id: 2, title: 'Reserved Instances', savings: 'Count', total: `${response.reserved_instance_stats.count_reserved_instance}` },
          ])
          setStats([response.reserved_instance_stats.active_plans, response.reserved_instance_stats.expiring_this_month])
          setDataEP(response.reserved_instance_data)
        } else {
          setDataEP([])
        }

      })
      .catch((error: any) => {
        console.error('Error data EP', error);
      });
  }, []);

  const columnsEP = ['AWS Account ID', 'Reserved Instance ID', 'Status', 'Description', 'Instance Type', 'Reservation Count', 'Tenancy', 'Term Remaining', 'Auto-Save']

  return templateExistingPlans(screenWidthMobile, dataEP, columnsEP, info, stats);
}

export default ExistingPlans;
