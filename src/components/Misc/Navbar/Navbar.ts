import { useLocation } from "react-router-dom";
import templateNavbar from "./Navbar.template";

const Navbar =()=>{
  //Current url
  const {pathname} = useLocation();

  //Screen width
  const screenWidthMobile = window.screen.width < 1280

  return templateNavbar(pathname, screenWidthMobile);
}

export default Navbar;