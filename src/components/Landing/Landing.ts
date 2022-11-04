import { useState } from "react";
import { IEvent } from "./interface";
import templateLanding from "./Landing.template";

const Landing =()=>{
  //Screen width
  const screenWidthMobile = window.screen.width < 1280

  const info2 = [
    {id: 0, img:{src:"/Landing/info2-1.svg", alt:"picture"}, title: "Forget to forecast future requirements", content: "Purchase reservations without the 1-3 year commitments. We will  trade in the Reserved Instance marketplace so you can enjoy maximum flexibility"},
    {id: 1, img:{src:"/Landing/info2-2.svg", alt:"picture"}, title: "Free up DevOps resources", content: "DevOps shouldn't do accounting. Leverage Cloumize's dashboard to monitor spending and automate reservation coverage"},
    {id: 2, img:{src:"/Landing/info2-3.svg", alt:"picture"}, title: "Without code changes", content: "All our transactions are at the billing layer. We cannot access your customer data or code or modify your infrastructure having zero downtime risk"},
    {id: 3, img:{src:"/Landing/info2-4.svg", alt:"picture"}, title: "And a seamless onboarding process", content: "Start saving in under 5 minutes at no upfront cost. We ask for limited read access to your historical usage through a IAM CloudFormation template"}
  ]

  const info5 = [
    {id: 0, img:{src:"/Landing/info5-1.svg", alt:"picture"}, content: "Register with your username and password to access Cloumize"},
    {id: 1, img:{src:"/Landing/info5-2.svg", alt:"picture"}, content: "Provide limited access and register as a seller on the AWS Reserved Instance Marketplace"},
    {id: 2, img:{src:"/Landing/info5-3.svg", alt:"picture"}, content: "Select the discounts and start saving with the guaranteed sale program"}
  ]

  const [ID, setID]: [string, React.Dispatch<React.SetStateAction<string>>] = useState('0');

  const onClick = (event: IEvent) => {
    const { id } = event.target
    setID(id)
  }

  return templateLanding({screenWidthMobile, info2, info5, ID, onClick});
}

export default Landing;