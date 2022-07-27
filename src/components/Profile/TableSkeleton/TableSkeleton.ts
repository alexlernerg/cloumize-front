import templateTableSkeleton from "./TableSkeleton.template";

const TableSkeleton = ({data, columns}:any)=>{
  return templateTableSkeleton(data, columns);
}

export default TableSkeleton;