// This is a Functional Component named Practice1
import React from "react"; // makes the JSX work
import "./practice.css";
import challenge from "../../images/Challenge5.png";

import TodoItem from "../TodoItem/TodoItem";

function Practice() {
  return (
    <div>
      <img src={challenge} width="100%" alt="Challenge5" />
      <br />
      <hr />
      <div className="todo-list">
        <TodoItem />
        <TodoItem />
        <TodoItem />
        <TodoItem />
      </div>
    </div>
  );
}

export default Practice;
