import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { approveSF } from '../../../../services/DataService';
import templateTableSkeleton from './TableSkeleton.template';

const TableSkeleton = ({ data, columns }) => {
  console.log("data", data)
  //Current url
  const { pathname } = useLocation();

  //Screen width
  const screenWidthMobile = window.screen.width < 1280;

  const [filterChoosed, setFilterChoosed] = useState('aws_account_id');
  const [search, setSearch] = useState('');
  const [filteredData, setFilteredData] = useState(data);

  //Filter data on table
  const onChange = (e) => {
    const { name, value } = e.target;
    name === 'search' ? setSearch(value) : setFilterChoosed(value);
  };

  useEffect(() => {setFilteredData(data)},[data])

  useEffect(() => {
    setFilteredData(
      data.filter((data) =>
        data[filterChoosed]
          .toString()
          .toLowerCase()
          .includes(search.toString().toLowerCase())
      )
    );
  }, [search]);

  //Checkbox
  const [isCheckAll, setIsCheckAll] = useState(false);
  const [isCheck, setIsCheck] = useState([]);
  const [list, setList] = useState([]);

  useEffect(() => {
    const filteredArray = data.filter(
      (data) => data.state === 'Pending Approval'
    );
    console.log("filteredArray", filteredArray)
    const mapArray = filteredArray.map((data) => {
      const obj = {
        id: data.recommendation_id_cm,
        check: false,
      };
      return obj;
    });
    setList(mapArray);
  }, [data]);

  const handleSelectAll = (e) => {
    setIsCheckAll(!isCheckAll);
    setIsCheck(list.map((li) => li.id));
    if (isCheckAll) {
      setIsCheck([]);
    }
  };

  const handleClick = (e) => {
    const { id, checked } = e.target;
    console.log('e', id, checked);
    setIsCheck([...isCheck, id]);
    if (!checked) {
      setIsCheck(isCheck.filter((item) => item !== id));
    }
  };

  const sendApproval = () => {
    approveSF({recommendation_id: isCheck})
    .then ((response)=> console.log("response", response))
    .catch((error) => console.log("error", error))
  }
  console.log("isCheck", isCheck)

  return templateTableSkeleton(
    data,
    columns,
    pathname,
    screenWidthMobile,
    filteredData,
    filterChoosed,
    search, 
    onChange,
    isCheckAll,
    isCheck, 
    list,
    handleSelectAll,
    handleClick, 
    sendApproval
  );
};

export default TableSkeleton;
