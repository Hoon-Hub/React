import React from "react";
import { useDispatch } from "react-redux";

const Right3 = () => {
  // 값을 변경하거나 이벤트를 호출할 곳에서는 dispatch
  const dispatch = useDispatch();
  return (
    <>
      <button type="button" onClick={() => dispatch({ type: "INCREASE" })}>
        Add
      </button>
    </>
  );
};

export default Right3;
