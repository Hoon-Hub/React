import React from "react";
import { useState, useEffect } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [show, handleShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) handleShow(true);
      else handleShow(false);
    });
    return () => {
      window.removeEventListener("scroll", () => {
        return;
      });
    };
  });

  return (
    <div className={`nav ${show && "nav__black"}`}>
      <img
        className="nav__logo"
        src="https://upload.wikimedia.org/wikipedia/commons/6/67/NewNetflixLogo.png"
        alt="NETFLIX"
      />
      <img
        className="nav__avatar"
        src="https://ih0.redbubble.net/image.618427277.3222/flat,1000x1000,075,f.u2.jpg"
        alt="PROFILE"
      />
    </div>
  );
};

export default Navbar;
