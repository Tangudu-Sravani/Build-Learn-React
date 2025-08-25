import React from "react";
import ReactDOM from "react-dom/client";
import {LOGO_URL} from "../utils/constants";
import {useState,useEffect} from "react";
import {Link} from "react-router-dom";
import useOnlineStatus from '../utils/useOnlineStatus';
import Grocery from './Grocery';

export const Header = () => {
  // let btnName = "Login";
    const [btnNameReact, setBtnNameReact] = useState("Login");

    //if no dependency array => useEffect is called on every render
    //if dependecy array is empty = [] => useEffect is called on intial render(just once)
    //If dependency array is [btnNameReact] => called btnNameReact is updated

    useEffect(()=>{console.log("useEffect on change of btnNameReact ")},[btnNameReact]);
    const onlineStatus = useOnlineStatus();

  
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} width="100px"
          height="100px"/>
      </div>
      <div className="nav-items">
        <ul>
          <li>Online status : {onlineStatus ? "🟢" : "🔴"}</li>
            <li><Link to="/" className="links">Home</Link></li>
            <li><Link to="/about" className="links">About</Link></li>
            <li><Link to="/contact" className="links">Contact us</Link></li>
            <li><Link to="/grocery" className="links">Grocery</Link></li>
            <li><Link to="/" className="links">Cart</Link></li>
            {/* <button className="login" onClick={()=>{btnName="Logout ";
                    console.log(btnName);
                    }
                }>{btnName}</button> */}
            <button
              className="login"
              onClick={() => {
                btnNameReact === "Login"
                  ? setBtnNameReact("Logout")
                  : setBtnNameReact("Login");
              }}
            >
              {btnNameReact}{" "}
            </button>
          </ul>
      </div>
    </div>
  );
};
