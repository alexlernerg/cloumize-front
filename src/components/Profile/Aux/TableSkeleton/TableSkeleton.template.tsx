import React, { useEffect, useState } from 'react';
import './TableSkeleton.scss';

const TableMobile = ({ dataContent, columnsContent, pathname }: any) => {
  return (
    <>
      {dataContent.map((data: any, i: any) => (
        <table className='table mobile TableMobile' key={i}>
          {pathname === '/user/savingsFinder' && (
            <>
              <tr>
                <td>{columnsContent[0]}</td>
                <td>{data.aws_account_id}</td>
              </tr>
              <tr>
                <td>{columnsContent[1]}</td>
                <td>{data.recommendation_id_cm}</td>
              </tr>
              <tr>
                <td>{columnsContent[2]}</td>
                <td>{data.region}</td>
              </tr>
              <tr>
                <td>{columnsContent[3]}</td>
                <td>{data.instance_family}</td>
              </tr>
              <tr>
                <td>{columnsContent[4]}</td>
                <td>{data.units}</td>
              </tr>
              <tr>
                <td>{columnsContent[5]}</td>
                <td>{data.current_rate}</td>
              </tr>
              <tr>
                <td>{columnsContent[6]}</td>
                <td>{data.Cloumize_Discount}</td>
              </tr>
              <tr>
                <td>{columnsContent[7]}</td>
                <td>{data.cloumize_rate}</td>
              </tr>
              <tr>
                <td>{columnsContent[8]}</td>
                <td>
                  {data.state === '' && 'Approved'}
                  {data.state === 'Pending Approval' && 'Pending'}
                  {data.state === 'Savings Activated' && 'Active'}
                </td>
              </tr>
              <tr>
                <td>{columnsContent[9]}</td>
                <td>
                  {data.state === '' && 'Approved'}
                  {data.state === 'Pending Approval' && 'Pending'}
                  {data.state === 'Savings Activated' && 'Active'}
                </td>
              </tr>
            </>
          )}
          {pathname === '/user/computeFinder' && (
            <>
              <tr>
                <td>{columnsContent[0]}</td>
                <td>{data.aws_account_id}</td>
              </tr>
              <tr>
                <td>{columnsContent[1]}</td>
                <td>{data.instance_id}</td>
              </tr>
              <tr>
                <td>{columnsContent[2]}</td>
                <td>{data.instance_type}</td>
              </tr>
              <tr>
                <td>{columnsContent[3]}</td>
                <td>{data.region}</td>
              </tr>
              <tr>
                <td>{columnsContent[4]}</td>
                <td>{data.az}</td>
              </tr>
              <tr>
                <td>{columnsContent[5]}</td>
                <td>{data.platform}</td>
              </tr>
              <tr>
                <td>{columnsContent[6]}</td>
                <td>{data.tenancy}</td>
              </tr>
              <tr>
                <td>{columnsContent[7]}</td>
                <td>{data.instance_lifecycle}</td>
              </tr>
              <tr>
                <td>{columnsContent[8]}</td>
                <td>{data.state}</td>
              </tr>
              <tr>
                <td>{columnsContent[9]}</td>
                <td>{data.launch_time}</td>
              </tr>
            </>
          )}
          {pathname === '/user/existingPlans' && (
            <>
              <tr>
                <td>{columnsContent[0]}</td>
                <td>{data.aws_account_id}</td>
              </tr>
              <tr>
                <td>{columnsContent[1]}</td>
                <td>{data.group_reservation_id}</td>
              </tr>
              <tr>
                <td>{columnsContent[2]}</td>
                <td>{data.status}</td>
              </tr>
              <tr>
                <td>{columnsContent[3]}</td>
                <td>{data.description}</td>
              </tr>
              <tr>
                <td>{columnsContent[4]}</td>
                <td>{data.instance_family}</td>
              </tr>
              <tr>
                <td>{columnsContent[5]}</td>
                <td>{data.reservation_count}</td>
              </tr>
              <tr>
                <td>{columnsContent[6]}</td>
                <td>{data.team_remaining}</td>
              </tr>
              <tr>
                <td>{columnsContent[7]}</td>
                <td>{data.discount}</td>
              </tr>
              <tr>
                <td>{columnsContent[8]}</td>
                <td>{data.autosave}</td>
              </tr>
            </>
          )}
          {pathname === '/user/savingsPlans' && (
            <>
              <tr>
                <td>{columnsContent[0]}</td>
                <td>{data.aws_account_id}</td>
              </tr>
              <tr>
                <td>{columnsContent[1]}</td>
                <td>{data.sp_id_aws}</td>
              </tr>
              <tr>
                <td>{columnsContent[2]}</td>
                <td>{data.status}</td>
              </tr>
              <tr>
                <td>{columnsContent[3]}</td>
                <td>{data.sp_type}</td>
              </tr>
              <tr>
                <td>{columnsContent[4]}</td>
                <td>{data.instance_family}</td>
              </tr>
              <tr>
                <td>{columnsContent[5]}</td>
                <td>{data.term_remaining_d}</td>
              </tr>
              <tr>
                <td>{columnsContent[6]}</td>
                <td>{data.commitment}</td>
              </tr>
              <tr>
                <td>{columnsContent[7]}</td>
                <td>{data.discount}</td>
              </tr>
            </>
          )}
        </table>
      ))}
    </>
  );
};

