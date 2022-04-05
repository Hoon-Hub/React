import React, { useRef, useState, useContext } from "react";
import styled from "styled-components";
import { DiaryDispatchContext } from "./App";

const DiaryEditor = () => {
  const { onCreate } = useContext(DiaryDispatchContext);

  const authorInput = useRef();
  const contentInput = useRef();
  const [state, setState] = useState({
    author: "",
    content: "",
    emotion: 1,
  });

  const handleChangeState = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (state.author.length < 1) {
      authorInput.current.focus();
      return;
    }
    if (state.content.length < 1) {
      contentInput.current.focus();
      return;
    }

    onCreate(state.author, state.content, state.emotion);

    setState({
      author: "",
      content: "",
      emotion: 1,
    });
  };

  return (
    <>
      <StyledDiv>
        <h2>오늘의 일기</h2>
        <div>
          <input
            ref={authorInput}
            type="text"
            name="author"
            value={state.author}
            onChange={handleChangeState}
          />
        </div>
        <div>
          <textarea
            ref={contentInput}
            name="content"
            value={state.content}
            onChange={handleChangeState}
            cols="30"
            rows="10"
          ></textarea>
        </div>
        <div>
          <span>오늘의 기분은? &nbsp;&nbsp;</span>
          <select name="emotion" onChange={handleChangeState}>
            <option value={1}>1</option>
            <option value={2}>2</option>
            <option value={3}>3</option>
            <option value={4}>4</option>
            <option value={5}>5</option>
          </select>
        </div>
        <div>
          <button type="button" onClick={handleSubmit}>
            Save
          </button>
        </div>
      </StyledDiv>
    </>
  );
};

export default React.memo(DiaryEditor);

const StyledDiv = styled.div`
  border: 1px solid gray;
  text-align: center;
  padding: 20px;

  & input,
  textarea {
    margin-bottom: 20px;
    width: 500px;
    padding: 10px;
  }

  & textarea {
    height: 150px;
  }

  & select {
    width: 300px;
    padding: 10px;
    margin-bottom: 20px;
  }

  & button {
    width: 500px;
    padding: 10px;
    cursor: pointer;
    border-radius: 5px 5px 5px;
    outline: none;
    background: #fff;
  }
`;
