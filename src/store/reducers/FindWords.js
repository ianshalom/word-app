import * as constants from '../actionTypes'

const initialState = {
  word: null,
};

const findWordsReducer = (state = initialState, action) => {
    switch(action.type) {
        case constants.SEARCH_WORD:
            return {
                ...state,
                word: action.searchedWord
            }
            default:
                return state;
    }
    return state
}

export const findWordsReducer;
