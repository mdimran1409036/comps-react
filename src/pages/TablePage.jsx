/* eslint-disable react/prop-types */

import Table from "../components/Table";
import SortableTable from "../components/SortableTable";
import Title from "../components/Title";

const data = [
  { name: "Orange", color: "bg-orange-500", price: 500 },
  { name: "Apple", color: "bg-red-500", price: 555 },
  { name: "Banana", color: "bg-yellow-500", price: 450 },
  { name: "Lime", color: "bg-green-500", price: 512 },
];

const TablePage = () => {
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
      render: (fruit) => fruit.price,
    },
    {
      label: "Discounted Price",
      render: (fruit) => fruit.price * 0.5,
      sortValue: fruit=> fruit.price * 0.5
    },
  ];

  //giving controll to the user who will use this table component to select the key
  const keyFn = (fruit) => {
    return fruit.name;
  };
  return (
    <div>
      <Title>Regular table</Title>
      <Table data={data} config={config} keyFn={keyFn} />
      <Title>Sortable Table</Title>
      <SortableTable data={data} config={config} keyFn={keyFn} />
    </div>
  );
};

export default TablePage;
