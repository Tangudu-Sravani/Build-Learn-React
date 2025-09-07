import React from "react";
import ReactDOM from "react-dom/client";
import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import resList from "../utils/mockData";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [searchText, setSearchText] = useState([]);

  const [filterSearchlist, setfilterSearchlist] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.624480699999999&page_type=DESKTOP_WEB_LISTING"
    );
    const fetchJSON = await data.json();

    setListOfRestaurants(
      fetchJSON?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
    setfilterSearchlist(
      fetchJSON?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
  };

  const onlineStatus = useOnlineStatus();
  if (onlineStatus == false)
    return <h1> Your offline, please internet connection</h1>;
  return listOfRestaurants.length <= 0 ? (
    <Shimmer />
  ) : (
    <div className="body flex flex-col justify-center items-center">
      <div className="filter flex ">
        <div className="search m-4 p-4">
          <input
            type="text"
            placeholder="dosa"
            className="border border-solid border-black"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="px-4 py-2 bg-green-100 m-4 rounded-xl"
            onClick={() => {
              let filterSearchres = listOfRestaurants.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setfilterSearchlist(filterSearchres);
            }}
          >
            Search
          </button>
          <button
            className="px-4 py-2 bg-gray-100 rounded-xl"
            onClick={() => {
              // Filter the restro cards and updtes the UI
              //searchText
              let filteredList = listOfRestaurants.filter(
                (res) => res.info.avgRating > 4.5
              );
              setfilterSearchlist(filteredList);
              {
                console.log("top rated ", listOfRestaurants);
              }
            }}
          >
            Top Rated restaurant
          </button>
        </div>
      </div>
      <div className="flex flex-wrap justify-start w-[95%]">
        {console.log("filterSearchlist 2 ", filterSearchlist)}
        {filterSearchlist.map((restaurant) => (
          // here Link is helped to append following "/restaurants/" + restaurant?.info?.id in url , which maps the url in app.js to load compoenent
          <Link
            key={restaurant?.info?.id}
            to={"/restaurants/" + restaurant?.info?.id || restaurant?.data?.id}
          >
            <RestaurantCard
              key={restaurant?.info?.id || restaurant?.data?.id}
              resData={restaurant}
            />
          </Link>
        ))}
      </div>
    </div>
  );
};
export default Body;
