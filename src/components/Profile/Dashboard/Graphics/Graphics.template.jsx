import React, { useEffect, useState } from 'react';
import { Bar, Doughnut, Pie } from 'react-chartjs-2';
import './Graphics.scss';

import Chart from 'chart.js/auto';
import { CategoryScale } from 'chart.js';
Chart.register(CategoryScale);

const dataVerticalBar = [
  {
    user_id_cm: 1,
    period_start: '2021-07-31 19:00:00',
    period_end: '2021-08-31 19:00:00',
    spending_on_demand_instances: 1322.12518624,
    spending_std_reserved_instances: 0.0,
  },
  {
    user_id_cm: 1,
    period_start: '2021-08-31 19:00:00',
    period_end: '2021-09-30 19:00:00',
    spending_on_demand_instances: 1319.0965546592,
    spending_std_reserved_instances: 0.0,
  },
  {
    user_id_cm: 1,
    period_start: '2021-09-30 19:00:00',
    period_end: '2021-10-31 19:00:00',
    spending_on_demand_instances: 1332.2767557696,
    spending_std_reserved_instances: 0.0,
  },
  {
    user_id_cm: 1,
    period_start: '2021-10-31 19:00:00',
    period_end: '2021-11-30 19:00:00',
    spending_on_demand_instances: 1172.7441292616,
    spending_std_reserved_instances: 0.0,
  },
  {
    user_id_cm: 1,
    period_start: '2021-11-30 19:00:00',
    period_end: '2021-12-31 19:00:00',
    spending_on_demand_instances: 1315.966794496,
    spending_std_reserved_instances: 0.0,
  },
  {
    user_id_cm: 1,
    period_start: '2021-12-31 19:00:00',
    period_end: '2022-01-31 19:00:00',
    spending_on_demand_instances: 1319.9267891176,
    spending_std_reserved_instances: 0.0,
  },
  {
    user_id_cm: 1,
    period_start: '2022-01-31 19:00:00',
    period_end: '2022-02-28 19:00:00',
    spending_on_demand_instances: 1185.717794468,
    spending_std_reserved_instances: 0.0,
  },
  {
    user_id_cm: 1,
    period_start: '2022-02-28 19:00:00',
    period_end: '2022-03-31 19:00:00',
    spending_on_demand_instances: 1319.070034856,
    spending_std_reserved_instances: 0.0,
  },
  {
    user_id_cm: 1,
    period_start: '2022-03-31 19:00:00',
    period_end: '2022-04-30 19:00:00',
    spending_on_demand_instances: 1290.5424247182,
    spending_std_reserved_instances: 0.0,
  },
  {
    user_id_cm: 1,
    period_start: '2022-04-30 19:00:00',
    period_end: '2022-05-31 19:00:00',
    spending_on_demand_instances: 1320.0750210848,
    spending_std_reserved_instances: 0.0,
  },
  {
    user_id_cm: 1,
    period_start: '2022-05-31 19:00:00',
    period_end: '2022-06-30 19:00:00',
    spending_on_demand_instances: 0.0,
    spending_std_reserved_instances: 0.0,
  },
  {
    user_id_cm: 1,
    period_start: '2022-06-30 19:00:00',
    period_end: '2022-07-31 19:00:00',
    spending_on_demand_instances: 574.7957773408,
    spending_std_reserved_instances: 0.0,
  },
];

export const VerticalBar = () => {
  const labelsVB = dataVerticalBar?.map(
    (data) => data.period_start.split(' ')[0]
  );
  const dataVB = dataVerticalBar.map(
    (data) => data.spending_on_demand_instances
  );
  const dataVB2 = dataVerticalBar.map(
    (data) => data.spending_std_reserved_instances
  );
  const [data, setData] = useState({
    labels: labelsVB,
    datasets: [
      {
        label: 'On-demand',
        data: dataVB,
        backgroundColor: '#80A7FA',
        hoverBackgroundColor: '#2C6CF6',
        borderRadius: 5,
        borderSkipped: false,
        pointStyle: 'circle',
      },
      {
        label: 'Autopilot',
        data: dataVB2,
        backgroundColor: '#E9F0FE',
        borderRadius: 5,
        borderSkipped: false,
        pointStyle: 'circle',
      },
    ],
  });
  return (
    <div className='VerticalBar'>
      <p>Instance Family</p>
      <Bar
        data={data}
        options={{
          responsive: true,
          maintainAspectRatio: true,
          scales: {
            x: {
              stacked: true,
              grid: {
                display: false,
              },
            },
            y: {
              stacked: true,
              max: 15000,
              ticks: {
                stepSize: 5000,
              },
            },
          },
          plugins: {
            legend: {
              display: true,
              position: 'top',
              labels: {
                usePointStyle: true,
              },
            },
          },
        }}
      />
    </div>
  );
};

const stateD = {
  maintainAspectRatio: false,
  responsive: false,
  datasets: [
    {
      label: 'Restless',
      data: [300],
      backgroundColor: '#80A7FA',
      hoverBackgroundColor: '#2C6CF6',
    },
  ],
};

const stateHB = {
  labels: [['January', 'February', 'March', 'April', 'May', 'June', 'July']],
  datasets: [
    {
      label: 'Dataset 1',
      borderColor: 'rgb(255, 99, 132)',
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
      data: [65, 59, 80, 81, 56],
    },
    {
      label: 'Dataset 2',
      borderColor: 'rgb(53, 162, 235)',
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
      data: [65, 59, 80, 81, 56],
    },
  ],
};

export const DoughnutGraphic = () => {
  const [data, setData] = useState({
    maintainAspectRatio: false,
    responsive: false,
    labels: ['Restless'],
    datasets: [
      {
        label: 'Restless',
        data: [15, 100],
        backgroundColor: ['#80A7FA','#E9F0FE'],
        hoverBackgroundColor: ['#2C6CF6','#E9F0FE']
      },
    ],
  });
  return (
    <div className='Doughnut'>
      <p>Text</p>
      <Doughnut
        data={data}
        options={{
          responsive: true,
          plugins: {
            legend: {
              position: 'bottom',
            },
          },
        }}
      />
    </div>
  );
};

export const PieGraphic = () => {
  return (
    <div className='Pie'>
      <Pie
        data={stateD}
        options={{
          legend: {
            display: false,
            position: 'right',
          },
          elements: {
            arc: {
              borderWidth: 0,
            },
          },
        }}
      />
    </div>
  );
};

export const HorizontalBar = () => {
  return (
    <div className='HorizontalBar'>
      <Bar
        options={{
          indexAxis: 'y',
          elements: {
            bar: {
              borderWidth: 2,
            },
          },
          responsive: true,
          plugins: {
            legend: {
              position: 'right',
            },
            title: {
              display: true,
              text: 'Chart.js Horizontal Bar Chart',
            },
          },
        }}
        data={stateHB}
      />
    </div>
  );
};
