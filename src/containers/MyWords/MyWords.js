import React, { Component } from "react";
import "./MyWords.css";

import MyWord from "../../components/MyWord/MyWord";
import Spinner from "../../components/UI/Spinner/Spinner";
import * as getWords from "../../store/actions/index";
import { connect } from "react-redux";
import getWordsData from "./selectors";
import { createStructuredSelector } from "reselect";

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
    const word = this.props.data.words.filter((w) => {
      return w.id === id;
    });
    this.props.onDisplayWord(word);
  };

  onToggleBack = () => {
    this.props.toggleBack();
  };

  onDeleteWord = (id) => {
    this.props.onDeleteWord(this.props.data.words, id);
  };

  render() {
    const { data } = this.props;
    let list = <Spinner />;
    if (data.words && !data.display) {
      list = data.words.map((word) => (
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
    if (data.display) {
      list = null;
      displayWord = (
        <MyWord
          description={data.selectedWord[0]}
          back={this.onToggleBack}
          delete={this.onDeleteWord}
        />
      );
    }

    return (
      <div>
        <h1>My WORDS</h1>
        <hr />
        {data.loading && <Spinner />}
        {!data.loading && list}
        {!data.loading && displayWord}
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  data: getWordsData(),
});

const mapDispatchToProps = (dispatch) => {
  return {
    onGetWords: () => dispatch(getWords.getWordsStart()),
    onDisplayWord: (word) => dispatch(getWords.displayWord(word)),
    toggleBack: () => dispatch(getWords.onToggleBack()),
    onDeleteWord: (words, id) => dispatch(getWords.deleteWord(words, id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MyWords);
