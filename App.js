const reactRoot = ReactDOM.createRoot(document.getElementById("root"));
// const heading = React.createElement(  "h1",  {id:"heading" },  "Hello this is been printed by react"); 
// reactRoot.render(heading);

/*

<div id="parent">
    <div id="child">
        <h1>Im a heading</h1>
    </div>
</div>


*/
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