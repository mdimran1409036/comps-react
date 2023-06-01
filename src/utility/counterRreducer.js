const types = {
  INCREMENT: "increment",
  DECREMENT: "decrement",
  SET_COUNT_AND_RESET_AMOUNT: "set-count-and-reset-amount",
  CHANGE_AMOUNT: "change-amount",
};

//using immer so direct state mutation is no problem
const counterRreducer = (state, { type, payload }) => {
  switch (type) {
    case types.INCREMENT:
      state.count = state.count + 1;
      return;
    case types.DECREMENT:
      state.count = state.count + 1;
      return;
    case types.SET_COUNT_AND_RESET_AMOUNT: {
      state.count = state.count + state.amount;
      state.amount = 0;
      return;
    }
    case types.CHANGE_AMOUNT: {
      state.amount = payload.amount;
      return;
    }
    default:
      return;
  }
};

export { types, counterRreducer };
