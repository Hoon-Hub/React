import React from "react";
import { useNavigate } from "react-router";

const Navigate = () => {
  const navigate = useNavigate();
  const handleGoBack = () => {
    const res = window.confirm("Really?");
    if (res) navigate(-1);
    else return;
  };

  const handleGoHome = () => {
    navigate("/");
  };

  return (
    <div>
      <h3>use Navigate</h3>
      <div>
        <button type="button" onClick={handleGoBack}>
          Go Back
        </button>
        <button type="button" onClick={handleGoHome}>
          Home
        </button>
      </div>
    </div>
  );
};

export default Navigate;
