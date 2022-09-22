import React, { useEffect, useState } from 'react';
import Checkbox from './Checkbox/Checkbox';
import './TableSkeleton.scss';

const TableMobile = ({
  dataContent,
  columnsContent,
  pathname,
  list,
  isCheck,
  handleClick,
}) => {
  return (
    <>
      {dataContent?.map((data, i) => (
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
                <td>{data.current_rate?.toFixed(2)}</td>
              </tr>
              <tr>
                <td>{columnsContent[6]}</td>
                <td>{data.Cloumize_Discount?.toFixed(2)}</td>
              </tr>
              <tr>
                <td>{columnsContent[7]}</td>
                <td>{data.cloumize_rate?.toFixed(2)}</td>
              </tr>
              <tr>
                <td>{columnsContent[8]}</td>
                <td valign='middle' className='TableMobile__body-col'>
                  {data.state === 'Approved' && (
                    <p className='TableSkeletonContainer__body-textApproved m-0'>
                      Approved
                    </p>
                  )}
                  {data.state === 'Pending Approval' && (
                    <p className='TableSkeletonContainer__body-textPending m-0'>
                      Pending
                    </p>
                  )}
                  {data.state === 'Savings Activated' && (
                    <p className='TableSkeletonContainer__body-textActive m-0'>
                      Active
                    </p>
                  )}
                </td>
              </tr>
              <tr className='align-items-center'>
                <td>{columnsContent[9]}</td>
                <td valign='middle' className='TableMobile__body-col'>
                  {data.state === 'Approved' || data.state === 'Savings Activated' ? (
                    <div className='d-flex justify-content-center checkboxDesktop'>
                      <img src='/Profile/checkbox.svg' alt='checkbox' />
                    </div>
                  ) : (
                    <Checkbox
                      key={data.recommendation_id_cm}
                      type='checkbox'
                      id={data.recommendation_id_cm}
                      handleClick={handleClick}
                      isChecked={isCheck.includes(data.recommendation_id_cm)}
                      className='custom-radio-checkbox__input z-10'
                    />
                  )}
                </td>
              </tr>
              {data.state === 'Pending Approval' && (
                <tr>
                  <td className='TableMobile__body-btn'>
                    <button disabled={isCheck.length <= 0 ? true : false}>
                      Approve
                    </button>
                  </td>
                </tr>
              )}
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
                <td>{data['term_remaining (days)']}</td>
              </tr>
              <tr>
                <td>{columnsContent[7]}</td>
                <td>{data.discount}</td>
              </tr>
              <tr>
                <td>{columnsContent[8]}</td>
                <td>{data.cloumize_auto_saver}</td>
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
                <td>{data.payment_monthly}</td>
              </tr>
              <tr>
                <td>{columnsContent[8]}</td>
                <td>{data.payment_upfront}</td>
              </tr>
            </>
          )}
        </table>
      ))}
    </>
  );
};

const TableSkeleton = (
  dataContent,
  columnsContent,
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
  handleClick
) => {
  return (
    <>
      <div className='TableSkeletonContainer__search'>
        <select
          name='filterChoosed'
          onChange={onChange}
          value={filterChoosed}
          className='TableSkeletonContainer__search-select'
        >
          {Object.keys(dataContent[0]).map((col, i) => (
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
              ? columnsContent.map((col, i) => (
                  <td
                    valign='middle'
                    key={i}
                    className='TableSkeletonContainer__head-col'
                  >
                    {col === 'Approval' ? (
                      <div className='TableSkeletonContainer__head-approve'>
                        <p>{col}</p>
                        <Checkbox
                          type='checkbox'
                          id='selectAll'
                          handleClick={handleSelectAll}
                          isChecked={isCheckAll}
                        />
                      </div>
                    ) : (
                      col
                    )}
                  </td>
                ))
              : columnsContent.map((col, i) => (
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
          {pathname === '/user/savingsFinder' &&
            filteredData.map((content, i) => (
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
                  {i}
                </td>
                <td
                  valign='middle'
                  className='TableSkeletonContainer__body-col'
                >
                  {content.current_rate?.toFixed(2)}
                </td>
                <td
                  valign='middle'
                  className='TableSkeletonContainer__body-col'
                >
                  {content.Cloumize_Discount?.toFixed(2)}
                </td>
                <td
                  valign='middle'
                  className='TableSkeletonContainer__body-col'
                >
                  {content.cloumize_rate?.toFixed(2)}
                </td>
                <td
                  valign='middle'
                  className='TableSkeletonContainer__body-col'
                >
                  {content.state === 'Approved' && (
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
                  {content.state === 'Approved' ||
                  content.state === 'Savings Activated' ? (
                    <div className='d-flex justify-content-center checkboxDesktop'>
                      <img src='/Profile/checkbox.svg' alt='checkbox' />
                    </div>
                  ) : (
                    <Checkbox
                      key={content.recommendation_id_cm}
                      type='checkbox'
                      id={content.recommendation_id_cm}
                      handleClick={handleClick}
                      isChecked={isCheck.includes(content.recommendation_id_cm)}
                      className='custom-radio-checkbox__input z-10'
                    />
                  )}
                </td>
              </tr>
            ))}
          {pathname === '/user/computeFinder' &&
            filteredData.map((content, i) => (
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
            filteredData.map((content, i) => (
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
                  {content.payment_monthly}
                </td>
                <td
                  valign='middle'
                  className='TableSkeletonContainer__body-col'
                >
                  {content.payment_upfront}
                </td>
              </tr>
            ))}
          {pathname === '/user/existingPlans' &&
            filteredData.map((content, i) => (
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
                  {content['term_remaining (days)']}
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
                  {content.cloumize_auto_saver}
                </td>
              </tr>
            ))}
        </tbody>
      </table>
      <TableMobile
        dataContent={filteredData}
        columnsContent={columnsContent}
        pathname={pathname}
        list={list}
        isCheck={isCheck}
        handleClick={handleClick}
      />
      {pathname === '/user/savingsFinder' && !screenWidthMobile && (
        <div className='TableSkeletonContainer__body-btn'>
          <button disabled={isCheck.length <= 0 ? true : false}>Approve</button>
        </div>
      )}
    </>
  );
};

export default TableSkeleton;
