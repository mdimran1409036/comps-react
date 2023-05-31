import { useState } from "react";
import { getSortedArray } from "../utility/sorting";

const useSort = (config,data) => {
  const [sortOrder, setSortOrder] = useState(null);
  const [sortBy, setSortBy] = useState(null);
  // handling clicking on header for sorting
  const handleClick = (label) => {
    //resetting sort order when clicking on new column
    if (sortBy && label !== sortBy) {
      setSortOrder("asc");
      setSortBy(label);
      return;
    }

    //clicking same column again and again
    if (sortOrder === null) {
      setSortOrder("asc");
      setSortBy(label);
    } else if (sortOrder === "asc") {
      setSortOrder("desc");
      setSortBy(label);
    } else if (sortOrder === "desc") {
      setSortOrder(null);
      setSortBy(null);
    }
  };
  let sortedData = data;
  if (sortOrder && sortBy) {
    const { sortValue: getValue } = config.find(
      (column) => column.label === sortBy
    );
    sortedData = getSortedArray([...data], sortOrder, getValue);
  }

  return { handleClick, sortOrder, sortedData };
};

export default useSort;
