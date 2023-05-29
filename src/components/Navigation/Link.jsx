import PropTypes from "prop-types";
import useNavigation from "../../hooks/useNavigation";
import classNames from "classnames";


const Link = ({ to, children, className, active}) => {
  const { currentPath, navigate } = useNavigation();
 
  const activeClassName = "pl-2 border-l-4 border-blue-500 font-bold";
  const classes = classNames(
    "text-blue-500 cursor-pointer",
    className,
    currentPath === to && active && activeClassName
  );
  const handleClick = (e) => {
    if (e.metaKey || e.ctrlKey) {
      return;
    }
    e.preventDefault();
    navigate(to.toLowerCase());
  };
  return (
    <a onClick={handleClick} href={to} className={classes}>
      {children}
    </a>
  );
};

export default Link;

Link.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.any,
  className: PropTypes.string,
  active: PropTypes.bool,
};
