import React from 'react';
import './Data2Skeleton.scss';

const Data2Skeleton = (info:any) => {
  return (
    <div className='Data2Skeleton'>
      <div>
        {info.map((inf:any) => (
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
  );
};

export default Data2Skeleton;
