import React from "react";

const LoadingImage = () => {
  return (
    <div>
      <img src={require("./assets/Spinner.gif")} alt="Spinner" />
    </div>
  );
};

export default LoadingImage;
