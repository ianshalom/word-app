import { all } from "redux-saga/effects";

import findWordsSaga from "./findWordsSaga";
import saveWordSaga from "./saveWordSaga";

export default function* rootSaga() {
  yield all([findWordsSaga(), saveWordSaga()]);
}
