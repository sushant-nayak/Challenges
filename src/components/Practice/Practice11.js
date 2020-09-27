// This is a Functional Component named Practice
import React from "react"; // makes the JSX work
import "./practice.css";
import challenge from "../../images/Challenge8.png";
import TodoItem from "../TodoItem/TodoItem-v2";
import todoData from "../TodoItem/todoData.json";
function Practice() {
  const todoComps = todoData.map((item) => (
    <TodoItem key={item.id} todo={item} />
  ));
  return (
    <div>
      <img src={challenge} alt="Challenge8" width="100%" />
      <hr />
      {todoComps}
    </div>
  );
}

export default Practice;
