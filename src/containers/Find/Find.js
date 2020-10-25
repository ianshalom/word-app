import React, { Component } from "react";
import Search from "../../components/Search/Search";
import axiosSearch from "../../axios-search";
import Word from "../../components/Word/Word";
import axiosFirebase from "../../axios-firebase";
// import { Redirect } from "react-router-dom";
import Spinner from "../../components/UI/Spinner/Spinner";

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
    axiosSearch
      .get(`/${lowerCaseWord}`)
      .then((res) => {
        const searchedWord = res.data[0];
        this.setState({
          word: searchedWord,
          error: false,
          finding: false,
          loading: false,
        });
      })
      .catch((err) => {
        console.log(err.message);
        this.setState({ error: true, finding: false });
      });
  };

  saveWordHandler = () => {
    this.setState({ loading: true });
    axiosFirebase
      .post("/words.json/", this.state.word)
      .then((res) => {
        this.setState({ saved: true, loading: false });
      })
      .catch((err) => {
        console.log(err.message);
        this.setState({ loading: false });
      });
  };

  render() {
    let words = <p>You have not searched for a word yet...</p>;
    if (this.state.word) {
      words = <Word word={this.state.word} saveWord={this.saveWordHandler} />;
    }
    if (this.state.finding || this.state.loading) {
      words = <Spinner />;
    }
    if (this.state.error) {
      words = (
        <p style={{ color: "red" }}>
          Sorry, unfortunately we were unable to find such a word.
        </p>
      );
    }
    if (this.state.saved) {
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

export default Find;
