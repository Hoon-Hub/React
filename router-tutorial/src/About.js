import React from "react";
import { useSearchParams } from "react-router-dom";

const About = ({ location }) => {
  console.log(location);
  const [query] = useSearchParams();
  const showDetail = query.get("detail") === "true";
  console.log(showDetail);

  return (
    <div>
      <h1>About</h1>
      <p>About page</p>
      Query String: {showDetail && <p>detail 값을 true로 설정하셨군요</p>}
    </div>
  );
};

export default About;
