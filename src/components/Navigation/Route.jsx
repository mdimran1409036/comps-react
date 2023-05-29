import useNavigation from "../../hooks/useNavigation";
import PropTypes from "prop-types";
const Route = ({ path, children }) => {
  const { currentPath } = useNavigation();
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
