import React, { useState } from 'react';
import Navbar from '../../Misc/Navbar/Navbar';
import { useTable } from 'react-table';
import './SavingsFinder.scss';
import TableSkeleton from '../TableSkeleton/TableSkeleton';

const dataSF = [
  {
    user_id_cm: 1,
    aws_account_id: 159825639153,
    recommendation_id_cm: 'cm_22926193',
    region: 'EU (Frankfurt)',
    instance_family: 't2',
    units: 3,
    current_rate: 156.8040008544922,
    Cloumize_Discount: 36.31285095214844,
    cloumize_rate: 99.86399841308594,
    monthly_savings: 56.939998626708984,
    state: '',
  },
  {
    user_id_cm: 1,
    aws_account_id: 159825639153,
    recommendation_id_cm: 'cm_75986519',
    region: 'EU (Frankfurt)',
    instance_family: 'm4',
    units: 1,
    current_rate: 156.6819610595703,
    Cloumize_Discount: 27.72176170349121,
    cloumize_rate: 113.24696350097656,
    monthly_savings: 43.435001373291016,
    state: '',
  },
  {
    user_id_cm: 1,
    aws_account_id: 159825639153,
    recommendation_id_cm: 'cm_89454363',
    region: 'EU (Frankfurt)',
    instance_family: 'm5',
    units: 2,
    current_rate: 167.89999389648438,
    Cloumize_Discount: 56.5217399597168,
    cloumize_rate: 73.0,
    monthly_savings: 94.9000015258789,
    state: 'Pending Approval',
  },
  {
    user_id_cm: 1,
    aws_account_id: 159825639153,
    recommendation_id_cm: 'cm_86770535',
    region: 'EU (Frankfurt)',
    instance_family: 't2',
    units: 5,
    current_rate: 131.39999389648438,
    Cloumize_Discount: 36.11111068725586,
    cloumize_rate: 83.94999694824219,
    monthly_savings: 47.45000076293945,
    state: '',
  },
  {
    user_id_cm: 1,
    aws_account_id: 159825639153,
    recommendation_id_cm: 'cm_31888347',
    region: 'EU (Frankfurt)',
    instance_family: 't2',
    units: 5,
    current_rate: 465.2811279296875,
    Cloumize_Discount: 34.65348815917969,
    cloumize_rate: 304.0450134277344,
    monthly_savings: 161.23614501953125,
    state: '',
  },
  {
    user_id_cm: 1,
    aws_account_id: 159825639153,
    recommendation_id_cm: 'cm_54931469',
    region: 'EU (Frankfurt)',
    instance_family: 'm4',
    units: 1,
    current_rate: 87.5999984741211,
    Cloumize_Discount: 49.58333206176758,
    cloumize_rate: 44.165000915527344,
    monthly_savings: 43.435001373291016,
    state: 'Savings Activated',
  },
  {
    user_id_cm: 2,
    aws_account_id: 2379241094,
    recommendation_id_cm: 'cm_27779995',
    region: 'EU (Ireland)',
    instance_family: 't2',
    units: 3,
    current_rate: 14.18025016784668,
    Cloumize_Discount: 47.87644958496094,
    cloumize_rate: 7.391250133514404,
    monthly_savings: 6.789000034332275,
    state: 'Pending Approval',
  },
];

const columnsSF = [
  {
    Header: 'SAWS Account ID',
    accessor: 'user_id_cm', // accessor is the "key" in the data
  },
  {
    Header: 'Recomendation ID',
    accessor: 'aws_account_id',
  },
  {
    Header: 'Region',
    accessor: 'recommendation_id_cm',
  },
  {
    Header: 'Family',
    accessor: 'region',
  },
  {
    Header: 'Units',
    accessor: 'instance_family',
  },
  {
    Header: 'Discount',
    accessor: 'units',
  },
  {
    Header: 'Cloumize rate',
    accessor: 'current_rate',
  },
  {
    Header: 'State',
    accessor: 'Cloumize_Discount',
  },
  {
    Header: 'Approval',
    accessor: 'cloumize_rate',
  },
  {
    Header: 'Current rate',
    accessor: 'monthly_savings',
  },
  {
    Header: 'Current rate',
    accessor: 'state',
  },
]

const SavingsFinder = () => {

  return <div className='SavingsFinderContainer'>
    <Navbar/>
    <TableSkeleton data={dataSF} columns={columnsSF}/>
  </div>;
};

export default SavingsFinder;