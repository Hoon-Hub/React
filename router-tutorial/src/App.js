import { Route, Routes } from "react-router";
import { Link } from "react-router-dom";
import About from "./About";
import "./App.css";
import Home from "./Home";
import Profiles from "./Profiles";
import Navigate from "./Navigate.js";

function App() {
  return (
    <div className="App">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/profiles">프로필</Link>
        </li>
        <li>
          <Link to="/navigate">Navigate</Link>
        </li>
      </ul>
      <Routes>
        <Route path="/" element={<Home />} exact={true} />
        <Route path="/about" element={<About />} />
        <Route path="/profiles/*" element={<Profiles />} />
        <Route path="/navigate" element={<Navigate />} />
        <Route path="*" element={<div>이 페이지는 존재하지 않습니다.</div>} />
      </Routes>
    </div>
  );
}

export default App;
