import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { validators } from '../../../../helpers/validators';
import { updatePassword } from '../../../../services/AuthService';
import templateInsertPassword from './InsertPassword.template';

const InsertPassword = () => {
  const { token }: any = useParams();
  const navigate = useNavigate();

  const [user, setUser] = useState({
    password: '',
    confirmPassword: '',
    tokenUser: token,
  });

  const [errors, setErrors]: [any, React.Dispatch<React.SetStateAction<any>>] =
    useState({
      password: {
        lengthMsg: validators.password(user.password),
        uppercaseMsg: validators.passwordUppercase(user.password),
        lowercaseMsg: validators.passwordLowercase(user.password),
      },
    });

  const [touched, setTouched]: [{}, React.Dispatch<React.SetStateAction<{}>>] =
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

  const [response, setResponse] = useState('');
  const [show, setShow] = useState<boolean>(false);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUser((prevState: any) => ({
      ...prevState,
      [name]: value,
    }));
    setErrors((prevState: any) => ({
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
      updatePassword([{password: user.password},{token: token}])
      .then((response:any) => {
        setResponse(response.passwordChanged && 'Password is correctly changed')
        setTimeout(() => {
          navigate('/signin');
        }, 5000);
      })
      .catch ((error:any)=> setResponse(`Something went wrong: ${error.data.errors.message}`))
      // setTimeout(()=> setShow(false), 5000)
      setShow(true);
    }
  };

  const props = {
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
  };
  return templateInsertPassword(props);
};

export default InsertPassword;
