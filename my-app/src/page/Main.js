import React from "react";
import Header from "../components/common/Header";
import MainContent from "../components/MainContent";
import "./Main.css";
const Main = () => {
  return (
    <main className="main">
      <Header></Header>
      <MainContent></MainContent>
      <MainContent></MainContent>
      <MainContent></MainContent>
      <MainContent></MainContent>
    </main>
  );
};

export default Main;
