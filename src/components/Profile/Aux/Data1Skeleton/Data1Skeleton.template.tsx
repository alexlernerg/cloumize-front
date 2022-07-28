import React from 'react';
import './Data1Skeleton.scss';

const info = [
  { id: 0, title: 'Cloumize annual', savings: 'Savings', total: '$1,000' },
  { id: 1, title: 'Unapproved annual ', savings: 'Savings', total: '$700' },
  { id: 2, title: 'Total potential', savings: 'Savings', total: '$1,700' },
];

const Data1Skeleton = () => {
  return (
    <>
    <div className='Data1Skeleton'>
      <div>
        <p className='Data1Skeleton__info'>
          Monthly costs are calculated with the AWS official rate. Other
          associated costs are not included
        </p>
        <p className='Data1Skeleton__updated'>Last updated: <span>2022/7/6 03:45:34</span></p>
        <p className='Data1Skeleton__updated'>Update: <span>every 1h</span></p>
        <div className='Data1Skeleton__sections'>
          {info.map((inf) => (
            <div key={inf.id}>
              <p className='Data1Skeleton__sections-title'>{inf.title}</p>
              <p className='Data1Skeleton__sections-savings'>{inf.savings}</p>
              <p className='Data1Skeleton__sections-total'>{inf.total}</p>
            </div>
          ))}
          <div>
            <p className='Data1Skeleton__sections-title'>Download</p>
            <p className='Data1Skeleton__sections-savings'>Download this document, <br/>edit, save or share</p>
            <button className='Data1Skeleton__sections-btn'>
              Download to CSV
              <img src='/Profile/download.svg' alt='download' />
            </button>
          </div>
        </div>
      </div>
    </div>
    <div className='Data1Skeleton__space'></div>
    </>
  );
};

export default Data1Skeleton;
