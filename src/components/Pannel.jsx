import classNames from "classnames";
import PropTypes from "prop-types";

const Pannel = ({ className, children, ...rest }) => {
  const classes = classNames(
    "border rounded p-3 shadow bg-white w-full cursor-pointer",
    className
  );
  return <div {...rest} className={classes}>{children}</div>;
};

export default Pannel;

Pannel.propTypes = {
  className: PropTypes.string,
  children: PropTypes.any,
  rest: PropTypes.any,
};
