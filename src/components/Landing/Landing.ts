import { useState } from "react";
import templateLanding from "./Landing.template";

const Landing =()=>{
  //Screen width
  const screenWidthMobile = window.screen.width < 1280

  const info2 = [
    {id: 0, img:{src:"/Landing/info2-1.svg", alt:"picture"}, title: "Forget to forecast future requirements", content: "Purchase reservations without the 1-3 year commitments. We will  trade in the Reserved Instance marketplace so you can enjoy maximum flexibility."},
    {id: 1, img:{src:"/Landing/info2-2.svg", alt:"picture"}, title: "Free up DevOps resources", content: "DevOps is not equal to accounting. Leverage Cloumize's dashboard to monitor your spending and reservation coverage."},
    {id: 2, img:{src:"/Landing/info2-3.svg", alt:"picture"}, title: "Without code changes", content: "All our transactions are at the billing layer. We tread lightly without accessing customer data or the ability to change your infrastructure."},
    {id: 3, img:{src:"/Landing/info2-4.svg", alt:"picture"}, title: "And a seamless onboarding process", content: "Start saving in under 5 minutes at no upfront cost."}
  ]

  const info5 = [
    {id: 0, img:{src:"/Landing/info5-1.svg", alt:"picture"}, content: "Register safely and quickly"},
    {id: 1, img:{src:"/Landing/info5-2.svg", alt:"picture"}, content: "Run a pre-built CloudFormation template to provide limited access"},
    {id: 2, img:{src:"/Landing/info5-3.svg", alt:"picture"}, content: "Select the discounts that Cloumize has detected"}
  ]

  const [ID, setID] = useState(0);
  const onClick = (e:any) => {
    const {id} = e.target;
    setID(id)
  }

  return templateLanding(screenWidthMobile, info2, info5, ID, onClick);
}

export default Landing;