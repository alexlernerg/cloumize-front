import { useLocation } from "react-router-dom";
import templateTableSkeleton from "./TableSkeleton.template";

const TableSkeleton = ({data, columns}:any)=>{
  //Current url
  const {pathname} = useLocation();

  return templateTableSkeleton(data, columns, pathname);
}

export default TableSkeleton;