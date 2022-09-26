import { useState, useEffect } from 'react';
import templateOnBoarding from './OnBoarding.template';
import { getDiscounts, sendARN } from '../../services/DataService';
import { useUser } from '../../context/hook/useUser';

const OnBoarding = ({ closePopup }: any) => {
  //Screen width
  const screenWidthMobile = window.screen.width < 500;

  const {currentUser} = useUser();

  const [externalID, setExternalID] = useState('');
  const [ARN, setARN] = useState('');
  const onChange = (e: any) => {
    setARN(e.target.value);
  };

  useEffect(()=> {
    setExternalID(currentUser?.external_id)
  }, [currentUser])

  const [page, setPage] = useState(0);
  const [error, setError] = useState('');
  const next = () => {
    setPage(page + 1);
  };
  const back = () => {
    setPage(page - 1);
  };

  const sendARNF = () => {
    sendARN({client_role_arn: ARN})
      .then((response: any) => {
        console.log('response', response);
        setPage(3);
      })
      .catch((error: any) => setError(error));
  };

  const statusOnBoarding = () => {
    getDiscounts()
      .then((response) => console.log("response", response.sync_instance_status))
      .catch((error)=> console.log("error", error))
    closePopup()
  }

  return templateOnBoarding(
    page,
    next,
    back,
    screenWidthMobile,
    sendARNF,
    ARN,
    onChange,
    externalID,
    statusOnBoarding,
    error
  );
};

export default OnBoarding;
