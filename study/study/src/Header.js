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
      <Link className="header__link" to="/event3">
        Event3
      </Link>
      <p className="linkdivider">|</p>
      <Link className="header__link" to="/ref1">
        Ref
      </Link>
      <Link className="header__link" to="/ref2">
        Ref2
      </Link>
      <p className="linkdivider">|</p>
      <Link className="header__link" to="/reducer">
        Reducer
      </Link>
      <Link className="header__link" to="/reducer2">
        Reducer2
      </Link>
      <Link className="header__link" to="/memo">
        Memo
      </Link>
      <Link className="header__link" to="/refs">
        Refs
      </Link>
      <Link className="header__link" to="/CustomHooks">
        CustomHooks
      </Link>
    </div>
  );
}
