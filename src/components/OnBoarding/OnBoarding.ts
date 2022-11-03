import { useState, useEffect } from 'react';
import templateOnBoarding from './OnBoarding.template';
import { retryARN, sendARN } from '../../services/DataService';
import { useUser } from '../../context/hook/useUser';
import { validators } from '../../helpers/validators';
import { getUser } from '../../services/UserService';

const OnBoarding = ({ closePopup, show, page, setPage, errorAPI, setErrorAPI }: any) => {
  //Screen width
  const screenWidthMobile = window.screen.width < 500;

  const {currentUser, setCurrentUser} = useUser();
  console.log("current", currentUser);

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

  const [userID, setUserID] = useState('')

  useEffect(()=> {
    setExternalID(currentUser?.external_id)
    setUserID(currentUser?.user_id_cm)
  }, [currentUser])

  const next = () => {
    setPage(page + 1);
  };
  const back = () => {
    setPage(page - 1);
  };

  const sendARNF = () => {
    if(isValid()){
      sendARN({client_role_arn: ARN.trim()})
        .then((response: any) => {
          console.log("Entra en sendARN")
          setPage(3)
          getUser()
          .then((response:any)=> setCurrentUser(response))
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

  const enterARNAgain = () => {
    retryARN({user_id_cm: userID})
    .then((response)=> {
      console.log("response", response)
      setPage(2)
    })
    .catch((error)=> console.log("error", error))
  }

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
    onBlur,
    show, 
    enterARNAgain
  );
};

export default OnBoarding;
