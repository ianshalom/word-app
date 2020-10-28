import * as constants from "../actionTypes";

const initialState = {
  keyedWord: null,
  word: null,
  finding: false,
  error: false,
  loading: false,
};

const findWordsReducer = (state = initialState, action) => {
  switch (action.type) {
    case constants.START_SEARCH:
      return {
        ...state,
        finding: true,
        loading: true,
        error: false,
        keyedWord: action.word,
        saved: false,
      };
    case constants.SEARCH_SUCCESS:
      return {
        ...state,
        word: action.foundWord,
        finding: false,
        loading: false,
        saved: false,
      };
    case constants.SEARCH_FAIL:
      return {
        ...state,
        error: true,
        finding: false,
        loading: false,
      };
    case constants.START_SAVE:
      return {
        ...state,
        loading: true,
        saved: false,
      };
    case constants.SAVE_SUCCESS:
      return {
        ...state,
        saved: true,
        loading: false,
      };
    case constants.SAVE_FAIL:
      return {
        ...state,
        loading: false,
        saved: false,
      };
    default:
      return state;
  }
};

export default findWordsReducer;
