import { takeEvery, call, put } from "redux-saga/effects";
import * as actionTypes from "../store/actionTypes";
import { getWordsSuccess, getWordsFail } from "../store/actions/MyWords";
import { getWords } from "../api";

export function* initGetWords() {
  try {
    const getRetrievedWords = yield call(getWords);
    yield put(getWordsSuccess(getRetrievedWords));
  } catch (error) {
    yield put(getWordsFail);
    console.log(error);
  }
}

export default function* watchGetWords() {
  yield takeEvery(actionTypes.GET_WORDS_START, initGetWords);
}
