import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Diary from "./pages/Diary";
import Edit from "./pages/Edit";
import Home from "./pages/Home";
import New from "./pages/New";
import Error from "./pages/Error";

// components
import MyButton from "./components/MyButton";
import MyHeader from "./components/MyHeader";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <MyHeader
          headText={"App"}
          leftChild={
            <MyButton text={"왼쪽버튼"} onClick={() => alert("왼쪽")} />
          }
          rightChild={
            <MyButton text={"오른쪽버튼"} onClick={() => alert("오른쪽")} />
          }
        />
        <h2>App.js</h2>
        <MyButton
          text={"버튼"}
          onClick={() => alert("버튼 클릭")}
          type={"positive"}
        ></MyButton>
        <MyButton
          text={"버튼"}
          onClick={() => alert("버튼 클릭")}
          type={"negative"}
        ></MyButton>
        <MyButton text={"버튼"} onClick={() => alert("버튼 클릭")}></MyButton>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/diary/:id" element={<Diary />} />
          <Route path="/edit" element={<Edit />} />
          <Route path="/new" element={<New />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
