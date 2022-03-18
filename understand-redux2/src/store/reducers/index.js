// rootReducer : reducer들을 전부 선언해놓는 곳 => /src/index.js 에서 또 한 번 선언 해줘야함
import { combineReducers } from "redux";
import cartReducer from "./cartReducer";

// 쉼표로 구분 가능
export default combineReducers({ cartReducer });
