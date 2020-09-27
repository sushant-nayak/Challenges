// This is a Functional Component named Practice1
import React from "react"; // makes the JSX work
import "./practice.css";

import Joke from "../Joke/Joke";
import jokesData from "../Joke/jokesData.json";

function Practice() {
  const jokeComponents = jokesData.map((item) => (
    <Joke key={item.id} joke={item} />
  ));
  return <div className="joke-list">{jokeComponents}</div>;
}

export default Practice;
