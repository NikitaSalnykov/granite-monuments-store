import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // можно убрать "smooth", если хочешь мгновенно
    });
    console.log(location);
  }, [location]);

  return null;
};

export default ScrollToTop;