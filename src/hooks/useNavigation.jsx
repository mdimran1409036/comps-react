import { useContext } from "react";
import NavigationContext from "../context/navigationContext";
const useNavigation = () => useContext(NavigationContext);
export default useNavigation;
