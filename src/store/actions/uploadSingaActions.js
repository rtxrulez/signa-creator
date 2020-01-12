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
