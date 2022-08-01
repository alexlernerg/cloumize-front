import templateSavingsFinder from "./SavingsFinder.template";

const SavingsFinder =()=>{
  //Screen width
  const screenWidthMobile = window.screen.width < 1280

  return templateSavingsFinder(screenWidthMobile);
}

export default SavingsFinder;