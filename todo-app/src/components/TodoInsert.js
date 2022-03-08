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
      e.preventDefault();
      if (value === '') {
        return;
      } else {
        onInsert(value);
        setValue('');
      }
    },
    [onInsert, value],
  );

  return (
    <form className="TodoInsert" action="#">
      <input
        placeholder="Todo..."
        value={value}
        onChange={onChange}
        autoFocus
      />
      <button type="button" onClick={onSubmit}>
        <MdAdd />
      </button>
    </form>
  );
};

export default TodoInsert;
