import { IUser, ITouched } from './interface';
import { useState } from "react";
import { validators } from "../../../../helpers/validators";
import { passwordResetEmail } from "../../../../services/AuthService";
import templateForgotPassword from "./ForgotPassword.template";

const ForgotPassword =()=>{
  const [user, setUser]: [
   IUser,
    React.Dispatch<React.SetStateAction<IUser>>
  ] = useState({
    email: '',
    error_email: validators.email(''),
  });

  const [response, setResponse]:[
    string,
    React.Dispatch<React.SetStateAction<string>>
  ] = useState('');

  const [show, setShow]: [
    boolean,
    React.Dispatch<React.SetStateAction<boolean>>
  ] = useState(false);

  const onChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const {value} = event.target;
    setUser({
      email: value,
      error_email: validators.email && validators.email(value),
    });
  };

  const isValid = (): boolean => {
    if (user.error_email) {
      return false;
    }
    return true;
  };

  const onSubmit = (event: React.SyntheticEvent<HTMLFormElement>):void => {
    event.preventDefault();

    if (isValid()) {
      passwordResetEmail({email: user.email})
          .then(() => {
            setResponse('Check your email');
          })
          .catch((error: Error) => {
            setResponse(`Something went wrong: ${error.message}`);
          });
      setTimeout(()=> setShow(false), 5000)
      setShow(true);
    }
  };

  const [touched, setTouched]: [ITouched, React.Dispatch<React.SetStateAction<ITouched>>] =useState({});

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


  return templateForgotPassword({
    user,
    show,
    isValid,
    onChange,
    onSubmit,
    onBlur,
    onFocus,
    touched,
    response
});
}

export default ForgotPassword;