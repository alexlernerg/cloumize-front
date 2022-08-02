import {VerticalBar, DoughnutGraphic, PieGraphic, HorizontalBar} from "./Graphics.template";

export const VerticalBarGraphic = () => {
  //Screen width
  const screenWidthMobile = window.screen.width < 1280
  return VerticalBar(screenWidthMobile)
};

export const DoughnutGraphicView = () => {
  return DoughnutGraphic()
};

export const PieGraphicView = () => {
  //Screen width
  const screenWidthMobile = window.screen.width < 1280
  return PieGraphic(screenWidthMobile)
};

export const HorizontalBarGraphic = () => {
  return HorizontalBar()
};