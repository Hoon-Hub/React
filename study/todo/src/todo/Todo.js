import React from 'react'
import AddTodo from './AddTodo'
import TodoList from './TodoList'
import PropTypes from 'prop-types'
import VisibleTodoList from '../containers/VisibleTodoList'


const Todo = ({ todos, onTodoClick }) => {
  return (
    <>
      <AddTodo></AddTodo>
      <VisibleTodoList></VisibleTodoList>

      {
        todos.map(todo => (
          <TodoList key={todo.id} {...todo} onClick={() => onTodoClick(todo.id)} />
        ))
      }

    </>
  )
}

Todo.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      completed: PropTypes.bool.isRequired,
      text: PropTypes.string.isRequired
    }).isRequired
  ).isRequired,
  onTodoClick: PropTypes.func.isRequired
}

export default Todo