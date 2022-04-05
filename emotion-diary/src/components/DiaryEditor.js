import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import MyButton from "./MyButton";
import MyHeader from "./MyHeader";

const getStringDate = (date) => {
  return date.toISOString().slice(0, 10);
};
const DiaryEditor = () => {
  const navigate = useNavigate();
  const [date, setDate] = useState(getStringDate(new Date()));
  return (
    <div>
      <MyHeader
        headText={"새 일기 작성"}
        leftChild={<MyButton text={"뒤로 가기"} onClick={() => navigate(-1)} />}
      />
      <div>
        <section>
          <h4>오늘은 언제인가요?</h4>
          <div className="input-box">
            <input
              className="input-date"
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
          </div>
        </section>
      </div>
    </div>
  );
};

export default DiaryEditor;
