
import React from "react";
import App from "./App";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import { rootReducer } from "./services/reducers";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
export const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(thunk))
  );
  


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      
      <App />
    
    </Provider>
  </React.StrictMode>,

  document.getElementById("app")
);
