import React, { useState } from "react";
import Header from "./Header";

export default function Event2() {
  const [username, setUsername] = useState(() => {
    return "";
  });
  const [message, setMessage] = useState("");
  const onChangeUsername = (e) => {
    setUsername(e.target.value);
    console.log(username);
  };
  const onChangeMessage = (e) => {
    setMessage(e.target.value);
    console.log(message);
  };

  const checkUserInfo = () => {
    console.log(message, username);
  };
  return (
    <div className="event2">
      <Header />
      <h1>Input Event in React.js</h1>
      <div className="event2__content">
        <input
          type="text"
          name="username"
          placeholder="사용자명"
          value={username}
          onChange={onChangeUsername}
        />
        <input
          type="text"
          name="message"
          placeholder="메시지"
          value={message}
          onChange={onChangeMessage}
        />
        <button type="button" onClick={checkUserInfo}>
          check
        </button>
      </div>
      <div>
        <p>사용자이름: {username}</p>
        <p>전송한 메시지: {message}</p>
      </div>
    </div>
  );
}
