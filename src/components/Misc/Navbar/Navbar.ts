import { useLocation } from "react-router-dom";
import templateNavbar from "./Navbar.template";

const Navbar =({onBoarding}:any)=>{
  //Current url
  const {pathname} = useLocation();

  //Screen width
  const screenWidthMobile = window.screen.width < 1280

  return templateNavbar(pathname, screenWidthMobile, onBoarding);
}

export default Navbar;