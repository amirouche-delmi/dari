import { combineReducers } from "redux";
import particulierReducer from "./particulier.reducer";
import annoncePReducer from './annonceP.reducer';
import usersReducer from "./users.reducer"

export default combineReducers({
  particulierReducer,
  annoncePReducer,
  usersReducer,
});
