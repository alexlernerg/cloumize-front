import { useState } from 'react';
import { Params, useNavigate, useParams } from 'react-router-dom';
import { validators } from '../../../../helpers/validators';
import { IError, IResponse } from '../../../../interfaces/common';
import { updatePassword } from '../../../../services/AuthService';
import templateInsertPassword from './InsertPassword.template';
import { IUser, IErrors, ITouched } from './interfaces';

const InsertPassword = () => {
  const { token }: Readonly<Params<string>> = useParams();
  const navigate = useNavigate();

  const [user, setUser]: [IUser, React.Dispatch<React.SetStateAction<IUser>>] = useState({
    password: '',
    confirmPassword: '',
    tokenUser: token,
  });

  const [errors, setErrors]: [IErrors, React.Dispatch<React.SetStateAction<IErrors>>] =
    useState({
      password: {
        lengthMsg: validators.password(user.password),
        uppercaseMsg: validators.passwordUppercase(user.password),
        lowercaseMsg: validators.passwordLowercase(user.password),
      },
    });

  const [touched, setTouched]: [ITouched, React.Dispatch<React.SetStateAction<ITouched>>] =
    useState({});

  const onBlur = (event: React.FocusEvent<HTMLInputElement>): void => {
    const { name } = event.target;
    setTouched((prevTouched: {}) => ({
      ...prevTouched,
      [name]: true,
    }));
  };

  const onFocus = (event: React.FocusEvent<HTMLInputElement>): void => {
    const { name } = event.target;
    setTouched((prevTouched: {}) => ({
      ...prevTouched,
      [name]: false,
    }));
  };

  const [response, setResponse]: [string, React.Dispatch<React.SetStateAction<string>>] = useState('');
  const [show, setShow]: [boolean, React.Dispatch<React.SetStateAction<boolean>>] = useState<boolean>(false);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUser((prevState: IUser) => ({
      ...prevState,
      [name]: value,
    }));
    setErrors((prevState: IErrors) => ({
      ...prevState,
      password: {
        lengthMsg: validators.password(value),
        uppercaseMsg: validators.passwordUppercase(value),
        lowercaseMsg: validators.passwordLowercase(value),
      },
    }));
  };

  const isValid = (): boolean => {
    return errors.password.lengthMsg === '' &&
      errors.password.uppercaseMsg === '' &&
      errors.password.lowercaseMsg === '' &&
      user.password === user.confirmPassword
      ? true
      : false;
  };

  const onSubmit = (e: React.SyntheticEvent<HTMLFormElement>): void => {
    e.preventDefault();
    if (isValid()) {
      updatePassword([{ password: user.password }, { token: token }])
        .then((response: IResponse) => {
          setResponse(response.passwordChanged && 'Password is correctly changed')
          setTimeout(() => {
            navigate('/signin');
          }, 5000);
        })
        .catch((error: IError) => setResponse(`Something went wrong: ${error.data.errors.message}`))
      // setTimeout(()=> setShow(false), 5000)
      setShow(true);
    }
  };


  return templateInsertPassword({
    user,
    errors,
    touched,
    show,
    onBlur,
    onFocus,
    onChange,
    onSubmit,
    isValid,
    response
  });
};

export default InsertPassword;
