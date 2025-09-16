import { useEffect, useState } from "react";
const FilterMenu = (filter, allItems, resInfo) => {
  if (filter === "veg") {
    return allItems?.length
      ? allItems.filter((item) => item.card.info.isVeg === 1)
      : resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.categories[0]?.itemCards || [];
  }
  else if(filter == "Nonveg") {
    
  return allItems?.length
  ? allItems?.filter(item => item.card.info?.isVeg != 1)
  :  resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.categories[1]?.itemCards;
  }
}

export default FilterMenu;