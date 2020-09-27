// This is a Functional Component named Practice1
import React from "react"; // makes the JSX work
import challenge from "../../images/Challenge1.png";
function Practice() {
  return (
    <div>
      <img src={challenge} alt="Challenge1" />
      <ul>
        <li> This </li>
        <li> is </li>
        <li> a </li>
        <li> pratcise </li>
      </ul>
    </div>
  );
}

export default Practice; //import & export : ES6 syntax
