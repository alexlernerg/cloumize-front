import { ITouched } from './RecoveryPassword/InsertPassword/interfaces';
import { IError, IResponse } from './../../interfaces/common';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useUser } from '../../context/hook/useUser';
import { validators } from '../../helpers/validators';
import { signIn, signUp } from '../../services/AuthService';
import { setAccessToken } from '../../store/AccessTokenStore';
import { useNavigate } from 'react-router-dom';
import templateAuth from './Auth.template';
import { IData, IErrors } from './interfaces';

const Auth = () => {
  //Current url
  const { pathname } = useLocation();
  const signinPage = pathname === '/signin';

  //Screen width
  const screenWidthMobile = window.screen.width < 1280;

  //Navigate to
  const navigate = useNavigate();

  //User context
  const { setCurrentUser, getCurrentUser } = useUser();

  //Form logic
  const [data, setData]: [IData,
    React.Dispatch<React.SetStateAction<IData>>] =
    useState({
      awsAccountName: '',
      companyName: '',
      userName: '',
      email: '',
      password: '',
      confirmPassword: '',
    });

  const [errors, setErrors]: [IErrors, React.Dispatch<React.SetStateAction<IErrors>>] =
    useState({
      awsAccountName: validators.aws(''),
      companyName: validators.company(''),
      userName: validators.name(''),
      email: validators.email(''),
      password: {
        lengthMsg: validators.password(data.password),
        uppercaseMsg: validators.passwordUppercase(data.password),
        lowercaseMsg: validators.passwordLowercase(data.password),
      },
    });

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setData((prevState: IData) => ({
      ...prevState,
      [name]: value,
    }));
    if (name !== 'password') {
      setErrors((prevState: IErrors) => ({
        ...prevState,
        [name]: validators[name] && validators[name](value),
      }));
    } else {
      setErrors((prevState: IErrors) => ({
        ...prevState,
        password: {
          lengthMsg: validators.password(value),
          uppercaseMsg: validators.passwordUppercase(value),
          lowercaseMsg: validators.passwordLowercase(value),
        },
      }));
    }
  };

  const [touched, setTouched]: [ITouched, React.Dispatch<React.SetStateAction<ITouched>>] = useState({});

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

  const isValid = () => {
    return errors.aws === undefined &&
      errors.company === undefined &&
      errors.name === undefined &&
      errors.email === undefined &&
      errors.password.lengthMsg === '' &&
      errors.password.uppercaseMsg === '' &&
      errors.password.lowercaseMsg === ''
      ? true
      : false;
  };

  const isValidSignin = () => {
    return errors.email === undefined &&
      errors.password.lengthMsg === '' &&
      errors.password.uppercaseMsg === '' &&
      errors.password.lowercaseMsg === ''
      ? true
      : false;
  };

  const [errorAPI, setErrorAPI] = useState('');
  const [show, setShow] = useState(false);

  const onSubmit = (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isValidSignin() && signinPage) {
      signIn({ email: data.email, password: data.password })
        .then((response: IResponse) => {
          setAccessToken(response.token);
          setCurrentUser(response.user);
          navigate('/user');
        })
        .catch((error: IError) => {
          setErrorAPI(error?.data.errors.message);
          setTimeout(() => setErrorAPI(''), 3000);
          setShow(true);
        });
    }
    if (isValid() && !signinPage) {
      signUp({
        email: data.email,
        password: data.password,
        awsAccountName: data.awsAccountName,
        companyName: data.companyName,
        userName: data.userName,
      })
        .then((response: IResponse) => {
          navigate('/signin');
        })
        .catch((error: IError) => {
          setErrorAPI(error?.data.errors.message);
          setTimeout(() => setErrorAPI(''), 3000);
          setShow(true);
        });
    }
  };

  return templateAuth({
    screenWidthMobile,
    signinPage,
    data,
    errors,
    onChange,
    touched,
    onBlur,
    onFocus,
    onSubmit,
    errorAPI,
    show});
};

export default Auth;
