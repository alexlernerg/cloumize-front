import React, { useEffect, useState } from 'react';
import { Bar, Doughnut, Pie } from 'react-chartjs-2';
import './Graphics.scss';

import Chart from 'chart.js/auto';
import { CategoryScale, Tooltip } from 'chart.js';
Chart.register(CategoryScale, Tooltip);

export const VerticalBar = (screenWidthMobile, dataVerticalBar) => {
  const labelsVB = dataVerticalBar?.map(
    (data) =>
      data.period_start.split(' ')[0].split('-')[2] +
      '/' +
      data.period_start.split(' ')[0].split('-')[1]
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
        data: dataVB,
        backgroundColor: '#80A7FA',
        hoverBackgroundColor: '#2C6CF6',
        borderRadius: 5,
        borderSkipped: false,
        pointStyle: 'circle',
      },
      {
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
      <p className='mb-0'>Instance Family</p>
      <div className='VerticalBar__legend'>
        <p className='mb-0 me-4'>
          <img src='/Profile/colorBlueDot.svg' alt='dot' />
          On-demand
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
            scales: {
              x: {
                grid: {
                  display: false,
                },
                ticks: {
                  font: {
                    size: screenWidthMobile ? 8 : 12,
                  },
                },
              },
              y: {
                max: 2000,
                ticks: {
                  stepSize: 500,
                  font: {
                    size: screenWidthMobile ? 8 : 12,
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
                  size: 14,
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

export const DoughnutGraphic = (dataRest) => {
  const [data, setData] = useState({
    maintainAspectRatio: false,
    responsive: false,
    labels: Object.keys(dataRest[0].instance_breakdown_platform),
    datasets: [
      {
        label: '',
        data: Object.values(dataRest[0].instance_breakdown_platform),
        backgroundColor: ['#80A7FA', '#E9F0FE'],
        hoverBackgroundColor: ['#2C6CF6', '#E9F0FE'],
      },
    ],
  });
  return (
    <div className='Doughnut'>
      <p>Text</p>
      <div className='Doughnut__container'>
        <Doughnut
          data={data}
          options={{
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
              },
              legend: {
                display: false,
                position: 'bottom',
                labels: {
                  usePointStyle: true,
                  font: {
                    size: 12,
                  },
                },
              },
            },
          }}
        />
        <p className='Doughnut__legend mb-0 mt-4 d-flex items-center'>
          <img src='/Profile/colorDarkDot.svg' alt='dot' />
          Restless
        </p>
      </div>
    </div>
  );
};

export const PieGraphic = (screenWidthMobile, dataRest) => {
  const [data, setData] = useState({
    maintainAspectRatio: false,
    responsive: false,
    labels: Object.keys(dataRest[0].coverage),
    datasets: [
      {
        label: '',
        data: Object.values(dataRest[0].coverage),
        backgroundColor: ['#80A7FA', '#E9F0FE'],
        hoverBackgroundColor: ['#2C6CF6', '#E9F0FE'],
      },
    ],
  });

  return (
    <div className='Pie'>
      <p className='mb-0'>Total % reservation coverage</p>
      <div className='Pie__container'>
        <Pie
          data={data}
          options={{
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
            {Object.keys(dataRest[0].coverage)[0] === 'percentage_covered' &&
              'Covered'}
          </p>
          <p>
            <img src='/Profile/colorLightDot.svg' alt='dot' />
            {Object.keys(dataRest[0].coverage)[1] ===
              'percentage_not_covered' && 'Not Covered'}
          </p>
        </div>
      </div>
    </div>
  );
};

export const HorizontalBar = (dataRest) => {
  const [data, setData] = useState({
    labels: [''],
    datasets: [
      {
        label: '',
        data: [],
        backgroundColor: '#2C6CF6',
        borderRadius: 5,
        borderSkipped: false,
      },
    ],
  });

  useEffect(() => {
    const reformattedArray = dataRest[0].instance_breakdown_family.map((i) => {
      const obj = {
        label: '',
        data: [],
        backgroundColor: '#2C6CF6',
        borderRadius: 5,
        borderSkipped: false,
      };
      obj.label = Object.keys(i);
      obj.data = [Object.values(i)[0]];
      return obj;
    });

    setData((prevState) => ({
      ...prevState,
      datasets: reformattedArray,
    }));
  }, []);

  return (
    <>
      <div className='HorizontalBar'>
        <p className='mb-0'>Top cities</p>
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
                    size: 14,
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
      <DataServer dataRest={dataRest}/>
    </>
  );
};

export const DataServer = ({dataRest}) => {
  return (
    <div className='HorizontalBar__legend'>
      {dataRest[0].instance_breakdown_az.map((data, i) => (
        <div className='HorizontalBar__legend-line' key={i}>
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
