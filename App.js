// importing react libraries 
import React from "react";
import ReactDOM from "react-dom/client"
const reactRoot = ReactDOM.createRoot(document.getElementById("root"));
// creating a element using React
// React.CreateElement - React Element => JS object => HTMLElement (render)

//React Element using core React
const heading = React.createElement("h1",{id:'heading1'},"This is a short heading");

//JSX :- JSX is not HTML in JS , [It is like HTML like syntax]
//creating a h1 tag in JSX
//Creating React lement using JSX
const jsxHeading = <h1 id="heading">Hello JSX</h1>


// as core react syntax is not too much not readable - so they created JSX
//JSX syntax  is not pure valid JS ,JS engine can understand JSX code
//react.render also cant understands the JSX code 
//  - here comes the role of PARCEL which contains BABEL  makes our job easy
// JSX (transpiled before it reaches the JS Engine)
//  JSX [through babel]=> React.createElement => JS object => HTML render in browser
const jsxHeading1 = <h1 id="heading">Hello JSX</h1>

console.log("heading ",heading);
reactRoot.render(heading) 