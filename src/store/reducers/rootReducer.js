import { combineReducers } from "redux";
import uploadReducer from "./uploadReducer";
import loadReducer from "./loadReducer";
import oneSingaReducer from "./oneSingaReducer";

export default combineReducers({
  uploadSinga: uploadReducer,
  loadSinga: loadReducer,
  oneSinga: oneSingaReducer
});
