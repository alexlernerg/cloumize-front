import React from 'react';
import './Checkbox.scss';

const Checkbox = ({ id, type, handleClick, isChecked }: any) => {
  return (
    <label className='custom-radio-checkbox z-10 d-flex justify-content-center'>
      <input
        className='custom-radio-checkbox__input z-10'
        type={type}
        id={id}
        checked={isChecked}
        onChange={handleClick}
      />
      <span className='custom-radio-checkbox__show custom-radio-checkbox__show--checkbox z-10 checkboxDesktop'></span>
    </label>
  );
};

export default Checkbox;
