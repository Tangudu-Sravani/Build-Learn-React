import React from "react";
import ReactDOM from "react-dom/client";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import {useParams} from "react-router-dom";
import { CDN_URL } from '../utils/constants';
import { MENU_API } from '../utils/constants';
import { FiClock } from 'react-icons/fi';
import { AiOutlineStar } from 'react-icons/ai';
const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);
const {resId} = useParams();
const [allItems, setAllItems] = useState([]);
const [displayItems, setDisplayItems] = useState([]);

/**
 * why two  different syntaxs have been written for data 
 * resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card.itemCards 
 * resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card.categories[0]?.itemCards
 * beacuse the data sources is not same structure two types of structures are been present in huge data source
 */
useEffect(() => {
  if (resInfo) {
    const items =
      resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card.itemCards ||
      //adding veg+nonVeg to show all items in menu [datasource is not good] 
      [
       ...(resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card.categories[0]?.itemCards || []),
       ...(resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card.categories[1]?.itemCards || [])
     ];
    setAllItems(items);
    setDisplayItems(items); // Default: show all
  }
}, [resInfo]);

const showVeg = () => {
  const vegList = allItems?.length
  ? allItems?.filter(item => item.card.info.isVeg === 1 )
  : resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.categories[0]?.itemCards || [];
  setDisplayItems(vegList); // assinging the veg list to setDisplayItems 
};

const showNonVeg = () => {
  const nonVegList = allItems?.length
  ? allItems?.filter(item => item.card.info.isVeg !== 1)
  :  resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.categories[1]?.itemCards;
  setDisplayItems(nonVegList); 
};

  useEffect(() => {
    fetchMenu();
  }, []);
  const fetchMenu = async () => {
    const data = await fetch(MENU_API+resId );
    const json = await data.json();
    setResInfo(json.data);
  };
  if (resInfo === null) return <Shimmer />;

  const { name,  cuisines,
    costForTwoMessage,
    costForTwo,
    cloudinaryImageId,
    avgRating,
    deliveryTime } =
    resInfo?.cards[2]?.card?.card?.info;

  return (
    <div className="menu">
      <header>
        <div className="menu-header">
          <div className="menu-header-left">
            <img src={CDN_URL + cloudinaryImageId} alt="Restaurent Info" />
          </div>
          <div className="menu-header-right">
            <div className="top">
              <h1>{name}</h1>
              <h3>{cuisines.join(",")}</h3>
            </div>
            <div className="bottom">
              <h4 className="avg-rating">
                <span
                  className="icons"
                  style={{
                    position: "relative",
                    top: "2px",
                    marginRight: "3px",
                  }}
                >
                  <AiOutlineStar />
                </span>
                <span>{avgRating}</span>
              </h4>
              <h4 className="time">
                <span
                  className="icons"
                  style={{
                    position: "relative",
                    top: "2px",
                    marginRight: "3px",
                  }}
                >
                  <FiClock />
                </span>
                <span> {deliveryTime} MINS</span>
              </h4>
              <h3>{costForTwoMessage}</h3>
            </div>
          </div>
        </div>
      </header>
      <div className="menu-start">
        <h1>MENU</h1>
        <button onClick={showVeg} className="veg-btn">Veg</button>
        <button onClick={showNonVeg} className="nonVeg-btn">Non Veg</button>
        <h3>{displayItems.length}</h3>
        {console.log("itemCards ",displayItems)}
        {displayItems.map((item) => (
          <div className="itemDetails" key={item.card.info.id}>
            <div className="item-left">
              <h2>{item.card.info.name}</h2>
              <h4>Price :- {item.card.info.price / 100}</h4>

              <p className="item-description">{item.card.info.description}</p>
            </div>
            <div className="item-right">
              <img
                className="item-img"
                src={CDN_URL + item.card.info.imageId}
              ></img>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RestaurantMenu;
