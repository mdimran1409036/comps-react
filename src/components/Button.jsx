import PropTypes from "prop-types";
import classNames from "classnames";
const Button = ({
  primary,
  secondary,
  success,
  warning,
  danger,
  outline,
  rounded,
  children,
  ...rest
}) => {
  const classes = classNames(
    rest.className,
    "flex justify-center items-center space-x-2 px-3 py-1.5 border ",
    {
      "bg-blue-500  border-blue-500": primary,
      "bg-gray-900  border-gray-900": secondary,
      "bg-green-500  border-green-500": success,
      "bg-yellow-500  border-yellow-500": warning,
      "bg-red-500  border-red-500": danger,
      "rounded-full": rounded,
      "bg-white ": outline,
      "text-white":
        !outline && (primary || secondary || success || warning || danger),
      "text-blue-500 hover:bg-blue-500 hover:text-white": outline && primary,
      "text-gray-500": outline && secondary,
      "text-green-500": outline && success,
      "text-yellow-500": outline && warning,
      "text-red-500": outline && danger,
    }
  );
  return (
    <button {...rest} className={classes}>
      {children}
    </button>
  );
};

export default Button;

Button.propTypes = {
  primary: PropTypes.bool,
  secondary: PropTypes.bool,
  success: PropTypes.bool,
  warning: PropTypes.bool,
  danger: PropTypes.bool,
  rounded: PropTypes.bool,
  outline: PropTypes.bool,
  children: PropTypes.any,
  checkVariationValue: ({ primary, secondary, success, warning, danger }) => {
    /*
     * only primary or secondary or success or warning or danger prop is allowed
     * all these props either return true(if given) or undefined(if not given)
     * Number(true) returns 1, same way Number(false) return 0
     * Number(!!undefined) returns 0
     * Now just check the conditions if there sum is greater than 1, if true return an error
     */
    const count =
      Number(!!primary) +
      Number(!!secondary) +
      Number(!!success) +
      Number(!!warning) +
      Number(!!danger);
    if (count > 1) {
      return new Error(
        "only one of primary, secondary, success, warning and danger can be true"
      );
    }
  },
};
