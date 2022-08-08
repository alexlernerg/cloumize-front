import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../Misc/Navbar/Navbar';
import './Dashboard.scss';
import { DoughnutGraphicView, HorizontalBarGraphic, PieGraphicView, VerticalBarGraphic } from './Graphics/Graphics';

const DataLastMonths = ({data}:any) => {
  console.log("DATA", data)
  return (
    <section className='DataLastMonths'>
      <div className='DataLastMonths__header'>
        <p>{data.title}</p>
        <input type='date'/>
      </div>
      <div className='DataLastMonths__content'>
        <div>
          <p className='DataLastMonths__content-title'>EC2 Costs</p>
          <p>
            ${data.EC2.toFixed(2)}
            <img src='/Profile/graphic.svg' alt='graphic' className='ms-2'/>
          </p>
        </div>
        <div>
          <p className='DataLastMonths__content-title'>Achieved Savings</p>
          <p>
            ${data.achieved_savings.toFixed(2)}
            <img src='/Profile/graphic.svg' alt='graphic' className='ms-2'/>
          </p>
        </div>
      </div>
      <div>
        <p className='DataLastMonths__content-title'>Wasted spending</p>
        <p>
          ${data.wasted_spending.toFixed(2)}
          <img src='/Profile/graphic.svg' alt='graphic' className='ms-2'/>
        </p>
      </div>
    </section>
  );
};

const Dashboard = (dataRest:any, data:any) => {
  return (
    <div className='Dashboard'>
      <Navbar />
      <div className='Dashboard__container'>
        <h1 className='Dashboard__container-title'>Dashboard</h1>
        <div className='Dashboard__container-top'>
          <div>
            <p>$300</p>
            <p>in potential monthly savings</p>
          </div>
          <Link to='/user/savingsFinder'>Find them</Link>
        </div>
        <div className='Dashboard__container-info'>
          {data.map((d:any, i:any) => <DataLastMonths data={d} key={i}/>)}
          <section className='Dashboard__container-thirdBox'>
            <p className='Dashboard__container-thirdBox__title mb-1'>{dataRest[0].savings_strategies_approved} <span className='Dashboard__container-thirdBox__span'>Savings Strategies</span> </p>
            <p className='mb-4'>Approved</p>
            <p className='mb-1'>{dataRest[0].savings_strategies_pending} <span className='Dashboard__container-thirdBox__span'>Savings Strategies</span></p>
            {Number(dataRest[0].savings_strategies_pending) > 0 && <p className='Dashboard__container-thirdBox__pending'><img src="/Profile/Info.svg" alt="info"/>Pending</p>}
          </section>
          <section className='Dashboard__container-fourthBox'>
          <p className='Dashboard__container-fourthBox__title'>{dataRest[0].savings_strategies_running} <span className='Dashboard__container-fourthBox__span'>Savings Strategies <br/>Running</span></p>
          <div className='Dashboard__container-fourthBox__img'>
            <img src="/Profile/SavingsStrategies.svg" alt="Savings strategies"/>

          </div>
          </section>
        </div>
        <div className='Dashboard__graphics'>
          <div className='Dashboard__graphics-firstLine'>
            <VerticalBarGraphic/>
            <DoughnutGraphicView dataRest={dataRest}/>
          </div>
          <div className='Dashboard__graphics-secondLine'>
            <PieGraphicView dataRest={dataRest}/>
            <HorizontalBarGraphic dataRest={dataRest}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
