import templateComputeFinder from "./ComputeFinder.template";

const ComputeFinder =()=>{
  //Screen width
  const screenWidthMobile = window.screen.width < 1280

  return templateComputeFinder(screenWidthMobile);
}

export default ComputeFinder;