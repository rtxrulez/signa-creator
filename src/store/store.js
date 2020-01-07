import { createStore, applyMiddleware, compose } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "./reducers/rootReducer";
import thunk from "redux-thunk";
// import logger from "redux-logger";

const logger = store => next => action => {
  console.info("Logger: ", action);
  return next(action);
};

export default createStore(
  rootReducer,
  undefined,
  compose(
    applyMiddleware(thunk),
    window.devToolsExtension ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f
  )
);
