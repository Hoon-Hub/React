import { Route, Routes } from "react-router";
import { Link } from "react-router-dom";
import About from "./About";
import "./App.css";
import Home from "./Home";
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
      </ul>
      <Routes>
        <Route path="/" element={<Home />} exact={true} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
