import templateSlider from "./Slider.template";

const Slider =()=>{
  //Screen width
  const screenWidthMobile = window.screen.width < 1024

  return templateSlider(screenWidthMobile);
}

export default Slider;