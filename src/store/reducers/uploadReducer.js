import {
  uploadSingaRequest,
  uploadSingaFailure,
  uploadSingaSuccess
} from "../actions/uploadSingaActions";

let defaultData = {
  isFetched: false,
  isFetching: false,
  error: false
};

export default (state = defaultData, action) => {
  switch (action.type) {
    case uploadSingaRequest().type:
      return {
        ...state,
        isFetched: false,
        isFetching: true
      };

    case uploadSingaSuccess().type:
      return {
        ...state,
        isFetched: true,
        isFetching: false
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
