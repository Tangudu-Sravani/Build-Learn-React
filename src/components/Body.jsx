import React from "react";
import ReactDOM from "react-dom/client";
import RestaurantCard from './RestaurantCard';
import { useState } from 'react';
import resList from '../utils/mockData';


const Body = () => {
 
  //Normal JS variable
  let listOfRestaurants = [
    {
      data: {
        id: "121603",
        name: "Dominos",
        cuisines: ["Kerala", "Chinese"],
        costForTwo: 30000,
        deliveryTime: 24,
        restaurantId: "121603",
        avgRating: "3.9",
      },
    },
     {
      data: {
        id: "121604",
        name: "KFC",
        cuisines: ["Kerala", "Chinese"],
        costForTwo: 30000,
        deliveryTime: 24,
        restaurantId: "121603",
        avgRating: "5.0",
      },
    },
  ];
  // in case if we use normal JS variable then the data of filtered result the enginee will be getting but because there will be no rendering so in UX we will not be see the changes
  //hence dependent on useState Hook

  return (
    <div className="body">
      <div className="search">
        <button className="filter-btn" onClick={()=>{
          //Filter logic
          let filteredList = listOfRestaurants.filter((res)=>res.data.avgRating>4);
          listOfRestaurants = filteredList; // this will not re-render the component
           {console.log("listOfRestaurants", listOfRestaurants)}
        }}>Top Rated restaurant</button>
       
      </div>
      <div className="restaurant-container">
        {listOfRestaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.data.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};
export default Body;