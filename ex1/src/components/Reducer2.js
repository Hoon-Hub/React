import React, { useReducer } from "react";
import { reducerState } from "../reducer";
import AddState from "./AddState";

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
const Reducer2 = () => {
  const [state, dispatch] = useReducer(reducerState, initialState);

  const onClickEvent = (id, name) => {
    dispatch({ type: "INSERTSTATE", id: id, name: name });
  };

  const onRemove = (e) => {
    dispatch({ type: "REMOVESTATE", id: parseInt(e.target.value) });
  };

  return (
    <>
      {state.map((p) => (
        <>
          <div key={p.id.toString()}>
            {p.id}. {p.name}
            <button value={p.id} onClick={onRemove}>
              삭제
            </button>
          </div>
        </>
      ))}

      <AddState
        onClickEvent={onClickEvent}
        stateId={state[state.length - 1].id}
      />
    </>
  );
};

export default Reducer2;
