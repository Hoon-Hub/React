import React from 'react'
import { connect } from 'react-redux'
import Todo from './Todo'

const TodosList = ({ todos }) => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      {
        todos.map((todo, index) => (
          <Todo todo={todo} idx={index} key={index}></Todo>
        ))
      }
    </div>
  )
}

const mapStateToProps = state => ({
  todos: state.todos
})

export default connect(mapStateToProps)(TodosList)