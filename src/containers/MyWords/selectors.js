import { createSelector } from "reselect";

const myWordsData = (state) => state.myWords;
console.log(myWordsData);
const getWordsData = () => createSelector(myWordsData, (substate) => substate);

export default getWordsData;
