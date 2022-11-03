import React from 'react';
import Navbar from '../../Misc/Navbar/Navbar';
import Spinner from '../../Misc/Spinner/Spinner';
import Data2Skeleton from '../Auxiliar/DataSkeleton/DataSkeleton';
import TableSkeleton from '../Auxiliar/TableSkeleton/TableSkeleton';
import './ComputeFinder.scss';

interface IDataCF {
  user_id_cm: number;
  aws_account_id: number;
  instance_id: string;
  instance_type: string;
  region: string;
  az: string;
  platform: string;
  tenancy: string;
  instance_lifecycle: string;
  state: string;
  launch_time: string;
}

const ExternalData = ({data}:{data:number[]}) => {
  return (
    <div className='ComputeFinder__interestingData'>
      <p>
        <img src='/Profile/CF1.svg' alt='icon' />{data[0]} Running Instances
      </p>
      <p>
        <img src='/Profile/CF2.svg' alt='icon' />{data[1]} Stopped Instances
      </p>
      <p>
        <img src='/Profile/CF3.svg' alt='icon' />{data[2]} On-Demand Instances
      </p>
      <p>
        <img src='/Profile/CF4.svg' alt='icon' />{data[3]} Spot Instances
      </p>
      <p>
        <img src='/Profile/CF5.svg' alt='icon' />{data[4]} Scheduled Instances
      </p>
    </div>
  );
};

const ComputeFinder = (screenWidthMobile: boolean, dataCF: IDataCF[], columnsCF:string[], stats:number[]) => {
  return (
    <div className='ComputeFinder'>
      <Navbar />
      {dataCF[0].user_id_cm === 0 ? <Spinner/> : 
      <div className='ComputeFinder__container'>
        <h1 className='ComputeFinder__container-title'>
          Running EC2 Instances
        </h1>
        {!screenWidthMobile && <ExternalData data={stats}/>}
        {screenWidthMobile ? (
          <Data2Skeleton data={dataCF}/>
        ) : (
          <TableSkeleton data={dataCF} columns={columnsCF} />
        )}
        {screenWidthMobile && <ExternalData data={stats}/>}
        {screenWidthMobile ? (
          <TableSkeleton data={dataCF} columns={columnsCF} />
        ) : (
          <Data2Skeleton data={dataCF}/>
        )}
      </div>}
    </div>
  );
};

export default ComputeFinder;
