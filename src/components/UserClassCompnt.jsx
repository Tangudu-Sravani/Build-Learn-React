import React from "react";
class UserClassCompnt extends React.Component {
  constructor(props) {
      super(props);
        this.state = {
      userInfo: {},  
    };
  }
  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/Tangudu-Sravani");
    const json = await data.json();
    this.setState({
      userInfo: json,
    });
    {console.log(json)}
  }
  componentDidUpdate() {
    console.log(" component did update ");
  }
  componentWillUnmount(){
    console.log(" component will unmount ");
  }

  render() {
    console.log(" render ")

    const {login,avatar_url} = this.state.userInfo; 
    return (
      <div className="assign-border">
       
        <img src={avatar_url}/>
        <p>Name :- {login}</p>
        <p> Location : - Pune </p>
      </div>
    );
  }
}
export default UserClassCompnt;
