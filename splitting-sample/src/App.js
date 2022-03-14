import React, { Suspense, useState } from "react";
import logo from "./logo.svg";
import Split from "./Split";

function App() {
  const [visible, setVisible] = useState();
  const onClick = () => {
    setVisible(true);
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} alt="logo" className="App-logo" />
        <p onClick={onClick}>Hello React!</p>
        <Suspense fallback={<div>Loading...</div>}>
          {visible && <Split />}
        </Suspense>
      </header>
    </div>
  );
}

export default App;
