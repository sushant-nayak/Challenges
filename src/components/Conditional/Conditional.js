import React from "react";

function Condtional(props) {
  return (
    <div>
      {
        // One way
        /* <h1 style={{ display: !props.isLoading && "none" }}>
        This is loading...
      </h1>
      <h1 style={{ display: props.isLoading ? "none" : "block" }}>
        This has loaded !
      </h1> */
      }
      {
        // Second way
        //props.isLoading ? <h1>Loading...</h1> : <h1>Loaded !</h1>
      }
      {
        // Third way
      }
      <h1>Loaded !</h1>
    </div>
  );
}

export default Condtional;
