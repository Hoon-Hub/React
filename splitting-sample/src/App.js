import React, { useState } from "react";
import loadable from "@loadable/component";
const Split = loadable(() => import("./Split"), {
  fallback: <div>loading...</div>,
});

function App() {
  const [visible, setVisible] = useState();
  const onClick = () => {
    setVisible(!visible);
  };

  const onMouseOver = () => {
    Split.preload();
  };

  return (
    <div className="App">
      <header className="App-header">
        <p onClick={onClick} onMouseOver={onMouseOver}>
          Hello React!
        </p>
        {visible && <Split />}
      </header>
    </div>
  );
}

export default App;
