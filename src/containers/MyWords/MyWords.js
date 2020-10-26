import React, { Component } from "react";

import "./MyWords.css";
import axiosFirebase from "../../axios-firebase";
import MyWord from "../../components/MyWord/MyWord";
import Spinner from "../../components/UI/Spinner/Spinner";
import * as getWords from "../../store/actions/index";
import { connect } from "react-redux";

class MyWords extends Component {
  state = {
    noButton: true,
    selectedWord: null,
  };

  componentDidMount() {
    this.props.onGetWords();
  }

  onDisplayWordHandler = (e, id) => {
    e.preventDefault();
    const word = this.props.words.filter((w) => {
      return w.id === id;
    });
    this.props.onDisplayWord(word);
  };

  onToggleBack = () => {
    this.props.toggleBack();
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
    this.setState({ words: updatedList, display: false });
  };

  render() {
    let list = <Spinner />;
    if (this.props.words && !this.props.display) {
      list = this.props.words.map((word) => (
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
    if (this.props.display) {
      list = null;
      displayWord = (
        <MyWord
          description={this.props.selectedWord[0]}
          back={this.onToggleBack}
          delete={this.onDeleteWord}
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

const mapStateToProps = (state) => {
  return {
    words: state.myWords.words,
    display: state.myWords.display,
    selectedWord: state.myWords.selectedWord,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onGetWords: () => dispatch(getWords.getWords()),
    onDisplayWord: (word) => dispatch(getWords.displayWord(word)),
    toggleBack: () => dispatch(getWords.onToggleBack()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MyWords);
