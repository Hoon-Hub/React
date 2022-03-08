import React, { useCallback, useRef, useState } from 'react';
import TodoInsert from './components/TodoInsert.js';
import TodoList from './components/TodoList.js';
import TodoTemplate from './components/TodoTemplate.js';

function createBulkTodos() {
  const array = [];
  for (let i = 1; i <= 2500; i++) {
    array.push({
      id: i,
      text: `할 일 ${i}`,
      checked: false,
    });
  }
  return array;
}

const App = () => {
  const [todos, setTodos] = useState(createBulkTodos);
  const nextId = useRef(2501);

  const onInsert = useCallback((text) => {
    const todo = {
      id: nextId.current,
      text,
      checked: false,
    };
    // 함수형 업데이트 : 상태 업데이트를 어떻게 할지 정의해줌
    setTodos((todos) => todos.concat(todo)); // todos => 를 사용함으로써
    nextId.current += 1;
  }, []); // 두번째 매개변수'[todos]'를 생략할 수 있다.

  const onRemove = useCallback(
    (id) => {
      setTodos((todos) => todos.filter((todo) => todo.id !== id)); //함수형 업데이트로 변환
    },
    [], // 매개변수 생략
  );

  const onToggle = useCallback(
    (id) => {
      setTodos(
        (
          todos, // 여기도 함수형 업데이트
        ) =>
          todos.map((todo) =>
            todo.id === id ? { ...todo, checked: !todo.checked } : todo,
          ),
      );
    },
    [], // 매개변수 생략
  );

  return (
    <TodoTemplate>
      <TodoInsert onInsert={onInsert} />
      <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle} />
    </TodoTemplate>
  );
};

export default React.memo(App);
