import React, { useCallback, useState } from 'react';
import { MdAdd } from 'react-icons/md';
import './TodoInsert.scss';

const TodoInsert = ({ onInsert }) => {
  const [value, setValue] = useState('');

  const onChange = useCallback((e) => {
    setValue(e.target.value);
  }, []);

  const onSubmit = useCallback(
    (e) => {
      if (value === '') {
        return;
      } else {
        onInsert(value);
        setValue('');
        e.preventDefault();
      }
    },
    [onInsert, value],
  );

  return (
    <form className="TodoInsert" onSubmit={onSubmit}>
      <input
        placeholder="Todo..."
        value={value}
        onChange={onChange}
        autoFocus
      />
      <button type="button">
        <MdAdd />
      </button>
    </form>
  );
};

export default TodoInsert;
