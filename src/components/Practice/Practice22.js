import React, { Component } from "react";
import Conditional from "../Conditional/Conditional";

class Practice extends Component {
  constructor() {
    super();
    this.state = {
      isLoading: true,
    };
  }

  componentDidMount() {
    // Get the data I need to correctly display
    setTimeout(() => {
      this.setState({
        isLoading: false,
      });
    }, 2500); // in milliseconds
  }

  render() {
    return (
      <div>
        {
          // The third way
          this.state.isLoading ? (
            <h1>Loading...</h1>
          ) : (
            <Conditional isLoading={this.state.isLoading} />
          )
        }
      </div>
    );
  }
}
export default Practice;
