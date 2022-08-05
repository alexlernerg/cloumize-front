import React from 'react';
import Navbar from '../../Misc/Navbar/Navbar';
import Data2Skeleton from '../Aux/DataSkeleton/DataSkeleton';
import TableSkeleton from '../Aux/TableSkeleton/TableSkeleton';
import './ComputeFinder.scss';

const ExternalData = () => {
  return (
    <div className='ComputeFinder__interestingData'>
      <p>
        <img src='/Profile/CF1.svg' alt='icon' />3 Running Instances
      </p>
      <p>
        <img src='/Profile/CF2.svg' alt='icon' />1 Stopped Instances
      </p>
      <p>
        <img src='/Profile/CF3.svg' alt='icon' />2 On-Demand Instances
      </p>
      <p>
        <img src='/Profile/CF4.svg' alt='icon' />1 Spot Instances
      </p>
      <p>
        <img src='/Profile/CF5.svg' alt='icon' />0 Scheduled Instances
      </p>
    </div>
  );
};

const ComputeFinder = (screenWidthMobile: boolean, dataCF:any, columnsCF:string[], info:any) => {
  return (
    <div className='ComputeFinder'>
      <Navbar />
      <div className='ComputeFinder__container'>
        <h1 className='ComputeFinder__container-title'>
          Running EC2 Instances
        </h1>
        {!screenWidthMobile && <ExternalData />}
        {screenWidthMobile ? (
          <Data2Skeleton info={info} data={dataCF}/>
        ) : (
          <TableSkeleton data={dataCF} columns={columnsCF} />
        )}
        {screenWidthMobile && <ExternalData />}
        {screenWidthMobile ? (
          <TableSkeleton data={dataCF} columns={columnsCF} />
        ) : (
          <Data2Skeleton info={info} data={dataCF}/>
        )}
      </div>
    </div>
  );
};

export default ComputeFinder;
