import React, { useState } from "react";
import Header from "../Header";
export default function Event3() {
  const [form, setForm] = useState({
    username: "",
    message: "",
  });
  const { username, message } = form;
  const onChangeEvent = (e) => {
    const nextForm = {
      ...form,
      [e.target.name]: e.target.value,
    };
    setForm(nextForm);
  };

  const onClickEvent = () => {
    alert(`${username} : ${message}`);
    setForm({
      username: "",
      message: "",
    });
  };

  const onKeyPressEvent = (e) => {
    if (e.key === "Enter") {
      onClickEvent();
    }
  };
  return (
    <div>
      <Header />
      <h1>객체를 이용한 Form Control Event</h1>
      <div>
        <input
          type="text"
          name="username"
          placeholder="사용자명"
          value={username}
          onChange={onChangeEvent}
        />
        <input
          type="text"
          name="message"
          placeholder="메시지"
          value={message}
          onChange={onChangeEvent}
          onKeyPress={onKeyPressEvent}
        />
        <button type="button" onClick={onClickEvent}>
          확인
        </button>
      </div>
    </div>
  );
}
