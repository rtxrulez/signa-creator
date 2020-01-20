import { combineReducers } from "redux";
import uploadReducer from "./uploadReducer";
import loadReducer from "./loadReducer";
import oneSingaReducer from "./oneSingaReducer";
import listSingaReducer from "./listSingaReducer";

export default combineReducers({
  uploadSinga: uploadReducer,
  loadSinga: loadReducer,
  oneSinga: oneSingaReducer,
  singas: listSingaReducer
});
