import React, { useEffect, useState } from 'react';
import { Bar, Doughnut, Pie } from 'react-chartjs-2';
import './Graphics.scss';

import Chart from 'chart.js/auto';
import { CategoryScale, Tooltip } from 'chart.js';
Chart.register(CategoryScale, Tooltip);

export const VerticalBar = (screenWidthMobile, dataVerticalBar) => {
  const labelsVB = dataVerticalBar?.map((data) => data.date);
  const dataVB = dataVerticalBar.map((data) => data.spending_other);
  const dataVB2 = dataVerticalBar.map((data) => data.autopilot);
  const [data, setData] = useState({
    labels: labelsVB,
    datasets: [
      {
        data: dataVB,
        backgroundColor: '#80A7FA',
        hoverBackgroundColor: '#2C6CF6',
        borderRadius: 5,
        borderSkipped: true,
        pointStyle: 'circle',
      },
      {
        data: dataVB2,
        backgroundColor: '#708295',
        borderRadius: {topLeft:5, topRight:5, bottomLeft:0, bottomRight:0},
        borderSkipped: false,
        pointStyle: 'circle',
      },
    ],
  });
  return (
    <div className='VerticalBar'>
      <p className='mb-0'>Total Compute Costs ($)</p>
      <div className='VerticalBar__legend'>
        <p className='mb-0 me-4'>
          <img src='/Profile/colorBlueDot.svg' alt='dot' />
          Other
        </p>
        <p className='mb-0'>
          <img src='/Profile/colorLightDot.svg' alt='dot' />
          Autopilot
        </p>
      </div>
      <div className='VerticalBar__container'>
        <Bar
          data={data}
          options={{
            maintainAspectRatio: false,
            scales: {
              x: {
                stacked: true,
                grid: {
                  display: false,
                },
                ticks: {
                  font: {
                    size: screenWidthMobile ? 8 : 14,
                    family: 'Rubik',
                  },
                },
              },
              y: {
                stacked: true,
                max: 13000,
                ticks: {
                  stepSize: 1000,
                  font: {
                    size: screenWidthMobile ? 8 : 14,
                    family: 'Rubik',
                  },
                },
              },
            },
            plugins: {
              tooltip: {
                backgroundColor: '#8796A6',
                bodyColor: '#F5F8FB',
                padding: 15,
                titleColor: '#F5F8FB',
                yAlign: 'bottom',
                displayColors: false,
                titleFont: {
                  size: 12,
                  family: 'Rubik',
                },
                bodyFont: {
                  size: 24,
                  weight: 'bold',
                  family: 'Rubik',
                },
              },
              legend: {
                display: false,
                position: 'top',
              },
            },
          }}
        />
      </div>
    </div>
  );
};

export const DoughnutGraphic = (
  dataRest,
  getRandomColor,
  screenWidthMobile
) => {
  console.log('dataRest', dataRest.platform);
  const [data, setData] = useState({
    labels: Object.keys(dataRest.platform),
    datasets: [
      {
        label: '',
        data: Object.values(dataRest.platform),
        backgroundColor: [getRandomColor(), getRandomColor(), getRandomColor()],
      },
    ],
  });
  return (
    <div className='Doughnut'>
      <p>
        Platform Breakdown (%)
      </p>
      <div className='Doughnut__container'>
        <Doughnut
          data={data}
          options={{
            maintainAspectRatio: false,
            responsive: true,
            plugins: {
              tooltip: {
                backgroundColor: '#8796A6',
                bodyColor: '#F5F8FB',
                padding: 15,
                titleColor: '#F5F8FB',
                yAlign: 'bottom',
                displayColors: false,
                titleFont: {
                  size: 12,
                  family: 'Rubik',
                },
                bodyFont: {
                  size: 24,
                  weight: 'bold',
                  family: 'Rubik',
                },
                callbacks: {
                  title: function (context) {
                    let title = context[0].label;
                    return title;
                  },
                  label: function (context) {
                    let label = context.formattedValue
                    return label;
                  },
                },
              },
              legend: {
                display: true,
                position: screenWidthMobile ? 'left' : 'bottom',
                labels: {
                  padding: 10,
                  usePointStyle: true,
                  pointStyle: 'rectRounded',
                  font: {
                    size: screenWidthMobile ? 12 : 14,
                    family: 'Rubik',
                  },
                },
              },
            },
          }}
        />
      </div>
    </div>
  );
};

