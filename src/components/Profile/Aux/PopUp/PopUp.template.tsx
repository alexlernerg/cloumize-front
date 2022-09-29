import React from 'react';
import './PopUp.scss';

const PopUp = (showPopup:any, sendApproval:any, responseAPI:any) => {
    console.log("responseAPI", responseAPI)
  return <div className='PopUpContainer'>
    <>
        <p className='PopUpContainer__question'>Are you sure you want to pass the selected instances?</p>
        <div>
            <button onClick={sendApproval}>Yes, I'm sure</button>
            <button onClick={showPopup}>No, come back</button>
        </div>
        <p className='PopUpContainer__feedback'>{responseAPI}</p>
    </>
  </div>;
};

export default PopUp;