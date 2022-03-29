import React from 'react'
import { connect } from 'react-redux'
import { addTodo, addText, editAddTodo } from '../redux/action/addTodo.action'

class InputField extends React.Component {
  handleChnage = e => {
    this.props.addText(e.target.value)
  }

  handleSubmit = e => {
    e.preventDefault();
    if (this.props.selected || this.props.selected === 0)
      this.props.editAddTodo({ value: this.props.text, selected: this.props.selected })
    else this.props.addTodo(this.props.text)
    // this.setState({ todo: '' })
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          name="todo"
          placeholder='todo...'
          onChange={this.handleChnage}
          value={this.props.text} />
      </form>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  addTodo: todo => dispatch(addTodo(todo)),
  addText: value => dispatch(addText(value)),
  editAddTodo: obj => dispatch(editAddTodo(obj))
})

const mapStateToProps = state => ({
  text: state.text,
  selected: state.selected
})

export default connect(mapStateToProps, mapDispatchToProps)(InputField)