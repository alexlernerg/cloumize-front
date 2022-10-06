import { useEffect, useState } from "react";
import { getSavingsPlans } from "../../../services/DataService";
import templateSavingsPlans from "./SavingsPlans.template";

const SavingsPlans =()=>{
  //Screen width
  const screenWidthMobile = window.screen.width < 1280

  const [info, setInfo] = useState([
    { id: 0, title: 'Monthly Commitment', savings: 'Total', total: '$0' },
    { id: 1, title: 'Upfront Payment', savings: 'Total', total: '$0' },
    { id: 2, title: 'Savings Plans', savings: 'Count', total: '0' },
  ])

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
        if (response?.savings_plan_data.length !== 0) {
          setInfo([
            { id: 0, title: 'Monthly Commitment', savings: 'Total', total: `$${response.savings_plan_stats.monthly_commitment.toFixed(3)}` },
            { id: 1, title: 'Upfront Payment', savings: 'Total', total: `$${response.savings_plan_stats.upfront_payment.toFixed(3)}` },
            { id: 2, title: 'Savings Plans', savings: 'Count', total: `${response.savings_plan_stats.monthly_payment}` },
          ])
          setDataSP(response.savings_plan_data)
        }
      })
      .catch((error: any) => {
        console.error('Error data SP', error);
      });
  }, []);
  
  const columnsSP = ['AWS Account ID', 'Savings Plan ID', 'Status', 'Type', 'Instance Family', 'Term Remaining', 'Commitment', 'Payment Monthly', 'Payment Upfront']

  return templateSavingsPlans(screenWidthMobile, dataSP, columnsSP, info);
}

export default SavingsPlans;