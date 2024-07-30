import RestuarantCard from "./RestuarantCard";
import { useState, useEffect } from "react";
import ShimmerCard from "./ShimmerCard";
import useOnlineStatus from "../utils/useOnlineStatus";
import { Link } from "react-router-dom";

const Body = () => {
  const [restuarantList, setRestuarantList] = useState([]);
  const [filteredList, setFilteredList] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const onlineStatus = useOnlineStatus();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=15.85760&lng=74.50110&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    setRestuarantList(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredList(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  if (onlineStatus === false) {
    return <h1>Oop's No Internet</h1>;
  }

  return restuarantList.length === 0 ? (
    <ShimmerCard />
  ) : (
    <div className="body">
      <div className="search-container">
        <input
          type="text"
          placeholder="search your fav food"
          value={searchValue}
          onChange={(e) => {
            setSearchValue(e.target.value);
          }}
        />
        <button
          className="search-btn"
          onClick={() => {
            const searchResturant = restuarantList.filter((res) => {
              return res.info.name
                .toLowerCase()
                .includes(searchValue.toLowerCase());
            });
            setFilteredList(searchResturant);
          }}>
          Search
        </button>
        <button
          onClick={() => {
            const filterList = restuarantList.filter((res) => {
              return res.info.avgRating > 4.3;
            });
            setFilteredList(filterList);
          }}>
          Top Rated Restuarant
        </button>
      </div>
      <div className="res-container">
        {filteredList.map((res) => {
          return (
            <Link to={"restuarant/" + res.info.id} key={res.info.id}>
              <RestuarantCard resData={res} />
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Body;
