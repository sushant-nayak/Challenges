// This is a Class Component named Practice
// If you need to use State the component has to be a Class based component
import React, { Component } from "react"; // makes the JSX work
import "./practice.css";

class Practice extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
    // Bind setState to this class
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(num) {
    this.setState((prevState) => {
      return {
        count: prevState.count + 1,
      };
    });
  }
  render() {
    return (
      <div style={{ textAlign: "center" }}>
        <h1>{this.state.count}</h1>
        <button onClick={this.handleClick}>Change!</button>
      </div>
    );
  }
}
export default Practice;
