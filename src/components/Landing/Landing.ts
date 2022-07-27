import templateLanding from "./Landing.template";

const Landing =()=>{
  //Screen width
  const screenWidthMobile = window.screen.width < 1024

  return templateLanding(screenWidthMobile);
}

export default Landing;