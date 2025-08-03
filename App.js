// importing react libraries 
import React from "react";
import ReactDOM from "react-dom/client"

// const heading = React.createElement("h1",{id:'heading1'},"This is a  heading");

// console.log("heading ",heading);
const jsxHeading = <h1 id="heading">Hello JSX</h1>

//react Component 
// Functional Component - OLD
// Functional Component - NEW 


// focusing on Functional Component
// Functional Component :- its just a normal JS Function which returns some JSX React Component Should be name start with CAPITAL letter

const HeadingComponent = () =><h1>Heading Function Component</h1>


// Component Composition :- reusable component , component inside component 
const Title = () => {
  return (
    <div className="title">
      <h1>Title Function Component</h1>
      <HeadingComponent />
    </div>
  );
};




const reactRoot = ReactDOM.createRoot(document.getElementById("root"));
//how babel understands that is a jsx component , there are angular brackets , so babel transpiles before rendering
reactRoot.render(<Title />) 