import templatePopUp from './PopUp.template';

export interface IContentPopUp {
  title: string;
  button: string[];
}

const PopUp = ({
  showPopup,
  sendApproval,
  responseAPI,
  content,
}: {
  showPopup:() => void;
  sendApproval:() => void;
  responseAPI: string;
  content: IContentPopUp;
}) => {
  return templatePopUp(showPopup, sendApproval, responseAPI, content);
};

export default PopUp;
