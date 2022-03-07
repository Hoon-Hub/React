import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
export default function Header() {
  return (
    <div className="header">
      <Link className="header__link" to="/">
        Event
      </Link>
      <Link className="header__link" to="/event2">
        Event2
      </Link>
    </div>
  );
}
