// importing react libraries 
import React from "react";
import ReactDOM from "react-dom/client"

//React Element
const jsxHeading = <h1 id="heading">Hello JSX</h1>
// JS inside JSX
const Title = () => (
    <div className="title">
      <h1>Title Function Component</h1>
      {jsxHeading}
      <HeadingComponent />
      
      {/* another way to include component 
       <HeadingComponent></HeadingComponent>
       {HeadingComponent()}
       */}
       
    </div>
);


const number = 1234;
const HeadingComponent = () =>(
<div id="container">
     {number}
     <h1 className="heading">Heading React Functional Component</h1>

</div>
)


const reactRoot = ReactDOM.createRoot(document.getElementById("root"));

reactRoot.render(<Title />) 