import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useUser } from '../../../context/hook/useUser';
import Navbar from '../../Misc/Navbar/Navbar';
import OnBoarding from '../../OnBoarding/OnBoarding';
import './Dashboard.scss';
import {
  DoughnutGraphicView,
  HorizontalBarGraphic,
  PieGraphicView,
  VerticalBarGraphic,
} from './Graphics/Graphics';
import { useEffect } from 'react';
import Spinner from '../../Misc/Spinner/Spinner';
import { transforNumber } from '../../../helpers/transformNumber';

const DataLastMonths = ({ data }: any) => {
  return (
    <section className='DataLastMonths'>
      <div className='DataLastMonths__header'>
        <p>{data.title}</p>
      </div>
      <div className='DataLastMonths__content'>
        <div>
          <p className='DataLastMonths__content-title'>EC2 Costs</p>
          <p>
            ${transforNumber(data.EC2)}
            <img src='/Profile/graphic.svg' alt='graphic' className='ms-2' />
          </p>
        </div>
        <div>
          <p className='DataLastMonths__content-title'>Achieved Savings</p>
          <p>
            ${transforNumber(data.achieved_savings)}
            <img src='/Profile/graphic.svg' alt='graphic' className='ms-2' />
          </p>
        </div>
      </div>
      <div>
        <p className='DataLastMonths__content-title'>Missed Spending</p>
        <p>
          ${transforNumber(data.wasted_spending)}
          <img src='/Profile/graphic.svg' alt='graphic' className='ms-2' />
        </p>
      </div>
    </section>
  );
};

const Dashboard = (dataRest: any, data: any) => {
  const { currentUser } = useUser();

  const [onBoarding, setOnBoarding] = useState(true);

  useEffect(() => {
    currentUser?.sync_instance_status === '0'
      ? setOnBoarding(false)
      : setOnBoarding(true);
    // console.log("currentUSer", currentUser)
  }, [currentUser]);

  const showOnBoarding = () => setOnBoarding(false);

  return (
    <>
      {onBoarding && (
        <div className='Dashboard__onboarding'>
          <OnBoarding closePopup={showOnBoarding} />
        </div>
      )}
      <div className={`${onBoarding ? 'disable' : ''}`}>
        <div className='Dashboard'>
          <Navbar onBoarding={onBoarding} />
          {dataRest.potential_annual === 0 ? (
            <Spinner />
          ) : (
            <div className='Dashboard__container'>
              <h1 className='Dashboard__container-title'>Dashboard</h1>
              <div className='Dashboard__container-top'>
                <div>
                  <p>{dataRest.potential_annual}</p>
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
                      Pending
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
