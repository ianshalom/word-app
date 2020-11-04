import { createSelector } from "reselect";

const myWordsData = (state) => state.myWords;

const getWordsData = () => createSelector(myWordsData, (substate) => substate);
console.log(getWordsData);

export default getWordsData;
