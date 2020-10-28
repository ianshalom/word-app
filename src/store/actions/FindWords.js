import * as constants from "../actionTypes";

//############### SEARCH FOR WORD ###################
export const startSearch = (searchedWord) => {
  return {
    type: constants.START_SEARCH,
    word: searchedWord,
  };
};

export const searchSuccess = (foundWord) => {
  return {
    type: constants.SEARCH_SUCCESS,
    foundWord,
  };
};

export const searchFail = (err) => {
  return {
    type: constants.SEARCH_FAIL,
    error: err,
  };
};

//############### SAVE WORD ###################

export const startSave = () => {
  return {
    type: constants.START_SAVE,
  };
};

export const saveSuccess = () => {
  return {
    type: constants.SAVE_SUCCESS,
  };
};

export const saveFail = () => {
  return {
    type: constants.SAVE_FAIL,
  };
};
