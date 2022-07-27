import React, { useState } from 'react';
import Navbar from '../../Misc/Navbar/Navbar';
import { useTable } from 'react-table';
import './TableSkeleton.scss';
import ReactTooltip from 'react-tooltip';

const TableSkeleton = (dataContent: any, columnsContent: any) => {
  const data: any = React.useMemo(() => dataContent, []);

  const columns: any = React.useMemo(() => columnsContent, []);

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data });

  return (
    <table {...getTableProps()} className='TableSkeletonContainer'>
      <thead>
        {headerGroups.map((headerGroup) => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column) => (
              <th {...column.getHeaderProps()}>{column.render('Header')}</th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row) => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map((cell) => {
                return (
                  <>
                    <td {...cell.getCellProps()} data-tip data-for={`${cell.render('Cell')}`}>
                      {cell.render('Cell')}
                    </td>
                    <ReactTooltip id={`${cell.render('Cell')}`} type='warning' effect='solid'>
                      <span>{cell.render('Cell')}</span>
                    </ReactTooltip>
                  </>
                );
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default TableSkeleton;
