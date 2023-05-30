/* eslint-disable react/prop-types */
import { TiArrowSortedDown, TiArrowSortedUp } from "react-icons/ti";
const TableHeader = ({ data, sortBy, onSorting, handleSavingDefaultData, children }) => (
  <div className="flex items-center space-x-1">
    <div className="flex flex-col">
      <TiArrowSortedUp
        className="cursor-pointer"
        onClick={() => onSorting(data, "desc", sortBy)}
      />
      <TiArrowSortedDown
        className="cursor-pointer"
        onClick={() => onSorting(data, "asc", sortBy)}
      />
    </div>
    <span
      className="text-blue-500 cursor-pointer"
      onClick={() => handleSavingDefaultData()}
    >
      {children}
    </span>
  </div>
);

export default TableHeader;
