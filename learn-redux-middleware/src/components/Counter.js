import React from "react";

const Counter = ({ onIncrease, onDecrease, number }) => {
  return (
    <div>
      <h1>{number}</h1>
      <button onClick={onIncrease}>increase</button>
      <button onClick={onDecrease}>decrease</button>
    </div>
  );
};

export default Counter;
