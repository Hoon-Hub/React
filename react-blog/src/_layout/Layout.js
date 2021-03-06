import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const appLayout = ({ children }) => {
  return (
    <>
      <StyledNav>
        <div>
          <Link to="/"><span>Blog</span></Link>
        </div>
        <div>
          <Link to="/register">회원가입</Link>
        </div>
        <div>
          <Link to="/login">로그인</Link>
        </div>

        <StyledInfo>
          상훈님 | <button>로그아웃</button>
        </StyledInfo>
      </StyledNav>
      <div>{children}</div>
    </>
  );
};

const StyledNav = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  max-width: 50rem;
  min-widht: 18.75rem;
  width: 80%;
  margin: 0 auto;
  padding: 1rem 0;

  & a {
    padding-top: 0.3rem;
    text-decoration: none;
    font-size: 0.875rem;
    color: #666;
  }

  & span {
    font-size: 1.5rem;
    font-weight: 900;
    color: #4f5681;
  }
`;

const StyledInfo = styled.div`
  font-size: 0.875rem;
  color: #666;
  cursor: default;

  & button {
    border: none;
    padding-top: 0.3rem;
    font-size: 0.875rem;
    color: #666;
    background-color: none;
    cursor: pointer;

    :hover {
      color: #000;
    }
  }
`
export default appLayout;
