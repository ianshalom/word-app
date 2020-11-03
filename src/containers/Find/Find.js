import React, { Component } from "react";
import Search from "../../components/Search/Search";
import Word from "../../components/Word/Word";
import Spinner from "../../components/UI/Spinner/Spinner";
import { connect } from "react-redux";
import * as actions from "../../store/actions/index";

class Find extends Component {
  onSearchHandler = (wordToSearch) => {
    const { word } = wordToSearch;
    console.log(word);
    const lowerCaseWord = word.toLowerCase();
    this.setState({ finding: true, error: false });
    this.props.onSearchWord(lowerCaseWord);
  };

  saveWordHandler = () => {
    this.props.onSavedWord(this.props.word);
  };

  render() {
    const { word, loading, finding, error, saved } = this.props;
    let words = <p>You have not searched for a word yet...</p>;
    if (word) {
      words = <Word word={word} saveWord={this.saveWordHandler} />;
    }
    if (finding || loading) {
      words = <Spinner />;
    }
    if (error) {
      words = (
        <p style={{ color: "red" }}>
          Sorry, unfortunately we were unable to find such a word.
        </p>
      );
    }
    if (saved) {
      words = (
        <p>Your word has successfully been saved! Search for another word!</p>
      );
    }
    let redirect = null;

    return (
      <div>
        {redirect}
        <h1>FIND WORDS</h1>
        <Search search={this.onSearchHandler} />
        {words}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    word: state.findWords.word,
    loading: state.findWords.loading,
    finding: state.findWords.finding,
    error: state.findWords.error,
    saved: state.findWords.saved,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onSearchWord: (word) => dispatch(actions.startSearch(word)),
    onSavedWord: (word) => dispatch(actions.startSave(word)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Find);
