import React from 'react';
import Navbar from '../../Misc/Navbar/Navbar';
import './SavingsFinder.scss';
import TableSkeleton from '../Auxiliar/TableSkeleton/TableSkeleton';
import Data2Skeleton from '../Auxiliar/DataSkeleton/DataSkeleton';
import Spinner from '../../Misc/Spinner/Spinner';
import { IInfo } from '../ExistingPlans/ExistingPlans.template';

interface IDataSF {
  user_id_cm: number;
  aws_account_id: number;
  recommendation_id_cm: string;
  region: string;
  instance_family: string;
  units: number;
  current_rate: number;
  cloumize_discount: number;
  cloumize_rate: number;
  cloumize_annual_savings: number;
  state: string;
}

const SavingsFinder = (
  screenWidthMobile: boolean,
  dataSF: IDataSF[],
  columnsSF: string[],
  info: IInfo[],
  onChange: (e: React.FormEvent<HTMLInputElement>) => Promise<void>,
  autoSaver: boolean
) => {
  return (
    <div className='SavingsFinder'>
      <Navbar />
      {dataSF[0]?.recommendation_id_cm === 'no_recommendation' ? (
        <Spinner />
      ) : (
        <div className='SavingsFinder__container'>
          <div className='SavingsFinder__container-top'>
            <h1 className='SavingsFinder__container-title'>Savings Finder</h1>
            <div className='form-check form-switch'>
              <input
                className='form-check-input'
                type='checkbox'
                role='switch'
                id='flexSwitchCheckDefault'
                onChange={onChange}
                checked={autoSaver}
              />
              <label
                className='SavingsFinder__container-recomendations form-check-label'
                htmlFor='flexSwitchCheckDefault'
              >
                Auto-Saver
              </label>
            </div>
          </div>
          {screenWidthMobile ? (
            <Data2Skeleton info={info} data={dataSF} />
          ) : (
            <TableSkeleton data={dataSF} columns={columnsSF} />
          )}
          {screenWidthMobile ? (
            <TableSkeleton data={dataSF} columns={columnsSF} />
          ) : (
            <Data2Skeleton info={info} data={dataSF} />
          )}
        </div>
      )}
    </div>
  );
};

export default SavingsFinder;
