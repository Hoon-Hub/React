import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const TodoList = ({ onClick, completed, text }) => {
  return (
    <>
      <StyledTodoList onClick={onClick} style={{ textDecoration: completed ? 'line-through' : 'none' }}>
        {text}
      </StyledTodoList>
    </>
  )
}
TodoList.propTypes = {
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
}
export default TodoList

const StyledTodoList = styled.div`
  width: 20rem;
  margin-top: 1.5rem;
  padding: 0.2rem;
  
  
  
  & .item {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    border-bottom: 1px solid black;
    margin-bottom: 0.5rem;
    padding: 5px;
    
    & button {
      width: 4rem;
      height: 2rem;
      background: none;
      outline: none;
      border: 1px solid black;
      border-radius: 5px 5px 5px;
      font-size: 1.1rem;
      margin-left: 0.2rem;
      transition: 0.2s;  

    }

    & button:hover {
      background: tomato;
      border: none;
      transition: 0.2s;  
      cursor: pointer;
    }
  }
`