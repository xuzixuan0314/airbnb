import { configureStore } from "@reduxjs/toolkit";
import { createStore, combineReducers, applyMiddleware, compose } from "redux";

import HomeReducer from "./features/home";
import EntireReducer from "./features/entire";
import DetailReducer from "./features/detail";
import { thunk } from "redux-thunk";
// const store = configureStore({
//   reducer: {
//     home: HomeReducer,
//     entire: EntireReducer,
//   },
// });
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const reducer = combineReducers({
  home: HomeReducer,
  entire: EntireReducer,
  detail: DetailReducer,
});
const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)));
export default store;
