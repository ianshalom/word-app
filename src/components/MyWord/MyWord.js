import React from "react";

function MyWord(props) {
  const { description, back } = props;

  return (
    <div>
      <h2>
        Word: {description.word[0].toUpperCase() + description.word.slice(1)}{" "}
        <button onClick={back}>Back</button>
        <button onClick={() => props.delete(description.id)}>Delete</button>
      </h2>
      {description.meanings.map((meaning) => {
        return (
          <div key={meaning.partOfSpeech}>
            <p>
              <strong>Part of Speech: </strong>{" "}
              {meaning.partOfSpeech[0].toUpperCase() +
                meaning.partOfSpeech.slice(1)}
            </p>
            <p>
              <strong>Definition: </strong>
              {meaning.definitions.map((defi) => {
                return defi.definition;
              })}
            </p>
            <p>
              <strong>Example: </strong>
              {meaning.definitions.map((exp) => {
                return exp.example;
              })}
            </p>
          </div>
        );
      })}
      <div>
        <form>
          <label>Notes</label>
          <textarea type="text" />
          <button>Saved notes</button>
        </form>
      </div>
      <div>
        <h3>My Notes</h3>
        <hr />
      </div>
    </div>
  );
}

export default MyWord;
