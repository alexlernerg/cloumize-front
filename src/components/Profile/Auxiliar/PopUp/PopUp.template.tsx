import React from 'react';
import { IContentPopUp } from './PopUp';
import './PopUp.scss';

const PopUp = (
  showPopup: () => void,
  sendApproval: () => void,
  responseAPI: string,
  content: IContentPopUp
) => {
  return (
    <div className='PopUpContainer'>
      <>
        <p className='PopUpContainer__question'>{content?.title}</p>
        <div>
          <button onClick={sendApproval}>{content?.button[0]}</button>
          <button onClick={showPopup}>{content?.button[1]}</button>
        </div>
        <p className='PopUpContainer__feedback'>{responseAPI}</p>
      </>
    </div>
  );
};

export default PopUp;
