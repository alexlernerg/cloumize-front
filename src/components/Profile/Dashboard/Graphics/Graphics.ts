import {VerticalBar, DoughnutGraphic, PieGraphic, HorizontalBar} from "./Graphics.template";

export const VerticalBarGraphic = ({dataRest}:any) => {
  const dataVerticalBar = dataRest.spending_overview
  //Screen width
  const screenWidthMobile = window.screen.width < 1280
  return VerticalBar(screenWidthMobile, dataVerticalBar)
};

export const DoughnutGraphicView = ({dataRest}:any) => {
  const screenWidthMobile = window.screen.width < 1280
  return DoughnutGraphic(dataRest, screenWidthMobile)
};

export const PieGraphicView = ({dataRest}:any) => {
  //Screen width
  const screenWidthMobile = window.screen.width < 1280
  return PieGraphic(screenWidthMobile, dataRest)
};

export const HorizontalBarGraphic = ({dataRest}:any) => { 
  return HorizontalBar(dataRest)
};