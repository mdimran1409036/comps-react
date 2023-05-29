import Table from "../components/Table";

const TablePage = () => {
  const data = [
    { name: "Orange", color: "bg-orange-500", score: 500 },
    { name: "Apple", color: "bg-red-500", score: 555 },
    { name: "Banana", color: "bg-yellow-500", score: 450 },
    { name: "Lime", color: "bg-green-500", score: 512 },
  ];
  const config = [
    { label: "Name", render: (fruit) => fruit.name },
    {
      label: "Color",
      render: (fruit) => <div className={`p-3 m-2 ${fruit.color}`}> </div>,
    },
    { label: "Price", render: (fruit) => fruit.score, sort: (a, b) => a - b },
    {
      label: "Discounted Price",
      render: (fruit) => fruit.score * 0.5,
      sort: (a, b) => a - b,
    },
  ];
  //   const vehicles=[
  //     { name: "car", price: 500, discountedPrice: 230, image: "image 1" },
  //     { name: "truck", price: 500, discountedPrice: 230, image: "image 2" },
  //     { name: "bus", price: 500, discountedPrice: 230, image: "image 3" },
  //     { name: "bike", price: 500, discountedPrice: 230, image: "image 4" },
  //     { name: "taxi", price: 500, discountedPrice: 230, image: "image 5" },
  //   ]

  //giving controll to the user who will use this table component to select the key
  const keyFn = (fruit) => {
    return fruit.name;
  };
  return (
    <div>
      <Table data={data} config={config} keyFn={keyFn} />
    </div>
  );
};

export default TablePage;
