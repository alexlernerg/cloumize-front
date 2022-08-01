import React from 'react';
import './DataSkeleton.scss';

const DataSkeleton = (info: any, pathname: string) => {
  console.log('Pathname', pathname);
  return (
    <>
      <div className='DataSkeleton'>
        <div>
          {pathname === ('/user/savingsFinder' || '/user/computeFinder') && (
            <>
              <p className='DataSkeleton__info'>
                Monthly costs are calculated with the AWS official rate. Other
                associated costs are not included
              </p>
              <p className='DataSkeleton__updated'>
                Last updated: <span>2022/7/6 03:45:34</span>
              </p>
              <p className='DataSkeleton__updated'>
                Update: <span>every 1h</span>
              </p>
            </>
          )}
          <div className='DataSkeleton__sections'>
            {info.map((inf: any) => (
              <div key={inf.id} className='DataSkeleton__sections-mobile'>
                <p className='DataSkeleton__sections-title'>{inf.title}</p>
                <div>
                  <p className='DataSkeleton__sections-savings'>
                    {inf.savings}
                  </p>
                  <p className='DataSkeleton__sections-total'>{inf.total}</p>
                </div>
              </div>
            ))}
            <div>
              <p className='DataSkeleton__sections-title'>Download</p>
              <p className='DataSkeleton__sections-savings'>
                Download this document, edit, save or share
              </p>
              <button className='DataSkeleton__sections-btn'>
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

export default DataSkeleton;
