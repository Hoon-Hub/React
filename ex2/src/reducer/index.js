import React, { useReducer } from "react";

export const Context = React.createContext();
// context api 를 사용하기 위한 선언

const initialState = [
  {
    id: 1,
    name: "김사과",
  },
  {
    id: 2,
    name: "청사과",
  },
  {
    id: 3,
    name: "적사과",
  },
];

const reducer = (state, action) => {
  switch (action.type) {
    case "INSERTSTATE":
      return [...state, { id: action.id, name: action.name }];
    case "REMOVESTATE":
      return state.filter((item) => item.id !== action.id);
    default:
      return state;
  }
};

const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <Context.Provider value={{ state, dispatch }}>{children}</Context.Provider>
  );
};

export default ContextProvider;
