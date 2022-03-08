import React from "react";
import { useState } from "react";
import "./EventSystem.css";
export default function EventSystem() {
  const [message, setMessage] = useState("");
  const onClickEnter = () => setMessage("Hello React!");
  const onClickLeave = () => setMessage("Good Bye!");

  return (
    <div className="event">
      <h1>Event in React.js</h1>
      <div className="event__content">
        <button className="event_btn" onClick={onClickEnter}>
          Enter
        </button>
        <button className="event_btn" onClick={onClickLeave}>
          Leave
        </button>

        <br />
        <p>Message: '{message}'</p>
      </div>
    </div>
  );
}
