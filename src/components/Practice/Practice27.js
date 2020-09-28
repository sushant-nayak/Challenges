// React Docs about Forms:
// https://reactjs.org/docs/forms.html

import React, { Component } from "react";

export default class Practice27 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: "",
      lastName: "",
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  render() {
    return (
      <form>
        <input
          type="text"
          name="firstName" // It has to match perfectly with state key
          placeholder="First Name"
          onChange={this.handleChange}
        />
        <input
          type="text"
          name="lastName" // It has to match perfectly with state key
          placeholder="Last Name"
          onChange={this.handleChange}
        />
        <h1>
          {this.state.firstName} {this.state.lastName}
        </h1>
      </form>
    );
  }
}
