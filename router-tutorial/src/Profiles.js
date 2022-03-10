import React from "react";
import { Routes, Route, NavLink } from "react-router-dom";
import Profile from "./Profile";

const Profiles = () => {
  return (
    <div>
      <h3>사용자 목록</h3>
      <ul>
        <li>
          <NavLink to="profiles/sanghoon">Sanghoon</NavLink>
        </li>
        <li>
          <NavLink to="profiles/gildong">Gildong</NavLink>
        </li>
      </ul>
      <Routes>
        <Route path="/profiles" element={<div>사용자를 선택해주세요</div>} />
        <Route path="/profiles/:username" element={<Profile />} />
      </Routes>
    </div>
  );
};

export default Profiles;
