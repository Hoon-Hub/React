import React, { useState } from 'react';
import TodoInsert from './components/TodoInsert.js';
import TodoList from './components/TodoList.js';
import TodoTemplate from './components/TodoTemplate.js';

const App = () => {
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: '리액트의 기초 알아보기',
      checked: true,
    },
    {
      id: 2,
      text: 'Component Styling',
      checked: true,
    },
    {
      id: 3,
      text: 'Make Todo Application by React.js',
      checked: false,
    },
  ]);
  return (
    <TodoTemplate>
      <TodoInsert />
      <TodoList todos={todos} />
    </TodoTemplate>
  );
};

export default App;
