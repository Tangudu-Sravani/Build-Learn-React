import React from "react";
import ReactDOM from "react-dom/client";
import resList from "../utils/mockData.js";
import RestaurantCard from "./RestaurantCard";
const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="restaurant-container">
        {resList.map((restaurant) => (
          <RestaurantCard key={restaurant.data.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};
export default Body;
