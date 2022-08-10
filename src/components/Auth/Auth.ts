import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useUser } from '../../context/hook/useUser';
import { validators } from '../../helpers/validators';
import { signIn, signUp } from '../../services/AuthService';
import { setAccessToken } from '../../store/AccessTokenStore';
import { useNavigate } from 'react-router-dom';
import templateAuth from "./Auth.template";
import { IUser } from '../../interfaces/json';

const Auth =()=>{
  //Current url
  const {pathname} = useLocation();
  const signinPage = pathname === '/signin';

  //Screen width
  const screenWidthMobile = window.screen.width < 1280

  //Navigate to
  const navigate = useNavigate();

  //User context
  const {getCurrentUser} = useUser();

  //Form logic
  const [data, setData]:[IUser, React.Dispatch<React.SetStateAction<IUser>>] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [errors, setErrors]:[any, React.Dispatch<React.SetStateAction<any>>] = useState({
    name: validators.name(),
    email: validators.email(),
    password: validators.password(),
    confirmPassword: validators.password()
  });

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setData((prevState:IUser) => ({
      ...prevState,
      [name]: value,
    }));
    setErrors((prevState:any) => ({
      ...prevState,
      [name]: validators[name] && validators[name](value),
    }));
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

  const isValid = () => {
    return !Object.keys(errors).some((error) => errors[error]);
  };

  const onSubmit = (e:React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (isValid() && signinPage) {
      signIn(data)
      .then((response:any)=> {
        setAccessToken(response.token);
        getCurrentUser().then(() => navigate('/user'));
      })
      .catch((error: any) => {
        //TODO: Chequear cuando el backend este construido
        // setErrorLogin(error?.message);
        // setShow(true);
      });
    } 
    if (isValid() && !signinPage) {
      signUp(data)
      .then((response:any)=> {
        console.log("response", response);
        navigate('/signin');
      })
      .catch((error: any) => {
        //TODO: Chequear cuando el backend este construido
        // setErrorLogin(error?.message);
        // setShow(true);
      });
    } 
  }

  const formLogic = {data, errors, onChange, touched, onBlur, onFocus, onSubmit}

  return templateAuth(screenWidthMobile, signinPage, formLogic);
}

export default Auth;