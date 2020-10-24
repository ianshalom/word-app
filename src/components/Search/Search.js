import React, { useState } from "react";

function Search(props) {
  const [keyedWord, setKeyedWord] = useState("");

  const searchWordHandler = (event) => {
    event.preventDefault();
    props.search(keyedWord);
    setKeyedWord("");
  };

  const onKeyedHandler = (event) => {
    setKeyedWord(event.target.value);
  };
  return (
    <div>
      <form>
        <input
          type="text"
          placeholder="Search word"
          value={keyedWord}
          onChange={onKeyedHandler}
        />
        <button onClick={searchWordHandler}>Search</button>
      </form>
    </div>
  );
}

export default Search;
