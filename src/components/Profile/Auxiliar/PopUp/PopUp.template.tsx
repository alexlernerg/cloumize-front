import React from 'react';
import './PopUp.scss';

const PopUp = (showPopup:any, sendApproval:any, responseAPI:any, content:any) => {
  return <div className='PopUpContainer'>
    <>
        <p className='PopUpContainer__question'>{content?.title}</p>
        <div>
            <button onClick={sendApproval}>{content?.button[0]}</button>
            <button onClick={showPopup}>{content?.button[1]}</button>
        </div>
        <p className='PopUpContainer__feedback'>{responseAPI}</p>
    </>
  </div>;
};

export default PopUp;