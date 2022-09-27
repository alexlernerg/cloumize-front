import React from 'react';
import Navbar from '../../Misc/Navbar/Navbar';
import Spinner from '../../Misc/Spinner/Spinner';
import Data2Skeleton from '../Aux/DataSkeleton/DataSkeleton';
import TableSkeleton from '../Aux/TableSkeleton/TableSkeleton';
import './ExistingPlans.scss';

const ExternalData = () => {
  return(
    <div className='ExistingPlans__interestingData'>
        <p><img src="/Profile/EP1.svg" alt="icon"/>Active Plans (MTD) 4</p>
        <p><img src="/Profile/CF5.svg" alt="icon"/>Expiring This Month 2</p>
      </div>
  )
}

const ExistingPlans = (screenWidthMobile:boolean, dataEP:any, columnsEP:string[], info:any) => {
  return <div className='ExistingPlans'>
    <Navbar/>
    {dataEP[0].user_id_cm === 0 ? <Spinner/> : 
    <div className='ExistingPlans__container'>
      <h1 className='ExistingPlans__container-title'>Purchased Reserved Instances</h1>
      {!screenWidthMobile && <ExternalData/>}
      {screenWidthMobile ? <Data2Skeleton info={info} data={dataEP}/>:<TableSkeleton data={dataEP} columns={columnsEP}/>}
      {screenWidthMobile && <ExternalData/>}
      {screenWidthMobile ? <TableSkeleton data={dataEP} columns={columnsEP}/>:<Data2Skeleton info={info} data={dataEP}/>}
    </div>}
  </div>;
};

export default ExistingPlans;