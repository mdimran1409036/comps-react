/* eslint-disable react/prop-types */

import useSort from "../hooks/useSort";
import Table from "./Table";
import TableHeader from "./TableHeader";

const SortableTable = (props) => {
  const { config, data } = props;
  const { handleClick, sortOrder, sortedData } = useSort(config, data);

  // updating config file
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
            <TableHeader sortOrder={sortOrder}>{column.label}</TableHeader>
          </th>
        ),
      };
    }
  });

  return (
    <div>
      <Table {...props} config={updatedConfig} data={sortedData} />;
    </div>
  );
};

export default SortableTable;
