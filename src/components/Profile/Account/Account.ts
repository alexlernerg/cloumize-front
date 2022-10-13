import { useState, useEffect } from 'react';
import { useUser } from "../../../context/hook/useUser";
import templateAccount from "./Account.template";

const Account =()=>{
  const {currentUser} = useUser();
  const [view, setView] = useState(0);
  const changeView = (e:any) => {
    const {id} = e.target;
    setView(Number(id));
  }

  const [show, setShow] = useState(false);
  const openModal = () => {
    setShow(!show)
  }

  const [AWSfill, setAWSfill] = useState(false);
  useEffect(()=> {
    //TODO: Hacer llamada al back para hacer un setAWSfill y ver si se ha rellenado el formulario en AWS
  }, [])

  const [responseAPI, setResponseAPI] = useState('');
  const sendApproval = () => {
    //TODO: change AWSfill value to true in database. Use here setResponseAPI.
  }

  const contentPopUp = {
    title: 'Are you sure you have filled out the form in AWS to register as a seller?',
    button: ["Yes, I'm sure", "No, close pop-up"]
  }

  return templateAccount(currentUser, view, changeView, show, openModal, AWSfill, contentPopUp, sendApproval, responseAPI);
}

export default Account;