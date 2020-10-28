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
  const status = await axiosFirebase
    .post("/words.json", wordToSave)
    .then((res) => {
      return true;
    })
    .catch((err) => {
      return err.message;
    });
  return status;
};

const getWords = async () => {
  const retrievedWords = await axiosFirebase.get("/words.json").then((res) => {
    let words = [];
    let info = res.data;
    for (let keys in res.data) {
      words.push({
        id: keys,
        word: info[keys].word,
        meanings: info[keys].meanings,
      });
    }
    return words;
  });
  return retrievedWords;
};

export { searchWord, saveWord, getWords };
