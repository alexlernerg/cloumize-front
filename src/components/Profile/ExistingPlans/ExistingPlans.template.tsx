import React from 'react';
import Navbar from '../../Misc/Navbar/Navbar';
import Data2Skeleton from '../Aux/DataSkeleton/DataSkeleton';
import TableSkeleton from '../Aux/TableSkeleton/TableSkeleton';
import './ExistingPlans.scss';

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
  { id: 0, title: 'Monthly reserved instances', savings: 'Total', total: '$0' },
  { id: 1, title: 'Upfront Payment', savings: 'Total', total: '$0' },
  { id: 2, title: 'Number Reserved', savings: 'Numbers', total: '0' },
];

const ExternalData = () => {
  return(
    <div className='ExistingPlans__interestingData'>
        <p><img src="/Profile/EP1.svg" alt="icon"/>Active Plans (MTD) 4</p>
        <p><img src="/Profile/CF5.svg" alt="icon"/>Expiring This Month 2</p>
      </div>
  )
}

const ExistingPlans = (screenWidthMobile:boolean) => {
  return <div className='ExistingPlans'>
    <Navbar/>
    <div className='ExistingPlans__container'>
      <h1 className='ExistingPlans__container-title'>Purchased Reserved Instances</h1>
      {!screenWidthMobile && <ExternalData/>}
      {screenWidthMobile ? <Data2Skeleton info={info}/>:<TableSkeleton data={dataEP} columns={columnsEP}/>}
      {screenWidthMobile && <ExternalData/>}
      {screenWidthMobile ? <TableSkeleton data={dataEP} columns={columnsEP}/>:<Data2Skeleton info={info}/>}
    </div>
  </div>;
};

export default ExistingPlans;