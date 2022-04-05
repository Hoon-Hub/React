import React from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

const Edit = () => {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const id = searchParams.get("id");
  const who = searchParams.get("who");
  console.log(id);
  console.log(who);

  return (
    <div>
      <h2>Edit</h2>
      <button onClick={() => setSearchParams({ who: "sanghoon" })}>
        CLick
      </button>
      <button onClick={() => navigate("home")}>nav</button>
    </div>
  );
};

export default Edit;
