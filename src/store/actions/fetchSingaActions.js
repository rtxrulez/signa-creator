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

export const getListSinga = () => {
  return dispatch => {
    fetch("https://jsonplaceholder.typicode.com/todos/1")
      .then(response => response.json())
      .then(json => console.log(json));
  };
};
