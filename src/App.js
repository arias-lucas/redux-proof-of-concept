import React, { Component } from "react";
import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";
import Counter from "./components/Counter";
import List from "./components/List";
import counterReducer from "./reducers/counterReducer";
import todoListReducer from "./reducers/todoListReducer";

class App extends Component {
  combinatedReducers = combineReducers({
    counter: counterReducer,
    list: todoListReducer
  });
  store = createStore(this.combinatedReducers);

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