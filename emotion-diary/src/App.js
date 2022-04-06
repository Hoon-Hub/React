import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Diary from "./pages/Diary";
import Edit from "./pages/Edit";
import Home from "./pages/Home";
import New from "./pages/New";
import React, { useReducer, useRef } from "react";

const reducer = (state, action) => {
  let newState = [];
  switch (action.type) {
    case "INIT": {
      return action.state;
    }
    case "CREATE": {
      newState = [action.data, ...state];
      break;
    }
    case "REMOVE": {
      newState = state.filter((it) => it.id !== action.targetId);
      break;
    }
    case "EDIT": {
      newState = state.map((it) =>
        it.id === action.data.id ? { ...action.data } : it
      );
      break;
    }
    default:
      return newState;
  }
};

export const DiaryStateContext = React.createContext();
export const DiaryDispatchContext = React.createContext();

const dummyData = [
  {
    id: 1,
    emotion: 5,
    content: "오늘의일기1",
    date: 1649141606379,
  },
  {
    id: 2,
    emotion: 2,
    content: "오늘의일기2",
    date: 1649141606380,
  },
  {
    id: 3,
    emotion: 4,
    content: "오늘의일기3",
    date: 1649141606381,
  },
  {
    id: 4,
    emotion: 1,
    content: "오늘의일기4",
    date: 1649141606382,
  },
  {
    id: 5,
    emotion: 1,
    content: "오늘의일기5",
    date: 1649141606383,
  },
  {
    id: 6,
    emotion: 1,
    content: "오늘의일기6",
    date: 1649141606384,
  },
  {
    id: 7,
    emotion: 1,
    content: "오늘의일기7",
    date: 1749141606384,
  },
];

function App() {
  const [data, dispatch] = useReducer(reducer, dummyData);

  const dataId = useRef(8);
  // create
  const onCreate = (date, content, emotion) => {
    dispatch({
      type: "CREATE",
      data: {
        id: dataId.current,
        date: new Date(date).getTime(),
        content,
        emotion,
      },
    });
    dataId.current++;
  };

  // remove
  const onRemove = (targetId) => {
    dispatch({ type: "REMOVE", targetId });
  };

  // edit
  const onEdit = (targetId, date, content, emotion) => {
    dispatch({
      type: "EDIT",
      data: {
        id: targetId,
        date: new Date(date).getTime(),
        content,
        emotion,
      },
    });
  };

  return (
    <DiaryStateContext.Provider value={data}>
      <DiaryDispatchContext.Provider value={{ onCreate, onEdit, onRemove }}>
        <BrowserRouter>
          <div className="App">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/diary/:id" element={<Diary />} />
              <Route path="/edit/:id" element={<Edit />} />
              <Route path="/new" element={<New />} />
            </Routes>
          </div>
        </BrowserRouter>
      </DiaryDispatchContext.Provider>
    </DiaryStateContext.Provider>
  );
}

export default App;
