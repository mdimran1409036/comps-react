import { useState } from "react";
import Dropdown from "../components/Dropdown";
const fruits = [
  { label: "orange", value: "orange" },
  { label: "mango", value: "mango" },
  { label: "jack fruit", value: "jack_fruit" },
  { label: "guava", value: "guava" },
];
const colors = [
  { label: "red", value: "red" },
  { label: "green", value: "green" },
  { label: "blue", value: "blue" },
  { label: "orange", value: "orange" },
];
const DropdownPage = () => {
  const [color, setColor] = useState(null);
  const [fruit, setFruit] = useState(null);
  const handleColor = (option) => {
    setColor(option);
  };

  const handleFruits = (option) => {
    setFruit(option);
  };

  return (
    <div>
      <Dropdown options={colors} onChange={handleColor} value={color} />
      <Dropdown options={fruits} onChange={handleFruits} value={fruit} />
    </div>
  );
};

export default DropdownPage;
