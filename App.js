
/* createRoot lets you create a root to display React components inside a browser DOM node.
 A DOM element. React will create a root for this DOM element and allow you to call functions on the root, such as render to display rendered React content. */
 // [browser DOM node defined in your HTML.]
const reactRoot = ReactDOM.createRoot(document.getElementById("root"));

//  the syntax of creating a react element [simple example]
// const heading = React.createElement(  "h1",  {id:"heading" },  "Hello this is been printed by react"); 
// reactRoot.render(heading);

/*
- want to generate this structure using react
<div id="parent">
    <div id="child">
        <h1>Im a heading</h1>
    </div>
</div>
*/

// code for recreting the above structure using react

// can be Noticed compared to  JS and HTMl its a bit long in React

const parent = React.createElement(
  "div",
  { id: "parent" },
 [ React.createElement(
    "div",
    { id: "child" },
    [React.createElement("h1", {}, "This is the heading finally"),React.createElement("h1", {}, " im child 2 ")]
  ),  React.createElement(
    "div",
    { id: "child" },
    [React.createElement("h1", {}, "This is the heading finally"),React.createElement("h1", {}, " im child 2 ")]
  )]
);

reactRoot.render(parent)      