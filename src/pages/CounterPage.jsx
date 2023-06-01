import { useReducer } from "react";
import Button from "../components/Button";
import { counterRreducer, types } from "../utility/counterRreducer";
import Pannel from "../components/Pannel";
import { produce } from "immer";
const initialCount = 0;
const CounterPage = () => {
  const [state, dispatch] = useReducer(produce(counterRreducer), {
    count: initialCount,
    amount: 0,
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: types.SET_COUNT_AND_RESET_AMOUNT });
  };
  const handleIncrement = () => dispatch({ type: types.INCREMENT });
  const handleDecrement = () => dispatch({ type: types.DECREMENT });
  const handleChange = (e) =>
    dispatch({
      type: types.CHANGE_AMOUNT,
      payload: { amount: parseInt(e.target.value) || 0 },
    });

  return (
    <Pannel>
      <h2>Current count: {state.count} </h2>
      <div className="flex space-x-2">
        <Button onClick={handleIncrement}>INCREMENT</Button>
        <Button onClick={handleDecrement}>DECREMENT</Button>
      </div>

      <p>Add a lot</p>
      <form action="" onSubmit={(e) => handleSubmit(e)}>
        <input
          type="number"
          className="border mb-2 p-2"
          value={state.amount || ""}
          onChange={handleChange}
        />
        <Button type="submit">Add it!</Button>
      </form>
    </Pannel>
  );
};

export default CounterPage;
