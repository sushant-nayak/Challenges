// React Docs about Forms:
// https://reactjs.org/docs/forms.html

import React, { Component } from "react";

export default class Practice27 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: "",
      lastName: "",
      isFriendly: false,
      gender: "",
      favColor: "",
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    // React synthetic value
    const { name, value, type, checked } = event.target;
    type === "checkbox"
      ? this.setState({ [name]: checked })
      : this.setState({ [name]: value });
  }
  handleSubmit() {}
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          value={this.state.firstName}
          name="firstName" // It has to match perfectly with state key
          placeholder="First Name"
          onChange={this.handleChange}
        />
        <input
          type="text"
          value={this.state.lastName}
          name="lastName" // It has to match perfectly with state key
          placeholder="Last Name"
          onChange={this.handleChange}
        />
        {/** */}

        <textarea value={"Some default value"} />
        <br />

        <label>
          <input
            type="checkbox"
            value={this.state.isFriendly}
            name="isFriendly" // It has to match perfectly with state key
            checked={this.state.isFriendly}
            onChange={this.handleChange}
          />
          Is friendly
        </label>
        <br />

        <label>
          <input
            type="radio"
            value="male"
            name="gender" // It has to match perfectly with state key
            checked={this.state.gender === "male"}
            onChange={this.handleChange}
          />
          Male
        </label>
        <label>
          <input
            type="radio"
            value="female"
            name="gender" // It has to match perfectly with state key
            checked={this.state.gender === "female"}
            onChange={this.handleChange}
          />
          Female
        </label>
        {/** Formik */}

        <select
          value={this.state.favColor}
          name="favColor"
          onChange={this.handleChange}
        >
          <option value="blue">Blue</option>
          <option value="yellow">Yellow</option>
          <option value="green">Green</option>
          <option value="white">White</option>
        </select>
        <h1>
          {this.state.firstName} {this.state.lastName}
        </h1>
        <h2>You are a {this.state.gender}</h2>
        <h2 style={{ color: this.state.favColor }}>
          Your favorite color is {this.state.favColor}
        </h2>
      </form>
    );
  }
}
