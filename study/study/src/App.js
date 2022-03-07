import "./App.css";
import Main from "./Main.js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Event2 from "./Event2.js";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/event2" element={<Event2 />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
