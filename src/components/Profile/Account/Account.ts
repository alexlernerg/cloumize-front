import { useState, useEffect } from 'react';
import { useUser } from "../../../context/hook/useUser";
import {loadStripe} from '@stripe/stripe-js';
import { getPaymentMethod, subscribe } from '../../../services/PaymentService';
import templateAccount from "./Account.template";

const Account =()=>{
  const stripePromise = loadStripe('pk_test_51LSlY8GDFiXM20ocQPScB7UOHwxTjEuwJIQehEMO527ssoaGaTZyvOrQ7vkJgITkwuQrELMaZtCcJjuBtCbZAeAe00xV0b5bxv');

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

  const [card, setCard] = useState({
    month: '',
    year: '',
    last4: ''
  })
  const [AWSfill, setAWSfill] = useState(false);
  useEffect (()=> {
    getPaymentMethod()
    .then((response)=> setCard({month: response.exp_month, year: response.exp_year, last4: response.last4}))
    .catch((error)=> console.log("error", error))
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

  const onClick = () => {
    subscribe()
    .then((response)=> console.log(response))
    .catch((error)=> console.log("error", error))
  }

  const props = {
    currentUser, view, changeView, show, openModal, AWSfill, contentPopUp, sendApproval, responseAPI, stripePromise, onClick, card
  }

  return templateAccount(props);
}

export default Account;