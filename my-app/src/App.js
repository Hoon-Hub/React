import { Route, Routes } from "react-router-dom";
import "./App.css";
import LoginForm from "./components/LoginForm";
import RegisterForm from "./components/RegisterForm";
import Main from "./page/Main";
import List from "./page/List";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/login" element={<LoginForm />} />
        <Route path="/register" element={<RegisterForm />} />
        <Route path="/" element={<Main />}></Route>
        <Route path="/list" element={<List />}></Route>
      </Routes>
    </div>
  );
}

export default App;
