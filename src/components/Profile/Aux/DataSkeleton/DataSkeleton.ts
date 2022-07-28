import { useLocation } from "react-router-dom";
import templateDataSkeleton from "./DataSkeleton.template";

const DataSkeleton =({info}:any)=>{
  //Current url
  const {pathname} = useLocation();
  return templateDataSkeleton(info, pathname);
}

export default DataSkeleton;