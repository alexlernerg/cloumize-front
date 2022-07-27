import { useLocation } from "react-router-dom";
import templateNavbar from "./Navbar.template";

const Navbar =()=>{
  //Current url
  const {pathname} = useLocation();

  return templateNavbar(pathname);
}

export default Navbar;