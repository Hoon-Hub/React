import "./App.css";
import Content from "./components/Content";
import Left1 from "./components/left/Left1";
import Right1 from "./components/right/Right1";

function App() {
  return (
    <div className="all">
      <div className="App">
        <Left1 />
        <Right1 />
      </div>
      <Content></Content>
    </div>
  );
}

export default App;
