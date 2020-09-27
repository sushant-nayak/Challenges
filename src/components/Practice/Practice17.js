// This is a Class Component named Practice
// If you need to use State the component has to be a Class based component
import React, { Component } from "react"; // makes the JSX work

// https://www.reactjs.org/docs/events.html#supported-events
/**
  Clipboard Events
  Composition Events
  Keyboard Events
  Focus Events
  Form Events
  Generic Events
  Mouse Events
  Pointer Events
  Selection Events
  Touch Events
  UI Events
  Wheel Events
  Media Events
  Image Events
  Animation Events
  Transition Events
  Other Events
 */

class Practice extends Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <div>
        <img
          src="https://www.fillmurray.com/200/300"
          onDragStart={(event) => {
            console.log("Grag Event Worked!", event);
          }}
          onMouseOver={(event) => {
            console.log("Mouse hover Worked!", event);
          }}
        />
        <br />
        <br />
        <button
          onPointerOver={() => {
            console.log("Button Clicked!");
          }}
        >
          Click this button!
        </button>
      </div>
    );
  }
}
export default Practice;
