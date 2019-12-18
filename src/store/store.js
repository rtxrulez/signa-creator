import { createStore } from "redux";
import rootReducer from "./reducers/rootReducer";

export default createStore(
  rootReducer,
  undefined,
  window.devToolsExtension ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f
);
