import { useState } from "react";
import { validators } from "../../../../helpers/validators";
import { passwordResetEmail } from "../../../../services/AuthService";
import templateForgotPassword from "./ForgotPassword.template";

const ForgotPassword =()=>{
  const [user, setUser]: [
    { email: string; error_email: string },
    React.Dispatch<React.SetStateAction<{ email: string; error_email: string }>>
  ] = useState({
    email: '',
    error_email: validators.email(),
  });

  const [response, setResponse] = useState('');

  const [show, setShow]: [
    boolean,
    React.Dispatch<React.SetStateAction<boolean>>
  ] = useState(false);

  const onChange = (event: React.ChangeEvent<HTMLInputElement>):void => {
    const {value} = event.target;
    setUser({
      email: value,
      error_email: validators.email && validators.email(value),
    });
  };
  console.log("user", user)
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
          .then((res: any) => {
            setResponse('Check your email');
          })
          .catch((error: any) => {
            setResponse(`Something went wrong: ${error.message}`);
          });
      setTimeout(()=> setShow(false), 5000)
      setShow(true);
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

  const props = {
    user,
    show,
    isValid,
    onChange,
    onSubmit,
    touched,
    onBlur,
    onFocus,
    response
  };
  return templateForgotPassword(props);
}

export default ForgotPassword;