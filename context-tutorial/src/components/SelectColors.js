import React from "react";

const colors = ["red", "orange", "yello", "green", "blue", "indigo", "violet"];

const SelectColors = () => {
  return (
    <div>
      <h2>색상 선택</h2>
      <div style={{ display: "flex" }}>
        {colors.map((color) => (
          <div
            key={color}
            style={{
              background: color,
              width: "24px",
              height: "24px",
              cursor: "pointer",
            }}
          ></div>
        ))}
      </div>
      <hr />
    </div>
  );
};

export default SelectColors;
