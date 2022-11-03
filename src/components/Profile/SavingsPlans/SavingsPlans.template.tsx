import React from 'react';
import Navbar from '../../Misc/Navbar/Navbar';
import Spinner from '../../Misc/Spinner/Spinner';
import Data2Skeleton from '../Auxiliar/DataSkeleton/DataSkeleton';
import TableSkeleton from '../Auxiliar/TableSkeleton/TableSkeleton';
import { IInfo } from '../ExistingPlans/ExistingPlans.template';
import './SavingsPlans.scss';

interface IDataSP {
  user_id_cm: number;
  aws_account_id: number;
  sp_id_aws: string;
  status: string;
  sp_type: string;
  instance_family: string;
  term_remaining_d: number;
  commitment: number;
  payment_monthly: number;
  payment_upfront: number;
}

const ExternalData = ({ data }: {data: number[]}) => {
  return (
    <div className='SavingsPlans__interestingData'>
      <p>
        <img src='/Profile/SP1.svg' alt='icon' />
        Active Plans (MTD) {data[0]}
      </p>
      <p>
        <img src='/Profile/CF5.svg' alt='icon' />
        Expiring This Month {data[1]}
      </p>
    </div>
  );
};

const SavingsPlans = (
  screenWidthMobile: boolean,
  dataSP: IDataSP[],
  columnsSP: string[],
  info: IInfo[],
  stats: number[]
) => {
  console.log('data', dataSP);
  return (
    <div className='SavingsPlans'>
      <Navbar />
      {dataSP[0].user_id_cm === 0 ? (
        <Spinner />
      ) : (
        <div className='SavingsPlans__container'>
          <h1 className='SavingsPlans__container-title'>
            Purchased Savings Plans
          </h1>
          {!screenWidthMobile && <ExternalData data={stats} />}
          {screenWidthMobile ? (
            <Data2Skeleton info={info} data={dataSP} />
          ) : (
            <TableSkeleton data={dataSP} columns={columnsSP} />
          )}
          {screenWidthMobile && <ExternalData data={stats} />}
          {screenWidthMobile ? (
            <TableSkeleton data={dataSP} columns={columnsSP} />
          ) : (
            <Data2Skeleton info={info} data={dataSP} />
          )}
        </div>
      )}
    </div>
  );
};

export default SavingsPlans;
