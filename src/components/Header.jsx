import React from "react";
import ReactDOM from "react-dom/client";
import {LOGO_URL} from "../utils/constants";
import {useState,useEffect,useContext} from "react";
import {Link} from "react-router-dom";
import useOnlineStatus from '../utils/useOnlineStatus';
import Grocery from './Grocery';
import UserContext from '../utils/UserContext';
import { useSelector } from "react-redux";
import Cart from './Cart';

export const Header = () => {
  // let btnName = "Login";
    const [btnNameReact, setBtnNameReact] = useState("Login");
    useEffect(()=>{console.log("useEffect on change of btnNameReact ")},[btnNameReact]);
    const onlineStatus = useOnlineStatus();
  const {loggedInUser} = useContext(UserContext);
  // console.log(loggedInUser);

  // useSelector gives the access to the store 
  const cartItems = useSelector((store)=> store.cart.items);
  
  return (
    <div className="flex justify-between bg-pink-100 shadow-lg sm: bg-yellow-50">
      <div className="logo-container">
        <img className="w-55" src={LOGO_URL} width="100px"
          height="100px"/>
      </div>
      <div className="flex items-center">
        <ul className="flex p-4 m-4">
          <li className = "px-4">Online status : {onlineStatus ? "🟢" : "🔴"}</li>
            <li className = "px-4"><Link to="/" className="links">Home</Link></li>
            <li className = "px-4"><Link to="/about" className="links">About</Link></li>
            <li className = "px-4"><Link to="/contact" className="links">Contact us</Link></li>
            <li className = "px-4"><Link to="/grocery" className="links">Grocery</Link></li>
            <li className = "px-4 font-bold text-xl"><Link to="/cart" className="links">Cart ({cartItems.length} items)</Link></li>
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

            <li  className = "px-4">{loggedInUser}</li>
          </ul>
      </div>
    </div>
  );
};
