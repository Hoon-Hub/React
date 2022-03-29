import React, { useState } from 'react'
import styled from 'styled-components'

const AddTodo = () => {
  const [todo, setTodo] = useState('');

  const onChangeTodo = (e) => {
    setTodo(e.target.value);
  }

  const addTodo = () => {
    console.log(todo)
  }

  return (
    <>
      <StyledInput>
        <input type="text" value={todo} onChange={onChangeTodo} />
        <button onClick={addTodo}>Add</button>
      </StyledInput>
    </>
  )
}

export default AddTodo

const StyledInput = styled.div`
  width: 19rem;
  height: 3rem;
  font-size: 1.2rem;
  border: none;
  display: flex;
  flex-direction: row;
  padding: 0.3rem;
  justify-content: space-between;

  & input {
    width: 14rem;
    font-size: 1.1rem;
    padding-left: 10px;
  }

  & button {
    width: 3rem;
    background: tomato;
    outline: none;
    border: none;
    border-radius: 5px 5px 5px;
    font-size: 1.1rem;
    flex: 1;
    margin-left: 0.2rem;
  }
`