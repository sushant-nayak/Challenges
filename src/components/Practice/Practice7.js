// This is a Functional Component named Practice1
import React from "react"; // makes the JSX work
import "./practice.css";
import challenge from "../../images/Challenge5.png";

import ContactCard from "../ContactCard/ContactCard";

function Practice() {
  return (
    <div className="contact-list">
      <ContactCard
        contact={{
          name: "John Oliver",
          imgUrl: "http://placekitten.com/300/200",
          phone: "(415) 222-1234",
          email: "john.oliver@hbo.com",
        }}
      />
      <ContactCard
        contact={{
          name: "Adam Sandler",
          imgUrl: "http://placekitten.com/300/201",
          phone: "(615) 777-3333",
          email: "adam.sandler@monkeybusiness.com",
        }}
      />
      <ContactCard
        contact={{
          name: "Walter White",
          imgUrl: "http://placekitten.com/300/202",
          phone: "(915) 222-6666",
          email: "walter.white@breakingbad.com",
        }}
      />
      <ContactCard
        contact={{
          name: "Jessie Pinkman",
          imgUrl: "http://placekitten.com/300/203",
          phone: "(215) 123-3333",
          email: "jessie.pinkman@known.com",
        }}
      />
    </div>
  );
}

export default Practice;
