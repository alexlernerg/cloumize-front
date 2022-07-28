import React from 'react';
import './Data1Skeleton.scss';

const info = [
  { id: 0, title: 'Cloumize annual', savings: 'Savings', total: '$1,000' },
  { id: 1, title: 'Unapproved annual ', savings: 'Savings', total: '$700' },
  { id: 2, title: 'Total potential', savings: 'Savings', total: '$1,700' },
];

const Data1Skeleton = () => {
  return (
    <div className='Data1Skeleton'>
      <div>
        <p>
          Monthly costs are calculated with the AWS official rate. Other
          associated costs are not included
        </p>
        <p>Last updated: 2022/7/6 03:45:34</p>
        <p>Update: every 1h</p>
        <div>
          {info.map((inf) => (
            <div key={inf.id}>
              <p>{inf.title}</p>
              <p>{inf.savings}</p>
              <p>{inf.total}</p>
            </div>
          ))}
          <div>
            <p>Download</p>
            <p>Download this document, edit, save or share</p>
            <button>
              Download to CSV
              <img src='/Profile/download.svg' alt='download' />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Data1Skeleton;
