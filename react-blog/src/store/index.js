import { applyMiddleware, createStore } from "redux";
import rootReducer from "../reducer";
import createSagaMiddleware from "@redux-saga/core";
import { composeWithDevTools } from "redux-devtools-extension";
import { createLogger } from "redux-logger";
import rootSaga from '../saga'