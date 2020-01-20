import { addToListSinga } from "../actions/listSingaActions";

let defaultData = [];

export default (state = defaultData, action) => {
  switch (action.type) {
    case addToListSinga().type:
      return [...action.payload];

    default:
      return state;
  }
};
