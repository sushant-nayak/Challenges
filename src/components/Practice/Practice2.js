// This is a Functional Component named Practice1
import React from "react"; // makes the JSX work
import "./practice.css";
import challenge from "../../images/Challenge2.png";

function Practice() {
  return (
    <div>
      <img src={challenge} alt="Challenge2" />
      <h1>Sushant Nayak</h1>
      <p>
        Voluptate irure elit consequat eiusmod ex elit mollit nisi ea fugiat
        laboris anim pariatur. Occaecat dolore deserunt enim magna dolore esse
        proident voluptate. Amet tempor aute cillum non. Magna incididunt tempor
        pariatur laboris deserunt anim aute et.
      </p>
      Top 3 vacation spots I'd like to visit
      <ul>
        <li>Greece</li>
        <li>London</li>
        <li>Melbourne</li>
      </ul>
    </div>
  );
}

export default Practice;
