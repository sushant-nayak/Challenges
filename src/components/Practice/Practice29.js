import React, { Component } from "react";

export default class Practice29 extends Component {
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
      <main>
        <form onSubmit={this.handleSubmit}>
          <input
            placeholder="First Name"
            type="text"
            name="firstName"
            value={this.state.firstName}
            onChange={this.handleChange}
          />
          <br />
          <input
            placeholder="Last Name"
            type="text"
            name="lastName"
            value={this.state.lastName}
            onChange={this.handleChange}
          />
          <br />
          <input
            placeholder="Age"
            type="text"
            name="age"
            value={this.state.age}
            onChange={this.handleChange}
          />
          <br />
          {/* Create radio buttons for gender here */}
          <label>Gender</label> <br />
          <label>
            <input
              type="radio"
              name="gender"
              checked={this.state.gender === "Male"}
              onChange={this.handleChange}
              value="Male"
            />
            Male
          </label>
          <br />
          <label>
            <input
              type="radio"
              name="gender"
              checked={this.state.gender === "Female"}
              onChange={this.handleChange}
              value="Female"
            />
            Female
          </label>
          <br />
          {/* Create select buttons for gender here */}
          Destination:
          <select
            value={this.state.destination}
            name="destination"
            onChange={this.handleChange}
          >
            <option value=""> -- Select a location --</option>
            <option value="Columbus"> Columbus, OH </option>
            <option value="New York"> New York City, NY --</option>
            <option value="Austin"> Austin, TX </option>
          </select>
          <br />
          <label>
            Dietary restrictions: <br />
          </label>
          <label>
            <input
              type="checkbox"
              name="isVegan"
              onChange={this.handleChange}
              checked={this.state.isVegan}
            />
            Is Vegan
          </label>
          <br />
          <label>
            <input
              type="checkbox"
              name="isKosher"
              onChange={this.handleChange}
              checked={this.state.isKosher}
            />
            Kosher
          </label>
          <br />
          <label>
            <input
              type="checkbox"
              name="isLactoseFree"
              onChange={this.handleChange}
              checked={this.state.isLactoseFree}
            />
            Lactose Free
          </label>
          <br />
          <label>
            <input
              type="checkbox"
              name="isGlutenFree"
              onChange={this.handleChange}
              checked={this.state.isGlutenFree}
            />
            Gluten free
          </label>
          <br />
          <button>Submit</button>
        </form>
        <hr />
        {/** ------------------------------------------ */}
        <h2>Entered Information</h2>
        <p>
          Your name: {this.state.firstName} {this.state.lastName}
        </p>
        <p>Your age: {this.state.age}</p>
        <p>Your gender: {this.state.gender}</p>
        <p>Your destination: {this.state.destination}</p>
        <p>
          Your dietary restrictions: <br />
          Vegan: {this.state.isVegan ? "Yes" : "No"} <br />
          Kosher: {this.state.isKosher ? "Yes" : "No"}
          <br />
          Lactose Free: {this.state.isLactoseFree ? "Yes" : "No"}
          <br />
          Gluten Free: {this.state.isGlutenFree ? "Yes" : "No"}
          <br />
        </p>
      </main>
    );
  }
}
