// This is a Class Component named Practice
// If you need to use State the component has to be a Class based component
import React, { Component } from "react"; // makes the JSX work
import challenge from "../../images/Challenge14.png";
import TodoItem from "../TodoItem/TodoItem-v2";
import todoData from "../TodoItem/todoData.json";
import "./practice.css";

class Practice extends Component {
  constructor() {
    super();
    this.state = {
      todos: todoData,
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(id) {
    //Object cloning
    const updatedTodos = this.state.todos.map((l) => Object.assign({}, l));
    updatedTodos[id - 1].completed = !updatedTodos[id - 1].completed;
    this.setState({ todos: updatedTodos });

    // Change here - The Strategy is to ypdate the entire array thats ehy use .map function
    /*
    this.setState((prevState) => {
      const updatedTodos = prevState.todos.map((item) => {
        if (item.id === id) {
          item.completed = !item.completed;
        }
        return item;
      });
      return {
        todos: updatedTodos,
      };
    });
    */
  }
  render() {
    const todoComps = this.state.todos.map(
      (item) => (
        <TodoItem key={item.id} item={item} handleChange={this.handleChange} />
      ) // Change here
    );
    return (
      <div>
        <img src={challenge} alt="Challenge14" width="100%" />
        <hr />
        <div className="todo-list">{todoComps}</div>
      </div>
    );
  }
}
export default Practice;
