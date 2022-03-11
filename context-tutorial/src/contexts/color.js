import { createContext, useState } from "react";

const ColorContext = createContext({
  state: { color: "black", subcolor: "red" },
  actions: {
    setColor: () => {},
    setSubColor: () => {},
  },
});

const ColorProvider = ({ children }) => {
  const [color, setColor] = useState("black");
  const [subcolor, setSubcolor] = useState("red");

  const value = {
    state: { color, subcolor },
    actions: { setColor, setSubcolor },
  };

  return (
    <ColorContext.Provider value={value}>{children}</ColorContext.Provider>
  );
};

// ColorConsumer를 호출하였을 경우, 기본 context를 사용할 수 있다.
const { Consumer: ColorConsumer } = ColorContext; // 비구조화 할당 : state & setState

export { ColorProvider, ColorConsumer };
export default ColorContext;
