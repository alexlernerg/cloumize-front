import {VerticalBar, DoughnutGraphic, PieGraphic, HorizontalBar} from "./Graphics.template";

const getRandomColor = () => {
  const myColors = ['#0C56F6', '#80A7FA', '#96B6FB', '#55BFF9', '#99D9FB', '#AADFFC', '#477ED0'];
  const colorRandom = Math.floor(Math.random()*myColors.length);
  const color = myColors[colorRandom];
  return color;
}

export const VerticalBarGraphic = ({dataRest}:any) => {
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
