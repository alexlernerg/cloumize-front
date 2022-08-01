import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../Misc/Navbar/Navbar';
import './Dashboard.scss';

const data = [
  { title: 'Last 12 months', EC2: 1000, achieved_savings: 150, wasted_spending:300},
  {title: 'Last months', EC2: 300, achieved_savings: 200, wasted_spending:150}
]

const DataLastMonths = ({data}:any) => {
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
            ${data.EC2}
            <img src='/Profile/graphic.svg' alt='graphic' />
          </p>
        </div>
        <div>
          <p className='DataLastMonths__content-title'>Achieved Savings</p>
          <p>
            ${data.achieved_savings}
            <img src='/Profile/graphic.svg' alt='graphic' />
          </p>
        </div>
      </div>
      <div>
        <p className='DataLastMonths__content-title'>Wasted spending</p>
        <p>
          ${data.wasted_spending}
          <img src='/Profile/graphic.svg' alt='graphic' />
        </p>
      </div>
    </section>
  );
};

const Dashboard = () => {
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
          {data.map((d, i) => <DataLastMonths data={d} key={i}/>)}
          <section className='Dashboard__container-thirdBox'>
            <p className='mb-1'>3 <span className='Dashboard__container-thirdBox__title'>Savings Strategies</span> </p>
            <p className='mb-4'>Approved</p>
            <p className='mb-1'>3 <span className='Dashboard__container-thirdBox__title'>Savings Strategies</span></p>
            <p><img src="/Profile/Info.svg" alt="info"/>Pending</p>
          </section>
          <section className='Dashboard__container-fourthBox'>
          <p>2 <span className='Dashboard__container-fourthBox__title'>Savings Strategies <br/>Running</span></p>
          <div className='Dashboard__container-fourthBox__img'>
            <img src="/Profile/SavingsStrategies.svg" alt="Savings strategies"/>

          </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
