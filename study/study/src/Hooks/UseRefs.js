import React, { useCallback, useMemo, useRef, useState } from "react";
import Header from "../Header";

const getAverage = (numbers) => {
  console.log("평균값 계산중");
  if (numbers.length === 0) return 0;
  const sum = numbers.reduce((a, b) => a + b);
  return sum / numbers.length;
};

const UseRefs = () => {
  const [list, setList] = useState([]);
  const [number, setNumber] = useState("");
  const inputEl = useRef(null);

  const onChange = useCallback((e) => {
    setNumber(e.target.value);
  }, []);

  const onInsert = useCallback(() => {
    const nextList = list.concat(parseInt(number));
    setList(nextList);
    setNumber("");
    inputEl.current.focus();
  }, [number, list]);

  const avg = useMemo(() => getAverage(list), [list]);

  return (
    <div>
      <Header></Header>
      <h1>Use Refs - DOM의 ID</h1>
      <div>
        <input type="text" value={number} onChange={onChange} ref={inputEl} />
        <button onClick={onInsert}>등록</button>
        <ul>
          {list.map((value, index) => (
            <li key={index}>
              #{index + 1}: {value}
            </li>
          ))}
        </ul>
      </div>
      <div>
        <p>
          평균값: <b>{avg}</b>
        </p>
      </div>
    </div>
  );
};

export default UseRefs;
