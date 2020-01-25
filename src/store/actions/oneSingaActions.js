import axios from "axios";
import config from "../../config/config";

export const updateOneSinga = singa => {
  return {
    type: "UPDATE_ONE_SINGA",
    payload: singa
  };
};

export function getOneSinga(id) {
  return dispatch => {
    axios.get(`${config.domain}list/${id}`).then(result => {
      console.log("res", result.data);
      dispatch(updateOneSinga(result.data));
    });
    // setTimeout(() => {
    //   // dispatch(uploadSingaSuccess());
    //   console.log("ok");
    // }, 2000);
  };
}
