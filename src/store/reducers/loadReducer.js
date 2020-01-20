import {
  loadSingaRequest,
  loadSingaFailure,
  loadSingaSuccess
} from "../actions/loadSingaActions";

let defaultData = {
  isFetched: false,
  isFetching: false,
  error: false
};

export default (state = defaultData, action) => {
  switch (action.type) {
    case loadSingaRequest().type:
      return {
        ...state,
        isFetched: false,
        isFetching: true
      };

    case loadSingaSuccess().type:
      return {
        ...state,
        isFetched: true,
        isFetching: false
      };

    case loadSingaFailure().type:
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
