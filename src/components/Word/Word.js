import React from "react";
import "./Word.css";
function Word({ word, saveWord, showButton }) {
  return (
    <div>
      <h2>We've found your word!</h2>
      <hr />
      <h1>Word: {word.word[0].toUpperCase() + word.word.slice(1)}</h1>
      {showButton ? null : <button onClick={saveWord}>Save Word</button>}

      <ol>
        <li>
          {word.meanings.map((w) => {
            return (
              <div key={w.partOfSpeech}>
                <p>
                  <strong>Part of Speech: </strong>
                  {w.partOfSpeech[0].toUpperCase() + w.partOfSpeech.slice(1)}
                </p>
                <h5>Definitions</h5>
                <ol>
                  {w.definitions.map((definition) => {
                    return (
                      <li
                        style={{ fontSize: "20px" }}
                        key={definition.definition}
                      >
                        <p>
                          <strong>Explanation:</strong> {definition.definition}
                        </p>
                        {definition.example ? (
                          <p>
                            <strong>Example:</strong> {definition.example}
                          </p>
                        ) : (
                          <p>No example.</p>
                        )}
                        <strong>Synonyms:</strong>
                        {definition.synonyms ? (
                          definition.synonyms.map((syno) => {
                            return <p key={syno}>{syno}</p>;
                          })
                        ) : (
                          <p>No synonyms</p>
                        )}
                      </li>
                    );
                  })}
                </ol>
              </div>
            );
          })}
        </li>
      </ol>
    </div>
  );
}

export default Word;
