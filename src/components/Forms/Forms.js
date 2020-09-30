import React from "react";

function Forms(props) {
  return (
    <main>
      <form>
        <input
          placeholder="First Name"
          type="text"
          name="firstName"
          value={props.data.firstName}
          onChange={props.handleChange}
        />
        <br />
        <input
          placeholder="Last Name"
          type="text"
          name="lastName"
          value={props.data.lastName}
          onChange={props.handleChange}
        />
        <br />
        <input
          placeholder="Age"
          type="text"
          name="age"
          value={props.data.age}
          onChange={props.handleChange}
        />
        <br />
        {/* Create radio buttons for gender here */}
        <label>Gender</label> <br />
        <label>
          <input
            type="radio"
            name="gender"
            checked={props.data.gender === "Male"}
            onChange={props.handleChange}
            value="Male"
          />
          Male
        </label>
        <br />
        <label>
          <input
            type="radio"
            name="gender"
            checked={props.data.gender === "Female"}
            onChange={props.handleChange}
            value="Female"
          />
          Female
        </label>
        <br />
        {/* Create select buttons for gender here */}
        Destination:
        <select
          value={props.data.destination}
          name="destination"
          onChange={props.handleChange}
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
            onChange={props.handleChange}
            checked={props.data.isVegan}
          />
          Is Vegan
        </label>
        <br />
        <label>
          <input
            type="checkbox"
            name="isKosher"
            onChange={props.handleChange}
            checked={props.data.isKosher}
          />
          Kosher
        </label>
        <br />
        <label>
          <input
            type="checkbox"
            name="isLactoseFree"
            onChange={props.handleChange}
            checked={props.data.isLactoseFree}
          />
          Lactose Free
        </label>
        <br />
        <label>
          <input
            type="checkbox"
            name="isGlutenFree"
            onChange={props.handleChange}
            checked={props.data.isGlutenFree}
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
        Your name: {props.data.firstName} {props.data.lastName}
      </p>
      <p>Your age: {props.data.age}</p>
      <p>Your gender: {props.data.gender}</p>
      <p>Your destination: {props.data.destination}</p>
      <p>
        Your dietary restrictions: <br />
        Vegan: {props.data.isVegan ? "Yes" : "No"} <br />
        Kosher: {props.data.isKosher ? "Yes" : "No"}
        <br />
        Lactose Free: {props.data.isLactoseFree ? "Yes" : "No"}
        <br />
        Gluten Free: {props.data.isGlutenFree ? "Yes" : "No"}
        <br />
      </p>
    </main>
  );
}

export default Forms;
