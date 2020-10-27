import { all } from "redux-saga/effects";

import findWordsSaga from "./findWordsSaga";

export default function* rootSaga() {
  yield all([findWordsSaga()]);
}
