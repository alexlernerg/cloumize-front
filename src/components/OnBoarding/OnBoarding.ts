import { useState, useEffect } from 'react';
import templateOnBoarding from './OnBoarding.template';
import { getDiscounts, sendARN } from '../../services/DataService';
import { useUser } from '../../context/hook/useUser';
import { validators } from '../../helpers/validators';

const OnBoarding = ({ closePopup }: any) => {
  //Screen width
  const screenWidthMobile = window.screen.width < 500;

  const {currentUser} = useUser();

  const [page, setPage] = useState(0);
  const [errorAPI, setErrorAPI] = useState('');
  const [externalID, setExternalID] = useState('');
  const [ARN, setARN] = useState('');
  const [error, setError]:[any, React.Dispatch<React.SetStateAction<any>>] = useState({
    ARN: validators.ARN(ARN)
  });
  const onChange = (e: any) => {
    const {value, name} = e.target;
    setARN(value);
    setError({[name]: validators[name] && validators[name](value)})
  };

  const isValid = () => {
    return error.ARN === undefined
  };

  useEffect(()=> {
    setExternalID(currentUser?.external_id)
    if (currentUser?.ARN !== null && currentUser?.sync_instance_status !== 0) {
      setPage(3)
      getDiscounts()
          .then((response:any) => {
            console.log("responseAPI", response)
            if (response.sync_instance_status === null && currentUser?.ARN === null) {
              setPage(0);
            }
            if (response.sync_instance_status == 0) {
              setErrorAPI('')
              setPage(3);
            }
            if (response.sync_instance_status == 1) {
              setErrorAPI('Please activate Cost Explorer on AWS')
              setPage(3);
            }
            if (response.sync_instance_status == 2) {
              setErrorAPI('Oops, we found an error when collecting your ARN code. Please contact us at support@cloumize.com')
              setPage(3);
            }
            if (response.sync_instance_status == 3) {
              setErrorAPI('Something went wrong. Please contact us at support@cloumize.com')
              setPage(3);
            }
          })
          .catch((error)=> console.log("error", error))
    } else {
      setPage(0)
    }
  }, [currentUser])

  console.log("errorAPI", errorAPI)

  const next = () => {
    setPage(page + 1);
  };
  const back = () => {
    setPage(page - 1);
  };

  const sendARNF = () => {
    if(isValid()){
      sendARN({client_role_arn: ARN})
        .then((response: any) => {
          console.log('response', response);
          setPage(3)
        })
        .catch((error: any) => setErrorAPI(error));
    }
  };

  const [touched, setTouched] = useState({});

  const onBlur = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name } = e.target;

    setTouched((prevTouched) => ({
      ...prevTouched,
      [name]: true,
    }));
  };

  const onFocus = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name } = e.target;

    setTouched((prevTouched) => ({
      ...prevTouched,
      [name]: false,
    }));
  };

  return templateOnBoarding(
    currentUser,
    page,
    next,
    back,
    screenWidthMobile,
    sendARNF,
    ARN,
    onChange,
    externalID,
    closePopup,
    errorAPI,
    error,
    touched,
    onFocus, 
    onBlur
  );
};

export default OnBoarding;
