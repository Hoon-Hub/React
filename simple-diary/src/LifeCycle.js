import React, { useEffect, useState } from "react";

const LifeCycle = () => {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");

  useEffect(() => {
    console.log("mount!");
  }, []);

  useEffect(() => {
    console.log("Update");
  });

  useEffect(() => {
    console.log(count);
  }, [count]);

  useEffect(() => {
    console.log(text);
  }, [text]);

  return (
    <div style={{ padding: 20 }}>
      <div>
        <button onClick={() => setCount(count + 1)}>+</button>
        {count}
      </div>
      <div>
        <input type="text" onChange={(e) => setText(e.target.value)} />
      </div>
    </div>
  );
};

export default LifeCycle;
