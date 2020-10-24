import React, { Component } from "react";
import MyListOfWords from "../../components/MyWords/MyWords";
import axiosFirebase from "../../axios-firebase";

class MyWords extends Component {
  state = {
    words: null,
  };

  componentDidMount() {
    axiosFirebase.get("/words.json").then((res) => {
      let words = [];
      for (let keys in res.data) {
        words.push(res.data[keys]);
      }

      this.setState({ words });
    });
  }
  render() {
    console.log(this.state.words);
    let list = null;
    if (this.state.words) {
      list = this.state.words.map((word) => <p>{word.word}</p>);
    }
    return (
      <div>
        <h1>My WORDS</h1>
        {list}
        <MyListOfWords />
      </div>
    );
  }
}

export default MyWords;
