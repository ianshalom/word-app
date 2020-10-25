import React, { Component } from "react";

import "./MyWords.css";
import axiosFirebase from "../../axios-firebase";
import MyWord from "../../components/MyWord/MyWord";
import Spinner from "../../components/UI/Spinner/Spinner";

class MyWords extends Component {
  state = {
    words: null,
    display: false,
    noButton: true,
    selectedWord: null,
  };

  componentDidMount() {
    axiosFirebase.get("/words.json").then((res) => {
      let words = [];
      let info = res.data;
      for (let keys in res.data) {
        words.push({
          id: keys,
          word: info[keys].word,
          meanings: info[keys].meanings,
        });
      }
      this.setState({ words });
    });
  }

  onDisplayWordHandler = (e, id) => {
    e.preventDefault();
    const word = this.state.words.filter((w) => {
      return w.id === id;
    });
    this.setState({ display: true, selectedWord: word });
  };

  onToggleBack = () => {
    this.setState({ display: false });
  };

  onDeleteWord = (id) => {
    axiosFirebase
      .delete(`/words/${id}.json`)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err.message);
      });
    const list = [...this.state.words];
    const updatedList = list.filter((word) => {
      return word.id !== id;
    });
    this.setState({ words: updatedList });
  };

  render() {
    console.log(this.state.words);
    let list = <Spinner />;
    if (this.state.words && !this.state.display) {
      list = this.state.words.map((word) => (
        <React.Fragment key={word.id}>
          <p className="Word" onClick={this.onDisplayHandler}>
            {word.word[0].toUpperCase() + word.word.slice(1)}
          </p>
          <button onClick={(e) => this.onDisplayWordHandler(e, word.id)}>
            Expand Word
          </button>
          <button onClick={() => this.onDeleteWord(word.id)}>Delete</button>
        </React.Fragment>
      ));
    }

    let displayWord = null;
    if (this.state.display) {
      list = null;
      displayWord = (
        <MyWord
          description={this.state.selectedWord[0]}
          back={this.onToggleBack}
        />
      );
    }

    return (
      <div>
        <h1>My WORDS</h1>
        <hr />
        {list}
        {displayWord}
      </div>
    );
  }
}

export default MyWords;
