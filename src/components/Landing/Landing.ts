import { useState } from "react";
import templateLanding from "./Landing.template";

const Landing =()=>{
  //Screen width
  const screenWidthMobile = window.screen.width < 1280

  const info2 = [
    {id: 0, img:{src:"/Landing/info2-1.svg", alt:"picture"}, title: "Forget to forecast future requirements", content: "All information and transactions will be well encrypted and double security in every activity."},
    {id: 1, img:{src:"/Landing/info2-2.svg", alt:"picture"}, title: "Free up DevOps resources", content: "All information and transactions will be well encrypted and double security in every activity."},
    {id: 2, img:{src:"/Landing/info2-3.svg", alt:"picture"}, title: "Without code changes", content: "All information and transactions will be well encrypted and double security in every activity."},
    {id: 3, img:{src:"/Landing/info2-4.svg", alt:"picture"}, title: "And a seamless onboarding process", content: "All information and transactions will be well encrypted and double security in every activity."}
  ]

  const info5 = [
    {id: 0, img:{src:"/Landing/info5-1.svg", alt:"picture"}, content: "Register safely and quickly"},
    {id: 1, img:{src:"/Landing/info5-2.svg", alt:"picture"}, content: "Fill out a form to learn more about you"},
    {id: 2, img:{src:"/Landing/info5-3.svg", alt:"picture"}, content: "Select the discount that Cloumize offers you"}
  ]

  const [ID, setID] = useState(0);
  const onClick = (e:any) => {
    const {id} = e.target;
    setID(id)
  }

  return templateLanding(screenWidthMobile, info2, info5, ID, onClick);
}

export default Landing;