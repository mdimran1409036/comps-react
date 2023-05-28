import { useEffect, useState } from "react";
import NavigationContext from "../context/navigationContext";
import { PropTypes } from "prop-types";
const NavigationProvider = ({ children }) => {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);
  useEffect(() => {
    //handle back and forward button
    const handlePopState = () => {
      setCurrentPath(window.location.pathname);
    };
    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  const navigate = (to) => {
    window.history.pushState({}, "", to);
    setCurrentPath(to);
  };

  const valueToShare = { currentPath, navigate };
  return (
    <NavigationContext.Provider value={valueToShare}>
      {children}
    </NavigationContext.Provider>
  );
};

export default NavigationProvider;
NavigationProvider.propTypes = {
  children: PropTypes.any,
};
