import React from "react";
import { useLocation, useNavigate, useParams } from "react-router";

const WithRouterSample = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const params = useParams();

  const onClick = () => {
    navigate("/");
  };
  return (
    <div>
      <h4>Location</h4>
      <textarea
        value={JSON.stringify(location, null, 2)}
        readOnly
        rows={7}
      ></textarea>

      <h4>match</h4>
      <textarea
        value={JSON.stringify(params, null, 2)}
        rows={7}
        readOnly
      ></textarea>

      <button type="button" onClick={onClick}>
        홈으로
      </button>
    </div>
  );
};

export default WithRouterSample;
