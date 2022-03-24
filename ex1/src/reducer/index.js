export const reducer = function reducer(state, action) {
  switch (action.type) {
    case "INCREASE":
      return state + 1;

    case "DECREASE":
      return state - 1;

    default:
      return state;
  }
};

export const reducerState = function reducerState(state, action) {
  switch (action.type) {
    case "INSERTSTATE":
      return [...state, { id: action.id, name: action.name }];
    case "REMOVESTATE":
      return state.filter((item) => item.id !== parseInt(action.id));
    default:
      return state;
  }
};
