import React, { useState } from 'react';
import Navbar from '../../Misc/Navbar/Navbar';
import './SavingsFinder.scss';
import TableSkeleton from '../Auxiliar/TableSkeleton/TableSkeleton';
import Data2Skeleton from '../Auxiliar/DataSkeleton/DataSkeleton';
import Spinner from '../../Misc/Spinner/Spinner';

const SavingsFinder = (screenWidthMobile:boolean, dataSF:any, columnsSF:string[], info:any) => {
  return (
    <div className='SavingsFinder'>
      <Navbar />
      {dataSF[0].user_id_cm === 0 ? <Spinner/> :
      <div className='SavingsFinder__container'>
        <div className='SavingsFinder__container-top'>
          <h1 className='SavingsFinder__container-title'>
            Savings Finder
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
              Auto-Saver
            </label>
          </div>
        </div>
        {screenWidthMobile ? <Data2Skeleton info={info} data={dataSF}/>:<TableSkeleton data={dataSF} columns={columnsSF} />}
        {screenWidthMobile ? <TableSkeleton data={dataSF} columns={columnsSF} />: <Data2Skeleton info={info} data={dataSF}/>}
      </div>}
    </div>
  );
};

export default SavingsFinder;
