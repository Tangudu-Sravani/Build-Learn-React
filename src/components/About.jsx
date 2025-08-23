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
          // name={" child1 - 1st instace "}
          // location={"Gunupur"}
        />        
      </div>
      /**
       * Parent constructor
       * -Parent Render
       * 
       *  -First Constructor
       *  -First Render
       * 
       *  -second Constructor
       *  -Second Render
       * 
       * <DOM UPDATED - IN SINGLEBATCH>
       * - First ComponentDidMount
       *  -Second ComponentDidMount
       * 
       * Parent ComponentDid Mount
       */
    );
  }
}

export default About;
