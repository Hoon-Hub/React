import "./App.css";
import State from "./component/Context";
import ContextProvider from "./reducer";

function App() {
  return (
    <>
      <ContextProvider>
        <State></State>
      </ContextProvider>
    </>
  );
}

export default App;
