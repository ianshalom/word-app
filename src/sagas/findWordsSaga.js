import { takeEvery, call, put, select } from "redux-saga/effects";
import { searchSuccess, searchFail } from "../store/actions/FindWords";
import * as actionTypes from "../store/actionTypes";
import { searchWord } from "../api";

export const getKeyedWord = (state) => state.findWords.keyedWord;

export function* initSearchWord() {
  try {
    const word = yield select(getKeyedWord);
    const result = yield call(searchWord, word);
    yield put(searchSuccess(result));
  } catch (error) {
    yield put(searchFail());
  }
}

export default function* watchSearchWordStart() {
  yield takeEvery(actionTypes.START_SEARCH, initSearchWord);
}
