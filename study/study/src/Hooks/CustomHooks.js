import React from "react";
import Header from "../Header";
import useInputs from "./useInputs";

export default function CustomHooks() {
  const [state, onChange] = useInputs({
    name: "",
    nickname: "",
  });

  const { name, nickname } = state;

  return (
    <div>
      <Header></Header>
      <h1>Custom Hooks!</h1>
    </div>
  );
}
