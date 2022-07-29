import React, { useEffect, useState } from 'react';
import './TableSkeleton.scss';

const TableSkeleton = (
  dataContent: any,
  columnsContent: any,
  pathname: string
) => {
  const [filterChoosed, setFilterChoosed] = useState('aws_account_id');
  const [search, setSearch] = useState('');
  const [filteredData, setFilteredData] = useState([]);

  const onChange = (e:any) => {
    const { name, value } = e.target;
    name === 'search' ? setSearch(value) : setFilterChoosed(value);
  };

  useEffect(()=> {
    setFilteredData(dataContent.filter((data:any) => data[filterChoosed].toString().toLowerCase().includes(search.toString().toLowerCase())))
  },[search]);
  
  return (
    <>
      <div className='TableSkeletonContainer__search'>
        <select name="filterChoosed" onChange={onChange} value={filterChoosed} className='TableSkeletonContainer__search-select'>
          {Object.keys(dataContent[0]).map((col:any) => <option value={col} className='TableSkeletonContainer__search-col'>{col}</option>)}
        </select>
        <div className='TableSkeletonContainer__search-inputContainer'>
          <img src="/Profile/search.svg" alt="search" className='TableSkeletonContainer__search-img'/>
          <input type="text" name="search" onChange={onChange} value={search} placeholder={filterChoosed} className='TableSkeletonContainer__search-input'/>
        </div>
      </div>
      <table className='table TableSkeletonContainer'>
        <thead className='TableSkeletonContainer__head'>
          <tr className='TableSkeletonContainer__head-line'>
            {columnsContent.map((col: any, i: any) => (
              <td
                valign='middle'
                key={i}
                className='TableSkeletonContainer__head-col'
              >
                {col}
              </td>
            ))}
          </tr>
        </thead>
        <tbody className='TableSkeletonContainer__body'> 
          {pathname === '/user/savingsFinder' &&  //TODO: Editar ultimas dos columnas
            filteredData.map((content: any, i: any) => (
              <tr key={i} className='TableSkeletonContainer__body-line'>
                <td
                  valign='middle'
                  className='TableSkeletonContainer__body-col'
                >
                  {content.aws_account_id}
                </td>
                <td
                  valign='middle'
                  className='TableSkeletonContainer__body-col'
                >
                  {content.recommendation_id_cm}
                </td>
                <td
                  valign='middle'
                  className='TableSkeletonContainer__body-col'
                >
                  {content.region}
                </td>
                <td
                  valign='middle'
                  className='TableSkeletonContainer__body-col'
                >
                  {content.instance_family}
                </td>
                <td
                  valign='middle'
                  className='TableSkeletonContainer__body-col'
                >
                  {content.units}
                </td>
                <td
                  valign='middle'
                  className='TableSkeletonContainer__body-col'
                >
                  {content.current_rate.toFixed(2)}
                </td>
                <td
                  valign='middle'
                  className='TableSkeletonContainer__body-col'
                >
                  {content.Cloumize_Discount.toFixed(2)}
                </td>
                <td
                  valign='middle'
                  className='TableSkeletonContainer__body-col'
                >
                  {content.cloumize_rate.toFixed(2)}
                </td>
                <td
                  valign='middle'
                  className='TableSkeletonContainer__body-col'
                >
                  {content.state === '' && 'Approved'}
                  {content.state === 'Pending Approval' && 'Pending'}
                  {content.state === 'Savings Activated' && 'Active'}
                </td>
                <td
                  valign='middle'
                  className='TableSkeletonContainer__body-col'
                >
                  {content.state === '' && 'Approved'}
                  {content.state === 'Pending Approval' && 'Pending'}
                  {content.state === 'Savings Activated' && 'Active'}
                </td>
              </tr>
            ))}
          {pathname === '/user/computeFinder' &&
            filteredData.map((content: any, i: any) => (
              <tr key={i} className='TableSkeletonContainer__body-line'>
                <td
                  valign='middle'
                  className='TableSkeletonContainer__body-col'
                >
                  {content.aws_account_id}
                </td>
                <td
                  valign='middle'
                  className='TableSkeletonContainer__body-col'
                >
                  {content.instance_id}
                </td>
                <td
                  valign='middle'
                  className='TableSkeletonContainer__body-col'
                >
                  {content.instance_type}
                </td>
                <td
                  valign='middle'
                  className='TableSkeletonContainer__body-col'
                >
                  {content.region}
                </td>
                <td
                  valign='middle'
                  className='TableSkeletonContainer__body-col'
                >
                  {content.az}
                </td>
                <td
                  valign='middle'
                  className='TableSkeletonContainer__body-col'
                >
                  {content.platform}
                </td>
                <td
                  valign='middle'
                  className='TableSkeletonContainer__body-col'
                >
                  {content.tenancy}
                </td>
                <td
                  valign='middle'
                  className='TableSkeletonContainer__body-col'
                >
                  {content.instance_lifecycle}
                </td>
                <td
                  valign='middle'
                  className='TableSkeletonContainer__body-col'
                >
                  {content.state}
                </td>
                <td
                  valign='middle'
                  className='TableSkeletonContainer__body-col'
                >
                  {content.launch_time}
                </td>
              </tr>
            ))}
          {pathname === '/user/savingsPlans' &&
            filteredData.map((content: any, i: any) => (
              <tr key={i} className='TableSkeletonContainer__body-line'>
                <td
                  valign='middle'
                  className='TableSkeletonContainer__body-col'
                >
                  {content.aws_account_id}
                </td>
                <td
                  valign='middle'
                  className='TableSkeletonContainer__body-col'
                >
                  {content.sp_id_aws}
                </td>
                <td
                  valign='middle'
                  className='TableSkeletonContainer__body-col'
                >
                  {content.status}
                </td>
                <td
                  valign='middle'
                  className='TableSkeletonContainer__body-col'
                >
                  {content.sp_type}
                </td>
                <td
                  valign='middle'
                  className='TableSkeletonContainer__body-col'
                >
                  {content.instance_family}
                </td>
                <td
                  valign='middle'
                  className='TableSkeletonContainer__body-col'
                >
                  {content.term_remaining_d}
                </td>
                <td
                  valign='middle'
                  className='TableSkeletonContainer__body-col'
                >
                  {content.commitment}
                </td>
                <td
                  valign='middle'
                  className='TableSkeletonContainer__body-col'
                >
                  {content.discount}
                </td>
              </tr>
            ))}
          {pathname === '/user/existingPlans' &&
            filteredData.map((content: any, i: any) => (
              <tr key={i} className='TableSkeletonContainer__body-line'>
                <td
                  valign='middle'
                  className='TableSkeletonContainer__body-col'
                >
                  {content.aws_account_id}
                </td>
                <td
                  valign='middle'
                  className='TableSkeletonContainer__body-col'
                >
                  {content.group_reservation_id}
                </td>
                <td
                  valign='middle'
                  className='TableSkeletonContainer__body-col'
                >
                  {content.status}
                </td>
                <td
                  valign='middle'
                  className='TableSkeletonContainer__body-col'
                >
                  {content.description}
                </td>
                <td
                  valign='middle'
                  className='TableSkeletonContainer__body-col'
                >
                  {content.instance_family}
                </td>
                <td
                  valign='middle'
                  className='TableSkeletonContainer__body-col'
                >
                  {content.reservation_count}
                </td>
                <td
                  valign='middle'
                  className='TableSkeletonContainer__body-col'
                >
                  {content.team_remaining}
                </td>
                <td
                  valign='middle'
                  className='TableSkeletonContainer__body-col'
                >
                  {content.discount}
                </td>
                <td
                  valign='middle'
                  className='TableSkeletonContainer__body-col'
                >
                  {content.autosave}
                </td>
              </tr>
            ))}
        </tbody>
      </table>
      {pathname === '/user/savingsFinder' && (
        <div className='TableSkeletonContainer__body-btn'>
          <button>Approve</button>
        </div>
      )}
    </>
  );
};

export default TableSkeleton;
