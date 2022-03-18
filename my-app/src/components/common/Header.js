import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Header.css";

const Header = () => {
  const navigate = useNavigate();

  const logout = () => {
    navigate("/login");
  };

  useEffect(() => {
    const data = window.localStorage.getItem("userData");
    const userData = JSON.parse(data);
    if (!userData) navigate("/login");
  });

  return (
    <div className="header">
      <div className="header-main">
        <Link className="header-main-title header-item-title" to="/">
          Main
        </Link>
      </div>
      <div className="header-item">
        <Link className="header-item-title" to="/list">
          List
        </Link>
        <Link className="header-item-title" to="/write">
          Write
        </Link>
      </div>
      <div className="header-user">
        <Link className="header-item-title header-status-btn" to="/status">
          Status
        </Link>
        <button className="logout-btn header-item-title" onClick={logout}>
          Logout
        </button>
      </div>
    </div>
  );
};

export default Header;
