import React from 'react';
import Navbar from '../../Misc/Navbar/Navbar';
import TableSkeleton from '../TableSkeleton/TableSkeleton';
import './SavingsPlans.scss';

const dataSP = [
  {
    user_id_cm: 2,
    aws_account_id: 2379241094,
    sp_id_aws: "99ec1362-fcdd-4f09-8e2f-6ada70ff901c",
    status: "active",
    sp_type: "Compute",
    instance_family: "",
    term_remaining_d: 15,
    commitment: 0.001
  },
  {
    user_id_cm: 2,
    aws_account_id: 2379241094,
    sp_id_aws: "7b15c17b-ff5f-4dde-80c3-ccb452f5cf58",
    status: "active",
    sp_type: "EC2Instance",
    instance_family: "t2",
    term_remaining_d: 15,
    commitment: 0.001
  }
];

const columnsSP = ['AWS Account ID', 'Savings Plan D', 'Status', 'Type', 'Instance Family', 'Team Remaining', 'Commitment', 'Discount']

const SavingsPlans = () => {
  return <div className='SavingsPlans'>
    <Navbar/>
    <div className='SavingsPlans__container'>
      <h1>Purchased Savings Plans</h1>
      <div>
        <p>Active Plans (MTD) 2</p>
        <p>Expiring This Month 1</p>
      </div>
      <p>Barra de búsqueda</p>
    <TableSkeleton data={dataSP} columns={columnsSP}/>
    </div>
  </div>;
};

export default SavingsPlans;