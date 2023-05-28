import { GoChevronDown, GoChevronLeft } from "react-icons/go";
import PropTypes from "prop-types";
const AccordionPannel = ({ item, isExpanded, handleClickOnAccordionPannel }) => {
  return (
    <div
      key={item.id}
      className=" border-black border mx-auto p-3 bg-green-100 "
    >
      <div
        className="flex justify-between bg-gray-50 p-2 border-b cursor-pointer rounded-t-md"
        onClick={() => handleClickOnAccordionPannel(item.id)}
      >
        <p>{item.title}</p>
        <span className="text-xl">{isExpanded ? <GoChevronDown /> : <GoChevronLeft />}</span>
      </div>
      {isExpanded && (
        <p className="block bg-gray-200 p-2 rounded-b-md">{item.body}</p>
      )}
    </div>
  );
};

export default AccordionPannel;

AccordionPannel.propTypes = {
  item: PropTypes.object.isRequired,
  isExpanded: PropTypes.bool,
  handleClickOnAccordionPannel: PropTypes.func,
};
