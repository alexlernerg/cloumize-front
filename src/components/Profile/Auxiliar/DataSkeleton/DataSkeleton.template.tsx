import React from 'react';
import './DataSkeleton.scss';

const DataSkeleton = (info: any, pathname: string, onClick:any) => {
  return (
    <>
      <div className={`DataSkeleton ${pathname === '/user/savingsFinder' && 'mb-4'}`}>
      {(pathname ===  '/user/computeFinder') && (
            <>
              <p className='DataSkeleton__info DataSkeleton__info-DS'>
                Monthly costs are calculated with the AWS official rate. Other
                associated costs are not included
              </p>
            </>
          )}
        <div>
          <div className={`DataSkeleton__sections ${pathname ===  '/user/computeFinder' && 'DataSkeleton__sectionsCF'}`}>
            {info && info.map((inf: any) => (
              <div key={inf.id} className='DataSkeleton__sections-mobile'>
                <p className='DataSkeleton__sections-title'>{inf.title}</p>
                <div className='DataSkeleton__sections-subinfo'>
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
              <button className='DataSkeleton__sections-btn' onClick={onClick}>
                Download to CSV
                <img src='/Profile/download.svg' alt='download' />
              </button>
            </div>
          </div>
          {(pathname === '/user/savingsFinder') && (
            <>
              <p className='DataSkeleton__info'>
                Monthly costs are calculated with the AWS official rate. Other
                associated costs are not included
              </p>
            </>
          )}
        </div>
      </div>
      <div className='Data1Skeleton__space'></div>
    </>
  );
};

export default DataSkeleton;
