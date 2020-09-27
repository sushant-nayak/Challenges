// This is a Functional Component named Practice1
import React from "react"; // makes the JSX work
import "./practice.css";
import challenge from "../../images/Challenge6.png";

import Joke from "../Joke/Joke";

function Practice() {
  return (
    <div>
      <img src={challenge} alt="Challenge2" width="100%" />
      <div className="joke-list">
        <Joke joke={{ question: "Who are you?", punchline: "Comedian" }} />
        <Joke
          joke={{
            question: "What makes you funny?",
            punchline: "You have to wait till the end to know",
          }}
        />
        <Joke joke={{ question: "Can you make me laugh?", punchline: "No!" }} />
        <Joke
          joke={{
            question: "Do you know Joe Rogan?",
            punchline: "Oh the famous podcaster!",
          }}
        />
        <Joke
          joke={{
            question: "",
            punchline: "Hey where is your question ?",
          }}
        />
        <Joke
          joke={{
            punchline: "Are you out of questions?",
          }}
        />
      </div>
    </div>
  );
}

export default Practice;
