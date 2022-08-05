import React, { useState } from 'react';
import { Bar, Doughnut, Pie } from 'react-chartjs-2';
import './Graphics.scss';

import Chart from 'chart.js/auto';
import { CategoryScale, Tooltip } from 'chart.js';
Chart.register(CategoryScale, Tooltip);

const dataRest = [
     {
        user_id_cm: 1,
        ec2_wasted_spending_year: 1644.2827334544,
        ec2_wasted_spending_last_month: 154.656,
        spending_ec2_last_month: 663.63,
        spending_ec2_last_year: 19294.53,
        achieved_savings: 0.0,
        savings_strategies_approved: 0,
        savings_strategies_running: 0,
        savings_strategies_pending: 0, //first line
        instance_breakdown_family: {t2: 83.33, m4: 12.5, m5: 4.17},
        instance_breakdown_az: {'eu-central-1a': 91.67, 'eu-central-1b': 8.33}, //lastGraphic
        instance_breakdown_platform: {Windows: 70.83, 'Linux/UNIX': 8.33, 'Windows BYOL': 20.83},
        coverage: {percentage_covered: 0.0, percentage_not_covered: 100.0} //secondLastGraphic
        // Me falta el dato inicial y tngo dos obj para una sola tabla?
    },
    {
        user_id_cm: 2,
        ec2_wasted_spending_year: 0.0,
        ec2_wasted_spending_last_month: 0.0,
       spending_ec2_last_month: 0.0,
       spending_ec2_last_year: 63.0,
        achieved_savings: 0.0,
        savings_strategies_approved: 0,
        savings_strategies_running: 0,
        savings_strategies_pending: 0,
        instance_breakdown_family: {t2: 100.0},
        instance_breakdown_az: {'eu-west-1a': 33.33, 'eu-west-1b': 66.67},
        instance_breakdown_platform: {'Linux/UNIX': 66.67, 'Red Hat Enterprise Linux': 16.67, 'SUSE Linux': 16.67},
        coverage: {percentage_covered: 25.0, percentage_not_covered: 75.0}
    }
  ]

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

export const VerticalBar = (screenWidthMobile) => {
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
                  family: "Rubik"
                },
                bodyFont: {
                  size: 24,
                  weight: 'bold',
                  family: "Rubik"
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

export const DoughnutGraphic = () => {
  const [data, setData] = useState({
    maintainAspectRatio: false,
    responsive: false,
    labels: ['Restless'],
    datasets: [
      {
        label: 'Restless',
        data: [15, 100],
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
                  family: "Rubik"
                },
                bodyFont: {
                  size: 24,
                  weight: 'bold',
                  family: "Rubik"
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

export const PieGraphic = (screenWidthMobile) => {
  const [data, setData] = useState({
    maintainAspectRatio: false,
    responsive: false,
    labels: ['Awake', 'Awake'],
    datasets: [
      {
        label: '',
        data: [15, 100],
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
                  family: "Rubik"
                },
                bodyFont: {
                  size: 24,
                  weight: 'bold',
                  family: "Rubik"
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
            Awake
          </p>
          <p>
            <img src='/Profile/colorLightDot.svg' alt='dot' />
            Awake
          </p>
        </div>
      </div>
    </div>
  );
};

export const HorizontalBar = () => {
  const [data, setData] = useState({
    labels: [''],
    datasets: [
      {
        label: 'EU Ireland (eu-west-1a)',
        data: [52],
        backgroundColor: '#2C6CF6',
        borderRadius: 5,
        borderSkipped: false,
      },
      {
        label: 'EU Ireland (eu-west-1b)',
        data: [65],
        backgroundColor: '#80A7FA',
        borderRadius: 5,
        borderSkipped: false,
      },
    ],
  });
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
                  family: "Rubik"
                },
                bodyFont: {
                  size: 24,
                  weight: 'bold',
                  family: "Rubik"
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
      <div className='HorizontalBar__legend'>
        <div className='HorizontalBar__legend-line'>
          <p>
            <img src='/Profile/dotBlue.svg' alt='dot' />
            EU Ireland (eu-west-1a)
          </p>
          <p>52%</p>
        </div>
        <div className='HorizontalBar__legend-line'>
          <p>
            <img src='/Profile/dotLightBlue.svg' alt='dot' />
            EU Ireland (eu-west-1b)
          </p>
          <p>52%</p>
        </div>
      </div>
    </>
  );
};
