import {
  fetchSingaRequest,
  fetchSingaSuccess,
  fetchSingaFailure
} from "../actions/fetchSingaActions";

import {
  uploadSingaRequest,
  uploadSingaFailure,
  uploadSingaSuccess
} from "../actions/uploadSingaActions";

const initialState = {
  isFetched: false,
  isFetching: false,
  error: false,
  oneSinga: {},

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

export default (state = initialState, action) => {
  switch (action.type) {
    case fetchSingaRequest().type:
      return {
        ...state,
        isFetched: false,
        isFetching: true
      };

    case fetchSingaSuccess().type:
      return {
        ...state,
        isFetched: true,
        isFetching: false,
        singas: [...action.payload]
      };

    case fetchSingaFailure().type:
      return {
        ...state,
        isFetched: true,
        isFetching: false,
        error: action.error
      };

    case uploadSingaRequest().type:
      console.log("req", action);
      return {
        ...state,
        isFetched: false,
        isFetching: true
      };

    case uploadSingaSuccess().type:
      return {
        ...state,
        isFetched: true,
        isFetching: false,
        oneSinga: action.payload
      };

    case uploadSingaFailure().type:
      return {
        ...state,
        isFetched: true,
        isFetching: false,
        error: action.error
      };

    default:
      return state;
  }
};
