import React, { Component } from "react";
import Logged from "../Logged/Logged";

class Practice extends Component {
  constructor() {
    super();
    this.state = {
      isLoggedIn: false,
    };
    this.handleEvent = this.handleEvent.bind(this);
  }
  handleEvent() {
    this.setState((prevState) => {
      return {
        isLoggedIn: !prevState.isLoggedIn,
      };
    });
  }

  render() {
    let buttonText = this.state.isLoggedIn ? "LOG OUT" : "LOG IN";
    let displayText = this.state.isLoggedIn ? "Logged in" : "Logged out";

    return (
      <div>
        {
          // Have a function component render the markup and house the behaviour.
          //<Logged logged={this.state.isLoggedIn} handleEvent={this.handleEvent} />
        }

        <div style={{ textAlign: "center" }}>
          <button onClick={this.handleEvent}>
            <h1>{buttonText}</h1>
          </button>
          <h1>Currently {displayText}</h1>
        </div>
      </div>
    );
  }
}
export default Practice;
