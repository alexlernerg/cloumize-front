import React from 'react';
import Navbar from '../../Misc/Navbar/Navbar';
import Spinner from '../../Misc/Spinner/Spinner';
import Data2Skeleton from '../Aux/DataSkeleton/DataSkeleton';
import TableSkeleton from '../Aux/TableSkeleton/TableSkeleton';
import './ComputeFinder.scss';

const ExternalData = ({data}:any) => {
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

const ComputeFinder = (screenWidthMobile: boolean, dataCF:any, columnsCF:string[], stats:any) => {
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
