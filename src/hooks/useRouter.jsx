import { useContext } from "react";
import NavigationContext from "../context/navigationContext";
const useRouter = () => useContext(NavigationContext);
export default useRouter;
