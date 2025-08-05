import React from "react";
import ReactDOM from "react-dom/client";
export const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          src="https://cdn.pixabay.com/photo/2017/02/17/17/33/food-2074638_960_720.png"
          width="100px"
          height="100px"
          alt="logo"
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};
