import { useEffect, useState } from "react";
import resList from "../utils/mockData";
import RestaurentCard, { withPromotedLabel } from "./RestaurentCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState([]);

  const RestaurentCardPromoted = withPromotedLabel(RestaurentCard);
  const btnCall = () => {
    const filteredRestaurants = listOfRestaurants.filter((res) => {
      return res.avgRating > 4;
    });
    setFilteredRestaurants(filteredRestaurants);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    // "https://dummyjson.com/users"
    const data = await fetch(
      "http://localhost:3000/data"
      // "https://corsproxy.io/https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.3924982&lng=78.46796379999999&collection=80424&tags=layout_CCS_Dosa&sortBy=&filters=&type=rcv2&offset=0&page_type=null"
    );
    const json = await data.json();
    setListOfRestaurants(resList);
    setFilteredRestaurants(resList);
  };

  const searchHandler = () => {
    const searchedRestaurants = listOfRestaurants.filter((res) => {
      return res?.name?.toLowerCase().includes(searchText?.toLowerCase());
    });
    setFilteredRestaurants(searchedRestaurants);
  };

  const onlineStatus = useOnlineStatus();

  if (onlineStatus === false) {
    return <div>You are offline. Check internet connection !!!</div>;
  }

  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="flex justify-end">
        <div className="m-2 p-2">
          <input
            className="border border-solid"
            type="text"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button
            className="px-4 m-4 py-1 bg-green-100 cursor-pointer rounded-2xl"
            onClick={searchHandler}
          >
            Search
          </button>
          <button
            className="px-4 m-4 py-1 bg-blue-400 cursor-pointer rounded-2xl"
            onClick={btnCall}
          >
            Top Rated Restaurants
          </button>
        </div>
      </div>
      <div className="flex flex-wrap space-x-2 space-y-4">
        {filteredRestaurants.map((restaurant) => {
          return (
            <Link to={"/restaurant/" + restaurant.id} key={restaurant.id}>
              {restaurant.promoted ? (
                <RestaurentCardPromoted resData={restaurant} />
              ) : (
                <RestaurentCard resData={restaurant} />
              )}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Body;
