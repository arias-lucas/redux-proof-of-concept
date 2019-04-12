import React, { Component } from "react";
import { createStore, combineReducers, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import createSagaMiddleware from "redux-saga";
import Counter from "./components/Counter";
import List from "./components/List";
import counterReducer from "./reducers/counterReducer";
import todoListReducer from "./reducers/todoListReducer";
import rootSaga from "./sagas/sagas";

class App extends Component {
  store = {};

  constructor() {
    super();
    const sagaMiddleware = createSagaMiddleware();
    const combinatedReducers = combineReducers({
      counter: counterReducer,
      list: todoListReducer
    });
    this.store = createStore(
      combinatedReducers,
      applyMiddleware(sagaMiddleware)
    );
    sagaMiddleware.run(rootSaga);
  }

  render() {
    return (
      <div>
        <Provider store={this.store}>
          <Counter />
          <List />
        </Provider>
      </div>
    );
  }
}

export default App;
