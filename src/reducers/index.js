import { combineReducers } from "redux";
import charactersReducer from "./charactersReducer";
import characterDetailsReducer from "./characterDetailsReducer";

const rootReducer = combineReducers({
  characters: charactersReducer,
  details: characterDetailsReducer,
});

export default rootReducer;
