// 기본값 처리
const initialState = {
  number: 1,
};

// reducer
function Reducer1(state = initialState, action) {
  const newState = { ...state };
  if (action.type === "INCREASE") {
    newState.number++;
  }

  return newState;
}

export default Reducer1;
