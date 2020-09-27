import React, { Component } from "react"; // makes the JSX work
import "./practice.css";
import challenge from "../../images/Challenge9.png";

// This is a Class Component named Practice
class Practice extends Component {
  render() {
    return (
      <div>
        <img src={challenge} width="50%" alt="Challenge9" />
        <hr />
        <Header username="Sushant" />
        <Greetings />
      </div>
    );
  }
}

class Header extends Component {
  render() {
    return (
      <header className="navbar">
        <p>Welcome, {this.props.username}!</p>
      </header>
    );
  }
}

class Greetings extends Component {
  render() {
    const date = new Date();
    const hours = date.getHours();
    const mins = date.getMinutes();
    const secs = date.getSeconds();
    const msecs = date.getMilliseconds();
    let timeOfDay;
    const styles = {
      fontSize: 30,
    };

    if (hours < 12) {
      timeOfDay = " morning";
      styles.color = "#04756F";
    } else if (hours >= 12 && hours < 17) {
      timeOfDay = " afternoon";
      styles.color = "rgba(46, 89, 39, 0.5)"; //"#2E5927";
    } else {
      timeOfDay = " night";
      styles.color = "#D90000";
    }

    return (
      <div>
        <h1 style={styles}>Good {timeOfDay}!</h1>
        <label for="currently">Current Time:</label>
        <span id="currently">{`${hours}:${mins}:${secs}:${msecs}`}</span>
      </div>
    );
  }
}
export default Practice;
