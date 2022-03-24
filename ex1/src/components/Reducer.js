import React, { useReducer } from "react";
import { reducer } from "../reducer";

const initialState = 0;

const Reducer = () => {
  const [number, dispatch] = useReducer(reducer, initialState);

  const Minus = () => {
    dispatch({ type: "DECREASE" });
  };

  const Plus = () => {
    dispatch({ type: "INCREASE" });
  };

  return (
    <div>
      <h1>Test.js - 숫자 증감</h1>
      <div>
        <button onClick={Minus}>minus</button> &nbsp;
        <span>{number}</span> &nbsp;
        <button onClick={Plus}>plus</button>
      </div>
    </div>
  );
};

export default Reducer;
