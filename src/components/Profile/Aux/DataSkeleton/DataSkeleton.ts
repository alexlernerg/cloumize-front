import { useLocation } from "react-router-dom";
import { exportExcel } from "../../../../helpers/downloadCSV";
import templateDataSkeleton from "./DataSkeleton.template";

const DataSkeleton =({info, data}:any)=>{
  //Current url
  const {pathname} = useLocation();

  //Download CVS
  const onClick = ()=> {
    exportExcel(data)
  }
  return templateDataSkeleton(info, pathname, onClick);
}

export default DataSkeleton;