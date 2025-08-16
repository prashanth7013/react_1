import { useEffect, useState } from "react";
import resList from "../utils/mockData";
import RestaurentCard from "./RestaurentCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState([]);

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
      "http://abc.com:9000/data"
      // "https://corsproxy.io/https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.3924982&lng=78.46796379999999&collection=80424&tags=layout_CCS_Dosa&sortBy=&filters=&type=rcv2&offset=0&page_type=null"
    );
    const json = await data.json();
    setListOfRestaurants(resList);
    setFilteredRestaurants(resList);
  };

  const searchHandler = () => {
    const searchedRestaurants = listOfRestaurants.filter((res) => {
      return res.name.toLowerCase().includes(searchText.toLowerCase());
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
      <div className="search-filter">
        <div style={{ margin: "10px" }}>
          <input
            type="text"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button onClick={searchHandler}>Search</button>
        </div>
        <button className="top-rated-btn" onClick={btnCall}>
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {filteredRestaurants.map((restaurant) => {
          return (
            <Link to={"/restaurant/" + restaurant.id} key={restaurant.id}>
              <RestaurentCard resData={restaurant} />
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Body;
