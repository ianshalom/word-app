import * as constants from "../actionTypes";
import axiosSearch from "../../axios-search";
import axiosFirebase from "../../axios-firebase";

//############### SEARCH FOR WORD ###################
export const startSearch = () => {
  return {
    type: constants.START_SEARCH,
  };
};

export const searchSuccess = (searchedWord) => {
  return {
    type: constants.SEARCH_SUCCESS,
    word: searchedWord,
  };
};

export const searchFail = (err) => {
  return {
    type: constants.SEARCH_FAIL,
    error: err,
  };
};

export const initSearch = (word) => {
  return (dispatch) => {
    dispatch(startSearch());
    axiosSearch
      .get(`/${word}`)
      .then((res) => {
        const searchedWord = res.data[0];
        dispatch(searchSuccess(searchedWord));
      })
      .catch((err) => {
        dispatch(searchFail(err));
      });
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

export const saveWord = (word) => {
  return (dispatch) => {
    dispatch(startSave());
    axiosFirebase
      .post("/words.json/", word)
      .then((res) => {
        dispatch(saveSuccess());
      })
      .catch((err) => {
        dispatch(saveFail());
      });
  };
};