import React, { Component } from "react"; // makes the JSX work
import challenge from "../../images/Challenge10.png";
// This is a Class Component named Practice
// If you need to use State the component has to be a Class based component
class Practice extends Component {
  //constructor method
  constructor() {
    super();
    this.state = {
      name: "Yes",
      age: 25,
    };
  }

  render() {
    return (
      <div>
        <img src={challenge} width="100%" alt="Challenge10" />
        <hr />
        <h1>{this.state.name} </h1>
        <h3>{this.state.age} years old </h3>
      </div>
    );
  }
}

export default Practice;
