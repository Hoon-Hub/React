import React, { useContext } from "react";
import DiaryItem from "./DiaryItem.js";
import styled from "styled-components";
import { DiaryStateContext } from "./App.js";

const DiaryList = () => {
  const diaryLists = useContext(DiaryStateContext);

  return (
    <StyledDiaryList>
      <h2>일기리스트</h2>
      <h4>{diaryLists.length}개의 일기가 있습니다.</h4>
      <div>
        {diaryLists.map((it) => (
          <DiaryItem key={it.id} {...it} />
        ))}
      </div>
    </StyledDiaryList>
  );
};

export default DiaryList;

const StyledDiaryList = styled.div`
  border: 1px solid gray;
  padding: 20px;
  margin-top: 20px;
`;
