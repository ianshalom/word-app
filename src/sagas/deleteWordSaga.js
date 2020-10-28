import { takeEvery, select, put, call } from "redux-saga/effects";
import * as actionTypes from "../store/actionTypes";
import { deleteWord } from "../api";
import { deleteWordSuccess, deleteWordFail } from "../store/actions/MyWords";

const currentWords = (state) => state.myWords.words;
const currentWordId = (state) => state.myWords.id;

export function* initDeleteWord() {
  try {
    const words = yield select(currentWords);
    const id = yield select(currentWordId);
    const updatedWords = yield call(deleteWord, words, id);
    yield put(deleteWordSuccess(updatedWords));
  } catch (error) {
    yield put(deleteWordFail);
  }
}

export default function* watchDeleteWord() {
  yield takeEvery(actionTypes.DELETE_WORD, initDeleteWord);
}
