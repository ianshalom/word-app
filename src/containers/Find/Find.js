import React, { Component } from "react";
import Search from "../../components/Search/Search";
// import axiosSearch from "../../axios-search";
import Word from "../../components/Word/Word";
// import axiosFirebase from "../../axios-firebase";
// import { Redirect } from "react-router-dom";
import Spinner from "../../components/UI/Spinner/Spinner";
import { connect } from "react-redux";
import * as actions from "../../store/actions/index";

class Find extends Component {
  state = {
    word: null,
    error: false,
    finding: false,
    saved: false,
  };

  onSearchHandler = (word) => {
    const lowerCaseWord = word.toLowerCase();
    this.setState({ finding: true, error: false });
    this.props.onSearchWord(lowerCaseWord);
  };

  saveWordHandler = () => {
    // this.setState({ loading: true });
    // axiosFirebase
    //   .post("/words.json/", this.state.word)
    //   .then((res) => {
    //     this.setState({ saved: true, loading: false });
    //   })
    //   .catch((err) => {
    //     console.log(err.message);
    //     this.setState({ loading: false });
    //   });
    this.props.onSavedWord(this.props.word);
  };

  render() {
    let words = <p>You have not searched for a word yet...</p>;
    if (this.props.word) {
      words = <Word word={this.props.word} saveWord={this.saveWordHandler} />;
    }
    if (this.props.finding || this.props.loading) {
      words = <Spinner />;
    }
    if (this.props.error) {
      words = (
        <p style={{ color: "red" }}>
          Sorry, unfortunately we were unable to find such a word.
        </p>
      );
    }
    if (this.props.saved) {
      words = (
        <p>Your word has successfully been saved! Search for another word!</p>
      );
    }
    let redirect = null;
    // if (this.state.saved) return <Redirect to="/" />;

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
    word: state.word,
    loading: state.loading,
    finding: state.finding,
    error: state.error,
    saved: state.saved,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onSearchWord: (word) => dispatch(actions.initSearch(word)),
    onSavedWord: (word) => dispatch(actions.saveWord(word)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Find);
