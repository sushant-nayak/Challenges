import React, { Component } from "react";
import Froms from "../Forms/Forms";

export default class Practice extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: "",
      lastName: "",
      age: "",
      gender: "",
      destination: "",
      isVegan: false,
      isKosher: false,
      isLactoseFree: false,
      isGlutenFree: false,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const { name, value, type, checked } = event.target;
    type === "checkbox"
      ? this.setState({ [name]: checked })
      : this.setState({ [name]: value });
  }

  handleSubmit() {
    const alertString =
      "First name: " +
      this.state.firstName +
      "\n Last name: " +
      this.state.lastName;
    alert(alertString);
  }

  render() {
    return (
      <div>
        <Froms handleChange={this.handleChange} data={this.state} />
      </div>
    );
  }
}
