import React from "react";

function Joke(props) {
  console.log(props);
  return (
    <div className="joke-item">
      <div style={{ display: !props.joke.question && "none" }}>
        <strong>Question:</strong> {props.joke.question}
      </div>
      <div style={{ color: !props.joke.question && "#888888" }}>
        <strong>Punchline:</strong> {props.joke.punchline}
      </div>

      <hr />
    </div>
  );
}

export default Joke;
