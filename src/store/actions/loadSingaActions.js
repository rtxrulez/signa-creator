export const loadSingaRequest = () => {
  return {
    type: "LOAD_SINGA_REQUEST",
    payload: ""
  };
};

export const loadSingaSuccess = payload => {
  return {
    type: "LOAD_SINGA_SUCCESS",
    payload
  };
};

export const loadSingaFailure = error => {
  return {
    type: "LOAD_SINGA_FAILURE",
    payload: "",
    error: error
  };
};

export function loadList(page) {
  return dispatch => {
    dispatch(loadSingaRequest);
    axios.get(`${config.domain}getlist`).then(result => {
      dispatch(loadSingaSuccess(result));
    });
  };
}
