import React from 'react';
import './OnBoarding.scss';

const Buttons = ({page, next, back}:any) => {
    return (
        <>
            {page !== 0 && <button className="Buttons__btn" onClick={back}>Back</button>}
            {page === 0 && <img className="Buttons__image" src="/OnBoarding/dots1.png" alt="dots"/>}
            {page === 1 && <img className="Buttons__image" src="/OnBoarding/dots2.png" alt="dots"/>}
            {page === 2 && <img className="Buttons__image" src="/OnBoarding/dots3.png" alt="dots"/>}
            {page === 3 && <img className="Buttons__image" src="/OnBoarding/dots4.png" alt="dots"/>}
            <button className="Buttons__btn" onClick={next}>Next</button>
        </>
    )
}

const OnBoarding = (page:number, next:any, back:any, screenWidthMobile:boolean, closePopup:any) => {
  return <div className='OnBoardingContainer'>
    <div className='OnBoardingContainer__header'>
        <button onClick={closePopup}><img src="/OnBoarding/x.svg" alt="X"/></button>
    </div>
    <div className='OnBoardingContainer__image'>
        {page === 0 && screenWidthMobile && <img src="/OnBoarding/mobile1.png" alt="step"/>}
        {page === 0 && !screenWidthMobile && <img src="/OnBoarding/desktop1.png" alt="step"/>}
        {page === 1 && screenWidthMobile && <img src="/OnBoarding/mobile2.png" alt="step"/>}
        {page === 1 && !screenWidthMobile && <img src="/OnBoarding/desktop2.png" alt="step"/>}
        {page === 2 && screenWidthMobile && <img src="/OnBoarding/mobile3.png" alt="step"/>}
        {page === 2 && !screenWidthMobile && <img src="/OnBoarding/desktop3.png" alt="step"/>}
        {page === 3 && screenWidthMobile && <img src="/OnBoarding/mobile4.png" alt="step"/>}
        {page === 3 && !screenWidthMobile && <img src="/OnBoarding/desktop4.png" alt="step"/>}
    </div>
    <div className='OnBoardingContainer__content'>
        {page === 0 && <>
            <p className='OnBoardingContainer__content-title0'>What access does this provide?</p>
            <p className='OnBoardingContainer__content-text0'>This CloudFormation template creates an IAM policy and role provides limited access to read your historic usage find savings on the EC2 Reserved Instance Marketplace. It does not allow us to change, modify or read your code or sensitive information.</p>
        </>}
        {page === 1 && <>
            <p className='OnBoardingContainer__content-title1'>Click on the following link to create an IAM CloudFormation Stack: <a href="/" target="_blank">here</a></p>
            <p className='OnBoardingContainer__content-text1'>To obtain the benefits and continue with the process, <span>create a Stack</span></p>
        </>}
        {page === 2 && <>
            <div>
                <img/>
                <p>Wait until the stack creation is complete</p>
            </div>
            <div>
                <img/>
                <p>Select the output tab and insert the arn code</p>
            </div>
            <div>
                <label>Arn Code</label>
                <input type="text"></input>
            </div>
        </>}
        {page === 3 && <>
            <p className='OnBoardingContainer__content-title3'>Please wait a moment while we find potential savings.</p>
            <p className='OnBoardingContainer__content-text3'>This may take up to 5 minutes.</p>
        </>}
    </div>
    <div className='OnBoardingContainer__buttons'>
        <Buttons page={page} next={next} back={back}/>
    </div>
  </div>;
};

export default OnBoarding;