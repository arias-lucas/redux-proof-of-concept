import React, { Component } from "react";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import createSagaMiddleware from "redux-saga";
import Counter from "./components/Counter";
import List from "./components/List";
import reducers from "./reducers/index";
import rootSaga from "./sagas/sagas";

class App extends Component {
  store = {};

  constructor() {
    super();
    const sagaMiddleware = createSagaMiddleware();
    this.store = createStore(reducers, applyMiddleware(sagaMiddleware));
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
