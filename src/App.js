import React from "react";
import "./App.css";
import Header from "./components/Header";
import Container from "./components/Container";

// REDUX
import * as reducers from "./state/reducers";
import { combineReducers, createStore, compose, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from 'redux-thunk';

const masterReducer = combineReducers({
  count: reducers.countReducer,
  listFlights: reducers.listFlights
});

const store = createStore(
  masterReducer,
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Header />
        <Container />
      </Provider>
    </div>
  );
}

export default App;
