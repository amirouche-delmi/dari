import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./styles/index.scss";
import { Provider } from "react-redux";
import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import rootReducer from './reducers'

// dev tools
import { composeWithDevTools } from "redux-devtools-extension";
import { getUsers } from "./actions/users.actions";
import { getAnnoncesP } from "./actions/annonceP.actions";

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);
store.dispatch(getUsers())
store.dispatch(getAnnoncesP())

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
