import { IDataRest } from "../Dashboard.template";
import {VerticalBar, DoughnutGraphic, PieGraphic, HorizontalBar} from "./Graphics.template";

export const VerticalBarGraphic = ({dataRest}:{dataRest:IDataRest}) => {
  const dataVerticalBar = dataRest.spending_overview
  //Screen width
  const screenWidthMobile = window.screen.width < 1280
  return VerticalBar(screenWidthMobile, dataVerticalBar)
};

export const DoughnutGraphicView = ({dataRest}:{dataRest:IDataRest}) => {
  const screenWidthMobile = window.screen.width < 1280
  return DoughnutGraphic(dataRest, screenWidthMobile)
};

export const PieGraphicView = ({dataRest}:{dataRest:IDataRest}) => {
  //Screen width
  const screenWidthMobile = window.screen.width < 1280
  return PieGraphic(screenWidthMobile, dataRest)
};

export const HorizontalBarGraphic = ({dataRest}:{dataRest:IDataRest}) => { 
  return HorizontalBar(dataRest)
};
