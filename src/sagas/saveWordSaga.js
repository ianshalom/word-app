import { takeEvery, select, put, call } from "redux-saga/effects";
import * as actionTypes from "../store/actionTypes";
import { saveWord } from "../api";
import { saveSuccess } from "../store/actions/FindWords";

export const getWord = (state) => state.findWords.word;

export function* initSaveWord() {
  try {
    const wordToSave = yield select(getWord);
    const status = yield call(saveWord, wordToSave);
    console.log(status);
    if (status) yield put(saveSuccess());
  } catch (error) {
    // yield put(saveFail(error.toString()));
    console.log(error.message);
  }
}

export default function* watchSaveWord() {
  yield takeEvery(actionTypes.START_SAVE, initSaveWord);
}
