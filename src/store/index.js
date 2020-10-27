import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import createSagaMiddleware from "redux-saga";

import findWordsReducer from "./reducers/FindWords";
import myWordsReducer from "./reducers/MyWords";
//rootSaga
import rootSaga from "../sagas";
//Reducers

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
  findWords: findWordsReducer,
  myWords: myWordsReducer,
});

const configureStore = () => {
  const sagaMiddleware = createSagaMiddleware();
  const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(sagaMiddleware))
  );
  sagaMiddleware.run(rootSaga);
  return store;
};

export default configureStore;
