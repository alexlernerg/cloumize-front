import templateExistingPlans from "./ExistingPlans.template";

const ExistingPlans =()=>{
  //Screen width
  const screenWidthMobile = window.screen.width < 1280

  return templateExistingPlans(screenWidthMobile);
}

export default ExistingPlans;