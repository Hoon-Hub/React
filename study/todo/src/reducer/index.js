import { combineReducers } from "redux";
import todos from './TodoReducer'
import visibilityFilter from './visibilityFilter'

const todoApp = combineReducers({
  todos,
  visibilityFilter,
})

export default todoApp;