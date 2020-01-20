import addToListSinga from "../actions/listSingaAction";

let defaultData = [];

export default function uploadReducer(state = defaultData, action) {
  switch (action.type) {
    case addToListSinga().type:
      console.log("req", action);
      return [...state, ...action.payload];

    default:
      return state;
  }
}
