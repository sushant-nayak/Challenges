import React from "react";

function Logged(props) {
  let buttonText = props.isLoggedIn ? "LOG OUT" : "LOG IN";
  let displayText = props.isLoggedIn ? "Logged in" : "Logged out";
  return (
    <div style={{ textAlign: "center" }}>
      <button onClick={props.handleEvent}>
        <h1>{buttonText}</h1>
      </button>
      <h1>Currently {displayText}</h1>
    </div>
  );
}
export default Logged;
