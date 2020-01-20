import { createStore, applyMiddleware, compose } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "./reducers/rootReducer";
import thunk from "redux-thunk";
// import logger from "redux-logger";

const logger = store => next => action => {
  console.info("Logger: ", action);
  return next(action);
};

let initialState = {
  oneSinga: {
    selectTextData: {},
    selectKey: 0,
    typeImg: "jpg",
    loadedImage: true,
    download: false,
    url:
      "https://i.mycdn.me/i?r=AzEPZsRbOZEKgBhR0XGMT1RkcZ-AjJJrTOR0iQewSbnrHqaKTM5SRkZCeTgDn6uOyic",
    textList: [
      {
        name: "Текст 1",
        pos: { x: 170, y: -140 },
        rotate: 5,
        fontSize: 20,
        color: "#00ffff",
        shadow: "#ff0000"
      },
      {
        name: "Текст 2",
        pos: { x: 170, y: -100 },
        rotate: 0,
        fontSize: 20,
        color: "#0000ff",
        shadow: "#ff0000"
      }
    ]
  },

  uploadSinga: {
    isFetched: false,
    isFetching: false,
    error: false
  },

  loadSinga: {
    isFetched: false,
    isFetching: false,
    error: false
  },

  singas: [
    {
      id: "0",
      url:
        "https://i.mycdn.me/i?r=AzEPZsRbOZEKgBhR0XGMT1RkcZ-AjJJrTOR0iQewSbnrHqaKTM5SRkZCeTgDn6uOyic",
      texts: [
        {
          text: "Какой то текст1",
          x: 20,
          y: 10,
          rotate: 90,
          fontSize: 20,
          color: "#00ff00",
          shadow: "#ff0000"
        },
        {
          text: "Какой то текст2",
          x: 20,
          y: 30,
          rotate: 90,
          fontSize: 20,
          color: "#0000ff",
          shadow: "#ff0000"
        }
      ]
    },
    {
      id: "1",
      url:
        "https://img.huffingtonpost.com/asset/5dcc613f1f00009304dee539.jpeg?cache=QaTFuOj2IM&ops=crop_834_777_4651_2994%2Cscalefit_720_noupscale",
      texts: [
        {
          text: "Какой то текст1",
          x: 20,
          y: 10,
          rotate: 90,
          fontSize: 20,
          color: "#00ff00",
          shadow: "#ff0000"
        },
        {
          text: "Какой то текст2",
          x: 20,
          y: 30,
          rotate: 90,
          fontSize: 20,
          color: "#0000ff",
          shadow: "#ff0000"
        }
      ]
    }
  ]
};

initialState = undefined;

export default createStore(
  rootReducer,
  initialState,
  compose(
    applyMiddleware(thunk, logger),
    window.devToolsExtension ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f
  )
);
