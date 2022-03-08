import React from "react";
import Header from "../Header";
import useInputs from "./UseInputs";

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
      <div>
        <input type="text" name="name" value={name} onChange={onChange} />
        <input
          type="text"
          name="nickname"
          value={nickname}
          onChange={onChange}
        />
      </div>
      <div>
        <p>
          이름: <b>{name}</b>
        </p>
        <p>
          닉네임: <b>{nickname}</b>
        </p>
      </div>
    </div>
  );
}
