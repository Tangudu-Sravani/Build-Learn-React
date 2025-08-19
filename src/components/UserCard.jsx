import {useState,useEffect} from 'react';
const UserCard = (props) => {
    const [count,setCount] = useState(10);
    // useEffect(()=>{
    //     CallOfFun();
    // },[])

    const CallOfFun = () => {
setCount(prevCount => prevCount + 1);    }
    // can be also destruction above by {name} and use use name directly
    return(
        <div className="assign-border">
            <h1>functional component</h1>
            <h2>Count :- {count}</h2>
            <button onClick={()=>{CallOfFun()}}>Count increase</button>
            <h3>Name :- {props.name}</h3>
            <p>Email Id :- sravanit2002@gmail.com</p>
            <p> Location : - Pune </p>
        </div>
    )
}
export default UserCard;