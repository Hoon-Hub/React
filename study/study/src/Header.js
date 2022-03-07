import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
export default function Header() {
  return (
    <div className="header">
      <Link className="header__link" to="/">
        Main
      </Link>
    </div>
  );
}
