import React, { Component } from "react";

// Fetching data from an API call
// https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/fetch
// https://swapi.dev/ * StarWars API
// Medium Article - https://medium.com/javascript-scene/master-the-javascript-interview-what-is-a-promise-27fc71e77261
class Practice extends Component {
  constructor() {
    super();
    this.state = {
      loading: false,
      character: {},
    };
  }

  componentDidMount() {
    this.setState({ loading: true });
    fetch("https://swapi.dev/api/people/1")
      .then((response) => response.json())
      .then((data) =>
        this.setState({
          character: data,
          loading: false,
        })
      );
  }

  render() {
    const text = this.state.loading ? "loading..." : this.state.character.name;
    return (
      <div>
        <h1>{text}</h1>
      </div>
    );
  }
}
export default Practice;
