import axios from "axios";
import { addToListSinga } from "./listSingaActions";
import config from "../../config/config";

export const loadSingaRequest = () => {
  return {
    type: "LOAD_SINGA_REQUEST",
    payload: ""
  };
};

export const loadSingaSuccess = () => {
  return {
    type: "LOAD_SINGA_SUCCESS",
    payload: ""
  };
};

export const loadSingaFailure = error => {
  return {
    type: "LOAD_SINGA_FAILURE",
    payload: "",
    error: error
  };
};

let f = [
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
];

export function loadList(page) {
  return dispatch => {
    dispatch(loadSingaRequest());
    axios.get(`${config.domain}list`).then(result => {
      console.log("res", result.data);
      dispatch(addToListSinga(result.data));
      dispatch(loadSingaSuccess());
    });
    // setTimeout(() => {
    //   dispatch(loadSingaSuccess());
    //   dispatch(addToListSinga(f));
    // }, 200000);
  };
}
