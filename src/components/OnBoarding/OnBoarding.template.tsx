import React from 'react';
import Spinner from '../Misc/Spinner/Spinner';
import './OnBoarding.scss';

const Buttons = ({ARN, page, next, back, sendARN, closePopup, errorAPI, error}:any) => {
    return (
        <>
            {page !== 0 && <button className="Buttons__btn" onClick={back}>Back</button>}
            {page === 0 && <img className="Buttons__image" src="/OnBoarding/dots1.png" alt="dots"/>}
            {page === 1 && <img className="Buttons__image" src="/OnBoarding/dots2.png" alt="dots"/>}
            {page === 2 && <img className="Buttons__image" src="/OnBoarding/dots3.png" alt="dots"/>}
            {page === 3 && <img className="Buttons__image" src="/OnBoarding/dots4.png" alt="dots"/>}
            {page !== 2 && page !== 3 && <button className="Buttons__btn" onClick={next}>Next</button>}
            {page === 2 && <button className="Buttons__btn" disabled={error.ARN} onClick={sendARN}>Next</button>}
            {/* {page === 3 && <button className="Buttons__btn" onClick={closePopup} disabled={errorAPI !== '' ? true : false}>Next</button>} */}
        </>
    )
}

const OnBoarding = (currentUser:any, page:number, next:any, back:any, screenWidthMobile:boolean, sendARN:any, ARN:string, onChange:any, externalID:string, closePopup:any, errorAPI:string, error:any, touched:any, onFocus:any, onBlur:any, show:boolean) => {
  return (
  <div className='OnBoardingContainer'>
    <div className='OnBoardingContainer__header'></div>
    <div className='OnBoardingContainer__image'>
        {page === 0 && screenWidthMobile && <img src="/OnBoarding/mobile1.png" alt="step"/>}
        {page === 0 && !screenWidthMobile && <img src="/OnBoarding/desktop1.png" alt="step"/>}
        {page === 1 && screenWidthMobile && <img src="/OnBoarding/mobile2.png" alt="step"/>}
        {page === 1 && !screenWidthMobile && <img src="/OnBoarding/desktop2.png" alt="step"/>}
        {page === 2 && screenWidthMobile && <img src="/OnBoarding/mobile3.png" alt="step"/>}
        {page === 2 && !screenWidthMobile && <img src="/OnBoarding/desktop3.png" alt="step"/>}
        {page === 3 && screenWidthMobile && errorAPI === '' && <img src="/OnBoarding/mobile4.png" alt="step"/>}
        {page === 3 && !screenWidthMobile && errorAPI === '' &&  <img src="/OnBoarding/desktop4.png" alt="step"/>}
        {page === 3 && screenWidthMobile && errorAPI !== '' && <img src="/OnBoarding/mobile5.png" alt="step"/>}
        {page === 3 && !screenWidthMobile && errorAPI !== '' && <img src="/OnBoarding/desktop5.png" alt="step"/>}
    </div>
    <div className={`OnBoardingContainer__content-${page}`}>
        {page === 0 && <>
            <p className={`OnBoardingContainer__content-${page}-title0`}>What access does this provide?</p>
            <p className={`OnBoardingContainer__content-${page}-text0`}>This CloudFormation template creates an IAM policy and role provides limited access to read your historic usage find savings on the EC2 Reserved Instance Marketplace. It does not allow us to change, modify or read your code or sensitive information.</p>
        </>}
        {page === 1 && <>
            <p className={`OnBoardingContainer__content-${page}-title1`}>Click on the following link to create an IAM CloudFormation Stack: <a href={`https://us-east-1.console.aws.amazon.com/cloudformation/home?region=us-east-1#/stacks/quickcreate?templateURL=https://cloumize-public-dev.s3.eu-west-3.amazonaws.com/cfn-iam-role-template-public-without-signed/iamrole.yml&stackName=Cloumize-Create-I-AM-Role&param_CloumizeExternalID=${externalID}&param_CloumizeIamRole=arn:aws:iam::863543637728:root`} target="_blank" rel="noreferrer">here</a></p>
            <p className={`OnBoardingContainer__content-${page}-text1`}>To obtain the benefits and continue with the process, <span>create a Stack</span></p>
        </>}
        {page === 2 && <>
            <div className={`OnBoardingContainer__content-${page}-step1`}>
                <img src="/OnBoarding/step1.svg" alt="step1"/>
                <p>Wait until the stack creation is complete</p>
            </div>
            <div className={`OnBoardingContainer__content-${page}-step2`}>
                <img src="/OnBoarding/step2.svg" alt="step2"/>
                <p>Select the output tab and insert the arn code</p>
            </div>
            <div className={`OnBoardingContainer__content-${page}-ARN`}>
                <label>Arn Code</label>
                <input value={ARN} onFocus={onFocus} onBlur={onBlur} onChange={onChange} type="text" placeholder='insert your code' name="ARN"></input>
            </div>
            {touched.ARN && error.ARN && <p className='OnBoardingContainer__Error'>{error.ARN}</p>}
        </>}
        {page === 3 && errorAPI === '' && <>
            <p className={`OnBoardingContainer__content-${page}-title3`}>Please wait a moment while we find potential savings.</p>
            <p className={`OnBoardingContainer__content-${page}-text3`}>This may take up to 5 minutes.</p>
            <div className={`OnBoardingContainer__content-${page}-video`}>
                <img src="/OnBoarding/video.gif" alt="video"/>
            </div>
        </>}
        {page === 3 && errorAPI !=='' && <>
            <p className={`OnBoardingContainer__content-${page}-title3`}>An error has happened</p>
            <p className={`OnBoardingContainer__content-${page}-text3`}>{errorAPI}</p>
        </>}
    </div>
    <div className='OnBoardingContainer__buttons'>
        <Buttons ARN={ARN} page={page} next={next} back={back} sendARN={sendARN} closePopup={closePopup} errorAPI={errorAPI} error={error}/>
    </div>
    {show && <Spinner/>}
  </div>
  )
};

export default OnBoarding;