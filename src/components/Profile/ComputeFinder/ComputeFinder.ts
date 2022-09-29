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

  const [stats, setStats] = useState([0, 0, 0, 0, 0]);

  useEffect(() => {
    getComputeFinder()
      .then((response: any) => {
        console.log("responseCF", response)
        if (response?.ec2_instance_data.length !== 0) {
          console.log("response", response.ec2_instance_stats)
          setStats([response.ec2_instance_stats.running_instance,
            response.ec2_instance_stats.stopped_instance,
            response.ec2_instance_stats.on_demand_instance,
            response.ec2_instance_stats.spot_instance,
            response.ec2_instance_stats.scheduled_instance, ])
          setDataCF(response.ec2_instance_data)
        }
      })
      .catch((error: any) => {
        console.error('Error data CF', error);
      });
  }, []);
  
  const columnsCF = [
    'AWS Account ID',
    'Instance ID',
    'Instance Type',
    'Region',
    'AZ',
    'Platform',
    'Tenancy',
    'Instance Lifecycle',
    'State',
    'Launch Time',
  ];

  return templateComputeFinder(screenWidthMobile, dataCF, columnsCF, stats);
}

export default ComputeFinder;