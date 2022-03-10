import { useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [data, setData] = useState();
  const API_KEY = "40ed449628a3495caee1163ce660ce7e";

  const onClick = async () => {
    try {
      const result = await axios.get(
        `https://newsapi.org/v2/top-headlines?country=kr&apiKey=${API_KEY}`
      );
      setData(result.data);
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <div className="App">
      <div>
        <button onClick={onClick}>불러오기</button>
      </div>
      {data && (
        <textarea
          rows={7}
          value={JSON.stringify(data, null, 2)}
          readOnly
        ></textarea>
      )}
    </div>
  );
}

export default App;
