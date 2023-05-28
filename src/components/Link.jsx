import PropTypes from "prop-types";
import useRouter from "../hooks/useRouter";

const Link = ({ to, children }) => {
  const { navigate } = useRouter();
  const handleClick = (e) => {
    console.log(e);
    if (e.metaKey || e.ctrlKey) {
      return;
    }
    e.preventDefault();
    navigate(to.toLowerCase());
  };
  return (
    <a onClick={handleClick} href={to}>
      {children}
    </a>
  );
};

export default Link;

Link.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.any,
};
