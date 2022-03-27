import React, { useState } from 'react'
import { useDispatch } from 'react-redux'

const AddForm = ({ state }) => {
  const [input, setInput] = useState('');
  const dispatch = useDispatch();

  const onChangeInput = (e) => {
    setInput(e.target.value)
  }

  const onAddHandler = () => {
    if (!input) return;
    dispatch({
      type: 'INSERT_TODO',
      data: { id: state[state.length - 1].id + 1, todo: input }
    })
    setInput('')
  }



  return (
    <>
      <input type="text" placeholder='what to do..' onChange={onChangeInput} value={input} />
      <button onClick={onAddHandler}>Add</button>
    </>
  )
}

export default AddForm