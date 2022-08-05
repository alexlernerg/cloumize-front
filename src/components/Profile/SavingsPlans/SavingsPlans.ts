import templateSavingsPlans from "./SavingsPlans.template";

const SavingsPlans =()=>{
  //Screen width
  const screenWidthMobile = window.screen.width < 1280

  const dataSP = [
    {
      user_id_cm: 2,
      aws_account_id: 2379241094,
      sp_id_aws: "99ec1362-fcdd-4f09-8e2f-6ada70ff901c",
      status: "active",
      sp_type: "Compute",
      instance_family: "",
      term_remaining_d: 15,
      commitment: 0.001,
      discount: '25%'
    },
    {
      user_id_cm: 2,
      aws_account_id: 2379241094,
      sp_id_aws: "7b15c17b-ff5f-4dde-80c3-ccb452f5cf58",
      status: "active",
      sp_type: "EC2Instance",
      instance_family: "t2",
      term_remaining_d: 15,
      commitment: 0.001,
      discount: '25%'
    }
  ];
  
  const columnsSP = ['AWS Account ID', 'Savings Plan D', 'Status', 'Type', 'Instance Family', 'Team Remaining', 'Commitment', 'Discount']
  
  const info = [
    { id: 0, title: 'Monthly Current Commitment', savings: 'Total', total: '$0' },
    { id: 1, title: 'Upfront Payment', savings: 'Total', total: '$0' },
    { id: 2, title: 'Number Savings Plans', savings: 'Numbers', total: '0' },
  ];

  return templateSavingsPlans(screenWidthMobile, dataSP, columnsSP, info);
}

export default SavingsPlans;