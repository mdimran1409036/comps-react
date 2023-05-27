import { useState } from "react";
import { GoChevronDown } from "react-icons/go";
import PropTypes from "prop-types";

const Dropdown = ({ options, value, onChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const handleOptionClick = (option) => {
    onChange(option);
    setIsOpen(false);
  };
  const renderedOptions = options.map((option) => (
    <p
      className="cursor-pointer hover:bg-slate-200 px-2"
      onClick={() => handleOptionClick(option)}
      key={option.value}
    >
      {option.label}
    </p>
  ));

  return (
    <div className="w-1/2 mx-auto  border-gray-500 border">
      <div
        className="border p-2 bg-gray-300 flex justify-between cursor-pointer"
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <p>{ value?.label || 'Select ...'}</p>
        <GoChevronDown />
      </div>
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
