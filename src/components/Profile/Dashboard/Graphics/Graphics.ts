import {VerticalBar, DoughnutGraphic, PieGraphic, HorizontalBar} from "./Graphics.template";

const getRandomColor = () => {
  const myColors = ['#0C56F6', '#80A7FA', '#96B6FB', '#55BFF9', '#99D9FB', '#AADFFC', '#477ED0'];
  const colorRandom = Math.floor(Math.random()*myColors.length);
  const color = myColors[colorRandom];
  return color;
} 

export const VerticalBarGraphic = ({dataRest}:any) => {
  // const dataVerticalBar = [
  //   {
  //     user_id_cm: 1,
  //     period_start: '2021-07-31 19:00:00',
  //     period_end: '2021-08-31 19:00:00',
  //     spending_on_demand_instances: 1322.12518624,
  //     spending_std_reserved_instances: 0.0,
  //   },
  //   {
  //     user_id_cm: 1,
  //     period_start: '2021-08-31 19:00:00',
  //     period_end: '2021-09-30 19:00:00',
  //     spending_on_demand_instances: 1319.0965546592,
  //     spending_std_reserved_instances: 0.0,
  //   },
  //   {
  //     user_id_cm: 1,
  //     period_start: '2021-09-30 19:00:00',
  //     period_end: '2021-10-31 19:00:00',
  //     spending_on_demand_instances: 1332.2767557696,
  //     spending_std_reserved_instances: 0.0,
  //   },
  //   {
  //     user_id_cm: 1,
  //     period_start: '2021-10-31 19:00:00',
  //     period_end: '2021-11-30 19:00:00',
  //     spending_on_demand_instances: 1172.7441292616,
  //     spending_std_reserved_instances: 0.0,
  //   },
  //   {
  //     user_id_cm: 1,
  //     period_start: '2021-11-30 19:00:00',
  //     period_end: '2021-12-31 19:00:00',
  //     spending_on_demand_instances: 1315.966794496,
  //     spending_std_reserved_instances: 0.0,
  //   },
  //   {
  //     user_id_cm: 1,
  //     period_start: '2021-12-31 19:00:00',
  //     period_end: '2022-01-31 19:00:00',
  //     spending_on_demand_instances: 1319.9267891176,
  //     spending_std_reserved_instances: 0.0,
  //   },
  //   {
  //     user_id_cm: 1,
  //     period_start: '2022-01-31 19:00:00',
  //     period_end: '2022-02-28 19:00:00',
  //     spending_on_demand_instances: 1185.717794468,
  //     spending_std_reserved_instances: 0.0,
  //   },
  //   {
  //     user_id_cm: 1,
  //     period_start: '2022-02-28 19:00:00',
  //     period_end: '2022-03-31 19:00:00',
  //     spending_on_demand_instances: 1319.070034856,
  //     spending_std_reserved_instances: 0.0,
  //   },
  //   {
  //     user_id_cm: 1,
  //     period_start: '2022-03-31 19:00:00',
  //     period_end: '2022-04-30 19:00:00',
  //     spending_on_demand_instances: 1290.5424247182,
  //     spending_std_reserved_instances: 0.0,
  //   },
  //   {
  //     user_id_cm: 1,
  //     period_start: '2022-04-30 19:00:00',
  //     period_end: '2022-05-31 19:00:00',
  //     spending_on_demand_instances: 1320.0750210848,
  //     spending_std_reserved_instances: 0.0,
  //   },
  //   {
  //     user_id_cm: 1,
  //     period_start: '2022-05-31 19:00:00',
  //     period_end: '2022-06-30 19:00:00',
  //     spending_on_demand_instances: 0.0,
  //     spending_std_reserved_instances: 0.0,
  //   },
  //   {
  //     user_id_cm: 1,
  //     period_start: '2022-06-30 19:00:00',
  //     period_end: '2022-07-31 19:00:00',
  //     spending_on_demand_instances: 574.7957773408,
  //     spending_std_reserved_instances: 0.0,
  //   },
  // ];
  const dataVerticalBar = dataRest.spending_overview
  //Screen width
  const screenWidthMobile = window.screen.width < 1280
  return VerticalBar(screenWidthMobile, dataVerticalBar)
};

export const DoughnutGraphicView = ({dataRest}:any) => {
  const screenWidthMobile = window.screen.width < 1280
  return DoughnutGraphic(dataRest, getRandomColor, screenWidthMobile)
};

export const PieGraphicView = ({dataRest}:any) => {
  //Screen width
  const screenWidthMobile = window.screen.width < 1280
  return PieGraphic(screenWidthMobile, dataRest)
};

export const HorizontalBarGraphic = ({dataRest}:any) => {
  return HorizontalBar(dataRest, getRandomColor)
};