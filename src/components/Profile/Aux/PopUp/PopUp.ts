import templatePopUp from "./PopUp.template";

const PopUp =({showPopup, sendApproval, responseAPI, content}:any)=>{
  return templatePopUp(showPopup, sendApproval, responseAPI, content);
}

export default PopUp;