const TableSkeleton = (
  dataContent: any,
  columnsContent: any,
  pathname: string
) => {
  const [filterChoosed, setFilterChoosed] = useState('aws_account_id');
  const [search, setSearch] = useState('');
  const [filteredData, setFilteredData] = useState([]);

  const onChange = (e: any) => {
    const { name, value } = e.target;
    name === 'search' ? setSearch(value) : setFilterChoosed(value);
  };

  const [doCheck, setDoCheck]: [
    any,
    React.Dispatch<React.SetStateAction<any>>
  ] = useState({all: false, rest:[]});

  console.log("doCheck", doCheck);

  const onCheck = (e: React.FormEvent<HTMLInputElement>) => {
    const {checked, name} = e.currentTarget;
    if (name === 'all') {
      console.log("Selecciono todos", checked, name)
    } else {
      console.log("Selecciono uno", checked, name)
    }
    // setDoCheck();
  };

  useEffect(()=> {
    const filteredArray = dataContent.filter((data:any)=> data.state === 'Pending Approval');
    console.log("filteredArray", filteredArray);
    const mapArray = filteredArray.map((data:any) => {
      const obj = {
        id: data.aws_account_id,
        check: false
      }
      return obj
    })
    doCheck.rest = mapArray
  },[])

  useEffect(() => {
    setFilteredData(
      dataContent.filter((data: any) =>
        data[filterChoosed]
          .toString()
          .toLowerCase()
          .includes(search.toString().toLowerCase())
      )
    );
  }, [search]);

  return (
    <>
      <div className='TableSkeletonContainer__search'>
        <select
          name='filterChoosed'
          onChange={onChange}
          value={filterChoosed}
          className='TableSkeletonContainer__search-select'
        >
          {Object.keys(dataContent[0]).map((col: any, i: any) => (
            <option
              value={col}
              className='TableSkeletonContainer__search-col'
              key={i}
            >
              {col}
            </option>
          ))}
        </select>
        <div className='TableSkeletonContainer__search-inputContainer'>
          <img
            src='/Profile/search.svg'
            alt='search'
            className='TableSkeletonContainer__search-img'
          />
          <input
            type='text'
            name='search'
            onChange={onChange}
            value={search}
            placeholder={filterChoosed}
            className='TableSkeletonContainer__search-input'
          />
        </div>
      </div>
      <table className='table TableSkeletonContainer desktop'>
        <thead className='TableSkeletonContainer__head'>
          <tr className='TableSkeletonContainer__head-line'>
            {pathname === '/user/savingsFinder'
              ? columnsContent.map((col: any, i: any) => (
                  <td
                    valign='middle'
                    key={i}
                    className='TableSkeletonContainer__head-col'
                  >
                    {col === 'Approval' ? (
                      <div className='TableSkeletonContainer__head-approve'>
                        <p>{col}</p>
                        <label className='custom-radio-checkbox z-10'>
                          <input
                            className='custom-radio-checkbox__input z-10'
                            type='checkbox'
                            name='all'
                            checked={doCheck.all}
                            onChange={(e) => onCheck(e)}
                          />
                          <span className='custom-radio-checkbox__show custom-radio-checkbox__show--checkbox z-10'></span>
                        </label>
                      </div>
                    ) : (
                      col
                    )}
                  </td>
                ))
              : columnsContent.map((col: any, i: any) => (
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
          {pathname === '/user/savingsFinder' && //TODO: Editar ultimas dos columnas
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
                  {content.state === '' && (
                    <p className='TableSkeletonContainer__body-textApproved m-0'>
                      Approved
                    </p>
                  )}
                  {content.state === 'Pending Approval' && (
                    <p className='TableSkeletonContainer__body-textPending m-0'>
                      Pending
                    </p>
                  )}
                  {content.state === 'Savings Activated' && (
                    <p className='TableSkeletonContainer__body-textActive m-0'>
                      Active
                    </p>
                  )}
                </td>
                <td
                  valign='middle'
                  className='TableSkeletonContainer__body-col'
                >
                  {content.state === '' ||
                  content.state === 'Savings Activated' ? (
                    <div className='d-flex justify-content-center'>
                      <img src='/Profile/checkbox.svg' alt='checkbox'/>

                    </div>
                  ) : (
                    <label className='custom-radio-checkbox z-10 d-flex justify-content-center'>
                      <input
                        className='custom-radio-checkbox__input z-10'
                        type='checkbox'
                        name={content.aws_account_id}
                        checked={doCheck?.rest[i]?.check}
                        onChange={(e) => onCheck(e)}
                      />
                      <span className='custom-radio-checkbox__show custom-radio-checkbox__show--checkbox z-10'></span>
                    </label>
                  )}
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
      <TableMobile
        dataContent={dataContent}
        columnsContent={columnsContent}
        pathname={pathname}
      />
      {pathname === '/user/savingsFinder' && (
        <div className='TableSkeletonContainer__body-btn'>
          <button>Approve</button>
        </div>
      )}
    </>
  );
};

export default TableSkeleton;
