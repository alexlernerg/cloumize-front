import React from 'react';
import { Bar, Doughnut, Pie } from 'react-chartjs-2';
import './Graphics.scss';

import Chart from 'chart.js/auto';
import { CategoryScale } from 'chart.js';
Chart.register(CategoryScale);

const stateVB = {
  labels: ['January', 'February', 'March', 'April', 'May'],
  datasets: [
    {
      label: 'Rainfall',
      backgroundColor: 'rgba(75,192,192,1)',
      borderColor: 'rgba(0,0,0,1)',
      borderWidth: 2,
      data: [65, 59, 80, 81, 56],
    },
  ],
};

const stateD = {
  maintainAspectRatio: false,
  responsive: false,
  labels: ['a', 'b', 'c', 'd'],
  datasets: [
    {
      data: [300, 50, 100, 50],
      backgroundColor: 'rgba(75,192,192,1)',
      hoverBackgroundColor: 'rgba(0,0,0,1)',
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
}

export const VerticalBar = () => {
  return (
    <div className='VerticalBar'>
      <Bar
        data={stateVB}
        options={{
          plugins: {
            title: {
              display: true,
              text: 'Cryptocurrency prices',
            },
            legend: {
              display: true,
              position: 'bottom',
            },
          },
        }}
      />
    </div>
  );
};

export const DoughnutGraphic = () => {
  return (
    <div className='Doughnut'>
      <Doughnut
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
