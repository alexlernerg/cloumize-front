import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { validators } from '../../helpers/validators';
import templateAuth from "./Auth.template";

const Auth =()=>{
  //Current url
  const {pathname} = useLocation();
  const signinPage = pathname === '/signin';

  //Form logic
  const [data, setData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [errors, setErrors] = useState({
    name: validators.name(),
    email: validators.email(),
    password: validators.password(),
    confirmPassword: validators.password()
  });

  const onChange = (e: any) => {
    const { name, value } = e.target;
    setData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
    setErrors((prevState) => ({
      ...prevState,
      [name]: validators[name] && validators[name](value),
    }));
  };

  const [touched, setTouched] = useState({});

  const onBlur = (e: any) => {
    const { name } = e.target;

    setTouched((prevTouched) => ({
      ...prevTouched,
      [name]: true,
    }));
  };

  const onFocus = (e: any) => {
    const { name } = e.target;

    setTouched((prevTouched) => ({
      ...prevTouched,
      [name]: false,
    }));
  };

  const onSubmit = () => {

  }

  const formLogic = {data, errors, onChange, touched, onBlur, onFocus, onSubmit}

  return templateAuth(signinPage, formLogic);
}

export default Auth;