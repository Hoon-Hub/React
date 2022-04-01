import React, { useRef, useState } from "react";
import styled from "styled-components";

const DirayItem = ({
  author,
  content,
  created_date,
  emotion,
  id,
  onRemove,
  onEdit,
}) => {
  const [isEdit, setIsEdit] = useState(false);
  const toggleIsEdit = () => setIsEdit(!isEdit);

  const [localContent, setLocalContent] = useState(content);
  const localContentInput = useRef();

  const handleRemove = (e) => {
    e.preventDefault();
    if (window.confirm(`${id + 1}번째 일기를 삭제하시겠습니까?`)) {
      onRemove(id);
    }
  };

  const handleQuitEdit = () => {
    setIsEdit(false);
    setLocalContent(content);
  };

  const handleContentEdit = () => {
    if (localContent.length < 5) {
      localContentInput.current.focus();
      return;
    }

    if (window.confirm("수정하시겠습니까?")) {
      setIsEdit(false);
      onEdit(id, localContent);
    }
  };

  return (
    <StyledItem>
      <div className="info">
        <span>
          작성자: {author} | 감정점수 : {emotion}{" "}
        </span>
        <br />
        <span className="date">
          작성일자 : {new Date(created_date).toLocaleString()}
        </span>
      </div>
      <div className="content">
        {isEdit ? (
          <>
            <textarea
              ref={localContentInput}
              value={localContent}
              onChange={(e) => setLocalContent(e.target.value)}
              cols="30"
              rows="10"
            />
          </>
        ) : (
          <>{content}</>
        )}
      </div>
      {isEdit ? (
        <>
          <button type="button" onClick={handleContentEdit}>
            수정완료
          </button>
          <button type="button" onClick={handleQuitEdit}>
            취소
          </button>
        </>
      ) : (
        <>
          <button type="button" onClick={handleRemove}>
            삭제
          </button>
          <button type="button" onClick={toggleIsEdit}>
            수정
          </button>
        </>
      )}
    </StyledItem>
  );
};

const StyledItem = styled.div`
  background: rgb(240, 240, 240);
  margin-bottom: 10px;
  padding: 20px;

  & .info {
    border-bottom: 1px solid gray;
    padding-bottom: 10px;
    margin-bottom: 10px;
    font-size: 0.9rem;
  }

  & .date {
    color: gray;
    font-size: 0.8rem;
  }

  & .content {
    font-weight: bold;
    margin-bottom: 30px;
    margin-top: 30px;
  }

  & button {
    width: 5rem;
    height: 1.7rem;
    background: #fff;
    border: 1px solid black;
    outline: none;
    border-radius: 5px 5px 5px;
    margin-right: 0.4rem;
    transition: 0.2s;
  }

  & button:hover {
    background: black;
    color: white;
    transition: 0.2s;
    cursor: pointer;
  }
`;

export default DirayItem;
