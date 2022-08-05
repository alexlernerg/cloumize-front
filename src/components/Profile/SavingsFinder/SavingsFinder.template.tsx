import React, { useState } from 'react';
import Navbar from '../../Misc/Navbar/Navbar';
import './SavingsFinder.scss';
import TableSkeleton from '../Aux/TableSkeleton/TableSkeleton';
import Data2Skeleton from '../Aux/DataSkeleton/DataSkeleton';

const SavingsFinder = (screenWidthMobile:boolean, dataSF:any, columnsSF:string[], info:any) => {
  return (
    <div className='SavingsFinder'>
      <Navbar />
      <div className='SavingsFinder__container'>
        <div className='SavingsFinder__container-top'>
          <h1 className='SavingsFinder__container-title'>
            Available Auto-Savings
          </h1>
          <div className='form-check form-switch'>
            <input
              className='form-check-input'
              type='checkbox'
              role='switch'
              id='flexSwitchCheckDefault'
            />
            <label
              className='SavingsFinder__container-recomendations form-check-label'
              htmlFor='flexSwitchCheckDefault'
            >
              Recibe recomendaciones
            </label>
          </div>
        </div>
        {screenWidthMobile ? <Data2Skeleton info={info} data={dataSF}/>:<TableSkeleton data={dataSF} columns={columnsSF} />}
        {screenWidthMobile ? <TableSkeleton data={dataSF} columns={columnsSF} />: <Data2Skeleton info={info} data={dataSF}/>}
      </div>
    </div>
  );
};

export default SavingsFinder;
