import React, (Component) from "react"; // makes the JSX work
import "./practice.css";


// This is a Class Component named Practice
// If you need to use State the component has to be a Class based component
class Practice extends Component {
  //constructor method
  constructor() {
    super();
    this.state = {
      answer: "Yes",
    };
  }

  render() {
    return (
      <div>
        <h1>Is the state important to know? </h1>
        <h3>Answer: {this.state.answer} </h3>
      </div>
    );
  }
}

export default Practice;
