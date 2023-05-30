/* eslint-disable react/prop-types */
import { useState } from "react";
import Table from "./Table";

const SortableTable = (props) => {
  const [sortOrder, setSortOrder] = useState(null);
  const [sortBy, setSortBy] = useState(null);
  const { config, data } = props;
  const handleClick = (label) => {
    setSortOrder((prev) => {
      if (prev === null) {
        return "asc";
      } else if (prev === "asc") {
        return "desc";
      } else if (prev === "desc") {
        return null;
      }
    });
    setSortBy(label);
  };
  const updatedConfig = config.map((column) => {
    if (!column.sortValue) {
      return column;
    } else {
      return {
        ...column,
        header: () => (
          <th
            onClick={() => handleClick(column.label)}
            className="cursor-pointer"
          >
            {column.label}
          </th>
        ),
      };
    }
  });
  let sortedData = data;
  if (sortOrder && sortBy) {
    const { sortValue } = config.find((column) => column.label === sortBy);
    sortedData = [...data].sort((a, b) => {
      const valueA = sortValue(a);
      const valueB = sortValue(b);
      const reverseOrder = sortOrder === "asc" ? 1 : -1;
      if (typeof valueA === "string") {
        return valueA.localeCompare(valueB) * reverseOrder;
      }
      // dy default a number sort
      return (valueA - valueB) * reverseOrder;
    });
  }
  return (
    <div>
      <Table {...props} config={updatedConfig} data={sortedData} />;
    </div>
  );
};

export default SortableTable;
