import React from "react";
import { Link, Routes, Route } from "react-router-dom";
import Profile from "./Profile";

const Profiles = () => {
  return (
    <div>
      <h3>사용자 목록</h3>
      <ul>
        <li>
          <Link to="profiles/sanghoon">Sanghoon</Link>
        </li>
        <li>
          <Link to="profiles/gildong">Gildong</Link>
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
