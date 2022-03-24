import React, { useRef, useState } from "react";

const AddState = ({ onClickEvent, stateId }) => {
  const userName = useRef();
  const [name, setName] = useState("");

  const onClickhandler = () => {
    onClickEvent(stateId + 1, name);
    setName("");
  };

  const onChangeHandler = (e) => {
    setName(e.target.value);
  };

  const onReset = () => {
    setName("");
    userName.current.focus();
  };

  return (
    <>
      <input
        type="text"
        value={name}
        onChange={onChangeHandler}
        placeholder="이름을 입력하세요"
        ref={userName}
      />
      <button onClick={onClickhandler}>Add</button>
      <button onClick={onReset}>reset</button>
    </>
  );
};

export default AddState;
