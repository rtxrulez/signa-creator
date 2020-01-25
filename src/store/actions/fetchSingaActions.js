export const fetchSingaRequest = url => {
  return {
    type: "FETCH_SINGA_REQUEST",
    payload: url
  };
};

export const fetchSingaSuccess = () => {
  return {
    type: "FETCH_SINGA_SUCCESS",
    payload: ""
  };
};

export const fetchSingaFailure = () => {
  return {
    type: "FETCH_SINGA_FAILURE",
    payload: ""
  };
};
