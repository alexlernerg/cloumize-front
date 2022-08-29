import templateExistingPlans from "./ExistingPlans.template";

const ExistingPlans =()=>{
  //Screen width
  const screenWidthMobile = window.screen.width < 1280

  const dataEP = [
    {
      user_id_cm: 1,
      aws_account_id: 159825639152,
      group_reservation_id: "186cbf9e-c75f-4f10-8688-468719c62ddf",
      status: "Active",
      description: "Linux/UNIX standard reserved Instance",
      instance_family: 12,
      reservation_count: 2,
      team_remaining: "Autopilot",
      discount: "25%",
      autosave: "True",
    },
    {
      user_id_cm: 2,
      aws_account_id: 159825639153,
      group_reservation_id: "186cbf9e-c75f-4f10-8688-468719c62ddf",
      status: "Expired",
      description: "Linux/UNIX standard reserved Instance",
      instance_family: 14,
      reservation_count: 2,
      team_remaining: "3 Months",
      discount: "25%",
      autosave: "False",
    }
  ];
  
  const columnsEP = ['AWS Account ID', 'Group Reservation ID', 'Status', 'Description', 'Instance Family', 'Reservation Count', 'Team Remaining', 'Discount', 'Auto-Save']
  
  const info = [
    { id: 0, title: 'Monthly Commitment', savings: 'Total', total: '$0' },
    { id: 1, title: 'Upfront Payment', savings: 'Total', total: '$0' },
    { id: 2, title: 'Reserved Instances', savings: 'Count', total: '0' },
  ];

  return templateExistingPlans(screenWidthMobile, dataEP, columnsEP, info);
}

export default ExistingPlans;