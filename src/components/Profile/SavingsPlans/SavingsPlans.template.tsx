import React from 'react';
import Navbar from '../../Misc/Navbar/Navbar';
import Spinner from '../../Misc/Spinner/Spinner';
import Data2Skeleton from '../Aux/DataSkeleton/DataSkeleton';
import TableSkeleton from '../Aux/TableSkeleton/TableSkeleton';
import './SavingsPlans.scss';

const ExternalData = () => {
  //TODO: meter datos de la API
  return(
    <div className='SavingsPlans__interestingData'>
        <p><img src="/Profile/SP1.svg" alt="icon"/>Active Plans (MTD) 2</p>
        <p><img src="/Profile/CF5.svg" alt="icon"/>Expiring This Month 1</p>
      </div>
  )
}

const SavingsPlans = (screenWidthMobile:boolean, dataSP:any, columnsSP:string[], info:any) => {
  return <div className='SavingsPlans'>
    <Navbar/>
    {dataSP[0].user_id_cm === 0 ? <Spinner/> : 
    <div className='SavingsPlans__container'>
      <h1 className='SavingsPlans__container-title'>Purchased Savings Plans</h1>
      {!screenWidthMobile && <ExternalData/>}
    {screenWidthMobile ? <Data2Skeleton info={info} data={dataSP}/>:<TableSkeleton data={dataSP} columns={columnsSP}/>}
    {screenWidthMobile && <ExternalData/>}
    {screenWidthMobile ? <TableSkeleton data={dataSP} columns={columnsSP}/>:<Data2Skeleton info={info} data={dataSP}/>}
    
    </div>}
  </div>;
};

export default SavingsPlans;