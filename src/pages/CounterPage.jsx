import { useState } from "react";

const CounterPage = () => {
  const [count, setCount] = useState(0);
  console.log(count);
  return (
    <div>
      <h2> Count is {count}</h2>
      <button onClick={() => setCount(count + 1)}>increase</button>
    </div>
  );
};

export default CounterPage;
