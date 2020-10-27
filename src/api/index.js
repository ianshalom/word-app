import axiosSearch from "../axios-search";

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

export { searchWord };
