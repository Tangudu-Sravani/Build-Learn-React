// importing react libraries 
import React from "react";
import ReactDOM from "react-dom/client"
const reactRoot = ReactDOM.createRoot(document.getElementById("root"));

// creating a react div element  [JSX] - file name .js is valid one for it
const parent = React.createElement(
  "div",
  { id: "parent" },
 [ React.createElement("div",
    { id: "child" },
    [React.createElement("h1", {}, "This is the heading finally"),React.createElement("h1", {}, " im child 2 ")]
  ),  React.createElement("div",
    { id: "child" },
    [React.createElement("h1", {}, "This is the heading finally"),React.createElement("h1", {}, " im child 2 ")]
  )]
);

reactRoot.render(parent) 