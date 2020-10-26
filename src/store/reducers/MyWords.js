import * as constants from "../actionTypes";

const initialState = {
  words: null,
  error: false,
  selectedWord: null,
  display: false,
  deleteError: false,
};

const myWordsReducer = (state = initialState, action) => {
  switch (action.type) {
    case constants.GET_WORDS_START:
      return {
        ...state,
      };
    case constants.GET_WORDS_SUCCESS:
      return {
        ...state,
        words: action.words,
      };
    case constants.GET_WORDS_FAIL:
      return {
        ...state,
        error: true,
      };
    case constants.DISPLAY_WORD:
      return {
        ...state,
        selectedWord: action.selectedWord,
        display: true,
      };
    case constants.ON_TOGGLE_BACK:
      return {
        ...state,
        display: false,
      };
    case constants.DELETE_WORD_SUCCESS:
      return {
        ...state,
        words: action.updatedList,
        display: false,
      };
    case constants.DELETE_WORD_FAIL:
      return {
        ...state,
      };
    default:
      return state;
  }
};

export default myWordsReducer;
