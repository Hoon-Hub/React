import React from "react";
import { useSelector } from "react-redux";

const Left3 = () => {
  const number = useSelector((state) => state.number); //출력하는 곳에서는 useSelector
  return (
    <>
      <h2>Counter Result</h2>
      <p>{number}</p>
    </>
  );
};

export default Left3;
