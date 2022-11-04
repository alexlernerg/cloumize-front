import { useLocation } from "react-router-dom";
import { useUser } from "../../../context/hook/useUser";
import templateNavbar from "./Navbar.template";

const Navbar = ({ onBoarding }: { onBoarding: boolean})=>{
  //Current url
  const {pathname} = useLocation();

  const {currentUser} = useUser();

  //Screen width
  const screenWidthMobile = window.screen.width < 1280

  return templateNavbar({pathname, screenWidthMobile, onBoarding, currentUser});
}

export default Navbar;