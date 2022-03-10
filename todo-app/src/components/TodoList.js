import React, { useCallback } from 'react';
import TodoListItem from './TodoListItem';
import './TodoList.scss';
<<<<<<< HEAD
import { List } from 'react-virtualized';
=======
import { List } from 'react-virtualized/dist/commonjs/List';
>>>>>>> 943a4c766213e2d56f31972828d6533a2ae8c53c

const TodoList = ({ todos, onRemove, onToggle }) => {
  const rowRenderer = useCallback(
    ({ index, key, style }) => {
      const todo = todos[index];
      return (
        <TodoListItem
          todo={todo}
          key={key}
          onRemove={onRemove}
          onToggle={onToggle}
          style={style}
        />
      );
    },
    [onRemove, onToggle, todos],
  );
<<<<<<< HEAD
=======

>>>>>>> 943a4c766213e2d56f31972828d6533a2ae8c53c
  return (
    <List
      className="TodoList"
      width={512}
      height={513}
      rowCount={todos.length}
      rowHeight={57}
      rowRenderer={rowRenderer}
      list={todos}
      style={{ outline: 'none' }}
    ></List>
  );
};

export default React.memo(TodoList);
