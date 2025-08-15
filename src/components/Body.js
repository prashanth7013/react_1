import { useState } from "react";
import resList from "../utils/mockData";
import RestaurentCard from "./RestaurentCard";

const Body = () => {

  const [listOfRestaurants, setListOfRestaurants] = useState(resList);

  const btnCall = () => {
    const filteredRestaurants = listOfRestaurants.filter((res) => {
      return res.avgRating > 4;
    });
    setListOfRestaurants(filteredRestaurants);
  };
  

  return (
    <div className="body">
      <button className="top-rated-btn" onClick={btnCall}>
        Top Rated Restaurants
      </button>
      <div className="res-container">
        {listOfRestaurants.map((restaurant) => {
          return <RestaurentCard key={restaurant.id} resData={restaurant} />;
        })}
      </div>
    </div>
  );
};

export default Body;
