import { React, Component } from "react";
import UserCard from "./UserCard";
import UserClassCompnt from "./UserClassCompnt";
class About extends Component {
  constructor(props) {
    super(props);
    console.log("parent constructor");
  }
  componentDidMount() {
    console.log("parent component did mount ");
  }
  render() {
    return (
      <div className="about-page">
        {console.log("parent render")}
        <h1>About</h1>
        <h2>React </h2>
        {/* <UserCard name={" function given to functional component "}/> */}
        <UserClassCompnt
          name={" child1 - 1st instace "}
          location={"Gunupur"}
        />
         <UserClassCompnt
          name={" child 2 - 2nd instance "}
          location={"Gunupur"}
        />
        {/**
         * we expect the behaviour to be
         * parent constructor
         * parent render
         * child1 constructor
         * child1 render
         * child1 componentDidMount
         * child2 constructor 
         * child2 render
         * child2 componentDidMount
         * parent componentDidMount
         * 
         */}
         {/**
          * But actull case its behaviour is like this :- 
          * parent constructor
          * parent render
          * child1 constructor
          * child1 render
          * child2 constructor 
          * child2 render
          * child1 componentDidMount
          * child2 componentDidMount
          * parent componentDidMount
          */}
          {/**
           * The reason behind it is React follows the React lifeCycle methods where 
           * there are two phases RenderPhase and Commit Phase 
           * Here React optimise [Batches the renders ] thats y after  childs 1 render child2 constructor is been called or else acc to logic child1 componenetDidMount should be called
           */}
      </div>
    );
  }
}

export default About;
