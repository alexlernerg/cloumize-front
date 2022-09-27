import React from 'react';
import { DotLoader } from 'react-spinners';
import './Spinner.scss';

const Spinner = () => {
  return (
    <div className='SpinnerContainer'>
      <DotLoader color="#2C6CF6" />
    </div>
  );
};

export default Spinner;