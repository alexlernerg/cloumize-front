import { useEffect, useState } from "react";
import { getSavingsPlans } from "../../../services/DataService";
import templateSavingsPlans from "./SavingsPlans.template";

const SavingsPlans =()=>{
  //Screen width
  const screenWidthMobile = window.screen.width < 1280

  const [dataSP, setDataSP] = useState([{
    user_id_cm: 0,
    aws_account_id: 2379241094,
    sp_id_aws: "99ec1362-fcdd-4f09-8e2f-6ada70ff901c",
    status: "active",
    sp_type: "Compute",
    instance_family: "",
    term_remaining_d: 15,
    commitment: 0.001,
    payment_monthly: 0.915,
    payment_upfront: 0
  }]);

  useEffect(() => {
    getSavingsPlans()
      .then((response: any) => {
        if (response?.name !== 'Error') {
          setDataSP(response.savings_plan_data)
        }
      })
      .catch((error: any) => {
        console.error('Error data SF', error);
      });
  }, []);
  
  const columnsSP = ['AWS Account ID', 'Savings Plan D', 'Status', 'Type', 'Instance Family', 'Team Remaining', 'Commitment', 'Payment Monthly', 'Payment Upfront']
  
  const info = [
    { id: 0, title: 'Monthly Commitment', savings: 'Total', total: '$0' },
    { id: 1, title: 'Upfront Payment', savings: 'Total', total: '$0' },
    { id: 2, title: 'Savings Plans', savings: 'Count', total: '0' },
  ];

  return templateSavingsPlans(screenWidthMobile, dataSP, columnsSP, info);
}

export default SavingsPlans;