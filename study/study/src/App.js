import "./App.css";
import Main from "./Event/Main.js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Event2 from "./Event/Event2.js";
import Event3 from "./Event/Event3.js";
import Ref1 from "./Ref/Ref1.js";
import Ref2 from "./Ref/Ref2.js";
import HooksUseReducer from "./Hooks/HooksUseReducer.js";
import HooksUseReducer2 from "./Hooks/HooksUseReducer2.js";
import UseMemo from "./Hooks/UseMemo";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/event2" element={<Event2 />} />
          <Route path="/event3" element={<Event3 />} />
          <Route path="/ref1" element={<Ref1 />} />
          <Route path="/ref2" element={<Ref2 />} />
          <Route path="/reducer" element={<HooksUseReducer />} />
          <Route path="/reducer2" element={<HooksUseReducer2 />} />
          <Route path="/memo" element={<UseMemo />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
