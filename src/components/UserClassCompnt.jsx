import React from "react";
class UserClassCompnt extends React.Component {
  // for receiving props need constructer
  constructor(props) {
      super(props);
        this.state = {
      userInfo: {},  // initialize as empty object
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
    // when data change in state variable re-rendering occurs and DOM updation happens later componentDidUpdate is been called,
    console.log(" component did update ");
  }
  componentWillUnmount(){
    console.log(" component will unmount ");
    // when user switchs to some other component/ new page in SPA its not reloading the page it is changing compoenent doing reconcellation ,

    // if want to try wring a setInterval in componentDidMount - and write console.log there , and try to switch pages its still called even we are in different component ,and to fix it add clearInterval() in componentWillUnmount


    // if the same case occurs in case of functional component can be used return statement in useEffect to write any operations 
    /**
     * useEffect (()=>{
     * seInterval(()=>{console.log("abc")},1000)
     * return(){
     * clearInterval}
     * },[])
     */

  }
  /**
   * Lifecycle Flow (Class Component)

Mounting (first time):

constructor → render → commit to DOM → componentDidMount

Updating (on state/props change):

render → commit to DOM → componentDidUpdate

Unmounting (removal):

componentWillUnmount
   */

  render() {
    console.log(" render ")

    const {login,avatar_url} = this.state.userInfo; 
    return (
      <div className="assign-border">
       
        {/* <h3>Name:- {this.state.userInfo.name}</h3> */}
        <img src={avatar_url}/>
        <p>Name :- {login}</p>
        <p> Location : - Pune </p>
      </div>
    );
  }
}
export default UserClassCompnt;

/**
 * explaining how it render in web page
 * first constructor will be called where state is been intialized 
 * then render hits where we are using state variable - but loads by black inputs from state , because no 
 * values have been assined to state in constructor, after ComponentDidMount hits where we get data 
 * here comes updating the state variable data , with the help of  setState , when state variable updates , react triggers the reder once agin , where the state is already is updated so updated things will be appered 
 * at last ComponentDidUpdate will be called
 * 
 * 
 * 
 * 
 * 
 * ------------MOUNTING----------
 * Constructor
 * Render (dummy)
 *        <HTML Dummy>
 * Component Did Mount
 *        <API call>
 *        <HTML new API dat)
 *         <this.setState> -> State cariable is updated
 * 
 * ----------UPDATE
 * 
 * render (API data)
    *  <HTML new API data)
    * componentDidUpdate
 */
