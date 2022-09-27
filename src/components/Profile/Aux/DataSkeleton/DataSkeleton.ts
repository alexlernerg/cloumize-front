import { useLocation } from "react-router-dom";
import { exportExcel } from "../../../../helpers/downloadCSV";
import templateDataSkeleton from "./DataSkeleton.template";

const DataSkeleton =({info, data}:any)=>{
  //Current url
  const {pathname} = useLocation();
  const url = pathname.split('/')[2]

  //Download CVS
  const onClick = ()=> {
    exportExcel(data, url)
  }
  return templateDataSkeleton(info, pathname, onClick);
}

export default DataSkeleton;