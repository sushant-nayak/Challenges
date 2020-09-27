// This is a Functional Component named Practice1
import React from "react"; // makes the JSX work
import "./practice.css";

// const Practice5 = () => (
//   const firstName = 'Sushant';
//   const lastName = 'Nayak';

//   <h1>Hello firstName + " " + lastname</h1>

// );

function Practice() {
  const firstName = "Sushant";
  const lastName = "Nayak";

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
      <h1 style={styles}>
        Good {timeOfDay} {firstName} {lastName}!
      </h1>
      <label for="currently">Current Time:</label>
      <span id="currently">{`${hours}:${mins}:${secs}:${msecs}`}</span>
    </div>
  );
}

export default Practice;
