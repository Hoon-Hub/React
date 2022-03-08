import React, { useReducer } from "react";
import Header from "../Header";
function reducer(state, action) {
  return {
    ...state,
    [action.name]: action.value,
  };
}

export default function HooksUseReducer2() {
  const [state, dispatch] = useReducer(reducer, {
    name: "",
    nickname: "",
  });

  const { name, nickname } = state;
  const onChange = (e) => {
    dispatch(e.target);
  };

  return (
    <div>
      <Header></Header>
      <h1>여러개의 input 값을 조종하기</h1>
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
          이름 : <b>{name}</b>
        </p>
        <p>
          닉네임 : <b>{nickname}</b>
        </p>
      </div>
    </div>
  );
}
