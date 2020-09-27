import React, { Component } from "react";

class Practice extends Component {
  constructor() {
    super();
    this.state = {
      unreadMessages: ["1", "2"],
    };
  }

  render() {
    return (
      <div>
        {this.state.unreadMessages.length > 0 && (
          <h2>You have {this.state.unreadMessages.length} unread messages!</h2>
        )}
      </div>
    );
  }
}
export default Practice;
