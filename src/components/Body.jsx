import React from "react";
import ReactDOM from "react-dom/client";
import RestaurantCard from './RestaurantCard';
import { useState } from 'react';
import resList from '../utils/mockData';


const Body = () => {
 
/* local State Variable - super  powerful variable
  react element is a plain JS object 
  similarly a hook is normal JS function [written by facebook devplrs] given use by react by utilites, a function where logic written behind [where we got utilites in npm install they will be downloaded ]
  hook's - are utility functions */

  // useState returns an array - so have to wrap received variable with [][square brackets]

  const [ listOfRestaurants, setlListOfRestaurants ] = useState([ 
    {
      data: {
        id: "121601",
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
        id: "121602",
        name: "Biryani by kilo",
        cuisines: ["Andra", "Chenayee"],
        costForTwo: 30000,
        deliveryTime: 24,
        restaurantId: "121603",
        avgRating: "2.9",
      },
    },
      {
      data: {
        id: "121603",
        name: "KFC",
        cuisines: ["Haryana", "punjab"],
        costForTwo: 30000,
        deliveryTime: 24,
        restaurantId: "121603",
        avgRating: "4.9",
      },
    }
  
  ]);// whatever  useStae() is containing here at defination is default value

  return (
    <div className="body">
      <div className="search">
        <button className="filter-btn" onClick={()=>{
          //Filter logic
          let filteredList = listOfRestaurants.filter((res)=>res.data.avgRating>4);
          setlListOfRestaurants(filteredList);// this will does the re-render the component, if use-state varible gets updated
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