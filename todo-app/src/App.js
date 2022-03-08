import React from 'react';
import TodoInsert from './components/TodoInsert.js';
import TodoList from './components/TodoList.js';
import TodoTemplate from './components/TodoTemplate.js';

const App = () => {
  return (
    <TodoTemplate>
      <TodoInsert />
      <TodoList></TodoList>
    </TodoTemplate>
  );
};

export default App;
