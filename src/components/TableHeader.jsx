/* eslint-disable react/prop-types */
import { GoArrowSmallUp, GoArrowSmallDown } from "react-icons/go";
const TableHeader = ({ children, sortOrder }) => (
  <div className="flex items-center space-x-1">
    <div className="flex flex-col  space-y-[-8px]">
      <GoArrowSmallUp
        className={`cursor-pointer ${sortOrder === "desc" && "hidden"} text-lg`}
      />
      <GoArrowSmallDown
        className={`cursor-pointer ${sortOrder === "asc" && "hidden" } text-lg`}
      />
    </div>
    <span className=" cursor-pointer">{children}</span>
  </div>
);

export default TableHeader;
