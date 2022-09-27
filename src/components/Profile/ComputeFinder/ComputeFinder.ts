import { useEffect, useState } from "react";
import { getComputeFinder } from "../../../services/DataService";
import templateComputeFinder from "./ComputeFinder.template";

const ComputeFinder =()=>{
  //Screen width
  const screenWidthMobile = window.screen.width < 1280

  const [dataCF, setDataCF] = useState([
    {
      user_id_cm: 0,
      aws_account_id: 122223639153,
      instance_id: 'i-077a79e469c0ef831',
      instance_type: 't2.small',
      region: 'EU (Frankfurt)',
      az: 'eu-central-1a',
      platform: 'Windows',
      tenancy: 'default',
      instance_lifecycle: 'on_demand',
      state: 'stopped',
      launch_time: '2022-03-30 08:22:13',
    }
  ])

  useEffect(() => {
    getComputeFinder()
      .then((response: any) => {
        if (response?.name !== 'Error') {
          setDataCF(response.ec2_instance_data)
        }
      })
      .catch((error: any) => {
        console.error('Error data SF', error);
      });
  }, []);
  
  const columnsCF = [
    'AWS Account ID',
    'Instance ID',
    'Instance Type',
    'Region',
    'Availability Zone',
    'Platform',
    'Tenancy',
    'Instance Lifecycle',
    'State',
    'Launch Time',
  ];
  
  const info = [
    { id: 0, title: 'Cloumize Savings', savings: 'Achieved', total: '$1,000' },
    { id: 1, title: 'Unapproved Savings ', savings: 'Annual Forecast', total: '$700' },
    { id: 2, title: 'Potential Savings', savings: 'Annual Forecast', total: '$1,700' },
  ];

  return templateComputeFinder(screenWidthMobile, dataCF, columnsCF, info);
}

export default ComputeFinder;