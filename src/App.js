import React, { useState } from "react";
import "./styles.css";

export default function App() {
  const [meaning, setMeaning] = useState("");

  var emojiDict = {
    "": "Go On, try it out!",
    "🤏": "Ittu sa! 🤏",
    "✌️": "Sab raji ✌️",
    "🤞": "Rabb rakha! 🤞",
    "🤟": "Yolo 🤟",
    "🤘": "Party Sharty 🤘",
    "🤙": "Eveiee 🤙"
  };
  var emojiArr = Object.keys(emojiDict);

  function emojiInputHandler(event) {
    var userInput = event.target.value;
    var meaning = emojiDict[userInput];

    if (meaning === undefined) {
      meaning = "Sorry, It's not in our DB";
    }

    setMeaning(meaning);
  }

  function emojiClickHandler(emoji) {
    var meaning = emojiDict[emoji];
    setMeaning(meaning);
  }

  return (
    <div className="App">
      <h1>Punjabi Emoji Interpreter</h1>
      <div>
        <input onChange={emojiInputHandler} />
      </div>
      <h1>{meaning}</h1>
      {emojiArr.map(function (emoji) {
        return (
          <span
            style={{ fontSize: "2rem", padding: "0.5rem" }}
            onClick={() => emojiClickHandler(emoji)}
          >
            {emoji}
          </span>
        );
      })}
    </div>
  );
}
