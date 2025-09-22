import React from "react";
import ReactDOM from "react-dom/client";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import {useParams} from "react-router-dom";
import { CDN_URL } from '../utils/constants';
import { MENU_API } from '../utils/constants';
import { FiClock } from 'react-icons/fi';
import { AiOutlineStar } from 'react-icons/ai';
import  useRestaurantMenu  from "../utils/useRestaurantMenu";
import FilterMenu from "../utils/FilterMenu";
import RestaurantCategory from './RestaurantCategory'


const RestaurantMenu = () => {
const {resId} = useParams();
const resInfo = useRestaurantMenu(resId);
 if (resInfo === null) return <Shimmer />;
 const { name,  cuisines,
   costForTwoMessage,
   costForTwo,
   cloudinaryImageId,
   avgRating,
   deliveryTime } =
   resInfo?.cards[2]?.card?.card?.info;

  const {itemCards} = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
  console.log(" itemCards ",itemCards);   

  const categories = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
    (c)=>
      c.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");
    console.log(" categories ",categories);


  return (
    <div className="text-center">
    
        <h1 className="font-bold my-7 text-2xl">{name}</h1>
        <h2 className="font-bold text-lg">{cuisines.join(",")}</h2>
        {/** categories accordian */}
        {categories.map((category)=>
        <RestaurantCategory key={category.card.card.title} data = {category?.card?.card} showItems = {true}/>) 
        // wanted to do such a thing 
              // - if one accordian is expanded rest all should collaps
              // so RestaurantMenu showItems should be controlled by this such that all other accordians except the required one would be collaps
              // so by passing shoeItem value in props we can handle it 
        }
    </div>
  );
};

export default RestaurantMenu;
