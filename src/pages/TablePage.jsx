/* eslint-disable react/prop-types */
import { useState } from "react";
import Table from "../components/Table";
import { getSortedArray } from "../utility/sorting";
import TableHeader from "../components/TableHeader";
import SortableTable from "../components/SortableTable";

const dataInit = [
  { name: "Orange", color: "bg-orange-500", price: 500 },
  { name: "Apple", color: "bg-red-500", price: 555 },
  { name: "Banana", color: "bg-yellow-500", price: 450 },
  { name: "Lime", color: "bg-green-500", price: 512 },
];

const TablePage = () => {
  const [data, setData] = useState(dataInit);
  /* const handleSorting = (data, order, sortBy) => {
    setData([...getSortedArray(data, order, sortBy)]);
  };
  const handleSavingDefaultData = () => {
    setData([...dataInit]);
  }; */
  const config = [
    {
      label: "Name",
      sortValue: (fruit) => fruit.name,
      render: (fruit) => fruit.name,
    },
    {
      label: "Color",
      render: (fruit) => <div className={`p-3 m-2 ${fruit.color}`}> </div>,
    },
    {
      label: "Price",
      sortValue: (fruit) => fruit.price,
      /* header: () => (
        <th>
          {<TableHeader
            data={data}
            sortBy="price"
            onSorting={handleSorting}
            handleSavingDefaultData={handleSavingDefaultData}
          >
            Price
          </TableHeader>}
        </th>
      ), */
      render: (fruit) => fruit.price,
    },
    {
      label: "Discounted Price",
      render: (fruit) => fruit.price * 0.5,
    },
  ];

  //giving controll to the user who will use this table component to select the key
  const keyFn = (fruit) => {
    return fruit.name;
  };
  return (
    <div>
      <Table data={data} config={config} keyFn={keyFn} />
      <SortableTable data={data} config={config} keyFn={keyFn} />
    </div>
  );
};

export default TablePage;
