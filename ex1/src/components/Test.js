import React, { useState } from "react";

const Test = () => {
  const [number, setNumber] = useState(0);

  const Minus = () => {
    setNumber(number - 1);
  };

  const Plus = () => {
    setNumber(number + 1);
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

export default Test;
