import React from "react";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import createSagaMiddleware from "redux-saga";
import { composeWithDevTools } from "redux-devtools-extension";
import Counter from "./components/Counter";
import List from "./components/List";
import reducers from "./reducers/index";
import rootSaga from "./sagas/sagas";

function App() {
  const sagaMiddleware = createSagaMiddleware();
  const store = createStore(
    reducers,
    composeWithDevTools(applyMiddleware(sagaMiddleware))
  );
  sagaMiddleware.run(rootSaga);

  return (
    <div>
      <Provider store={store}>
        <Counter />
        <List />
      </Provider>
    </div>
  );

}

export default App;
