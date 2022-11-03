import React from 'react';
import Navbar from '../../Misc/Navbar/Navbar';
import Spinner from '../../Misc/Spinner/Spinner';
import Data2Skeleton from '../Auxiliar/DataSkeleton/DataSkeleton';
import TableSkeleton from '../Auxiliar/TableSkeleton/TableSkeleton';
import './ExistingPlans.scss';

interface IDataEP {
  user_id_cm: number;
  aws_account_id: number;
  group_reservation_id: string;
  status: string;
  description: string;
  instance_family: number;
  reservation_count: number;
  'term_remaining (days)': string;
  discount: string;
  cloumize_auto_saver: string;
}
export interface IInfo {
  id: number; 
  title: string; 
  savings: string; 
  total: string;
}

const ExternalData = ({ data }: {data:number[]}) => {
  return (
    <div className='ExistingPlans__interestingData'>
      <p>
        <img src='/Profile/EP1.svg' alt='icon' />
        Active Plans (MTD) {data[0]}
      </p>
      <p>
        <img src='/Profile/CF5.svg' alt='icon' />
        Expiring This Month {data[1]}
      </p>
    </div>
  );
};

const ExistingPlans = (
  screenWidthMobile: boolean,
  dataEP: IDataEP[],
  columnsEP: string[],
  info: IInfo[],
  stats: number[]
) => {
  return (
    <div className='ExistingPlans'>
      <Navbar />
      {dataEP[0].user_id_cm === 0 ? (
        <Spinner />
      ) : (
        <div className='ExistingPlans__container'>
          <h1 className='ExistingPlans__container-title'>
            Purchased Reserved Instances
          </h1>
          {!screenWidthMobile && <ExternalData data={stats} />}
          {screenWidthMobile ? (
            <Data2Skeleton info={info} data={dataEP} />
          ) : (
            <TableSkeleton data={dataEP} columns={columnsEP} />
          )}
          {screenWidthMobile && <ExternalData data={stats} />}
          {screenWidthMobile ? (
            <TableSkeleton data={dataEP} columns={columnsEP} />
          ) : (
            <Data2Skeleton info={info} data={dataEP} />
          )}
        </div>
      )}
    </div>
  );
};

export default ExistingPlans;
