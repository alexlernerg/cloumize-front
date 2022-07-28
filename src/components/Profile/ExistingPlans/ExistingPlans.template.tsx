import React from 'react';
import Navbar from '../../Misc/Navbar/Navbar';
import TableSkeleton from '../TableSkeleton/TableSkeleton';
import './ExistingPlans.scss';

const dataEP = [
  {
    user_id_cm: 1,
    aws_account_id: 159825639153,
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
    user_id_cm: 1,
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

const ExistingPlans = () => {
  return <div className='ExistingPlans'>
    <Navbar/>
    <div className='ExistingPlans__container'>
      <h1>Purchased Reserved Instances</h1>
      <div>
        <p>Active Plans (MTD) 4</p>
        <p>Expiring This Month 2</p>
      </div>
      <p>Barra de búsqueda</p>
      <TableSkeleton data={dataEP} columns={columnsEP}/>
    </div>
  </div>;
};

export default ExistingPlans;