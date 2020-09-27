import React, { Component } from "react"; // makes the JSX work
import challenge from "../../images/Challenge11.png";
// This is a Class Component named Practice
// If you need to use State the component has to be a Class based component
class Practice extends Component {
  //constructor method
  constructor() {
    super();
    this.state = {
      isLoggedIn: true,
    };
  }

  render() {
    return (
      <div>
        <img src={challenge} width="100%" alt="Challenge11" />
        <hr />
        <h1>
          You are currently logged {this.state.isLoggedIn ? "in" : "out"}{" "}
        </h1>
      </div>
    );
  }
}

export default Practice;
