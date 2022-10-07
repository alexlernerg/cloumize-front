import { useState } from "react";
import { useUser } from "../../../context/hook/useUser";
import templateAccount from "./Account.template";

const Account =()=>{
  const {currentUser} = useUser();
  const [view, setView] = useState(0);
  const changeView = (e:any) => {
    const {id} = e.target;
    setView(Number(id));
  }
  console.log("view", view)
  return templateAccount(currentUser, view, changeView);
}

export default Account;