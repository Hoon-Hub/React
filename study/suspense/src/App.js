import "./App.css";
import LoadingImage from "./LoadingImage";
import { Suspense, useState, useEffect } from "react";

function App() {
  const [ready, setReady] = useState(true);
  useEffect(() => {});
  return (
    <div className="App">
      <h1>Want to Get Lazy Loading - Suspense</h1>
      <Suspense fallback={<LoadingImage />}></Suspense>
    </div>
  );
}

export default App;
