import useRouter from "../hooks/useRouter";
import PropTypes from "prop-types";
const Route = ({ path, children }) => {
  const { currentPath } = useRouter();
  if (currentPath === path) {
    return children;
  }
  return null
};

export default Route;

Route.propTypes = {
  path: PropTypes.string.isRequired,
  children: PropTypes.any,
};
