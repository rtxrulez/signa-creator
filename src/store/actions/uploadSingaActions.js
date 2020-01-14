import axios from "axios";
import config from "../../config/config";

export const uploadSingaRequest = () => {
  return {
    type: "UPLOAD_SINGA_REQUEST",
    payload: ""
  };
};

export const uploadSingaSuccess = singa => {
  return {
    type: "UPLOAD_SINGA_SUCCESS",
    payload: singa
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
    // axios.post(`${config.domain}list`, singaData).then(res => {
    //   dispatch(uploadSingaRequest());
    // });
    dispatch(uploadSingaRequest());
    setTimeout(() => {
      console.log("loading...");
      dispatch(uploadSingaSuccess());
    }, 300);
  };
}
