const initialState = [
  {
    id: 1,
    todo: 'react study1'
  },
  {
    id: 2,
    todo: 'react study2'
  },
]

// Action type name
export const INSERT_TODO = 'INSERT_TODO'

const todo = (state = initialState, action) => {
  switch (action.type) {
    case INSERT_TODO:
      console.log(action)
      return state.concat({ id: action.data.id, todo: action.data.todo })

    default: return state;
  }
}

export default todo;
