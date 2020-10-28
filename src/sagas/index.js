import { all } from "redux-saga/effects";

import findWordsSaga from "./findWordsSaga";
import saveWordSaga from "./saveWordSaga";
import myWordsSaga from "./myWordsSaga";

export default function* rootSaga() {
  yield all([findWordsSaga(), saveWordSaga(), myWordsSaga()]);
}
