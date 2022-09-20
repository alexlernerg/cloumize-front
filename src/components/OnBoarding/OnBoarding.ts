import { useState } from 'react';
import templateOnBoarding from './OnBoarding.template';

const OnBoarding = ({closePopup}:any) => {
//Screen width
  const screenWidthMobile = window.screen.width < 500

  const [page, setPage] = useState(0);
  const next = () => {
    setPage(page + 1)
  }
  const back = () => {
    setPage(page - 1)
  }
  return templateOnBoarding(page, next, back, screenWidthMobile, closePopup);
};

export default OnBoarding;
