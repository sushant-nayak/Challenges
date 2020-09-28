import React from "react";

function Logged(props) {
  return (
    <div style={{ textAlign: "center" }}>
      <button onClick={props.handleEvent}>
        <h1>{props.isLoggedIn ? "Log out" : "Log in"} </h1>
      </button>
    </div>
  );
}
export default Logged;
