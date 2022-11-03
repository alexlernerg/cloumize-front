import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../Misc/Navbar/Navbar';
import OnBoarding from '../../OnBoarding/OnBoarding';
import './Dashboard.scss';
import {
  DoughnutGraphicView,
  HorizontalBarGraphic,
  PieGraphicView,
  VerticalBarGraphic,
} from './Graphics/Graphics';
import Spinner from '../../Misc/Spinner/Spinner';
import { addCommas } from '../../../helpers/transformNumber';

interface IDate {
  date: string;
  spending_other: number;
  autopilot: number;
}
interface IPlatform {
  Windows: number;
  'Linux/UNIX': number;
  'Windows BYOL': number;
}
interface ICoverage {
  percentage_covered: number;
  percentage_not_covered: number;
}
 export interface IDataRest {
  potential_annual: number;
  missed_savings_last_year: number;
  ec2_cost_last_year: number;
  achieved_savings_last_year: number;
  missed_savings_last_month: number;
  ec2_cost_last_month: number;
  achieved_savings_last_month: number;
  savings_strategies_approved: number;
  savings_strategies_running: number;
  savings_strategies_pending: number;
  instance_family: any;
  az: any;
  platform: IPlatform;
  coverage: ICoverage;
  spending_overview: IDate[];
}
interface IData {
  title: string;
  EC2: number;
  achieved_savings: number;
  wasted_spending: number;
}

const DataLastMonths = ({ data }: {data:IData}) => {
  return (
    <section className='DataLastMonths'>
      <div className='DataLastMonths__header'>
        <p>{data.title}</p>
      </div>
      <div className='DataLastMonths__content'>
        <div>
          <p className='DataLastMonths__content-title'>EC2 Costs</p>
          <p>
            ${addCommas(Number(data.EC2.toFixed(2)))}
            <img src='/Profile/graphic.svg' alt='graphic' className='ms-2' />
          </p>
        </div>
        <div>
          <p className='DataLastMonths__content-title'>Achieved Savings</p>
          <p>
            ${addCommas(Number(data.achieved_savings.toFixed(2)))}
            <img src='/Profile/graphic.svg' alt='graphic' className='ms-2' />
          </p>
        </div>
      </div>
      <div>
        <p className='DataLastMonths__content-title'>Missed Savings</p>
        <p>
          ${addCommas(Number(data.wasted_spending.toFixed(2)))}
          <img src='/Profile/graphic.svg' alt='graphic' className='ms-2' />
        </p>
      </div>
    </section>
  );
};

const Dashboard = (
  dataRest: IDataRest,
  data: IData[],
  onBoarding: boolean,
  showOnBoarding: () => void,
  show: boolean,
  page: number,
  setPage: React.Dispatch<React.SetStateAction<number>>,
  errorAPI: string,
  setErrorAPI: React.Dispatch<React.SetStateAction<string>>
) => {
  return (
    <>
      {onBoarding && (
        <div className='Dashboard__onboarding'>
          <OnBoarding
            closePopup={showOnBoarding}
            show={show}
            page={page}
            setPage={setPage}
            errorAPI={errorAPI}
            setErrorAPI={setErrorAPI}
          />
        </div>
      )}
      <div className={`${onBoarding ? 'disable' : ''}`}>
        <div className='Dashboard'>
          <Navbar onBoarding={onBoarding} />
          {dataRest.potential_annual === -100 ? (
            <Spinner />
          ) : (
            <div className='Dashboard__container'>
              <h1 className='Dashboard__container-title'>Dashboard</h1>
              <div className='Dashboard__container-top'>
                <div>
                  <p>${addCommas(dataRest.potential_annual)}</p>
                  <p>Potential Annual Savings</p>
                </div>
                <Link
                  to='/user/savingsFinder'
                  className={`${onBoarding ? 'disabled' : ''}`}
                >
                  Find them
                </Link>
              </div>
              <div className='Dashboard__container-info'>
                {data.map((d: any, i: any) => (
                  <DataLastMonths data={d} key={i} />
                ))}
                <section className='Dashboard__container-thirdBox'>
                  <div className='DataLastMonths__header'>
                    <p>Saving Strategies</p>
                  </div>
                  <p className='Dashboard__container-thirdBox__title'>
                    {dataRest.savings_strategies_running}{' '}
                    <span className='Dashboard__container-thirdBox__span'>
                      Running
                    </span>
                  </p>
                  <p className='Dashboard__container-thirdBox__title'>
                    {dataRest.savings_strategies_approved}{' '}
                    <span className='Dashboard__container-thirdBox__span'>
                      Approved
                    </span>
                  </p>
                  <p className='Dashboard__container-thirdBox__title'>
                    {dataRest.savings_strategies_pending}{' '}
                    <span className='Dashboard__container-thirdBox__span'>
                      Pending Approval
                    </span>
                  </p>
                  <div className='Dashboard__container-thirdBox__img'>
                    <img
                      src='/Profile/SavingsStrategies.svg'
                      alt='Savings strategies'
                    />
                  </div>
                </section>
              </div>
              <div className='Dashboard__graphics'>
                <div className='Dashboard__graphics-firstLine'>
                  <VerticalBarGraphic dataRest={dataRest} />
                  <DoughnutGraphicView dataRest={dataRest} />
                </div>
                <div className='Dashboard__graphics-secondLine'>
                  <PieGraphicView dataRest={dataRest} />
                  <HorizontalBarGraphic dataRest={dataRest} />
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Dashboard;
