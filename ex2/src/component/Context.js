import React, { useContext, useReducer } from "react";
import AddState from "./AddState.js";
import { Context } from "../reducer";

const Context = () => {
  const { state, dispatch } = useContext(Context);

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
          <div key={p.id}>
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

export default Context;
