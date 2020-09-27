import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

//JSX
// 1st param : What do I want to render
// 2nd param : Where do I want to render it
// Can't render adjacent html elements
/*
ReactDOM.render( < div > < h1 > Hello World!
  <
  /h1><p>This is a paragraph.</p >
  <
  ul >
  <
  li > This < /li> <
  li > is < /li> <
  li > an < /li> <
  li > excerize < /li> < /
  ul > <
  /div>,
  document.getElementById('root')
);
*/

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
