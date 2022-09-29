import templatePopUp from "./PopUp.template";

const PopUp =({showPopup, sendApproval, responseAPI}:any)=>{
  return templatePopUp(showPopup, sendApproval, responseAPI);
}

export default PopUp;