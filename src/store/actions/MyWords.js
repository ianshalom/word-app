import * as constants from "../actionTypes";

//################# GET WORDS ####################
export const getWordsStart = () => {
  return {
    type: constants.GET_WORDS_START,
  };
};

export const getWordsSuccess = (words) => {
  return {
    type: constants.GET_WORDS_SUCCESS,
    words: words,
  };
};

export const getWordsFail = () => {
  return {
    type: constants.GET_WORDS_FAIL,
  };
};

//############## Display Word #################
export const displayWord = (word) => {
  return {
    type: constants.DISPLAY_WORD,
    selectedWord: word,
  };
};

//########## Delete Word ################

export const deleteWordSuccess = (list) => {
  return {
    type: constants.DELETE_WORD_SUCCESS,
    updatedList: list,
  };
};

export const deleteWordFail = () => {
  return {
    type: constants.DELETE_WORD_FAIL,
  };
};

export const deleteWord = (words, id) => {
  return {
    type: constants.DELETE_WORD,
    words,
    id,
  };
};

//############### Toggle Back Button ##############
export const onToggleBack = () => {
  return {
    type: constants.ON_TOGGLE_BACK,
  };
};
