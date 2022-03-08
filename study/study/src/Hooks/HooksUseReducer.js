import React, { useReducer } from "react";
import Header from "../Header";

function reducer(state, action) {
  switch (action.type) {
    case "INCREMENT":
      return { value: state.value + 1 };
    case "DECREMENT":
      return { value: state.value - 1 };
    default:
      return state;
  }
}

export default function HooksUseReducer() {
  const [state, dispatch] = useReducer(reducer, { value: 0 });

  return (
    <div>
      <Header />
      <h1>Reducer 사용하기</h1>
      <p>
        현재 카운터의 값은 <b>{state.value}</b>
      </p>
      <button onClick={() => dispatch({ type: "INCREMENT" })}>INCREMENT</button>
      <button onClick={() => dispatch({ type: "DECREMENT" })}>DECREMENT</button>
    </div>
  );
}
