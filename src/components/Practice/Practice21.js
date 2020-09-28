// This is a Class Component named Practice
// If you need to use State the component has to be a Class based component
import React, { Component } from "react"; // makes the JSX work

import "./practice.css";

class Practice extends Component {
  constructor() {
    super();
    this.state = {};
  }

  getSnapshotBeforeUpdate() {
    // create a backup of the current way things are
  }

  componentDidMount() {
    // Get the data I need to correctly display
  }

  // deprecated UNSAFE_componentWillReceiveProps
  componentWillReceiveProps(nextProps) {
    if (nextProps.whatever !== this.props.whatever) {
      // do something important here
    }
  }

  shouldComponentUpdate(nextProps, nextState) {
    // if need to re-render then it will re-render
    //return true if want it to update
    // return false if not
  }

  componentWillMount() {
    // teardown or cleanup your code before the component disappears
    // (e.g. removes event listeners)
  }
  render() {
    return <div>Code goes here</div>;
  }
}
export default Practice;
