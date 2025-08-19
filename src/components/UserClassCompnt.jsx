import React from "react";
class UserClassCompnt extends React.Component {
  // for receiving props need constructer
  constructor(props) {
      super(props);
      // creation of multiple state variables inside class based component
      this.state = {
          count: 0,
          count2: 12,
        };
        console.log(this.props.name," child constructor ");
  }
  componentDidMount() {
    console.log(this.props.name," child component did mount ");
  }

  render() {
    {
      console.log(this.props.name," child render ");
    }
    const { name, location } = this.props;
    const { count } = this.state;
    return (
      <div className="assign-border">
        <h1>Class component</h1>
        <h3>Count: {count}</h3>
        <button
          onClick={() => {
            //NEVER UPDATE STATE VARIABLES DIRECTLY ex:-  this.state.count=this.state.count+1;
            // setState is a function which is used for updation of state varibles given by react
            // setState contains a object which helps for updating state variables
            this.setState({
              count: this.state.count + 1,
            });
          }}
        >
          increase count
        </button>
        <h3>Count2: {this.state.count2}</h3>

        <h3>Name:- {name}</h3>
        <p>Email Id :- {location}</p>
        <p> Location : - Pune </p>
      </div>
    );
  }
}
export default UserClassCompnt;
