import React from "react";
import styled, { css } from "styled-components";
import palette from "../../lib/styles/palette";

const StyledButton = styled.button`
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  font-weight: bold;
  padding: 0.25rem 1rem;
  color: white;
  outline: none;
  cursor: pointer;

  background: ${palette.gray[8]};

  &:hover {
    background: ${palette.gray[6]};
  }

  ${(props) =>
    props.fullWidth &&
    css`
      padding-top: 0.75rem;
      padding-bottom: 0.75rem;
      width: 100%;
      font-size: 1.125rem;
    `}

  ${(props) =>
    props.cyan &&
    css`
      background: ${palette.cyan[5]};
      &:hover {
        background: ${palette.cyan[4]};
      }
    `}
`;

// Button이라는 상수를 생성하고 StyleButton 컴포넌트를 따로 한 이유
//  => styled-component 를 사용한 경우 곧바로 인식되지 않는 경우가 생기기 때문
const Button = (props) => <StyledButton {...props} />;

export default Button;
