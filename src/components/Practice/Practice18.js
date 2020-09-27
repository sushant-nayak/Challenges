import React, { Component } from "react"; // makes the JSX work
import challenge from "../../images/Challenge13.png";
// This is a Class Component named Practice
// If you need to use State the component has to be a Class based component
import TodoItem from "../TodoItem/TodoItem-v2";
import todoData from "../TodoItem/todoData.json";
import "./practice.css";
class Practice extends Component {
  constructor() {
    super();
    this.state = {
      todos: todoData,
    };
  }
  render() {
    const todoComps = this.state.todos.map((item) => (
      <TodoItem key={item.id} todo={item} />
    ));
    return (
      <div>
        <img src={challenge} alt="Challenge13" width="100%" />
        <hr />
        <div className="todo-list">{todoComps}</div>
      </div>
    );
  }
}
export default Practice;
