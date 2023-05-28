import { useEffect, useRef, useState } from "react";
import { GoChevronDown } from "react-icons/go";
import PropTypes from "prop-types";
import Pannel from "./Pannel";

const Dropdown = ({ options, value, onChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdown = useRef();
  useEffect(() => {
    const handleClick = (event) => {
      // if referenced node is not present for some cases
      if (!dropdown.current) {
        return;
      }
      if (!dropdown.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("click", handleClick, true);
    return () => document.removeEventListener("click", handleClick);
  }, []);
  // selecting the option and closing the dropdown
  const handleOptionClick = (option) => {
    onChange(option);
    setIsOpen(false);
  };
  const renderedOptions = options.map((option) => (
    <Pannel
      className="hover:bg-slate-300 px-2"
      onClick={() => handleOptionClick(option)}
      key={option.value}
    >
      {option.label}
    </Pannel>
  ));

  return (
    <div className="border-gray-500 border" ref={dropdown}>
      <Pannel
        className="flex justify-between "
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <p>{value?.label || "Select ..."}</p>
        <GoChevronDown />
      </Pannel>
      {isOpen && <div>{renderedOptions}</div>}
    </div>
  );
};

export default Dropdown;

Dropdown.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired,
    })
  ).isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.shape({
    label: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
  }),
};
