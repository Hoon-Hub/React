import React from "react";
import { useParams } from "react-router";
import WithRouterSample from "./WithRouterSample";

const data = {
  sanghoon: {
    name: "상훈",
    description: "React를 공부하는 개발자",
  },
  gildong: {
    name: "홍길동",
    description: "고전 소설의 주인공",
  },
};

const Profile = () => {
  const { username } = useParams();
  const profile = data[username];
  if (!profile) {
    return <div>존재하지 않는 사용자 입니다.</div>;
  }
  return (
    <div>
      <h3>
        사용자: {username} ({profile.name})
      </h3>
      <p>설명: {profile.description}</p>

      <WithRouterSample></WithRouterSample>
    </div>
  );
};

export default Profile;
