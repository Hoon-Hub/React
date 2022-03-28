const initialUsers = [
  {
    id: 1,
    email: 'example@example.com',
    password: '1234',
  },
  {
    id: 2,
    email: '1234@example.com',
    password: '1234'
  }
]

// 로그인 과정
function CheckEmailPassword(email, password) {
  const result = initialUsers.find((user) => user.email === email && user.password === password)
  if (result) {
    return true;
  } else {
    return false;
  }
}

// action type name
export const ADD_USER = 'ADD_USER'
export const UPDATE_USER = 'UPDATE_USER'
export const DELETE_USER = 'DELETE_USER'
export const USER_LOGIN = 'USER_LOGIN'

const user = (state = initialUsers, action) => {

  console.log(action);
  switch (action.type) {
    case ADD_USER:
      return state.concat({ id: action.data.id, email: action.data.email, password: action.data.password })
    case UPDATE_USER:
      return;
    case DELETE_USER:
      return;
    case USER_LOGIN:
      const result = CheckEmailPassword(action.data.email, action.data.password)
      alert(result)
      return result;

    default: return state;
  }
}

export default user;