export const PieGraphic = (screenWidthMobile, dataRest) => {
  const [data, setData] = useState({
    maintainAspectRatio: false,
    responsive: false,
    labels: ['Reserved', 'On-Demand'],
    datasets: [
      {
        label: '',
        data: Object.values(dataRest.coverage),
        backgroundColor: ['#80A7FA', '#E9F0FE'],
      },
    ],
  });

  return (
    <div className='Pie'>
      <p className='mb-0'>Reservation Coverage (%)</p>
      <div className='Pie__container'>
        <Pie
          data={data}
          options={{
            maintainAspectRatio: false,
            plugins: {
              tooltip: {
                backgroundColor: '#8796A6',
                bodyColor: '#F5F8FB',
                padding: 15,
                titleColor: '#F5F8FB',
                yAlign: 'bottom',
                displayColors: false,
                titleFont: {
                  size: 14,
                  family: 'Rubik',
                },
                bodyFont: {
                  size: 24,
                  weight: 'bold',
                  family: 'Rubik',
                },
                callbacks: {
                  title: function (context) {
                    let title = context[0].label;
                    return title;
                  },
                  label: function (context) {
                    let label = context.formattedValue
                    return label;
                  },
                },
              },
              legend: {
                display: false,
                position: 'right',
                labels: {
                  padding: screenWidthMobile ? 10 : 50,
                  usePointStyle: true,
                },
              },
            },
          }}
        />
        <div className='Pie__legend'>
          <p>
            <img src='/Profile/colorDarkDot.svg' alt='dot' />
            {Object.keys(dataRest.coverage)[0] === 'percentage_covered' &&
              'Reserved'}
          </p>
          <p>
            <img src='/Profile/colorLightDot.svg' alt='dot' />
            {Object.keys(dataRest.coverage)[1] === 'percentage_not_covered' &&
              'On-Demand'}
          </p>
        </div>
      </div>
    </div>
  );
};

export const HorizontalBar = (dataRest, getRandomColor) => {
  const labelsHB = [];
  dataRest.instance_family
    .map((obj) => Object.keys(obj))
    .map((key) => labelsHB.push(key[0]));

  const dataHB = [];
  dataRest.instance_family
    .map((obj) => Object.values(obj))
    .map((value) => dataHB.push(value[0]));

  const [data, setData] = useState({
    labels: labelsHB,
    datasets: [
      {
        data: dataHB,
        backgroundColor: getRandomColor(),
        borderRadius: 5,
        borderSkipped: false,
      },
    ],
  });

  return (
    <>
      <div className='HorizontalBar'>
        <p className='mb-0'>Instance Family Monthly Spending ($)</p>
        <div className='HorizontalBar__container'>
          <Bar
            options={{
              indexAxis: 'y',
              elements: {
                bar: {
                  borderWidth: 2,
                },
              },
              plugins: {
                tooltip: {
                  backgroundColor: '#8796A6',
                  bodyColor: '#F5F8FB',
                  padding: 15,
                  titleColor: '#F5F8FB',
                  yAlign: 'bottom',
                  displayColors: false,
                  titleFont: {
                    size: 12,
                    family: 'Rubik',
                  },
                  bodyFont: {
                    size: 24,
                    weight: 'bold',
                    family: 'Rubik',
                  },
                },
                legend: {
                  display: false,
                  position: 'right',
                },
              },
              scales: {
                x: {
                  position: 'top',
                },
              },
            }}
            data={data}
          />
        </div>
      </div>
      <DataServer dataRest={dataRest} />
    </>
  );
};

export const DataServer = ({ dataRest }) => {
  return (
    <div className='HorizontalBar__legend'>
      <p className='HorizontalBar__legend-title'>Region Breakdown</p>
      {dataRest.az.map((data, i) => (
        <div className={`HorizontalBar__legend-line`} key={i}>
          <p>
            <img src='/Profile/dotBlue.svg' alt='dot' />
            {Object.keys(data)}
          </p>
          <p>{Object.values(data)}%</p>
        </div>
      ))}
    </div>
  );
};
