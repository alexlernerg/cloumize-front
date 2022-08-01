import templateSavingsPlans from "./SavingsPlans.template";

const SavingsPlans =()=>{
  //Screen width
  const screenWidthMobile = window.screen.width < 1280

  return templateSavingsPlans(screenWidthMobile);
}

export default SavingsPlans;