import axiosSearch from "../axios-search";
import axiosFirebase from "../axios-firebase";

const searchWord = async (keyedWord) => {
  const word = await axiosSearch.get(`/${keyedWord}`).then((res) => {
    const searchedWord = res.data[0];
    if (res.status >= 400) {
      throw new Error(searchedWord.errors);
    }
    return searchedWord;
  });
  return word;
};

const saveWord = async (wordToSave) => {
  axiosFirebase
    .post("/words.json", wordToSave)
    .then((res) => {
      return true;
    })
    .catch((err) => {
      return err;
    });
};

export { searchWord, saveWord };
