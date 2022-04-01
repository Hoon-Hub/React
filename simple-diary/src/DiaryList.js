import React from "react";
import DiaryItem from "./DiaryItem.js";
import styled from "styled-components";

const DiaryList = ({ diaryList = [], onRemove, onEdit }) => {
  const diaryLists = diaryList.map((it) => {
    return (
      <DiaryItem key={it.id} {...it} onRemove={onRemove} onEdit={onEdit} />
    );
  });

  return (
    <StyledDiaryList>
      <h2>일기리스트</h2>
      <h4>{diaryList.length}개의 일기가 있습니다.</h4>
      <div>{diaryLists}</div>
    </StyledDiaryList>
  );
};

export default DiaryList;

const StyledDiaryList = styled.div`
  border: 1px solid gray;
  padding: 20px;
  margin-top: 20px;
`;
