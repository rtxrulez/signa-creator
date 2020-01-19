import axios from "axios";
import config from "../../config/config";

export const uploadSingaRequest = () => {
  return {
    type: "UPLOAD_SINGA_REQUEST",
    payload: ""
  };
};

export const uploadSingaSuccess = () => {
  return {
    type: "UPLOAD_SINGA_SUCCESS",
    payload: ""
  };
};

export const uploadSingaFailure = () => {
  return {
    type: "UPLOAD_SINGA_FAILURE",
    payload: ""
  };
};

export function uploadSinga(singaData) {
  return dispatch => {
    dispatch(uploadSingaRequest());
    axios.post(`${config.domain}list`, singaData).then(res => {
      dispatch(uploadSingaSuccess());
    });

    // console.log("s: ", JSON.stringify(singaData));
    // setTimeout(() => {
    //   console.log("loading...");
    //   dispatch(uploadSingaSuccess());
    // }, 300);
  };
}
